export const metadata = {
  title: "Terms of Use | ModRent",
  description:
    "Terms of use for ModRent, including listing rules, platform limitations, moderation rights and user responsibilities.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] px-6 py-16 text-[#1f2933]">
      <div className="mx-auto max-w-5xl">
        <section className="mb-14">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-[#111827]">
            Terms of Use
          </h1>

          <p className="mb-8 max-w-4xl text-2xl font-semibold leading-relaxed text-[#374151]">
            Rules for using ModRent
          </p>

          <p className="rounded-2xl border border-[#d6d3cc] bg-white p-5 text-base leading-7 text-[#374151] shadow-sm">
            By using ModRent, submitting a listing, making an enquiry or using
            any part of the platform, you agree to these terms.
          </p>
        </section>

        <section className="space-y-8">
          {[
            {
              title: "1. Platform Role",
              content: [
                "ModRent is a listing marketplace for modular homes, garden units, backyard studios and similar small rental accommodation.",
                "ModRent is a platform only. It is not an estate agent, letting agent, landlord, tenant representative, legal adviser, planning adviser, tax adviser, insurer or property manager.",
              ],
            },
            {
              title: "2. Listing Owner Responsibilities",
              content: [
                "Listing owners are solely responsible for the information they submit.",
                "Owners must ensure listings are accurate, lawful, safe and not misleading.",
                "Owners remain responsible for planning compliance, building safety, insurance, tax obligations and rental legality.",
              ],
            },
            {
              title: "3. Renter Responsibilities",
              content: [
                "Renters must carry out their own checks before agreeing to rent any accommodation.",
                "ModRent does not verify or guarantee listings.",
                "Renters should confirm suitability, legality, safety, pricing and all relevant details directly with the owner.",
              ],
            },
            {
              title: "4. Prohibited Listings",
              content: [
                "False, misleading, fraudulent or duplicated listings are prohibited.",
                "Listings for unlawful accommodation are prohibited.",
                "Spam, impersonation, abusive content or attempts to misuse the platform are prohibited.",
              ],
            },
            {
              title: "5. Moderation Rights",
              content: [
                "ModRent may review, approve, reject, edit, hide or remove listings at its discretion.",
                "ModRent may suspend or restrict users where misuse, fraud or policy breaches are suspected.",
              ],
            },
            {
              title: "6. No Guarantee",
              content: [
                "ModRent does not guarantee listing accuracy, availability, legality, safety or suitability.",
                "Listings may become unavailable, outdated or inaccurate.",
              ],
            },
            {
              title: "7. Liability",
              content: [
                "ModRent is not responsible for agreements, disputes, losses, damages or claims arising between users.",
                "Users interact with listings and other users at their own risk.",
              ],
            },
            {
              title: "8. Contact & Listing Requests",
              content: [
                "Listing edit, removal or support requests may be made via hello@modrent.ie.",
                "ModRent may request verification before acting on listing change requests.",
              ],
            },
            {
              title: "9. Changes",
              content: [
                "These terms may be updated as the platform develops.",
              ],
            },
          ].map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-[#e5e1da] bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="mb-4 text-2xl font-semibold text-[#111827]">
                {section.title}
              </h2>

              <div className="space-y-4 leading-7 text-[#4b5563]">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}