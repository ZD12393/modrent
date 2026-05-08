export const metadata = {
  title: "Contact | ModRent",
  description:
    "Contact ModRent for listing edits, removal requests, support queries, listing reports and general platform enquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] px-6 py-16 text-[#1f2933]">
      <div className="mx-auto max-w-5xl">
        <section className="mb-14">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-[#111827]">
            Contact ModRent
          </h1>

          <p className="mb-8 max-w-4xl text-2xl font-semibold leading-relaxed text-[#374151]">
            Support, listing edits, removal requests and platform enquiries
          </p>

          <div className="max-w-3xl space-y-4 text-lg leading-8 text-[#4b5563]">
            <p>
              If you need help with a listing, want to report a concern, or have
              a general question about ModRent, please contact us using the
              details below.
            </p>

            <p className="rounded-2xl border border-[#d6d3cc] bg-white p-5 text-base leading-7 text-[#374151] shadow-sm">
              For now, ModRent support is handled by email. A contact form may
              be added later once the full ModRent email and domain setup is
              complete.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="rounded-3xl border border-[#e5e1da] bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-[#111827]">
              General contact
            </h2>

            <p className="mb-4 leading-7 text-[#4b5563]">
              For general queries, platform questions or support requests,
              please email:
            </p>

            <a
              href="mailto:hello@modrent.ie"
              style={{
                color: "#111827",
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              hello@modrent.ie
            </a>
          </div>

          <div className="rounded-3xl border border-[#e5e1da] bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-[#111827]">
              Edit or remove a listing
            </h2>

            <div className="space-y-4 leading-7 text-[#4b5563]">
              <p>
                If you submitted a listing and need to edit, update, hide or
                remove it, please contact ModRent from the same email address
                used when submitting the listing.
              </p>

              <p>Please include:</p>

              <ul className="ml-5 list-disc space-y-2">
                <li>The listing title</li>
                <li>The town or county shown on the listing</li>
                <li>The email address used to submit the listing</li>
                <li>A clear explanation of the change requested</li>
              </ul>

              <p>
                This helps ModRent confirm that the request is coming from the
                person who submitted the listing.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e5e1da] bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-[#111827]">
              Report a listing
            </h2>

            <div className="space-y-4 leading-7 text-[#4b5563]">
              <p>
                If you believe a listing is inaccurate, misleading, unsafe,
                unlawful, duplicated, spam, or otherwise unsuitable for ModRent,
                please report it by email.
              </p>

              <p>Please include:</p>

              <ul className="ml-5 list-disc space-y-2">
                <li>The listing title or link</li>
                <li>The reason for the report</li>
                <li>Any relevant details that may help us review it</li>
              </ul>

              <p>
                ModRent may hide, edit or remove listings where there are
                concerns about accuracy, legality, safety, fraud, spam or
                platform misuse.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e5e1da] bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-[#111827]">
              Important note
            </h2>

            <div className="space-y-4 leading-7 text-[#4b5563]">
              <p>
                ModRent is a listing platform only. We do not provide legal,
                tax, planning, insurance, building control, tenancy or
                professional advice.
              </p>

              <p>
                Property owners remain responsible for ensuring that their unit
                is lawful, safe, insured, compliant and suitable for rental.
                Renters should make their own enquiries before agreeing to rent
                any unit.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-[#0f172a] p-8 text-white md:p-10">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need help with a listing?
          </h2>

          <p className="mb-8 max-w-3xl text-lg leading-8 text-[#d1d5db]">
            Email hello@modrent.ie with the listing title, location and the
            email address used to submit the listing.
          </p>

          <a
            href="mailto:hello@modrent.ie"
            style={{
              backgroundColor: "#ffffff",
              color: "#111827",
              display: "inline-block",
              padding: "14px 28px",
              borderRadius: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Email ModRent
          </a>
        </section>
      </div>
    </main>
  );
}