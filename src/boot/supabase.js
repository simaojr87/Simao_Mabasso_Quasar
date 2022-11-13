import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://xrfauddxiypdusezgfya.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyZmF1ZGR4aXlwZHVzZXpnZnlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMjgwNzEsImV4cCI6MTk4MzcwNDA3MX0.z1yuZHmaDzU4fVBJQiVGcfq5BajSCkbA3IMzSmSwvXw'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

export default function useSupabase () {
  return (supabase)
}
