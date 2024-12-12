import { createClient } from "../../../../utils/supabase/server";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data, error } = await supabase.from('Location').select('*')
    console.log(data)
    if (error) new Response(JSON.stringify({ error: error }))
    else return new Response(JSON.stringify({ data: data }))
}