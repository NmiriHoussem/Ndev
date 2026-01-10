import { useState, useEffect } from 'react';
import { Linkedin, Twitter, Github, Instagram, Plus, Trash2, Eye, EyeOff, Save } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface SocialMedia {
  id: string;
  platform: string;
  url: string;
  isVisible: boolean;
  order: number;
}

const platformIcons: Record<string, any> = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  instagram: Instagram,
};

const platformGradients: Record<string, string> = {
  linkedin: 'from-blue-600 to-blue-700',
  twitter: 'from-sky-500 to-blue-600',
  github: 'from-gray-700 to-gray-900',
  instagram: 'from-pink-500 to-purple-600',
};

export function SocialMediaManager() {
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newPlatform, setNewPlatform] = useState('');
  const [newUrl, setNewUrl] = useState('');

  useEffect(() => {
    loadSocialMedia();
  }, []);

  const loadSocialMedia = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff/social-media`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSocialMedia(data);
      }
    } catch (error) {
      console.error('Error loading social media:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveSocialMedia = async (items: SocialMedia[]) => {
    setSaving(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff/social-media`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ socialMedia: items }),
        }
      );

      if (response.ok) {
        await loadSocialMedia();
      }
    } catch (error) {
      console.error('Error saving social media:', error);
      alert('Failed to save social media links');
    } finally {
      setSaving(false);
    }
  };

  const handleAdd = async () => {
    if (!newPlatform || !newUrl) {
      alert('Please fill in both platform and URL');
      return;
    }

    const newItem: SocialMedia = {
      id: Date.now().toString(),
      platform: newPlatform.toLowerCase(),
      url: newUrl,
      isVisible: true,
      order: socialMedia.length,
    };

    const updatedItems = [...socialMedia, newItem];
    await saveSocialMedia(updatedItems);
    setNewPlatform('');
    setNewUrl('');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this social media link?')) {
      return;
    }

    const updatedItems = socialMedia
      .filter(item => item.id !== id)
      .map((item, index) => ({ ...item, order: index }));
    
    await saveSocialMedia(updatedItems);
  };

  const handleToggleVisibility = async (id: string) => {
    const updatedItems = socialMedia.map(item =>
      item.id === id ? { ...item, isVisible: !item.isVisible } : item
    );
    await saveSocialMedia(updatedItems);
  };

  const handleUpdateUrl = async (id: string, url: string) => {
    const updatedItems = socialMedia.map(item =>
      item.id === id ? { ...item, url } : item
    );
    setSocialMedia(updatedItems);
  };

  const handleSaveUrl = async (id: string) => {
    await saveSocialMedia(socialMedia);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-400">Loading social media links...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white mb-2">Social Media Management</h2>
        <p className="text-gray-400">
          Manage your social media links displayed in the footer
        </p>
      </div>

      {/* Current Social Media Links */}
      <div className="space-y-4">
        {socialMedia.map((item) => {
          const Icon = platformIcons[item.platform] || Linkedin;
          const gradient = platformGradients[item.platform] || 'from-gray-600 to-gray-700';

          return (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                {/* Platform Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={24} className="text-white" />
                </div>

                {/* Platform Name */}
                <div className="flex-shrink-0 w-32">
                  <div className="text-white font-medium capitalize">{item.platform}</div>
                </div>

                {/* URL Input */}
                <input
                  type="url"
                  value={item.url}
                  onChange={(e) => handleUpdateUrl(item.id, e.target.value)}
                  onBlur={() => handleSaveUrl(item.id)}
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  placeholder="https://..."
                />

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleVisibility(item.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      item.isVisible
                        ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                        : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
                    }`}
                    title={item.isVisible ? 'Visible' : 'Hidden'}
                  >
                    {item.isVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {socialMedia.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No social media links yet. Add your first one below!
          </div>
        )}
      </div>

      {/* Add New Social Media Link */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Add New Social Media Link</h3>
        <div className="flex gap-4">
          <select
            value={newPlatform}
            onChange={(e) => setNewPlatform(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400"
          >
            <option value="">Select Platform</option>
            <option value="linkedin">LinkedIn</option>
            <option value="twitter">Twitter</option>
            <option value="github">GitHub</option>
            <option value="instagram">Instagram</option>
          </select>

          <input
            type="url"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="https://..."
            className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
          />

          <button
            onClick={handleAdd}
            disabled={saving}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Plus size={20} />
            Add
          </button>
        </div>
      </div>

      {/* Save Status */}
      {saving && (
        <div className="text-center text-gray-400">
          <Save className="inline-block mr-2 animate-spin" size={16} />
          Saving...
        </div>
      )}
    </div>
  );
}
