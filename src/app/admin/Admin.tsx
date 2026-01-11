import { useState, useEffect } from 'react';
import { 
  Upload, LogOut, Save, X, Check, Image as ImageIcon, 
  FileText, Layout, Plus, Edit2, Trash2, Power, Eye, EyeOff, Folder, Users, Share2, Star 
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { supabase } from '../../../utils/supabase/client';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';
import { SocialMediaManager } from './SocialMediaManager';
import { FaviconManager } from './FaviconManager';
import { OGImageManager } from './OGImageManager';

const ADMIN_EMAIL = 'houssem.addin@gmail.com';
const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff`;

type Tab = 'logo' | 'sections' | 'content' | 'projects' | 'clients' | 'social' | 'favicons' | 'ogimage';

interface Section {
  id: string;
  name: string;
  slug: string;
  enabled: boolean;
  order: number;
}

interface ContentItem {
  id: string;
  section: string;
  key: string;
  value: string;
  type: 'text' | 'richtext' | 'image' | 'json';
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
  metrics: {
    users: string;
    rating: string;
    growth: string;
  };
  link?: string;
  featured?: boolean;
}

interface Client {
  id: string;
  name: string;
  logo: string;
}

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('logo');
  
  // Logo state
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [currentLogo, setCurrentLogo] = useState<string | null>(null);
  const [logoType, setLogoType] = useState<'png' | 'svg' | null>(null);
  const [logoWhitePreview, setLogoWhitePreview] = useState<string | null>(null);
  const [currentLogoWhite, setCurrentLogoWhite] = useState<string | null>(null);
  
  // Sections state
  const [sections, setSections] = useState<Section[]>([]);
  const [newSectionName, setNewSectionName] = useState('');
  const [editingSection, setEditingSection] = useState<string | null>(null);
  
  // Content state
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [newContentKey, setNewContentKey] = useState('');
  const [newContentValue, setNewContentValue] = useState('');
  const [newContentSection, setNewContentSection] = useState('');
  const [editingContent, setEditingContent] = useState<string | null>(null);
  
  // Projects state
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<string | null>(null);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projectForm, setProjectForm] = useState<Partial<Project>>({
    title: '',
    category: '',
    description: '',
    image: '',
    tags: [],
    gradient: 'from-blue-500 to-cyan-500',
    metrics: { users: '', rating: '', growth: '' },
    link: '',
    featured: false,
  });
  
  // Clients state
  const [clients, setClients] = useState<Client[]>([]);
  const [editingClient, setEditingClient] = useState<string | null>(null);
  const [showClientForm, setShowClientForm] = useState(false);
  const [clientForm, setClientForm] = useState<Partial<Client>>({
    name: '',
    logo: '',
  });
  
  // UI state
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    // Check authentication
    const authState = localStorage.getItem('adminAuth');
    if (authState === ADMIN_EMAIL) {
      setIsAuthenticated(true);
      setEmail(ADMIN_EMAIL);
      loadData();
      loadLogos();
    }
  }, []);

  const loadLogos = async () => {
    try {
      // Load colored logo
      const logoResponse = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff/kv/get?key=siteLogo`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        }
      });
      
      if (logoResponse.ok) {
        const text = await logoResponse.text();
        if (text && text !== 'null' && text.trim() !== '') {
          try {
            const logoData = JSON.parse(text);
            if (logoData && typeof logoData === 'string') {
              setCurrentLogo(logoData);
            }
          } catch (e) {
            // If not JSON, use directly
            if (text.startsWith('data:image')) {
              setCurrentLogo(text);
            }
          }
        }
      }

      // Load white logo
      const whiteLogoResponse = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff/kv/get?key=siteLogoWhite`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        }
      });
      
      if (whiteLogoResponse.ok) {
        const text = await whiteLogoResponse.text();
        if (text && text !== 'null' && text.trim() !== '') {
          try {
            const logoData = JSON.parse(text);
            if (logoData && typeof logoData === 'string') {
              setCurrentLogoWhite(logoData);
            }
          } catch (e) {
            // If not JSON, use directly
            if (text.startsWith('data:image')) {
              setCurrentLogoWhite(text);
            }
          }
        }
      }
    } catch (err) {
      console.error('Failed to load logos:', err);
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      await Promise.all([loadSections(), loadContent(), loadProjects(), loadClients()]);
    } catch (err) {
      setError('Failed to load data');
      console.error(err);
    }
    setLoading(false);
  };

  const loadSections = async () => {
    const { data, error } = await supabase
      .from('cms_sections')
      .select('*')
      .order('order', { ascending: true });
    
    if (error) throw error;
    if (data) setSections(data);
  };

  const loadContent = async () => {
    const { data, error } = await supabase
      .from('cms_content')
      .select('*')
      .order('section', { ascending: true });
    
    if (error) throw error;
    if (data) setContentItems(data);
  };

  const loadProjects = async () => {
    try {
      console.log('Fetching projects from:', `${API_BASE}/projects`);
      const response = await fetch(`${API_BASE}/projects`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      const data = await response.json();
      console.log('Projects response:', data);
      if (data.success && data.projects) {
        // Projects are returned directly, not wrapped in {key, value} format
        const projectsList = data.projects.filter((project: any) => project && project.id && project.title);
        console.log('Filtered projects:', projectsList.length);
        setProjects(projectsList);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.error('Error loading projects:', error);
      setProjects([]);
    }
  };

  const loadClients = async () => {
    try {
      console.log('Fetching clients from:', `${API_BASE}/clients`);
      const response = await fetch(`${API_BASE}/clients`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      const data = await response.json();
      console.log('Clients response:', data);
      if (data.success && data.clients) {
        // Clients are returned directly, not wrapped in {key, value} format
        const clientsList = data.clients.filter((client: any) => client && client.id && client.name);
        console.log('Filtered clients:', clientsList.length);
        setClients(clientsList);
      } else {
        setClients([]);
      }
    } catch (error) {
      console.error('Error loading clients:', error);
      setClients([]);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL) {
      localStorage.setItem('adminAuth', email);
      setIsAuthenticated(true);
      setError('');
      loadData();
    } else {
      setError('Access denied. Unauthorized email address.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    setEmail('');
  };

  // Logo Management
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

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

  const handleSaveLogo = async () => {
    if (!logoPreview) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff/kv/set`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          key: 'siteLogo',
          value: logoPreview  // Store just the base64 string, not an object
        })
      });

      if (!response.ok) throw new Error('Failed to save logo');

      setCurrentLogo(logoPreview);
      setLogoPreview('');
      
      // Dispatch event to notify Header to reload logo
      window.dispatchEvent(new CustomEvent('logoUpdated'));
      
      showSuccess();
    } catch (err) {
      setError('Failed to save logo');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteLogo = async () => {
    if (window.confirm('Are you sure you want to delete the current logo?')) {
      setLoading(true);
      try {
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff/kv/delete`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ key: 'siteLogo' })
        });

        if (!response.ok) throw new Error('Failed to delete logo');

        setCurrentLogo(null);
        setLogoPreview(null);
        setLogoType(null);
        showSuccess();
      } catch (err) {
        setError('Failed to delete logo');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClearPreview = () => {
    setLogoPreview(null);
    setLogoType(null);
  };

  const handleWhiteLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ['image/png', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a PNG or SVG file only.');
      return;
    }

    setError('');
    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target?.result as string;
      setLogoWhitePreview(result);
    };

    reader.readAsDataURL(file);
  };

  const handleSaveWhiteLogo = async () => {
    if (!logoWhitePreview) return;

    setLoading(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff/kv/set`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          key: 'siteLogoWhite',
          value: logoWhitePreview
        })
      });

      if (!response.ok) throw new Error('Failed to save white logo');

      setCurrentLogoWhite(logoWhitePreview);
      setLogoWhitePreview('');
      
      // Dispatch event to notify Footer to reload logo
      window.dispatchEvent(new CustomEvent('logoUpdated'));
      
      showSuccess();
    } catch (err) {
      setError('Failed to save white logo');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteWhiteLogo = async () => {
    if (window.confirm('Are you sure you want to delete the white logo?')) {
      setLoading(true);
      try {
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff/kv/delete`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ key: 'siteLogoWhite' })
        });

        if (!response.ok) throw new Error('Failed to delete white logo');

        setCurrentLogoWhite(null);
        setLogoWhitePreview(null);
        showSuccess();
      } catch (err) {
        setError('Failed to delete white logo');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClearWhitePreview = () => {
    setLogoWhitePreview(null);
  };

  // Section Management
  const handleAddSection = async () => {
    if (!newSectionName.trim()) {
      setError('Section name is required');
      return;
    }

    const slug = newSectionName.toLowerCase().replace(/\s+/g, '-');
    const order = sections.length;

    const { error } = await supabase
      .from('cms_sections')
      .insert([{ name: newSectionName, slug, enabled: true, order }]);

    if (error) {
      setError('Failed to add section');
      console.error(error);
      return;
    }

    setNewSectionName('');
    loadSections();
    showSuccess();
  };

  const handleToggleSection = async (id: string, enabled: boolean) => {
    const { error } = await supabase
      .from('cms_sections')
      .update({ enabled: !enabled })
      .eq('id', id);

    if (error) {
      setError('Failed to update section');
      return;
    }

    loadSections();
  };

  const handleDeleteSection = async (id: string) => {
    if (!window.confirm('Delete this section? This will also delete all content in this section.')) {
      return;
    }

    // Delete content first
    await supabase
      .from('cms_content')
      .delete()
      .eq('section', id);

    const { error } = await supabase
      .from('cms_sections')
      .delete()
      .eq('id', id);

    if (error) {
      setError('Failed to delete section');
      return;
    }

    loadSections();
    loadContent();
    showSuccess();
  };

  // Content Management
  const handleAddContent = async () => {
    if (!newContentKey.trim() || !newContentValue.trim() || !newContentSection) {
      setError('All fields are required');
      return;
    }

    const { error } = await supabase
      .from('cms_content')
      .insert([{
        section: newContentSection,
        key: newContentKey,
        value: newContentValue,
        type: 'text'
      }]);

    if (error) {
      setError('Failed to add content');
      console.error(error);
      return;
    }

    setNewContentKey('');
    setNewContentValue('');
    setNewContentSection('');
    loadContent();
    showSuccess();
  };

  const handleUpdateContent = async (id: string, value: string) => {
    const { error } = await supabase
      .from('cms_content')
      .update({ value })
      .eq('id', id);

    if (error) {
      setError('Failed to update content');
      return;
    }

    setEditingContent(null);
    loadContent();
    showSuccess();
  };

  const handleDeleteContent = async (id: string) => {
    if (!window.confirm('Delete this content item?')) {
      return;
    }

    const { error } = await supabase
      .from('cms_content')
      .delete()
      .eq('id', id);

    if (error) {
      setError('Failed to delete content');
      return;
    }

    loadContent();
    showSuccess();
  };

  // Project Management
  const handleAddProject = async () => {
    if (!projectForm.title || !projectForm.category || !projectForm.description || !projectForm.image || !projectForm.tags || !projectForm.gradient || !projectForm.metrics?.users || !projectForm.metrics?.rating || !projectForm.metrics?.growth) {
      setError('All required fields must be filled');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(projectForm)
      });

      const data = await response.json();
      if (!data.success) {
        setError('Failed to add project');
        console.error(data.error);
        return;
      }

      setProjectForm({
        title: '',
        category: '',
        description: '',
        image: '',
        tags: [],
        gradient: 'from-blue-500 to-cyan-500',
        metrics: { users: '', rating: '', growth: '' },
        link: '',
        featured: false,
      });
      setShowProjectForm(false);
      loadProjects();
      showSuccess();
    } catch (error) {
      setError('Failed to add project');
      console.error(error);
    }
  };

  const handleUpdateProject = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE}/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(projectForm)
      });

      const data = await response.json();
      if (!data.success) {
        setError('Failed to update project');
        return;
      }

      setEditingProject(null);
      setProjectForm({
        title: '',
        category: '',
        description: '',
        image: '',
        tags: [],
        gradient: 'from-blue-500 to-cyan-500',
        metrics: { users: '', rating: '', growth: '' },
        link: '',
        featured: false,
      });
      setShowProjectForm(false);
      loadProjects();
      showSuccess();
    } catch (error) {
      setError('Failed to update project');
      console.error(error);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!window.confirm('Delete this project?')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      const data = await response.json();
      if (!data.success) {
        setError('Failed to delete project');
        return;
      }

      loadProjects();
      showSuccess();
    } catch (error) {
      setError('Failed to delete project');
      console.error(error);
    }
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project.id);
    setProjectForm(project);
    setShowProjectForm(true);
  };

  const handleCancelEditProject = () => {
    setEditingProject(null);
    setProjectForm({
      title: '',
      category: '',
      description: '',
      image: '',
      tags: [],
      gradient: 'from-blue-500 to-cyan-500',
      metrics: { users: '', rating: '', growth: '' },
      link: '',
      featured: false,
    });
    setShowProjectForm(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a JPEG, PNG, WebP, or GIF image only.');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5242880) {
      setError('Image file too large. Maximum size is 5MB.');
      return;
    }

    setUploadingImage(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${API_BASE}/upload-image`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: formData
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Failed to upload image');
        return;
      }

      // Update project form with the uploaded image URL
      setProjectForm({ ...projectForm, image: data.url });
      console.log('Image uploaded successfully:', data.url);
    } catch (error) {
      setError('Failed to upload image');
      console.error('Error uploading image:', error);
    } finally {
      setUploadingImage(false);
    }
  };

  // Client Management
  const handleAddClient = async () => {
    if (!clientForm.name || !clientForm.logo) {
      setError('All required fields must be filled');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/clients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(clientForm)
      });

      const data = await response.json();
      if (!data.success) {
        setError('Failed to add client');
        console.error(data.error);
        return;
      }

      setClientForm({
        name: '',
        logo: '',
      });
      setShowClientForm(false);
      loadClients();
      showSuccess();
    } catch (error) {
      setError('Failed to add client');
      console.error(error);
    }
  };

  const handleUpdateClient = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE}/clients/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(clientForm)
      });

      const data = await response.json();
      if (!data.success) {
        setError('Failed to update client');
        return;
      }

      setEditingClient(null);
      setClientForm({
        name: '',
        logo: '',
      });
      setShowClientForm(false);
      loadClients();
      showSuccess();
    } catch (error) {
      setError('Failed to update client');
      console.error(error);
    }
  };

  const handleDeleteClient = async (id: string) => {
    if (!window.confirm('Delete this client?')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/clients/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      const data = await response.json();
      if (!data.success) {
        setError('Failed to delete client');
        return;
      }

      loadClients();
      showSuccess();
    } catch (error) {
      setError('Failed to delete client');
      console.error(error);
    }
  };

  const handleEditClient = (client: Client) => {
    setEditingClient(client.id);
    setClientForm(client);
    setShowClientForm(true);
  };

  const handleCancelEditClient = () => {
    setEditingClient(null);
    setClientForm({
      name: '',
      logo: '',
    });
    setShowClientForm(false);
  };

  const handleClientLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a JPEG, PNG, WebP, GIF, or SVG image only.');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5242880) {
      setError('Logo file too large. Maximum size is 5MB.');
      return;
    }

    setUploadingImage(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${API_BASE}/upload-image`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: formData
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Failed to upload logo');
        return;
      }

      // Update client form with the uploaded logo URL
      setClientForm({ ...clientForm, logo: data.url });
      console.log('Logo uploaded successfully:', data.url);
    } catch (error) {
      setError('Failed to upload logo');
      console.error('Error uploading logo:', error);
    } finally {
      setUploadingImage(false);
    }
  };

  const showSuccess = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const filteredContent = selectedSection === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.section === selectedSection);

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
      <div className="container mx-auto max-w-7xl">
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

          {/* Tabs */}
          <div className="flex gap-4 mt-6 border-b border-white/10">
            <button
              onClick={() => setActiveTab('logo')}
              className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                activeTab === 'logo'
                  ? 'text-purple-400 border-purple-400'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              <ImageIcon className="inline-block mr-2" size={20} />
              Logo
            </button>
            <button
              onClick={() => setActiveTab('sections')}
              className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                activeTab === 'sections'
                  ? 'text-purple-400 border-purple-400'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              <Layout className="inline-block mr-2" size={20} />
              Sections
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                activeTab === 'content'
                  ? 'text-purple-400 border-purple-400'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              <FileText className="inline-block mr-2" size={20} />
              Content
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                activeTab === 'projects'
                  ? 'text-purple-400 border-purple-400'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              <Folder className="inline-block mr-2" size={20} />
              Projects
            </button>
            <button
              onClick={() => setActiveTab('clients')}
              className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                activeTab === 'clients'
                  ? 'text-purple-400 border-purple-400'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              <Users className="inline-block mr-2" size={20} />
              Clients
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                activeTab === 'social'
                  ? 'text-purple-400 border-purple-400'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              <Share2 className="inline-block mr-2" size={20} />
              Social Media
            </button>
            <button
              onClick={() => setActiveTab('favicons')}
              className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                activeTab === 'favicons'
                  ? 'text-purple-400 border-purple-400'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              <Star className="inline-block mr-2" size={20} />
              Favicons
            </button>
            <button
              onClick={() => setActiveTab('ogimage')}
              className={`px-4 py-2 font-medium transition-colors border-b-2 ${
                activeTab === 'ogimage'
                  ? 'text-purple-400 border-purple-400'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              <ImageIcon className="inline-block mr-2" size={20} />
              OG Image
            </button>
          </div>
        </div>

        {/* Success Message */}
        {saveSuccess && (
          <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 mb-6 flex items-center gap-3">
            <Check className="text-green-500" size={24} />
            <p className="text-green-400 font-medium">Saved successfully!</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6 flex items-center gap-3">
            <X className="text-red-500" size={24} />
            <p className="text-red-400 font-medium">{error}</p>
            <button onClick={() => setError('')} className="ml-auto text-red-400 hover:text-red-300">
              <X size={20} />
            </button>
          </div>
        )}

        {/* Logo Tab */}
        {activeTab === 'logo' && (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <ImageIcon size={28} />
              Logo Management
            </h2>

            {/* Colored Logo (for Light Backgrounds) */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Colored Logo (for Light Backgrounds)</h3>
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
            </div>

            {/* White Logo (for Dark/Colored Backgrounds) */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">White Logo (for Dark/Colored Backgrounds)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Upload Section */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Upload White Logo (PNG or SVG)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".png,.svg,image/png,image/svg+xml"
                        onChange={handleWhiteLogoUpload}
                        className="hidden"
                        id="logo-white-upload"
                      />
                      <label
                        htmlFor="logo-white-upload"
                        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:border-purple-500/50 transition-colors bg-white/5"
                      >
                        <Upload className="text-purple-400 mb-2" size={32} />
                        <span className="text-gray-300 text-sm">Click to upload</span>
                        <span className="text-gray-500 text-xs mt-1">PNG or SVG only</span>
                      </label>
                    </div>
                  </div>

                  {/* Preview New White Logo */}
                  {logoWhitePreview && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-300">New White Logo Preview:</p>
                        <button
                          onClick={handleClearWhitePreview}
                          className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-4 flex items-center justify-center">
                        <img src={logoWhitePreview} alt="White logo preview" className="max-h-24 max-w-full object-contain" />
                      </div>
                      <Button
                        onClick={handleSaveWhiteLogo}
                        className="w-full bg-gradient-to-r from-[#5865F2] to-[#8B5CF6] hover:shadow-lg hover:shadow-purple-500/50 text-white"
                      >
                        <Save size={20} className="mr-2" />
                        Save White Logo
                      </Button>
                    </div>
                  )}
                </div>

                {/* Current White Logo Section */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-300 mb-3">Current White Logo:</p>
                    {currentLogoWhite ? (
                      <div className="space-y-3">
                        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-4 flex items-center justify-center min-h-[160px]">
                          <img src={currentLogoWhite} alt="Current white logo" className="max-h-32 max-w-full object-contain" />
                        </div>
                        <div className="flex items-center justify-end text-sm">
                          <Button
                            onClick={handleDeleteWhiteLogo}
                            variant="outline"
                            className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                            size="sm"
                          >
                            Delete White Logo
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white/5 rounded-lg p-8 flex flex-col items-center justify-center min-h-[160px] border border-dashed border-white/10">
                        <ImageIcon className="text-gray-600 mb-2" size={32} />
                        <p className="text-gray-500 text-sm">No white logo uploaded yet</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sections Tab */}
        {activeTab === 'sections' && (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Layout size={28} />
              Sections Management
            </h2>

            {/* Add New Section */}
            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Add New Section</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newSectionName}
                  onChange={(e) => setNewSectionName(e.target.value)}
                  placeholder="Section name (e.g., About, Services, Portfolio)"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button
                  onClick={handleAddSection}
                  className="bg-gradient-to-r from-[#5865F2] to-[#8B5CF6] text-white"
                >
                  <Plus size={20} className="mr-2" />
                  Add Section
                </Button>
              </div>
            </div>

            {/* Sections List */}
            <div className="space-y-3">
              {loading ? (
                <p className="text-gray-400 text-center py-8">Loading...</p>
              ) : sections.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No sections yet. Add your first section above.</p>
              ) : (
                sections.map((section) => (
                  <div
                    key={section.id}
                    className="bg-white/5 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleToggleSection(section.id, section.enabled)}
                        className={`p-2 rounded-lg transition-colors ${
                          section.enabled
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}
                      >
                        {section.enabled ? <Eye size={20} /> : <EyeOff size={20} />}
                      </button>
                      <div>
                        <h4 className="text-white font-medium">{section.name}</h4>
                        <p className="text-gray-400 text-sm">Slug: {section.slug}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        section.enabled
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {section.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                      <Button
                        onClick={() => handleDeleteSection(section.id)}
                        variant="outline"
                        className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                        size="sm"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <FileText size={28} />
              Content Management
            </h2>

            {/* Add New Content */}
            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Add New Content</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Section</label>
                  <select
                    value={newContentSection}
                    onChange={(e) => setNewContentSection(e.target.value)}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select section</option>
                    {sections.map((section) => (
                      <option key={section.id} value={section.id}>{section.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Content Key</label>
                  <input
                    type="text"
                    value={newContentKey}
                    onChange={(e) => setNewContentKey(e.target.value)}
                    placeholder="e.g., hero_title, about_description"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">Content Value</label>
                <textarea
                  value={newContentValue}
                  onChange={(e) => setNewContentValue(e.target.value)}
                  placeholder="Enter the content text..."
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <Button
                onClick={handleAddContent}
                className="bg-gradient-to-r from-[#5865F2] to-[#8B5CF6] text-white"
              >
                <Plus size={20} className="mr-2" />
                Add Content
              </Button>
            </div>

            {/* Filter by Section */}
            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-2">Filter by Section</label>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="w-full max-w-xs px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Sections</option>
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>{section.name}</option>
                ))}
              </select>
            </div>

            {/* Content List */}
            <div className="space-y-3">
              {loading ? (
                <p className="text-gray-400 text-center py-8">Loading...</p>
              ) : filteredContent.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No content items yet. Add your first content item above.</p>
              ) : (
                filteredContent.map((item) => {
                  const sectionName = sections.find(s => s.id === item.section)?.name || 'Unknown';
                  const isEditing = editingContent === item.id;
                  
                  return (
                    <div
                      key={item.id}
                      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                              {sectionName}
                            </span>
                            <span className="text-gray-400 text-sm font-mono">{item.key}</span>
                          </div>
                          {isEditing ? (
                            <textarea
                              defaultValue={item.value}
                              id={`edit-${item.id}`}
                              rows={3}
                              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          ) : (
                            <p className="text-white">{item.value}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          {isEditing ? (
                            <>
                              <Button
                                onClick={() => {
                                  const textarea = document.getElementById(`edit-${item.id}`) as HTMLTextAreaElement;
                                  handleUpdateContent(item.id, textarea.value);
                                }}
                                size="sm"
                                className="bg-green-500 hover:bg-green-600 text-white"
                              >
                                <Check size={16} />
                              </Button>
                              <Button
                                onClick={() => setEditingContent(null)}
                                size="sm"
                                variant="outline"
                                className="border-gray-500/50 text-gray-400"
                              >
                                <X size={16} />
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                onClick={() => setEditingContent(item.id)}
                                size="sm"
                                variant="outline"
                                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                              >
                                <Edit2 size={16} />
                              </Button>
                              <Button
                                onClick={() => handleDeleteContent(item.id)}
                                size="sm"
                                variant="outline"
                                className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                              >
                                <Trash2 size={16} />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Folder size={28} />
              Projects Management
            </h2>

            {/* Add New Project */}
            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Add New Project</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={projectForm.title || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                    placeholder="e.g., Project Name"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Category</label>
                  <input
                    type="text"
                    value={projectForm.category || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                    placeholder="e.g., Web Development"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">Description</label>
                <textarea
                  value={projectForm.description || ''}
                  onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  placeholder="Enter the project description..."
                  rows={4}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">Project Image</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      value={projectForm.image || ''}
                      onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                      placeholder="Paste image URL or upload below"
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/gif"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="project-image-upload"
                      disabled={uploadingImage}
                    />
                    <label
                      htmlFor="project-image-upload"
                      className={`flex items-center justify-center gap-2 w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors ${
                        uploadingImage ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <Upload size={20} className="text-purple-400" />
                      <span className="text-gray-300">
                        {uploadingImage ? 'Uploading...' : 'Upload Image'}
                      </span>
                    </label>
                  </div>
                </div>
                {projectForm.image && (
                  <div className="mt-3 bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-2">Preview:</p>
                    <img 
                      src={projectForm.image} 
                      alt="Project preview" 
                      className="max-h-32 rounded object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">Tags</label>
                <input
                  type="text"
                  value={(projectForm.tags || []).join(', ')}
                  onChange={(e) => setProjectForm({ ...projectForm, tags: e.target.value.split(',').map(tag => tag.trim()) })}
                  placeholder="e.g., tag1, tag2, tag3"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Gradient</label>
                  <input
                    type="text"
                    value={projectForm.gradient || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, gradient: e.target.value })}
                    placeholder="e.g., from-blue-500 to-cyan-500"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Link</label>
                  <input
                    type="text"
                    value={projectForm.link || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                    placeholder="e.g., https://example.com/project"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Users</label>
                  <input
                    type="text"
                    value={projectForm.metrics?.users || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, metrics: { ...projectForm.metrics, users: e.target.value } as any })}
                    placeholder="e.g., 1000"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Rating</label>
                  <input
                    type="text"
                    value={projectForm.metrics?.rating || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, metrics: { ...projectForm.metrics, rating: e.target.value } as any })}
                    placeholder="e.g., 4.5"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Growth</label>
                  <input
                    type="text"
                    value={projectForm.metrics?.growth || ''}
                    onChange={(e) => setProjectForm({ ...projectForm, metrics: { ...projectForm.metrics, growth: e.target.value } as any })}
                    placeholder="e.g., 20%"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  onClick={editingProject ? () => handleUpdateProject(editingProject) : handleAddProject}
                  className="bg-gradient-to-r from-[#5865F2] to-[#8B5CF6] text-white"
                >
                  <Plus size={20} className="mr-2" />
                  {editingProject ? 'Update Project' : 'Add Project'}
                </Button>
                <Button
                  onClick={handleCancelEditProject}
                  variant="outline"
                  className="border-gray-500/50 text-gray-400 hover:bg-gray-500/10"
                >
                  <X size={20} className="mr-2" />
                  Cancel
                </Button>
              </div>
            </div>

            {/* Projects List */}
            <div className="space-y-3">
              {loading ? (
                <p className="text-gray-400 text-center py-8">Loading...</p>
              ) : projects.length === 0 ? (
                <div className="text-center py-8 space-y-4">
                  <p className="text-gray-400">No projects yet. Add your first project above.</p>
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={async () => {
                        try {
                          setLoading(true);
                          setError('');
                          console.log('Seeding projects...');
                          console.log('Fetching from:', `${API_BASE}/projects/seed`);
                          const response = await fetch(`${API_BASE}/projects/seed`, {
                            method: 'POST',
                            headers: {
                              'Authorization': `Bearer ${publicAnonKey}`
                            }
                          });
                          console.log('Seed response status:', response.status);
                          const data = await response.json();
                          console.log('Seed response data:', data);
                          if (data.success) {
                            console.log('Successfully seeded, reloading projects...');
                            await loadProjects();
                            showSuccess();
                            console.log('Projects loaded after seed');
                          } else {
                            console.error('Seed failed:', data.error);
                            setError(data.error || 'Failed to seed projects');
                          }
                        } catch (error) {
                          console.error('Error seeding projects:', error);
                          setError('Failed to seed projects: ' + error.message);
                        } finally {
                          setLoading(false);
                        }
                      }}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                    >
                      <Power size={20} className="mr-2" />
                      Load Default Projects
                    </Button>
                    <Button
                      onClick={async () => {
                        if (!window.confirm('Delete ALL projects? This cannot be undone!')) {
                          return;
                        }
                        try {
                          setLoading(true);
                          setError(''); // Clear any existing errors
                          // Get all projects first
                          const response = await fetch(`${API_BASE}/projects`, {
                            headers: {
                              'Authorization': `Bearer ${publicAnonKey}`
                            }
                          });
                          const data = await response.json();
                          console.log('Full projects response:', data);
                          console.log('Projects array:', data.projects);
                          console.log('Projects array length:', data.projects?.length);
                          console.log('Projects array type:', typeof data.projects, Array.isArray(data.projects));
                          
                          if (data.success && data.projects && Array.isArray(data.projects)) {
                            console.log('Starting deletion of', data.projects.length, 'projects');
                            // Delete each project - items are the projects directly
                            let deleted = 0;
                            for (let i = 0; i < data.projects.length; i++) {
                              const project = data.projects[i];
                              console.log(`Project ${i}:`, project);
                              console.log(`Project ${i} type:`, typeof project);
                              console.log(`Project ${i} id:`, project?.id);
                              
                              if (project && project.id) {
                                console.log('Attempting to delete project:', project.id, project.title);
                                try {
                                  const delResponse = await fetch(`${API_BASE}/projects/${project.id}`, {
                                    method: 'DELETE',
                                    headers: {
                                      'Authorization': `Bearer ${publicAnonKey}`
                                    }
                                  });
                                  console.log('Delete response status:', delResponse.status);
                                  const delData = await delResponse.json();
                                  console.log('Delete response data:', delData);
                                  
                                  if (delResponse.ok) {
                                    deleted++;
                                    console.log('✓ Successfully deleted:', project.title);
                                  } else {
                                    console.error('✗ Failed to delete:', project.title, delData);
                                  }
                                } catch (delError) {
                                  console.error('✗ Error deleting project:', project.title, delError);
                                }
                              } else {
                                console.log('✗ Skipping project - no ID found:', project);
                              }
                            }
                            await loadProjects();
                            showSuccess();
                            console.log(`✓ Deleted ${deleted} out of ${data.projects.length} projects`);
                          } else {
                            console.error('Invalid response format:', data);
                          }
                        } catch (error) {
                          console.error('Error clearing projects:', error);
                          setError('Failed to clear projects');
                        } finally {
                          setLoading(false);
                        }
                      }}
                      variant="outline"
                      className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 size={20} className="mr-2" />
                      Clear All Projects
                    </Button>
                  </div>
                </div>
              ) : (
                projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white/5 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleEditProject(project)}
                        className="p-2 rounded-lg transition-colors bg-blue-500/20 text-blue-400"
                      >
                        <Edit2 size={20} />
                      </button>
                      <div>
                        <h4 className="text-white font-medium">{project.title}</h4>
                        <p className="text-gray-400 text-sm">Category: {project.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.featured
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {project.featured ? 'Featured' : 'Not Featured'}
                      </span>
                      <Button
                        onClick={() => handleDeleteProject(project.id)}
                        variant="outline"
                        className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                        size="sm"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Clients Tab */}
        {activeTab === 'clients' && (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Users size={28} />
              Clients Management
            </h2>

            {/* Add New Client */}
            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Add New Client</h3>
              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={clientForm.name || ''}
                  onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                  placeholder="e.g., Client Name"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">Client Logo</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      value={clientForm.logo || ''}
                      onChange={(e) => setClientForm({ ...clientForm, logo: e.target.value })}
                      placeholder="Paste logo URL or upload below"
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
                      onChange={handleClientLogoUpload}
                      className="hidden"
                      id="client-logo-upload"
                      disabled={uploadingImage}
                    />
                    <label
                      htmlFor="client-logo-upload"
                      className={`flex items-center justify-center gap-2 w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors ${
                        uploadingImage ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <Upload size={20} className="text-purple-400" />
                      <span className="text-gray-300">
                        {uploadingImage ? 'Uploading...' : 'Upload Logo'}
                      </span>
                    </label>
                  </div>
                </div>
                {clientForm.logo && (
                  <div className="mt-3 bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-2">Preview:</p>
                    <img 
                      src={clientForm.logo} 
                      alt="Client logo preview" 
                      className="max-h-24 rounded object-contain bg-white p-2"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4">
                <Button
                  onClick={editingClient ? () => handleUpdateClient(editingClient) : handleAddClient}
                  className="bg-gradient-to-r from-[#5865F2] to-[#8B5CF6] text-white"
                >
                  <Plus size={20} className="mr-2" />
                  {editingClient ? 'Update Client' : 'Add Client'}
                </Button>
                <Button
                  onClick={handleCancelEditClient}
                  variant="outline"
                  className="border-gray-500/50 text-gray-400 hover:bg-gray-500/10"
                >
                  <X size={20} className="mr-2" />
                  Cancel
                </Button>
              </div>
            </div>

            {/* Clients List */}
            <div className="space-y-3">
              {loading ? (
                <p className="text-gray-400 text-center py-8">Loading...</p>
              ) : clients.length === 0 ? (
                <div className="text-center py-8 space-y-4">
                  <p className="text-gray-400">No clients yet. Add your first client above.</p>
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={async () => {
                        try {
                          setLoading(true);
                          setError('');
                          console.log('Seeding clients...');
                          console.log('Fetching from:', `${API_BASE}/clients/seed`);
                          const response = await fetch(`${API_BASE}/clients/seed`, {
                            method: 'POST',
                            headers: {
                              'Authorization': `Bearer ${publicAnonKey}`
                            }
                          });
                          console.log('Seed response status:', response.status);
                          const data = await response.json();
                          console.log('Seed response data:', data);
                          if (data.success) {
                            console.log('Successfully seeded, reloading clients...');
                            await loadClients();
                            showSuccess();
                            console.log('Clients loaded after seed');
                          } else {
                            console.error('Seed failed:', data.error);
                            setError(data.error || 'Failed to seed clients');
                          }
                        } catch (error) {
                          console.error('Error seeding clients:', error);
                          setError('Failed to seed clients: ' + error.message);
                        } finally {
                          setLoading(false);
                        }
                      }}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                    >
                      <Power size={20} className="mr-2" />
                      Load Default Clients
                    </Button>
                    <Button
                      onClick={async () => {
                        if (!window.confirm('Delete ALL clients? This cannot be undone!')) {
                          return;
                        }
                        try {
                          setLoading(true);
                          setError(''); // Clear any existing errors
                          // Get all clients first
                          const response = await fetch(`${API_BASE}/clients`, {
                            headers: {
                              'Authorization': `Bearer ${publicAnonKey}`
                            }
                          });
                          const data = await response.json();
                          console.log('Full clients response:', data);
                          console.log('Clients array:', data.clients);
                          console.log('Clients array length:', data.clients?.length);
                          console.log('Clients array type:', typeof data.clients, Array.isArray(data.clients));
                          
                          if (data.success && data.clients && Array.isArray(data.clients)) {
                            console.log('Starting deletion of', data.clients.length, 'clients');
                            // Delete each client - items are the clients directly
                            let deleted = 0;
                            for (let i = 0; i < data.clients.length; i++) {
                              const client = data.clients[i];
                              console.log(`Client ${i}:`, client);
                              console.log(`Client ${i} type:`, typeof client);
                              console.log(`Client ${i} id:`, client?.id);
                              
                              if (client && client.id) {
                                console.log('Attempting to delete client:', client.id, client.name);
                                try {
                                  const delResponse = await fetch(`${API_BASE}/clients/${client.id}`, {
                                    method: 'DELETE',
                                    headers: {
                                      'Authorization': `Bearer ${publicAnonKey}`
                                    }
                                  });
                                  console.log('Delete response status:', delResponse.status);
                                  const delData = await delResponse.json();
                                  console.log('Delete response data:', delData);
                                  
                                  if (delResponse.ok) {
                                    deleted++;
                                    console.log('✓ Successfully deleted:', client.name);
                                  } else {
                                    console.error('✗ Failed to delete:', client.name, delData);
                                  }
                                } catch (delError) {
                                  console.error('✗ Error deleting client:', client.name, delError);
                                }
                              } else {
                                console.log('✗ Skipping client - no ID found:', client);
                              }
                            }
                            await loadClients();
                            showSuccess();
                            console.log(`✓ Deleted ${deleted} out of ${data.clients.length} clients`);
                          } else {
                            console.error('Invalid response format:', data);
                          }
                        } catch (error) {
                          console.error('Error clearing clients:', error);
                          setError('Failed to clear clients');
                        } finally {
                          setLoading(false);
                        }
                      }}
                      variant="outline"
                      className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 size={20} className="mr-2" />
                      Clear All Clients
                    </Button>
                  </div>
                </div>
              ) : (
                clients.map((client) => (
                  <div
                    key={client.id}
                    className="bg-white/5 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleEditClient(client)}
                        className="p-2 rounded-lg transition-colors bg-blue-500/20 text-blue-400"
                      >
                        <Edit2 size={20} />
                      </button>
                      <div>
                        <h4 className="text-white font-medium">{client.name}</h4>
                        <p className="text-gray-400 text-sm">Logo: {client.logo}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => handleDeleteClient(client.id)}
                        variant="outline"
                        className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                        size="sm"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Social Media Tab */}
        {activeTab === 'social' && (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <SocialMediaManager />
          </div>
        )}

        {/* Favicons Tab */}
        {activeTab === 'favicons' && (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <FaviconManager />
          </div>
        )}

        {/* OG Image Tab */}
        {activeTab === 'ogimage' && (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <OGImageManager />
          </div>
        )}
      </div>
    </div>
  );
}