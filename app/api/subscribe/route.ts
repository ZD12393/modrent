import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = String(body.email || "")
      .trim()
      .toLowerCase();

    const sourcePage = String(body.sourcePage || "footer");

    if (!email || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { error: "Subscription service is not configured." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { error } = await supabase.from("subscribers").insert({
      email,
      consent: true,
      source_page: sourcePage,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({
          message: "You are already subscribed.",
        });
      }

      return NextResponse.json(
        { error: "We could not save your email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Thanks. You are now subscribed.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}