import { projectId } from '../../utils/supabase/info';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-a2e14eff`;

// Map of favicon files to their HTML link elements
const FAVICON_MAP: Record<string, { rel: string; type?: string; sizes?: string; color?: string }> = {
  'favicon.ico': { rel: 'icon', type: 'image/x-icon' },
  'favicon-16x16.png': { rel: 'icon', type: 'image/png', sizes: '16x16' },
  'favicon-32x32.png': { rel: 'icon', type: 'image/png', sizes: '32x32' },
  'favicon-96x96.png': { rel: 'icon', type: 'image/png', sizes: '96x96' },
  'apple-touch-icon.png': { rel: 'apple-touch-icon', sizes: '180x180' },
  'android-chrome-192x192.png': { rel: 'icon', type: 'image/png', sizes: '192x192' },
  'android-chrome-512x512.png': { rel: 'icon', type: 'image/png', sizes: '512x512' },
  'mstile-150x150.png': { rel: 'icon', type: 'image/png', sizes: '150x150' },
  'safari-pinned-tab.svg': { rel: 'mask-icon', color: '#5865F2' },
  'site.webmanifest': { rel: 'manifest' },
};

export async function loadAndInjectFavicons() {
  try {
    console.log('Loading favicons from Supabase...');
    
    // Fetch the list of available favicons
    const response = await fetch(`${API_BASE}/api/favicons`);
    
    if (!response.ok) {
      console.warn('Failed to load favicons from Supabase, using defaults');
      return;
    }
    
    const data = await response.json();
    
    if (!data.success || !data.favicons) {
      console.warn('No favicons found in Supabase');
      return;
    }

    const favicons = data.favicons as Record<string, string>;
    let injectedCount = 0;

    // Remove existing favicon links (except the defaults)
    const existingLinks = document.querySelectorAll('link[rel*="icon"], link[rel="manifest"], link[rel="mask-icon"]');
    existingLinks.forEach(link => {
      const href = link.getAttribute('href');
      // Only remove links that point to local files
      if (href && href.startsWith('/')) {
        link.remove();
      }
    });

    // Inject new favicon links
    for (const [filename, url] of Object.entries(favicons)) {
      const config = FAVICON_MAP[filename];
      
      if (!config) {
        console.warn(`Unknown favicon file: ${filename}`);
        continue;
      }

      // Create a new link element
      const link = document.createElement('link');
      link.rel = config.rel;
      
      // Use the proxy endpoint instead of direct URL
      link.href = `${API_BASE}/favicon/${filename}`;
      
      if (config.type) link.type = config.type;
      if (config.sizes) link.sizes.value = config.sizes;
      if (config.color) link.setAttribute('color', config.color);

      // Add to head
      document.head.appendChild(link);
      injectedCount++;
      
      console.log(`✓ Injected: ${filename}`);
    }

    console.log(`Successfully injected ${injectedCount} favicons from Supabase`);

    // Update theme-color if available
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', '#5865F2');
    }

    // Update msapplication-TileColor
    const tileColorMeta = document.querySelector('meta[name="msapplication-TileColor"]');
    if (tileColorMeta) {
      tileColorMeta.setAttribute('content', '#5865F2');
    }

  } catch (error) {
    console.error('Error loading favicons:', error);
    console.warn('Falling back to default favicons');
  }
}

// Auto-load on module import
if (typeof window !== 'undefined') {
  // Load favicons when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAndInjectFavicons);
  } else {
    // DOM is already loaded
    loadAndInjectFavicons();
  }
}
