import { useState, useEffect } from 'react';
import { Upload, Image as ImageIcon, Check, X, Download, Wand2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { supabase } from '../../../utils/supabase/client';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

const BUCKET_NAME = 'make-a2e14eff-og-images';
const OG_IMAGE_KEY = 'og-image-url';
const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff`;

export function OGImageManager() {
  const [ogImageUrl, setOgImageUrl] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [useGenerated, setUseGenerated] = useState(false);
  const [pastedUrl, setPastedUrl] = useState<string>('');

  useEffect(() => {
    loadCurrentOGImage();
  }, []);

  const loadCurrentOGImage = async () => {
    try {
      console.log('🔍 Loading current OG image...');
      
      // Check if using generated OG image
      const response = await fetch(`${API_BASE}/og-image-config`, {
        headers: { 'Authorization': `Bearer ${publicAnonKey}` }
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.useGenerated) {
          setUseGenerated(true);
          setOgImageUrl(`${API_BASE}/og-image`);
          setPreviewUrl(`${API_BASE}/og-image`);
          console.log('✅ Using generated OG image');
          return;
        }
        
        // Check if there's a custom URL
        if (data.customUrl) {
          setUseGenerated(false);
          setOgImageUrl(data.customUrl);
          setPreviewUrl(data.customUrl);
          console.log('✅ Using custom OG image:', data.customUrl);
          return;
        }
      }
      
      // Default to generated image if nothing is configured
      console.log('ℹ️ No OG image configured, defaulting to generated');
      setUseGenerated(true);
      setOgImageUrl(`${API_BASE}/og-image`);
      setPreviewUrl(`${API_BASE}/og-image`);
    } catch (error) {
      console.error('❌ Error loading OG image:', error);
      // Fallback to generated image on error
      setUseGenerated(true);
      setOgImageUrl(`${API_BASE}/og-image`);
      setPreviewUrl(`${API_BASE}/og-image`);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Please select an image file' });
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'Image must be less than 5MB' });
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Upload to server
    await uploadOGImage(file);
  };

  const uploadOGImage = async (file: File) => {
    setUploading(true);
    setMessage(null);

    try {
      console.log('📤 Uploading OG image:', file.name);

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${API_BASE}/upload-og-image`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload OG image');
      }

      const data = await response.json();
      console.log('✅ OG image uploaded:', data.url);

      setOgImageUrl(data.url);
      setUseGenerated(false);
      setMessage({ type: 'success', text: 'OG image uploaded successfully! Clear Facebook cache to see changes.' });

      // Trigger reload event for components using OG image
      window.dispatchEvent(new CustomEvent('og-image-updated', { detail: { url: data.url } }));

    } catch (error: any) {
      console.error('❌ Upload error:', error);
      setMessage({ type: 'error', text: error.message });
    } finally {
      setUploading(false);
    }
  };

  const useGeneratedOGImage = async () => {
    setUploading(true);
    setMessage(null);

    try {
      console.log('🎨 Switching to generated OG image...');

      const response = await fetch(`${API_BASE}/set-og-image-config`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ useGenerated: true })
      });

      if (!response.ok) {
        throw new Error('Failed to set OG image config');
      }

      const generatedUrl = `${API_BASE}/og-image`;
      setOgImageUrl(generatedUrl);
      setPreviewUrl(generatedUrl);
      setUseGenerated(true);
      setMessage({ type: 'success', text: 'Now using auto-generated OG image!' });

      window.dispatchEvent(new CustomEvent('og-image-updated', { detail: { url: generatedUrl } }));

    } catch (error: any) {
      console.error('❌ Error:', error);
      setMessage({ type: 'error', text: error.message });
    } finally {
      setUploading(false);
    }
  };

  const usePastedUrl = async () => {
    setUploading(true);
    setMessage(null);

    try {
      console.log('🎨 Switching to pasted URL...');

      const response = await fetch(`${API_BASE}/set-og-image-config`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ useGenerated: false, customUrl: pastedUrl })
      });

      if (!response.ok) {
        throw new Error('Failed to set OG image config');
      }

      setOgImageUrl(pastedUrl);
      setPreviewUrl(pastedUrl);
      setUseGenerated(false);
      setMessage({ type: 'success', text: 'Now using pasted URL as OG image!' });

      window.dispatchEvent(new CustomEvent('og-image-updated', { detail: { url: pastedUrl } }));

    } catch (error: any) {
      console.error('❌ Error:', error);
      setMessage({ type: 'error', text: error.message });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-purple-500/30">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <ImageIcon size={24} />
          Social Media Preview Image (OG Image)
        </h3>
        <p className="text-gray-300 text-sm mb-4">
          This image appears when your website is shared on Facebook, LinkedIn, Twitter, etc.
          <br />
          <strong>Recommended size:</strong> 1200×630 pixels (PNG or JPG)
        </p>
      </div>

      {/* Current OG Image Preview */}
      {previewUrl && (
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 className="text-lg font-semibold text-white mb-4">Current OG Image:</h4>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <img 
              src={previewUrl} 
              alt="OG Preview" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
              style={{ aspectRatio: '1.91/1' }}
              onError={(e) => {
                console.error('Failed to load OG image preview');
                // Show a placeholder or error message
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.error-message')) {
                  const errorDiv = document.createElement('div');
                  errorDiv.className = 'error-message text-center text-yellow-400 p-8';
                  errorDiv.innerHTML = '⚠️ Preview not available. The OG image is configured but may take a moment to load on social media platforms. Click the links below to clear social media caches.';
                  parent.appendChild(errorDiv);
                }
              }}
            />
          </div>
          {useGenerated && (
            <div className="mt-3 flex items-center gap-2 text-green-400">
              <Check size={18} />
              <span className="text-sm">Using auto-generated OG image</span>
            </div>
          )}
        </div>
      )}

      {/* Upload Options */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Option 1: Upload Custom */}
        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Upload size={20} />
            Upload Custom Image
          </h4>
          <p className="text-gray-400 text-sm mb-4">
            Upload your own branded OG image for full control
          </p>
          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleFileSelect}
            disabled={uploading}
            className="hidden"
            id="og-image-upload"
          />
          <label htmlFor="og-image-upload">
            <div className={`w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <Upload size={18} />
              {uploading ? 'Uploading...' : 'Choose Image'}
            </div>
          </label>
        </div>

        {/* Option 2: Use Generated */}
        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Wand2 size={20} />
            Auto-Generated Image
          </h4>
          <p className="text-gray-400 text-sm mb-4">
            Use our beautiful auto-generated branded OG image
          </p>
          <Button
            onClick={useGeneratedOGImage}
            disabled={uploading}
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
          >
            <Wand2 size={18} className="mr-2" />
            {uploading ? 'Switching...' : 'Use Generated'}
          </Button>
        </div>
      </div>

      {/* Option 3: Paste URL */}
      <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <ImageIcon size={20} />
          Use Image URL (Recommended)
        </h4>
        <p className="text-gray-400 text-sm mb-4">
          Paste a direct image URL from imgbb, imgur, or any public image host. This is the most reliable method!
        </p>
        <div className="flex gap-3">
          <input
            type="url"
            value={pastedUrl}
            onChange={(e) => setPastedUrl(e.target.value)}
            placeholder="https://i.ibb.co/..."
            disabled={uploading}
            className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
          <Button
            onClick={usePastedUrl}
            disabled={uploading || !pastedUrl.trim() || !pastedUrl.startsWith('http')}
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
          >
            <Check size={18} className="mr-2" />
            {uploading ? 'Setting...' : 'Use URL'}
          </Button>
        </div>
        <div className="mt-3 text-xs text-gray-400">
          <p>💡 <strong>Tip:</strong> Upload your image to <a href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">imgbb.com</a> or <a href="https://imgur.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">imgur.com</a>, then paste the direct image URL here.</p>
        </div>
      </div>

      {/* Message */}
      {message && (
        <div className={`rounded-xl p-4 border ${
          message.type === 'success' 
            ? 'bg-green-500/20 border-green-500/50 text-green-300' 
            : 'bg-red-500/20 border-red-500/50 text-red-300'
        }`}>
          <div className="flex items-start gap-3">
            {message.type === 'success' ? <Check size={20} /> : <X size={20} />}
            <div className="flex-1">
              <p className="font-medium">{message.text}</p>
              {message.type === 'success' && (
                <div className="mt-2 text-sm">
                  <p>📋 To see changes on social media:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Facebook: <a href="https://developers.facebook.com/tools/debug/" target="_blank" rel="noopener noreferrer" className="underline">Clear cache here</a></li>
                    <li>LinkedIn: Wait 7 days or use their <a href="https://www.linkedin.com/post-inspector/" target="_blank" rel="noopener noreferrer" className="underline">inspector</a></li>
                    <li>Twitter: <a href="https://cards-dev.twitter.com/validator" target="_blank" rel="noopener noreferrer" className="underline">Validate here</a></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Technical Info */}
      <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
        <h5 className="text-sm font-semibold text-blue-300 mb-2">ℹ️ Technical Details</h5>
        <ul className="text-xs text-gray-400 space-y-1">
          <li>• Optimal size: 1200×630px (1.91:1 aspect ratio)</li>
          <li>• Maximum file size: 5MB</li>
          <li>• Supported formats: PNG, JPG, JPEG</li>
          <li>• Updates may take time to reflect on social platforms</li>
          {ogImageUrl && <li>• Current URL: <code className="text-purple-300">{ogImageUrl}</code></li>}
        </ul>
      </div>
    </div>
  );
}