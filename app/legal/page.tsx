export const metadata = {
  title: "Legal & Compliance | ModRent",
  description:
    "Legal information, compliance guidance and platform disclaimers for ModRent.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="mb-14">

          <div className="mb-5 inline-block rounded-full border border-[#d7d2c8] bg-white px-3 py-1 text-sm font-medium">
            Legal & Compliance
          </div>

          <h1 className="mb-6 text-5xl font-semibold tracking-tight">
            Important information for owners and renters
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-[#555]">
            ModRent is an Irish rental marketplace focused on modular homes,
            garden units, backyard studios and compact standalone rental spaces.
            This page outlines important legal, compliance and platform
            information relevant to users of the site.
          </p>

        </div>

        <div className="space-y-8">

          <section className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">

            <h2 className="mb-4 text-3xl font-semibold">
              Planning permission & exemptions
            </h2>

            <div className="space-y-5 leading-8 text-[#555]">

              <p>
                ModRent is built around the Irish Government’s announcement
                regarding proposed planning exemptions for certain detached
                modular garden units and small-scale accommodation structures.
              </p>

              <p>
                The planning position for modular accommodation may continue
                to evolve. Property owners are responsible for independently
                confirming whether a specific unit qualifies for any exemption,
                permission or lawful use.
              </p>

              <p>
                A planning exemption does not remove the need to comply with:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Building regulations</li>
                <li>Fire safety requirements</li>
                <li>Electrical safety obligations</li>
                <li>Insurance requirements</li>
                <li>Environmental health standards</li>
                <li>Revenue and tax obligations</li>
                <li>Local authority requirements</li>
              </ul>

            </div>

          </section>

          <section className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">

            <h2 className="mb-4 text-3xl font-semibold">
              Rent-a-Room Relief
            </h2>

            <div className="space-y-5 leading-8 text-[#555]">

              <p>
                ModRent may reference Rent-a-Room Relief as part of the wider
                discussion surrounding modular garden accommodation in Ireland.
              </p>

              <p>
                Eligibility for Rent-a-Room Relief depends on Revenue rules,
                occupancy arrangements, homeowner circumstances and applicable
                tax legislation.
              </p>

              <p>
                ModRent does not provide tax advice and does not confirm whether
                any listing qualifies for tax relief or exemption.
              </p>

            </div>

          </section>

          <section className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">

            <h2 className="mb-4 text-3xl font-semibold">
              Platform role
            </h2>

            <div className="space-y-5 leading-8 text-[#555]">

              <p>
                ModRent is a listing platform only.
              </p>

              <p>
                ModRent does not:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Act as an estate agent or letting agent</li>
                <li>Guarantee the accuracy of listings</li>
                <li>Verify legal compliance of units</li>
                <li>Provide legal or planning advice</li>
                <li>Provide tax advice</li>
                <li>Inspect listed properties</li>
                <li>Guarantee suitability for occupation</li>
              </ul>

              <p>
                Renters and owners are responsible for carrying out their own
                checks, enquiries and due diligence before entering into any
                rental arrangement.
              </p>

            </div>

          </section>

          <section className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">

            <h2 className="mb-4 text-3xl font-semibold">
              Safety & compliance responsibilities
            </h2>

            <div className="space-y-5 leading-8 text-[#555]">

              <p>
                Property owners are responsible for ensuring that accommodation
                is safe, lawful and suitable for occupation.
              </p>

              <p>
                This may include:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Smoke alarms</li>
                <li>Carbon monoxide alarms</li>
                <li>Safe electrical installations</li>
                <li>Safe heating systems</li>
                <li>Ventilation</li>
                <li>Fire safety measures</li>
                <li>Insurance cover</li>
                <li>Structural safety</li>
                <li>Safe access and exits</li>
              </ul>

              <p>
                Renters should satisfy themselves regarding the condition,
                legality and suitability of any unit before agreeing to rent.
              </p>

            </div>

          </section>

          <section className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">

            <h2 className="mb-4 text-3xl font-semibold">
              Listing content & moderation
            </h2>

            <div className="space-y-5 leading-8 text-[#555]">

              <p>
                ModRent reserves the right to remove, edit, reject or moderate
                listings at its discretion.
              </p>

              <p>
                Listings may be removed where they:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Contain misleading information</li>
                <li>Appear fraudulent or deceptive</li>
                <li>Contain offensive content</li>
                <li>Appear unsafe or unlawful</li>
                <li>Violate platform policies</li>
              </ul>

            </div>

          </section>

          <section className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">

            <h2 className="mb-4 text-3xl font-semibold">
              Privacy & contact forms
            </h2>

            <div className="space-y-5 leading-8 text-[#555]">

              <p>
                ModRent uses contact forms to reduce spam and avoid publicly
                displaying owner email addresses.
              </p>

              <p>
                Users should avoid sharing sensitive personal or financial
                information through initial enquiries.
              </p>

              <p>
                By using ModRent, users acknowledge that internet-based
                communication carries inherent risks and limitations.
              </p>

            </div>

          </section>

        </div>

      </section>
    </main>
  );
}