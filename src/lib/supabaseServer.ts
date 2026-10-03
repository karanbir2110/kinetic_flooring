import { createClient } from "@supabase/supabase-js";

// Server-only client — never import this from a "use client" component.
// Site project uses the anon/publishable key, which respects Row Level
// Security (public can read active questions + insert a response, nothing else).
export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);