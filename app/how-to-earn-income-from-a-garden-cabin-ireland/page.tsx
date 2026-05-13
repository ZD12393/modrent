import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Earn Income From a Garden Cabin in Ireland | ModRent",
  description:
    "A practical guide for Irish garden cabin, modular unit and standalone space owners exploring rental income opportunities.",
};

export default function GardenCabinIncomeIrelandPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#1f2933]">
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-8 inline-block rounded-full border border-[#d8cdbb] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-[#244e3b]">
          Income from garden cabins
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#173528] md:text-6xl">
          How to earn income from a garden cabin in Ireland
        </h1>

        <p className="mb-8 text-xl leading-9 text-[#4f5f55]">
          If you own a garden cabin, modular unit or detached studio, you may be
          wondering whether it could become a practical source of rental income.
        </p>

        <div className="rounded-3xl border border-[#d8cdbb] bg-[#fffdf8] p-6 shadow-sm md:p-8">
          <p className="text-lg leading-8 text-[#5f6b63]">
            Rental income from a standalone unit depends on suitability,
            planning status, safety, insurance, tax treatment and the rules that
            apply to your own property. This guide is general information only
            and is not legal, tax, planning or financial advice.
          </p>
        </div>

        <section className="mt-12 space-y-10">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#173528]">
              Start with suitability
            </h2>

            <p className="leading-8 text-[#5f6b63]">
              Not every garden cabin is suitable for rental use. Before thinking
              about income, owners should consider whether the space is safe,
              comfortable, properly serviced and appropriate for someone to stay
              in. Heating, ventilation, electricity, water, access, privacy and
              fire safety all matter.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#173528]">
              Understand the rules before advertising
            </h2>

            <p className="leading-8 text-[#5f6b63]">
              Recent Government proposals have increased interest in detached
              modular accommodation and rent-a-room relief, but owners should not
              assume that every cabin automatically qualifies. The position may
              depend on the final rules, the unit itself, how it is used and
              whether all relevant conditions are met.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#173528]">
              Think beyond short-stay rentals
            </h2>

            <p className="leading-8 text-[#5f6b63]">
              Many cabin owners immediately think of short-stay platforms, but
              medium-term accommodation may be a better fit for some units.
              Renters may include remote workers, people relocating, contractors,
              students, professionals on temporary projects or people seeking a
              smaller self-contained place to stay.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#173528]">
              Present the unit clearly
            </h2>

            <p className="leading-8 text-[#5f6b63]">
              Good photos, clear pricing, honest descriptions and practical
              details help renters understand whether the space is right for
              them. Owners should explain the location, access, utilities,
              parking, internet, heating, bills and any house rules.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#173528]">
              Use a platform built for this category
            </h2>

            <p className="leading-8 text-[#5f6b63]">
              Garden cabins and modular units can get lost on larger platforms
              designed for apartments, house shares or holiday lets. ModRent was
              created to give these standalone rental spaces a dedicated Irish
              marketplace.
            </p>
          </div>

          <div className="rounded-3xl bg-[#244e3b] p-7 text-white md:p-9">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to explore rental income?
            </h2>

            <p className="mb-6 leading-8 text-[#eef5ef]">
              Submit your suitable garden cabin, modular unit or standalone
              rental space to ModRent for review. Standard listings and direct
              enquiries are free.
            </p>

            <a
              href="/create"
              style={{
                display: "inline-block",
                backgroundColor: "#ffffff",
                color: "#244e3b",
                padding: "16px 24px",
                borderRadius: "12px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              List your property
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}