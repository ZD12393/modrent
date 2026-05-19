import Link from "next/link";

export const metadata = {
  title: "Rent-a-Room Relief and Modular Units in Ireland | ModRent",
  description:
    "A practical guide for Irish property owners considering detached modular accommodation, garden units and possible Rent-a-Room Relief implications.",
};

export default function RentARoomReliefModularUnitsIrelandPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="mb-4 text-sm font-medium text-neutral-500">
        Owner guide
      </p>

      <h1 className="mb-6 text-4xl font-semibold tracking-tight text-neutral-900">
        Rent-a-Room Relief and modular units in Ireland
      </h1>

      <p className="mb-8 text-lg leading-8 text-neutral-700">
        Recent Irish Government proposals have drawn attention to the potential
        use of detached modular accommodation, garden cabins and standalone
        units as rental spaces. For owners, this may create new opportunities,
        but the position depends on the final rules, eligibility conditions,
        planning requirements, tax treatment and building regulations.
      </p>

      <div className="mb-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="mb-3 text-xl font-semibold text-neutral-900">
          Important note
        </h2>
        <p className="leading-7 text-neutral-700">
          ModRent is a listing marketplace. We do not provide legal, tax,
          planning or building regulation advice. Owners should seek independent
          professional advice before renting out any modular unit, garden cabin
          or detached accommodation.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
          What owners should consider
        </h2>

        <p className="mb-4 leading-7 text-neutral-700">
          A detached modular unit may appear simple to rent, but owners should
          check the full position before listing. Relevant questions may include:
        </p>

        <ul className="list-disc space-y-3 pl-6 leading-7 text-neutral-700">
          <li>whether planning permission or an exemption applies;</li>
          <li>whether the unit meets building regulation requirements;</li>
          <li>whether the proposed use is eligible for any tax relief;</li>
          <li>whether insurance covers rental use;</li>
          <li>whether the space is suitable, safe and properly serviced;</li>
          <li>whether local authority or Revenue guidance applies.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
          Could Rent-a-Room Relief apply?
        </h2>

        <p className="mb-4 leading-7 text-neutral-700">
          Rent-a-Room Relief can be valuable for qualifying homeowners, but it
          should not be assumed that every detached modular unit, garden cabin
          or standalone space will qualify. The exact treatment may depend on
          the final legislation, Revenue guidance and the facts of the specific
          property.
        </p>

        <p className="leading-7 text-neutral-700">
          Owners should avoid relying on general online commentary alone. Before
          listing, it is sensible to confirm the tax position with an accountant,
          tax adviser or Revenue.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
          Where ModRent fits in
        </h2>

        <p className="mb-4 leading-7 text-neutral-700">
          ModRent is being built for a specific type of rental space that does
          not always fit neatly on mainstream property platforms: modular homes,
          detached garden cabins, studios and small standalone rental units.
        </p>

        <p className="leading-7 text-neutral-700">
          The role of ModRent is to help suitable owners present these spaces to
          people actively looking for this type of accommodation. Compliance,
          permissions, tax treatment and suitability remain the responsibility
          of the owner.
        </p>
      </section>

      <div className="rounded-2xl bg-neutral-900 p-8 text-white">
        <h2 className="mb-3 text-2xl font-semibold">
          Have a modular unit or garden cabin?
        </h2>
        <p className="mb-6 leading-7 text-neutral-200">
          List your space on ModRent and reach people specifically looking for
          small standalone rental accommodation in Ireland.
        </p>

        <Link
          href="/create"
          className="inline-flex rounded-xl bg-white px-5 py-3 font-medium text-neutral-900 hover:bg-neutral-100"
        >
          Create a listing
        </Link>
      </div>

      <nav className="mt-12 border-t border-neutral-200 pt-8">
        <p className="mb-3 font-medium text-neutral-900">Related guides</p>
        <ul className="space-y-2 text-neutral-700">
          <li>
            <Link className="underline" href="/can-i-rent-out-a-log-cabin-in-ireland">
              Can I rent out a log cabin in Ireland?
            </Link>
          </li>
          <li>
            <Link className="underline" href="/how-to-earn-income-from-a-garden-cabin-ireland">
              How to earn income from a garden cabin in Ireland
            </Link>
          </li>
          <li>
            <Link className="underline" href="/faq">
              ModRent FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}