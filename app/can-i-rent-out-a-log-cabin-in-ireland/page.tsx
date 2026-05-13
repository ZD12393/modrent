import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can I Rent Out a Log Cabin in Ireland? | ModRent",
  description:
    "A practical overview for Irish cabin and modular unit owners considering rental income, rent-a-room relief, planning considerations and listing options.",
};

export default function LogCabinRentalIrelandPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#1f2933]">
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-8 inline-block rounded-full border border-[#d8cdbb] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-[#244e3b]">
          Cabin owners in Ireland
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#173528] md:text-6xl">
          Can I rent out a log cabin in Ireland?
        </h1>

        <p className="mb-8 text-xl leading-9 text-[#4f5f55]">
          Many Irish homeowners are now asking whether a garden cabin, modular
          unit or detached standalone space could be used to generate rental
          income.
        </p>

        <div className="rounded-3xl border border-[#d8cdbb] bg-[#fffdf8] p-6 shadow-sm md:p-8">
          <p className="text-lg leading-8 text-[#5f6b63]">
            The answer depends on several factors, including planning status,
            building suitability, safety, insurance, tax treatment and whether
            the unit meets any relevant conditions under current or proposed
            Irish rules. ModRent does not provide legal, tax or planning advice,
            but this page explains the main issues owners should think about.
          </p>
        </div>

        <section className="mt-12 space-y-10">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#173528]">
              Why cabin owners are looking at rental income
            </h2>

            <p className="leading-8 text-[#5f6b63]">
              Recent Government proposals around detached modular accommodation
              and rent-a-room relief have increased interest in using suitable
              standalone units as rental spaces. For homeowners who already own
              a cabin, garden studio or modular unit, this has raised an obvious
              question: could the space be used responsibly to provide
              accommodation and generate income?
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#173528]">
              A log cabin is not automatically a rental property
            </h2>

            <p className="leading-8 text-[#5f6b63]">
              Not every cabin or garden unit will be suitable for rental use.
              Owners should consider whether the structure is safe, properly
              serviced, suitable for occupation, insured appropriately and
              compliant with any applicable planning, building and tax
              requirements.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#173528]">
              Planning and rent-a-room relief
            </h2>

            <p className="leading-8 text-[#5f6b63]">
              The recent announcements have created interest, but owners should
              avoid assuming that every detached unit automatically qualifies.
              The final position may depend on specific eligibility conditions,
              the nature of the unit, how it is used and the rules in force at
              the time. Before renting out a cabin, owners should confirm the
              position for their own property.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#173528]">
              Where can cabin owners advertise?
            </h2>

            <p className="leading-8 text-[#5f6b63]">
              Traditional rental websites are usually built around houses,
              apartments and rooms. Holiday platforms are often aimed at short
              stays. Cabins, modular homes and detached garden units can easily
              get lost between these categories.
            </p>

            <p className="mt-4 leading-8 text-[#5f6b63]">
              ModRent was created to give these standalone spaces a dedicated
              place to be listed and discovered by people specifically looking
              for this type of accommodation.
            </p>
          </div>

          <div className="rounded-3xl bg-[#244e3b] p-7 text-white md:p-9">
            <h2 className="mb-4 text-3xl font-bold">
              Have a suitable cabin or modular unit?
            </h2>

            <p className="mb-6 leading-8 text-[#eef5ef]">
              Owners can submit suitable standalone rental spaces to ModRent for
              review. Standard listings and direct enquiries are currently free.
            </p>

            <a
              href="/create"
              className="inline-block rounded-xl bg-white px-6 py-4 font-bold text-[#244e3b]"
            >
              List your property
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}