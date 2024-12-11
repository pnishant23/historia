import { createClient } from "../../../../utils/supabase/server";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { data } = await supabase.from('Location').select('*')
    return new Response(JSON.stringify({ data: data }))
}