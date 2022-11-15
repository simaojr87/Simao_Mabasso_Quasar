import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://awrgewfzcxfrfoqvotya.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3cmdld2Z6Y3hmcmZvcXZvdHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NzE4NTAsImV4cCI6MTk4NDA0Nzg1MH0.5kfZHtENw8hyTaylEU8RTcyyq3yQFcDFbsw5tpPOiCs'

const supabase = createClient(supabaseUrl, supabaseKey)
supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})
export default function useSupabase () {
  return { supabase }
}
