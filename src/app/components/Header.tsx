import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

// Default logo as base64 data URL fallback
const defaultLogo = 'data:image/png;base64,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';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logo, setLogo] = useState(defaultLogo);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load colored logo from database
  useEffect(() => {
    const loadLogo = async () => {
      try {
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff/kv/get?key=siteLogo`, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          }
        });
        
        if (response.ok) {
          const text = await response.text();
          console.log('Logo response raw:', text);
          
          // Check if response is empty or null
          if (!text || text === 'null' || text.trim() === '') {
            console.log('No logo in database yet, using default');
            return;
          }
          
          // Try to parse and use the logo
          try {
            const logoData = JSON.parse(text);
            if (logoData && typeof logoData === 'string' && logoData.startsWith('data:image')) {
              setLogo(logoData);
              console.log('Logo loaded successfully from JSON');
            }
          } catch (e) {
            // If not JSON, check if it's a direct base64 string
            if (text.startsWith('data:image')) {
              setLogo(text);
              console.log('Logo loaded successfully (direct string)');
            } else {
              console.log('Invalid logo format:', text.substring(0, 50));
            }
          }
        } else {
          console.log('Failed to fetch logo, status:', response.status);
        }
      } catch (err) {
        console.error('Failed to load logo:', err);
      }
    };

    loadLogo();
    
    // Listen for logo updates from admin panel
    const handleLogoUpdate = () => {
      console.log('Logo update event received, reloading...');
      loadLogo();
    };
    
    window.addEventListener('logoUpdated', handleLogoUpdate);
    return () => window.removeEventListener('logoUpdated', handleLogoUpdate);
  }, []);

  const scrollToSection = (id: string) => {
    const currentPath = window.location.pathname;
    
    // If we're on the home page, just scroll
    if (currentPath === '/' || currentPath === '') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // If we're on another page, redirect to home with hash
      if (id === 'home') {
        window.location.href = '/';
      } else {
        window.location.href = `/#${id}`;
      }
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl shadow-purple-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img src={logo} alt="NdevDigital" className="h-16" />
          </div>

          {/* Desktop Navigation with modern styling */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative px-4 py-2 text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/50 text-white border-0 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-purple-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t mt-2 bg-white/90 backdrop-blur-lg rounded-b-2xl">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 py-3 px-4 rounded-lg transition-all text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white w-full"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}