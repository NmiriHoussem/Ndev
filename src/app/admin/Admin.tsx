import { useState, useEffect } from 'react';
import { Upload, LogOut, Save, X, Check, Image as ImageIcon } from 'lucide-react';
import { Button } from '../components/ui/button';

const ADMIN_EMAIL = 'houssem.addin@gmail.com';

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [currentLogo, setCurrentLogo] = useState<string | null>(null);
  const [logoType, setLogoType] = useState<'png' | 'svg' | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already authenticated
    const authState = localStorage.getItem('adminAuth');
    if (authState === ADMIN_EMAIL) {
      setIsAuthenticated(true);
      setEmail(ADMIN_EMAIL);
    }

    // Load current logo
    const savedLogo = localStorage.getItem('siteLogo');
    const savedLogoType = localStorage.getItem('siteLogoType') as 'png' | 'svg' | null;
    if (savedLogo) {
      setCurrentLogo(savedLogo);
      setLogoType(savedLogoType);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL) {
      localStorage.setItem('adminAuth', email);
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Access denied. Unauthorized email address.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    setEmail('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/png', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a PNG or SVG file only.');
      return;
    }

    setError('');
    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target?.result as string;
      setLogoPreview(result);
      setLogoType(file.type === 'image/svg+xml' ? 'svg' : 'png');
    };

    reader.readAsDataURL(file);
  };

  const handleSaveLogo = () => {
    if (!logoPreview) return;

    localStorage.setItem('siteLogo', logoPreview);
    localStorage.setItem('siteLogoType', logoType || 'png');
    setCurrentLogo(logoPreview);
    setSaveSuccess(true);

    // Reset success message after 3 seconds
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleClearPreview = () => {
    setLogoPreview(null);
    setLogoType(null);
  };

  const handleDeleteLogo = () => {
    if (window.confirm('Are you sure you want to delete the current logo?')) {
      localStorage.removeItem('siteLogo');
      localStorage.removeItem('siteLogoType');
      setCurrentLogo(null);
      setLogoPreview(null);
      setLogoType(null);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-gray-400">NdevDigital CMS</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 flex items-center gap-2">
                <X className="text-red-500" size={20} />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#5865F2] to-[#8B5CF6] hover:shadow-lg hover:shadow-purple-500/50 text-white"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Admin Panel</h1>
              <p className="text-gray-400">Logged in as: {email}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-500/50 text-red-400 hover:bg-red-500/10"
            >
              <LogOut size={20} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Success Message */}
        {saveSuccess && (
          <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 mb-6 flex items-center gap-3">
            <Check className="text-green-500" size={24} />
            <p className="text-green-400 font-medium">Logo saved successfully!</p>
          </div>
        )}

        {/* Logo Management Section */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <ImageIcon size={28} />
            Logo Management
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Upload Section */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Upload New Logo (PNG or SVG)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".png,.svg,image/png,image/svg+xml"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label
                    htmlFor="logo-upload"
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-purple-500/50 transition-colors bg-white/5"
                  >
                    <Upload className="text-purple-400 mb-2" size={32} />
                    <span className="text-gray-300 text-sm">Click to upload</span>
                    <span className="text-gray-500 text-xs mt-1">PNG or SVG only</span>
                  </label>
                </div>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 flex items-center gap-2">
                  <X className="text-red-500" size={20} />
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Preview New Logo */}
              {logoPreview && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-300">New Logo Preview:</p>
                    <button
                      onClick={handleClearPreview}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                    <img src={logoPreview} alt="Logo preview" className="max-h-24 max-w-full object-contain" />
                  </div>
                  <Button
                    onClick={handleSaveLogo}
                    className="w-full bg-gradient-to-r from-[#5865F2] to-[#8B5CF6] hover:shadow-lg hover:shadow-purple-500/50 text-white"
                  >
                    <Save size={20} className="mr-2" />
                    Save Logo
                  </Button>
                </div>
              )}
            </div>

            {/* Current Logo Section */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-300 mb-3">Current Logo:</p>
                {currentLogo ? (
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 flex items-center justify-center min-h-[160px]">
                      <img src={currentLogo} alt="Current logo" className="max-h-32 max-w-full object-contain" />
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Type: {logoType?.toUpperCase()}</span>
                      <Button
                        onClick={handleDeleteLogo}
                        variant="outline"
                        className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                        size="sm"
                      >
                        Delete Logo
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/5 rounded-lg p-8 flex flex-col items-center justify-center min-h-[160px] border border-dashed border-white/10">
                    <ImageIcon className="text-gray-600 mb-2" size={32} />
                    <p className="text-gray-500 text-sm">No logo uploaded yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-blue-300 text-sm">
              <strong>Note:</strong> The uploaded logo will be displayed in the header and footer of the website.
              Make sure to upload a high-quality image with a transparent background for best results.
            </p>
          </div>
        </div>

        {/* Future CMS Features Placeholder */}
        <div className="mt-6 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3">Coming Soon</h3>
          <ul className="space-y-2 text-gray-400">
            <li>• Content Management</li>
            <li>• Portfolio Projects Management</li>
            <li>• Services Management</li>
            <li>• Team Members Management</li>
            <li>• Settings & Configuration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}