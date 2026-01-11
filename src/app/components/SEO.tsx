import { useEffect, useState } from 'react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  url?: string;
}

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff`;
const DEFAULT_OG_IMAGE = 'https://mdauikij21vpccoytai.supabase.co/storage/v1/object/public/make-a2e14eff-og-images/og-image.png';

export function SEO({
  title = 'NdevDigital - Building Digital Excellence | UI/UX, Web Development & SaaS Solutions',
  description = 'Transform your digital presence with NdevDigital. Expert UI/UX design, web development, branding, SaaS products, e-learning solutions, and game development. Based in Tunis, serving clients worldwide.',
  image,
  type = 'website',
  url = 'https://ndev.digital/'
}: SEOProps) {
  const [ogImage, setOgImage] = useState<string>(image || DEFAULT_OG_IMAGE);

  useEffect(() => {
    // Load OG image configuration if no custom image provided
    if (!image) {
      loadOGImage();
    }

    // Listen for OG image updates from admin panel
    const handleOGImageUpdate = (event: any) => {
      if (event.detail?.url) {
        console.log('OG image updated:', event.detail.url);
        setOgImage(event.detail.url);
      }
    };

    window.addEventListener('og-image-updated', handleOGImageUpdate);

    return () => {
      window.removeEventListener('og-image-updated', handleOGImageUpdate);
    };
  }, [image]);

  const loadOGImage = async () => {
    try {
      const response = await fetch(`${API_BASE}/og-image-config`, {
        headers: { 'Authorization': `Bearer ${publicAnonKey}` }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.useGenerated) {
          // Use the generated OG image endpoint
          setOgImage(`${API_BASE}/og-image`);
        } else if (data.customUrl) {
          // Use custom uploaded image
          setOgImage(data.customUrl);
        }
      }
    } catch (error) {
      console.error('Error loading OG image config:', error);
      // Keep default image on error
    }
  };

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:url', url);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, ogImage, type, url]);

  return null;
}

function updateMetaTag(attribute: string, attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  
  element.content = content;
}

// Predefined SEO configurations for different pages
export const SEOConfigs = {
  home: {
    title: 'NdevDigital - Building Digital Excellence | UI/UX, Web Development & SaaS Solutions',
    description: 'Transform your digital presence with NdevDigital. Expert UI/UX design, web development, branding, SaaS products, e-learning solutions, and game development.',
    url: 'https://ndev.digital/',
  },
  services: {
    title: 'Our Services - UI/UX Design, Web Development & More | NdevDigital',
    description: 'Explore our comprehensive digital services: UI/UX design, custom web development, branding, SaaS product development, e-learning solutions, and game development.',
    url: 'https://ndev.digital/#services',
  },
  portfolio: {
    title: 'Portfolio - Our Projects & Success Stories | NdevDigital',
    description: 'View our portfolio of successful projects spanning web development, UI/UX design, branding, and digital solutions for clients worldwide.',
    url: 'https://ndev.digital/#portfolio',
  },
  about: {
    title: 'About Us - Digital Excellence from Tunisia | NdevDigital',
    description: 'Learn about NdevDigital, your trusted partner for digital transformation based in Tunis, Tunisia. Delivering innovative solutions worldwide.',
    url: 'https://ndev.digital/#about',
  },
  contact: {
    title: 'Contact Us - Let\'s Build Something Amazing | NdevDigital',
    description: 'Get in touch with NdevDigital. Located in Tunis, Tunisia. Email: ndevdigital@sent.com | Phone: +216 54 882 779. Let\'s discuss your project.',
    url: 'https://ndev.digital/#contact',
  },
  privacy: {
    title: 'Privacy Policy | NdevDigital',
    description: 'Read NdevDigital\'s privacy policy to understand how we collect, use, and protect your personal information.',
    url: 'https://ndev.digital/privacy',
    type: 'article',
  },
  terms: {
    title: 'Terms of Service | NdevDigital',
    description: 'Review NdevDigital\'s terms of service for using our website and services.',
    url: 'https://ndev.digital/terms',
    type: 'article',
  },
};