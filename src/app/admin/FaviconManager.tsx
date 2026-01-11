import { useState, useEffect } from 'react';
import { Upload, Check, AlertCircle, Image as ImageIcon, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Alert, AlertDescription } from '../components/ui/alert';
import { projectId } from '../../../utils/supabase/info';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff`;

interface FaviconFile {
  name: string;
  displayName: string;
  description: string;
  uploaded: boolean;
  url?: string;
  accepts?: string;
}

const FAVICON_FILES: FaviconFile[] = [
  {
    name: 'favicon.ico',
    displayName: 'favicon.ico',
    description: 'Classic favicon (16x16, 32x32)',
    uploaded: false,
    accepts: '.ico',
  },
  {
    name: 'favicon-16x16.png',
    displayName: 'favicon-16x16.png',
    description: 'Small PNG favicon (16x16)',
    uploaded: false,
    accepts: '.png',
  },
  {
    name: 'favicon-32x32.png',
    displayName: 'favicon-32x32.png',
    description: 'Standard PNG favicon (32x32)',
    uploaded: false,
    accepts: '.png',
  },
  {
    name: 'favicon-96x96.png',
    displayName: 'favicon-96x96.png',
    description: 'Large PNG favicon (96x96)',
    uploaded: false,
    accepts: '.png',
  },
  {
    name: 'apple-touch-icon.png',
    displayName: 'apple-touch-icon.png',
    description: 'iOS home screen icon (180x180)',
    uploaded: false,
    accepts: '.png',
  },
  {
    name: 'android-chrome-192x192.png',
    displayName: 'android-chrome-192x192.png',
    description: 'Android home screen (192x192)',
    uploaded: false,
    accepts: '.png',
  },
  {
    name: 'android-chrome-512x512.png',
    displayName: 'android-chrome-512x512.png',
    description: 'Android splash screen (512x512)',
    uploaded: false,
    accepts: '.png',
  },
  {
    name: 'mstile-150x150.png',
    displayName: 'mstile-150x150.png',
    description: 'Windows tile (150x150)',
    uploaded: false,
    accepts: '.png',
  },
  {
    name: 'safari-pinned-tab.svg',
    displayName: 'safari-pinned-tab.svg',
    description: 'Safari pinned tab icon',
    uploaded: false,
    accepts: '.svg',
  },
  {
    name: 'site.webmanifest',
    displayName: 'site.webmanifest',
    description: 'PWA manifest file',
    uploaded: false,
    accepts: '.webmanifest,.json',
  },
];

export function FaviconManager() {
  const [files, setFiles] = useState<FaviconFile[]>(FAVICON_FILES);
  const [uploading, setUploading] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFaviconStatus();
  }, []);

  const loadFaviconStatus = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/favicons/status`);
      if (response.ok) {
        const data = await response.json();
        setFiles(prevFiles =>
          prevFiles.map(file => ({
            ...file,
            uploaded: data.files?.[file.name] || false,
            url: data.files?.[file.name] ? data.urls?.[file.name] : undefined,
          }))
        );
      }
    } catch (error) {
      console.error('Error loading favicon status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (fileName: string, file: File) => {
    setUploading(fileName);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', fileName);

      const response = await fetch(`${API_BASE}/api/favicons/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: `${fileName} uploaded successfully!` });
        setFiles(prevFiles =>
          prevFiles.map(f =>
            f.name === fileName ? { ...f, uploaded: true, url: data.url } : f
          )
        );
      } else {
        throw new Error(data.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setMessage({
        type: 'error',
        text: `Failed to upload ${fileName}: ${error instanceof Error ? error.message : 'Unknown error'}`,
      });
    } finally {
      setUploading(null);
    }
  };

  const uploadedCount = files.filter(f => f.uploaded).length;
  const totalCount = files.length;
  const completionPercentage = Math.round((uploadedCount / totalCount) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Favicon Manager</h2>
          <p className="text-gray-400 mt-2">
            Upload all favicon files for optimal display across devices and platforms
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-white">{uploadedCount}/{totalCount}</div>
          <div className="text-sm text-gray-400">{completionPercentage}% Complete</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-500"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>

      {/* Messages */}
      {message && (
        <Alert className={message.type === 'success' ? 'bg-green-900/20 border-green-500' : 'bg-red-900/20 border-red-500'}>
          {message.type === 'success' ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-500" />
          )}
          <AlertDescription className={message.type === 'success' ? 'text-green-200' : 'text-red-200'}>
            {message.text}
          </AlertDescription>
        </Alert>
      )}

      {/* Instructions */}
      <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Download className="h-5 w-5" />
            Quick Setup Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300 space-y-2">
          <p>1. Download favicon package from <a href="https://realfavicongenerator.net/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">RealFaviconGenerator.net</a></p>
          <p>2. Extract the downloaded ZIP file</p>
          <p>3. Upload each file below using the corresponding upload button</p>
          <p className="text-sm text-gray-400 mt-4">
            💡 <strong>Note:</strong> Files are stored in Supabase Storage and will persist across deployments
          </p>
        </CardContent>
      </Card>

      {/* File Upload Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {files.map((file) => (
          <Card
            key={file.name}
            className={`transition-all ${
              file.uploaded
                ? 'bg-green-900/10 border-green-500/30'
                : 'bg-gray-900/50 border-gray-700'
            }`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-white text-sm font-mono">{file.displayName}</CardTitle>
                  <CardDescription className="text-gray-400 text-xs mt-1">
                    {file.description}
                  </CardDescription>
                </div>
                {file.uploaded && (
                  <div className="flex-shrink-0 ml-2">
                    <div className="bg-green-500 rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                {/* Preview */}
                {file.uploaded && file.url && file.name.endsWith('.png') && (
                  <div className="w-12 h-12 bg-white rounded flex items-center justify-center flex-shrink-0">
                    <img
                      src={file.url}
                      alt={file.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
                {file.uploaded && file.url && (file.name.endsWith('.svg') || file.name.endsWith('.ico')) && (
                  <div className="w-12 h-12 bg-white rounded flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="h-6 w-6 text-gray-400" />
                  </div>
                )}

                {/* Upload Button */}
                <div className="flex-1">
                  <input
                    type="file"
                    id={`upload-${file.name}`}
                    accept={file.accepts}
                    className="hidden"
                    onChange={(e) => {
                      const uploadedFile = e.target.files?.[0];
                      if (uploadedFile) {
                        handleFileUpload(file.name, uploadedFile);
                      }
                    }}
                    disabled={uploading !== null}
                  />
                  <label htmlFor={`upload-${file.name}`}>
                    <Button
                      type="button"
                      variant={file.uploaded ? 'outline' : 'default'}
                      className={`w-full cursor-pointer ${
                        file.uploaded
                          ? 'bg-green-500/10 hover:bg-green-500/20 border-green-500/30 text-green-400'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                      }`}
                      disabled={uploading !== null}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(`upload-${file.name}`)?.click();
                      }}
                    >
                      {uploading === file.name ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="h-4 w-4 mr-2" />
                          {file.uploaded ? 'Re-upload' : 'Upload'}
                        </>
                      )}
                    </Button>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Completion Message */}
      {uploadedCount === totalCount && (
        <Card className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/30">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-500 rounded-full p-3">
                <Check className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">All Favicons Uploaded! 🎉</h3>
                <p className="text-gray-300 text-sm mt-1">
                  Your website will now display properly across all devices and platforms.
                  Favicons are served from Supabase Storage and will persist across all deployments.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}