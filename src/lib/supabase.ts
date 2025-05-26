import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

// Get environment variables with fallbacks for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are missing. Please check your .env file.');
  // In development, provide sample values to prevent crashes during initial setup
  if (import.meta.env.DEV) {
    console.info('Using placeholder Supabase client for development');
  }
}

// Create and export the Supabase client
export const supabase = createClient<Database>(
  supabaseUrl || 'https://your-supabase-url.supabase.co',
  supabaseAnonKey || 'your-supabase-anon-key'
);