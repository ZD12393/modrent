export const metadata = {
  title: "FAQ | ModRent",
  description:
    "Frequently asked questions about modular home rentals, garden units, planning exemptions, Rent-a-Room Relief, safety, compliance and listings in Ireland.",
};

const faqs = [
  {
    category: "Government Announcement & Planning Exemptions",
    questions: [
      {
        question:
          "What is the Government announcement about modular homes and garden units?",
        answer:
          "The Irish Government has announced proposed changes to planning exemption rules that may allow certain detached modular homes or garden units to be placed in back gardens without applying for planning permission, provided specific conditions are met. The proposal is intended to make it easier for homeowners to provide small-scale accommodation while still requiring compliance with building, safety and other legal standards.",
      },
      {
        question: "Does this mean all modular homes are exempt from planning?",
        answer:
          "No. The proposed exemption is not a blanket exemption for every modular building. It is expected to apply only where the unit meets the relevant size, location, use and homeowner eligibility conditions. Owners should check the final regulations and seek professional advice before relying on any exemption.",
      },
      {
        question: "Can a modular garden unit be rented out under the new rules?",
        answer:
          "The Government announcement indicates that certain modular garden units may be capable of being rented out where the homeowner lives in the main dwelling and the unit meets the applicable conditions. ModRent is built around this emerging rental category, but owners remain responsible for confirming that their own unit is lawful and compliant.",
      },
      {
        question: "Who is responsible for checking if a unit is exempt?",
        answer:
          "The property owner is responsible. ModRent provides a marketplace for listings, but it does not certify planning compliance, building compliance, tax eligibility or legal status. Owners should check the final Government rules, local authority requirements and any professional guidance before listing a unit.",
      },
    ],
  },
  {
    category: "Rent-a-Room Relief & Tax",
    questions: [
      {
        question: "What is Rent-a-Room Relief?",
        answer:
          "Rent-a-Room Relief allows qualifying homeowners to earn rental income up to the annual relief limit tax-free, subject to Revenue rules and eligibility conditions. The current relief limit is €14,000 per year.",
      },
      {
        question:
          "Will modular garden units qualify for Rent-a-Room Relief?",
        answer:
          "The Government announcement has linked modular garden accommodation with the Rent-a-Room Relief framework. However, homeowners should confirm the final position with Revenue guidance or a tax adviser before assuming that a specific unit qualifies.",
      },
      {
        question: "Does ModRent decide if I qualify for Rent-a-Room Relief?",
        answer:
          "No. ModRent does not assess tax eligibility. The homeowner is responsible for checking whether Rent-a-Room Relief applies to their own circumstances, including the income received, the type of accommodation, how the property is occupied and any Revenue conditions.",
      },
      {
        question: "What happens if rental income exceeds the relief limit?",
        answer:
          "If rental income exceeds the relevant Rent-a-Room Relief threshold, the full tax treatment may change. Homeowners should seek tax advice before setting rent or accepting bookings.",
      },
    ],
  },
  {
    category: "Safety, Building Standards & Compliance",
    questions: [
      {
        question:
          "Do modular rental units still need to meet building standards?",
        answer:
          "Yes. A planning exemption does not mean a building is exempt from safety, construction or building regulation requirements. Modular units used as accommodation should be safe, suitable for occupation and properly installed.",
      },
      {
        question:
          "Are smoke alarms and carbon monoxide alarms required?",
        answer:
          "Owners should ensure that appropriate smoke alarms, carbon monoxide alarms and fire safety measures are installed where required. The exact requirements may depend on the design, heating system, layout and use of the unit.",
      },
      {
        question: "Is fire safety important for garden units?",
        answer:
          "Yes. Fire safety is essential. Owners should consider safe access, escape routes, heating appliances, electrical safety, separation from other structures and the suitability of materials used.",
      },
      {
        question: "Does a modular unit need insurance?",
        answer:
          "Owners should speak to their home insurer before renting out a modular unit. Standard home insurance may not automatically cover separate rental accommodation, paying occupants or detached garden structures used for residential purposes.",
      },
    ],
  },
  {
    category: "Using ModRent",
    questions: [
      {
        question: "What is ModRent?",
        answer:
          "ModRent is an Irish rental marketplace focused on modular homes, garden units, backyard studios and small standalone rental spaces.",
      },
      {
        question: "What types of units can be listed?",
        answer:
          "ModRent is designed for modular homes, garden units, self-contained backyard studios, small standalone accommodation units and similar compact rental spaces in Ireland.",
      },
      {
        question: "Is ModRent an estate agent or letting agent?",
        answer:
          "No. ModRent is a listing platform. It allows owners to advertise suitable units and allows interested renters to make enquiries. ModRent does not act as an estate agent, letting agent, property manager, legal adviser or tax adviser.",
      },
      {
        question: "Does ModRent verify listings?",
        answer:
          "ModRent may review or moderate listings, but it does not independently verify every claim made by a property owner. Renters should ask questions, request relevant details and satisfy themselves before agreeing to rent any unit.",
      },
      {
        question: "Why are owner email addresses hidden?",
        answer:
          "Owner email addresses are not displayed publicly to reduce spam and protect privacy. Enquiries are submitted through a contact form instead.",
      },
    ],
  },
  {
    category: "Renters",
    questions: [
      {
        question:
          "What should renters ask before renting a modular unit?",
        answer:
          "Renters should ask about planning status, building standards, heating, ventilation, fire safety, utility bills, internet, waste collection, access, parking, insurance and the proposed rental arrangement.",
      },
      {
        question: "Are utility bills included?",
        answer:
          "This depends on the listing. Some owners may include electricity, heating, broadband or waste charges in the rent, while others may charge separately. Renters should clarify this before agreeing to rent.",
      },
      {
        question: "Do renters have tenancy rights?",
        answer:
          "Rights and responsibilities may depend on the exact arrangement, whether the homeowner lives in the main property, how the unit is occupied and the final legal framework. Renters should seek independent advice if unsure.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] px-6 py-16 text-[#1f2933]">
      <div className="mx-auto max-w-5xl">

        <section className="mb-14">

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-[#111827]">
            Frequently Asked Questions
          </h1>

          <p className="mb-8 max-w-4xl text-2xl font-semibold leading-relaxed text-[#374151]">
            Modular home rentals, garden units and planning exemptions in Ireland
          </p>

          <div className="max-w-3xl space-y-4 text-lg leading-8 text-[#4b5563]">

            <p>
              ModRent is focused on a new and emerging rental category in Ireland:
              modular homes, garden units, backyard studios and small standalone accommodation units.
            </p>

            <p>
              The platform has been developed in response to the Irish Government
              announcement on proposed planning exemptions for certain modular garden units,
              together with the potential use of Rent-a-Room Relief where the relevant
              conditions are met.
            </p>

            <p className="rounded-2xl border border-[#d6d3cc] bg-white p-5 text-base leading-7 text-[#374151] shadow-sm">
              The information on this page is general guidance only.
              ModRent does not provide legal, planning, tax, building control
              or insurance advice. Property owners are responsible for checking
              that their own unit is lawful, safe, compliant and suitable for rental.
            </p>

          </div>
        </section>

        <section className="space-y-10">
          {faqs.map((section) => (
            <div
              key={section.category}
              className="rounded-3xl border border-[#e5e1da] bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="mb-6 text-2xl font-semibold text-[#111827]">
                {section.category}
              </h2>

              <div className="divide-y divide-[#e5e1da]">
                {section.questions.map((item) => (
                  <details key={item.question} className="group py-5">

                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium text-[#111827]">
                      <span>{item.question}</span>

                      <span className="mt-1 text-2xl leading-none text-[#6b7280] transition group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="mt-4 max-w-3xl text-base leading-7 text-[#4b5563]">
                      {item.answer}
                    </p>

                  </details>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-14 rounded-3xl bg-[#0f172a] p-8 text-white md:p-10">

          <h2 className="mb-4 text-3xl font-bold text-white">
            Thinking of listing a modular unit?
          </h2>

          <p className="mb-8 max-w-3xl text-lg leading-8 text-[#d1d5db]">
            Before listing on ModRent, owners should confirm planning status,
            building compliance, safety requirements, insurance cover,
            tax treatment and suitability for rental.
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