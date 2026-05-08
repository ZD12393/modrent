export const metadata = {
  title: "Privacy Policy | ModRent",
  description:
    "Privacy policy for ModRent, explaining how listing, enquiry and contact information is collected, used and stored.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] px-6 py-16 text-[#1f2933]">
      <div className="mx-auto max-w-5xl">
        <section className="mb-14">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-[#111827]">
            Privacy Policy
          </h1>

          <p className="mb-8 max-w-4xl text-2xl font-semibold leading-relaxed text-[#374151]">
            How ModRent handles listing, enquiry and contact information
          </p>

          <p className="rounded-2xl border border-[#d6d3cc] bg-white p-5 text-base leading-7 text-[#374151] shadow-sm">
            This privacy policy is provided for general transparency while
            ModRent is in its early platform stage. It may be updated as the
            platform develops.
          </p>
        </section>

        <section className="space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content: [
                "When a listing is submitted, ModRent may collect listing details including unit type, town, county, rent, availability, photos, description and contact email address.",
                "When an enquiry is submitted, ModRent may collect the sender’s email address, message content and the listing being enquired about.",
                "When users contact ModRent directly, we may collect the information included in that email or support request.",
              ],
            },
            {
              title: "2. How We Use Information",
              content: [
                "Listing information is used to review, publish, display and manage listings on ModRent.",
                "Enquiry information is used to allow interested renters to contact listing owners without publicly exposing owner email addresses.",
                "Contact information may be used to respond to support queries, listing edit requests, removal requests, reports or platform-related enquiries.",
              ],
            },
            {
              title: "3. Public Listing Information",
              content: [
                "Information submitted as part of a public listing may be displayed on ModRent once approved.",
                "Owner email addresses are not displayed publicly on listing pages.",
                "Listing photos, descriptions, rental details and location information may be visible to website visitors.",
              ],
            },
            {
              title: "4. Enquiries",
              content: [
                "ModRent uses enquiry forms so renters can express interest in a listing without the owner’s email address being displayed publicly.",
                "The content of an enquiry may be stored so that the enquiry can be reviewed or passed to the relevant listing owner.",
                "Users should not submit sensitive personal information through enquiry forms unless necessary.",
              ],
            },
            {
              title: "5. Data Storage",
              content: [
                "ModRent uses third-party technology providers, including Supabase and Vercel, to host the platform, store listing information and operate the website.",
                "Reasonable steps are taken to keep platform data secure, but no online platform can guarantee absolute security.",
              ],
            },
            {
              title: "6. Listing Edits and Removal Requests",
              content: [
                "Listing owners may request edits or removal by contacting hello@modrent.ie using the same email address used when submitting the listing.",
                "ModRent may ask for enough information to confirm that the request relates to the person who submitted the listing.",
              ],
            },
            {
              title: "7. Data Retention",
              content: [
                "Listing and enquiry information may be retained for as long as needed to operate ModRent, manage listings, handle support queries, prevent misuse or maintain platform records.",
                "Information may be deleted or anonymised where it is no longer required.",
              ],
            },
            {
              title: "8. Sharing Information",
              content: [
                "ModRent does not sell personal information.",
                "Information may be shared where necessary to operate the platform, respond to enquiries, comply with legal obligations, prevent fraud or address misuse of the platform.",
              ],
            },
            {
              title: "9. User Responsibilities",
              content: [
                "Users should only submit accurate information and should not include unnecessary sensitive personal data in listings, enquiries or messages.",
                "Listing owners are responsible for ensuring that information they publish about a unit is accurate and appropriate.",
              ],
            },
            {
              title: "10. Contact",
              content: [
                "Questions about this privacy policy or requests relating to listing data can be sent to hello@modrent.ie.",
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