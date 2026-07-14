import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const adminSupabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

type SubmissionBody = {
  title: string;
  unit_type: string;
  town: string;
  county: string;
  rent: string;
  available_from: string;
  bedrooms: number | null;
  bathrooms: number | null;
  bills_included: boolean;
  pet_friendly: boolean;
  image_url: string;
  photos: string[];
  banner_image_url: string;
  description: string;
  email: string;
  turnstileToken: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SubmissionBody;

    const {
      title,
      unit_type,
      town,
      county,
      rent,
      available_from,
      bedrooms,
      bathrooms,
      bills_included,
      pet_friendly,
      image_url,
      photos,
      banner_image_url,
      description,
      email,
      turnstileToken,
    } = body;

    if (
      !title ||
      !unit_type ||
      !town ||
      !county ||
      !rent ||
      !available_from ||
      !description ||
      !email ||
      !turnstileToken ||
      !Array.isArray(photos) ||
      photos.length === 0
    ) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

    if (!turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY is missing.");

      return Response.json(
        { error: "Security verification is unavailable." },
        { status: 500 }
      );
    }

    const verificationResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: turnstileSecret,
          response: turnstileToken,
        }),
      }
    );

    const verification =
      (await verificationResponse.json()) as TurnstileResponse;

    if (!verification.success) {
      console.error(
        "Turnstile verification failed:",
        verification["error-codes"]
      );

      return Response.json(
        {
          error:
            "Security check failed. Please refresh the page and try again.",
        },
        { status: 400 }
      );
    }

    const { data: listing, error: insertError } = await adminSupabase
      .from("listings")
      .insert([
        {
          title,
          unit_type,
          town,
          county,
          rent,
          available_from,
          bedrooms,
          bathrooms,
          bills_included,
          pet_friendly,
          image_url,
          photos,
          banner_image_url,
          description,
          email,
          status: "pending",
        },
      ])
      .select("id, title, email")
      .single();

    if (insertError || !listing) {
      console.error("Listing insert failed:", insertError);

      return Response.json(
        { error: "There was a problem saving the listing." },
        { status: 500 }
      );
    }

    let emailSent = false;

    try {
      const { error: emailError } = await resend.emails.send({
        from: "ModRent <hello@modrent.ie>",
        to: listing.email,
        replyTo: "hello@modrent.ie",
        subject: "We have received your ModRent listing",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.65; color: #222222; max-width: 600px; margin: 0 auto;">
            <h1 style="font-size: 26px; margin-bottom: 20px;">
              Your listing has been received
            </h1>

            <p>Hi,</p>

            <p>
              Thank you for submitting
              <strong>${escapeHtml(listing.title)}</strong>
              to ModRent.
            </p>

            <p>
              Your listing is now awaiting review. It will not appear publicly
              until it has been checked and approved by ModRent.
            </p>

            <p>
              We will send you another email as soon as the listing has been
              approved and published.
            </p>

            <p>
              Please reply to this email if you need to correct or add any
              information while the listing is under review.
            </p>

            <p style="margin-top: 30px;">
              Kind regards,<br />
              <strong>ModRent</strong><br />
              <a href="mailto:hello@modrent.ie">hello@modrent.ie</a><br />
              <a href="https://www.modrent.ie">www.modrent.ie</a>
            </p>
          </div>
        `,
        text: `
Your listing has been received

Hi,

Thank you for submitting "${listing.title}" to ModRent.

Your listing is now awaiting review. It will not appear publicly until it has been checked and approved by ModRent.

We will send you another email as soon as the listing has been approved and published.

Please reply to this email if you need to correct or add any information while the listing is under review.

Kind regards,
ModRent
hello@modrent.ie
https://www.modrent.ie
        `.trim(),
      });

      if (emailError) {
        console.error("Submission acknowledgement email failed:", emailError);
      } else {
        emailSent = true;
      }
    } catch (emailError) {
      console.error(
        "Submission acknowledgement email threw an error:",
        emailError
      );
    }

    return Response.json({
      success: true,
      listingId: listing.id,
      emailSent,
    });
  } catch (error) {
    console.error("Submit listing error:", error);

    return Response.json(
      { error: "Something went wrong while submitting the listing." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}