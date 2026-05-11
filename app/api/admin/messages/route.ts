import { createClient } from "@supabase/supabase-js";

const adminSupabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await adminSupabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json(data);
}