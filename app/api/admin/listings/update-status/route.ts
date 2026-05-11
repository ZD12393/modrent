import { createClient } from "@supabase/supabase-js";

const adminSupabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, status } = await req.json();

  if (!id || !status) {
    return Response.json({ error: "Missing id or status" }, { status: 400 });
  }

  const { error } = await adminSupabase
    .from("listings")
    .update({ status })
    .eq("id", id);

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json({ success: true });
}