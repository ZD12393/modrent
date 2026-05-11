export async function POST(req: Request) {
  try {
    const { turnstileToken } = await req.json();

    if (!turnstileToken) {
      return Response.json(
        { error: "Missing Turnstile token" },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY || "",
          response: turnstileToken,
        }),
      }
    );

    const data = await response.json();

    if (!data.success) {
      return Response.json(
        { error: "Security verification failed" },
        { status: 403 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Verification failed" },
      { status: 500 }
    );
  }
}