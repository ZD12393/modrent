import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      ownerEmail,
      listingTitle,
      renterEmail,
      renterMessage,
      turnstileToken,
    } = await req.json();

    if (!turnstileToken) {
      return Response.json(
        { error: "Security check missing." },
        { status: 400 }
      );
    }

    const turnstileResponse = await fetch(
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

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      return Response.json(
        { error: "Security check failed." },
        { status: 403 }
      );
    }

    const { error } = await resend.emails.send({
      from: "ModRent <hello@modrent.ie>",
      to: ownerEmail,
      subject: `New enquiry for your ModRent listing: ${listingTitle}`,
      html: `
        <h2>New ModRent Enquiry</h2>
        <p><strong>Listing:</strong> ${listingTitle}</p>
        <p><strong>Renter email:</strong> ${renterEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${renterMessage}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Failed to send enquiry" },
      { status: 500 }
    );
  }
}