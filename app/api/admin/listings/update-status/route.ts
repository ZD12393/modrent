import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const adminSupabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id, status } = await req.json();

    if (!id || !status) {
      return Response.json(
        { error: "Missing id or status" },
        { status: 400 }
      );
    }

    /*
     * Retrieve the listing before updating it.
     * We need the proposer’s email address and listing title
     * for the approval email.
     */
    const { data: listing, error: listingError } = await adminSupabase
      .from("listings")
      .select("id, title, email, status")
      .eq("id", id)
      .single();

    if (listingError || !listing) {
      console.error("Could not retrieve listing:", listingError);

      return Response.json(
        { error: "Could not retrieve listing" },
        { status: 500 }
      );
    }

    const previousStatus = listing.status;

    /*
     * Update the listing status first.
     * The listing remains approved even if the email subsequently fails.
     */
    const { error: updateError } = await adminSupabase
      .from("listings")
      .update({ status })
      .eq("id", id);

    if (updateError) {
      console.error("Could not update listing:", updateError);

      return Response.json(
        { error: "Could not update listing" },
        { status: 500 }
      );
    }

    /*
     * Only send the approval email when:
     * 1. The new status is active.
     * 2. The listing was previously pending.
     *
     * This prevents another approval email being sent when a hidden
     * listing is restored.
     */
    if (status === "active" && previousStatus === "pending") {
      if (!listing.email) {
        return Response.json({
          success: true,
          emailSent: false,
          emailError: "The listing was approved but has no email address.",
        });
      }

      const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "https://www.modrent.ie";

      const listingUrl = `${siteUrl}/listings/${listing.id}`;

      try {
        const { error: emailError } = await resend.emails.send({
          from: "ModRent <hello@modrent.ie>",
          to: listing.email,
          subject: "Your ModRent listing is now live",
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222222; max-width: 600px; margin: 0 auto;">
              <h1 style="font-size: 26px; margin-bottom: 20px;">
                Your listing is now live
              </h1>

              <p>Hi,</p>

              <p>
                Great news — your listing,
                <strong>${escapeHtml(listing.title)}</strong>,
                has been approved and is now live on ModRent.
              </p>

              <p style="margin: 28px 0;">
                <a
                  href="${listingUrl}"
                  style="display: inline-block; background-color: #1f1f1f; color: #ffffff; text-decoration: none; padding: 14px 22px; border-radius: 8px; font-weight: bold;"
                >
                  View your listing
                </a>
              </p>

              <p>
                Please review the live listing and reply to this email if any
                information needs to be amended.
              </p>

              <p>
                Thank you for listing with ModRent, Ireland’s dedicated modular
                accommodation platform.
              </p>

              <p style="margin-top: 30px;">
                Kind regards,<br />
                <strong>ModRent</strong><br />
                <a href="mailto:hello@modrent.ie">hello@modrent.ie</a>
              </p>
            </div>
          `,
          text: `
Your ModRent listing is now live

Hi,

Great news — your listing, "${listing.title}", has been approved and is now live on ModRent.

View your listing:
${listingUrl}

Please review the live listing and reply to this email if any information needs to be amended.

Thank you for listing with ModRent, Ireland's dedicated modular accommodation platform.

Kind regards,
ModRent
hello@modrent.ie
          `.trim(),
        });

        if (emailError) {
          console.error("Approval email failed:", emailError);

          return Response.json({
            success: true,
            emailSent: false,
            emailError: "The listing was approved, but the email failed.",
          });
        }

        return Response.json({
          success: true,
          emailSent: true,
        });
      } catch (emailError) {
        console.error("Approval email threw an error:", emailError);

        return Response.json({
          success: true,
          emailSent: false,
          emailError: "The listing was approved, but the email failed.",
        });
      }
    }

    return Response.json({
      success: true,
      emailSent: false,
      emailNotRequired: true,
    });
  } catch (error) {
    console.error("Update listing status error:", error);

    return Response.json(
      { error: "Unexpected server error" },
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