import { useEffect } from 'react';
import { projectId } from '../../../utils/supabase/info';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff`;

export function DynamicFavicons() {
  useEffect(() => {
    loadFavicons();
  }, []);

  const loadFavicons = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/favicons`);
      
      if (!response.ok) {
        console.log('No favicons found in storage, using defaults');
        return;
      }

      const data = await response.json();
      
      if (!data.success || !data.favicons) {
        console.log('No favicons uploaded yet');
        return;
      }

      const favicons = data.favicons;
      console.log('Loaded favicons from storage:', Object.keys(favicons));

      // Remove existing favicon links (except the default ones we want to keep as fallbacks)
      const existingLinks = document.querySelectorAll(
        'link[rel="icon"], link[rel="apple-touch-icon"], link[rel="mask-icon"], link[rel="manifest"]'
      );
      existingLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Only remove if it's a Supabase storage URL or if we have a replacement
        if (href && (href.includes('supabase.co') || href?.startsWith('/'))) {
          const fileName = href.split('/').pop();
          if (fileName && favicons[fileName]) {
            link.remove();
          }
        }
      });

      // Inject favicons
      const head = document.head;

      // Favicon ICO
      if (favicons['favicon.ico']) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/x-icon';
        link.href = favicons['favicon.ico'];
        head.appendChild(link);
      }

      // 16x16 PNG
      if (favicons['favicon-16x16.png']) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.sizes = '16x16';
        link.href = favicons['favicon-16x16.png'];
        head.appendChild(link);
      }

      // 32x32 PNG
      if (favicons['favicon-32x32.png']) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.sizes = '32x32';
        link.href = favicons['favicon-32x32.png'];
        head.appendChild(link);
      }

      // 96x96 PNG (if exists)
      if (favicons['favicon-96x96.png']) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.sizes = '96x96';
        link.href = favicons['favicon-96x96.png'];
        head.appendChild(link);
      }

      // Apple Touch Icon
      if (favicons['apple-touch-icon.png']) {
        const link = document.createElement('link');
        link.rel = 'apple-touch-icon';
        link.sizes = '180x180';
        link.href = favicons['apple-touch-icon.png'];
        head.appendChild(link);
      }

      // Android Chrome 192
      if (favicons['android-chrome-192x192.png']) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.sizes = '192x192';
        link.href = favicons['android-chrome-192x192.png'];
        head.appendChild(link);
      }

      // Android Chrome 512
      if (favicons['android-chrome-512x512.png']) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.sizes = '512x512';
        link.href = favicons['android-chrome-512x512.png'];
        head.appendChild(link);
      }

      // Safari Pinned Tab
      if (favicons['safari-pinned-tab.svg']) {
        const link = document.createElement('link');
        link.rel = 'mask-icon';
        link.href = favicons['safari-pinned-tab.svg'];
        link.setAttribute('color', '#5865F2');
        head.appendChild(link);
      }

      // Web Manifest
      if (favicons['site.webmanifest']) {
        const link = document.createElement('link');
        link.rel = 'manifest';
        link.href = favicons['site.webmanifest'];
        head.appendChild(link);
      }

      console.log('✅ Favicons loaded successfully from Supabase Storage');
    } catch (error) {
      console.error('Error loading favicons:', error);
      console.log('Using default favicons from /public folder');
    }
  };

  return null; // This component doesn't render anything
}
