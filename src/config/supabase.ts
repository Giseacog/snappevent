import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // lets supabase-js handle the session and token management for us
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true, // detects the session in the URL after a redirect (e.g., after login)
  },
});
