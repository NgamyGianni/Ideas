
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://deyqneyvnovujktynwkn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRleXFuZXl2bm92dWprdHlud2tuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAwMjkwODgsImV4cCI6MTk5NTYwNTA4OH0.b4xSfSvc-tB61vfDcxtWGHETHUqmQH3iuG-9kPivpNM')