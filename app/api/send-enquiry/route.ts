import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { ownerEmail, listingTitle, renterEmail, renterMessage } =
      await req.json();

    const { error } = await resend.emails.send({
      from: "ModRent <onboarding@resend.dev>",
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