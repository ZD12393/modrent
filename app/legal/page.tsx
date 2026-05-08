export const metadata = {
  title: "Legal & Compliance | ModRent",
  description:
    "Legal and compliance information for ModRent, including planning exemptions, Rent-a-Room Relief, owner responsibilities, renter responsibilities, safety and platform limitations.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] px-6 py-16 text-[#1f2933]">
      <div className="mx-auto max-w-5xl">

        <section className="mb-14">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-[#111827]">
            Legal & Compliance
          </h1>

          <p className="mb-8 max-w-4xl text-2xl font-semibold leading-relaxed text-[#374151]">
            Important information for owners and renters using ModRent
          </p>

          <div className="max-w-3xl space-y-4 text-lg leading-8 text-[#4b5563]">

            <p>
              ModRent is an Irish listing platform for modular homes, garden
              units, backyard studios and small standalone accommodation units.
            </p>

            <p>
              The platform has been developed in response to the Irish
              Government announcement on proposed planning exemptions for certain
              modular garden units, together with the potential use of
              Rent-a-Room Relief where the relevant conditions are met.
            </p>

            <p className="rounded-2xl border border-[#d6d3cc] bg-white p-5 text-base leading-7 text-[#374151] shadow-sm">
              This page is for general information only. ModRent does not
              provide legal, tax, planning, building control, insurance,
              valuation, tenancy or professional advice. Owners and renters
              should obtain independent advice where required.
            </p>

          </div>
        </section>

        <section className="space-y-8">

          {[
            {
              title: "1. ModRent’s Role",
              content: [
                "ModRent is a marketplace and advertising platform. It allows property owners to list modular homes, garden units and similar accommodation, and allows interested renters to make enquiries.",
                "ModRent is not an estate agent, letting agent, property manager, landlord, tenant representative, planning consultant, building control consultant, tax adviser, legal adviser or insurer.",
                "ModRent does not own, inspect, certify, approve or manage the properties listed on the platform.",
              ],
            },
            {
              title: "2. Planning Exemptions",
              content: [
                "The Irish Government has announced proposed changes to planning exemption rules which may allow certain detached modular homes or garden units to be placed in back gardens without a planning application, provided specific conditions are satisfied.",
                "These proposed exemptions are not a blanket approval for every modular unit, garden room, cabin, studio or standalone structure.",
                "Property owners are responsible for confirming whether their own unit qualifies for any planning exemption before advertising or renting it.",
              ],
            },
            {
              title: "3. Rent-a-Room Relief",
              content: [
                "Rent-a-Room Relief may allow qualifying individuals to earn up to the annual relief limit tax-free where accommodation is rented in a qualifying residence and all Revenue conditions are met.",
                "The Government announcement has linked modular garden accommodation with the Rent-a-Room Relief framework.",
                "ModRent does not assess or confirm tax eligibility. Owners should seek tax advice where required.",
              ],
            },
            {
              title: "4. Building Regulations & Safety",
              content: [
                "A planning exemption does not remove the need for safe, compliant construction.",
                "Owners should consider fire safety, smoke alarms, carbon monoxide alarms, escape routes, heating systems, electrical installation, water supply and ventilation.",
                "Owners are responsible for ensuring that a unit is safe and suitable before it is advertised or occupied.",
              ],
            },
            {
              title: "5. Insurance",
              content: [
                "Owners should contact their insurer before renting out a modular unit or garden room.",
                "Standard home insurance may not automatically cover detached rental accommodation or paying occupants.",
              ],
            },
            {
              title: "6. Owner Responsibilities",
              content: [
                "Owners are responsible for ensuring that their listing is accurate.",
                "Owners should not list a unit unless they are satisfied that it is lawful, safe and suitable for residential occupation.",
              ],
            },
            {
              title: "7. Renter Responsibilities",
              content: [
                "Renters should make their own enquiries before agreeing to rent any unit listed on ModRent.",
                "Renters should ask about planning status, safety features, utility bills, internet, heating and access.",
              ],
            },
            {
              title: "8. Listing Accuracy & Moderation",
              content: [
                "ModRent may review, edit, hide or remove listings where there are concerns about accuracy, safety, legality, spam or fraud.",
                "ModRent does not guarantee the accuracy, legality or suitability of any listing.",
              ],
            },
            {
              title: "9. Enquiries & Privacy",
              content: [
                "ModRent uses enquiry forms so that owner email addresses are not displayed publicly.",
                "Users should only submit information they are comfortable sharing through the platform.",
              ],
            },
            {
              title: "10. Independent Advice",
              content: [
                "Owners and renters should seek independent advice where they are unsure about planning, tax, insurance, legal status or tenancy matters.",
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

        <section className="mt-14 rounded-3xl bg-[#0f172a] p-8 text-white md:p-10">

          <h2 className="mb-4 text-3xl font-bold text-white">
            Before listing a unit
          </h2>

          <p className="mb-8 max-w-3xl text-lg leading-8 text-[#d1d5db]">
            Owners should confirm planning status, Rent-a-Room Relief
            eligibility, building compliance, safety requirements,
            insurance cover and suitability for rental before advertising
            a unit on ModRent.
          </p>

          <a
            href="/create"
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
            Create a Listing
          </a>

        </section>

      </div>
    </main>
  );
}