import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

const supabaseUrl = `https://${projectId}.supabase.co`;
const supabaseKey = publicAnonKey;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Database types
export interface CMSContent {
  id: string;
  section: string;
  key: string;
  value: string;
  type: 'text' | 'richtext' | 'image' | 'json';
  created_at: string;
  updated_at: string;
}

export interface CMSSection {
  id: string;
  name: string;
  slug: string;
  enabled: boolean;
  order: number;
  created_at: string;
  updated_at: string;
}
