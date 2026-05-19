import Link from "next/link";

export const metadata = {
  title: "How to Earn Income from a Garden Cabin in Ireland | ModRent",
  description:
    "A practical guide for Irish owners considering whether a garden cabin, detached studio or modular unit could be used as a rental space.",
};

export default function GardenCabinIncomeIrelandPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="mb-4 text-sm font-medium text-neutral-500">
        Owner guide
      </p>

      <h1 className="mb-6 text-4xl font-semibold tracking-tight text-neutral-900">
        How to earn income from a garden cabin in Ireland
      </h1>

      <p className="mb-8 text-lg leading-8 text-neutral-700">
        A well-built garden cabin, detached studio or modular unit may have
        income potential, particularly where there is demand for flexible,
        small-format accommodation. Before renting it out, owners need to think
        carefully about permissions, tax, safety, insurance and whether the
        space is genuinely suitable for rental use.
      </p>

      <div className="mb-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="mb-3 text-xl font-semibold text-neutral-900">
          ModRent is a marketplace, not an adviser
        </h2>
        <p className="leading-7 text-neutral-700">
          ModRent helps owners list suitable standalone spaces. We do not
          provide legal, tax, planning, insurance or building regulation advice.
          Owners are responsible for checking the position before accepting
          tenants or guests.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
          1. Check whether the space is suitable
        </h2>

        <p className="leading-7 text-neutral-700">
          Not every cabin is suitable for rental accommodation. Owners should
          consider access, heating, ventilation, electricity, water, wastewater,
          fire safety, privacy, security and general comfort. A space that works
          for occasional family use may not automatically be suitable as a paid
          rental.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
          2. Understand the planning and regulatory position
        </h2>

        <p className="leading-7 text-neutral-700">
          Recent Government proposals may change how some detached modular
          accommodation is treated, but owners should not assume that every
          garden cabin or standalone unit can be rented without checks. Planning
          permission, exemptions, building regulations and local requirements
          may all be relevant.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
          3. Confirm the tax treatment
        </h2>

        <p className="leading-7 text-neutral-700">
          Some owners may be interested in whether Rent-a-Room Relief or another
          tax treatment could apply. This should be confirmed with a qualified
          adviser or Revenue. ModRent does not assess whether a listing qualifies
          for any tax relief.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
          4. Prepare the listing properly
        </h2>

        <p className="mb-4 leading-7 text-neutral-700">
          A strong listing should be clear, accurate and specific. Owners should
          include:
        </p>

        <ul className="list-disc space-y-3 pl-6 leading-7 text-neutral-700">
          <li>clear photos of the inside and outside;</li>
          <li>accurate information on facilities and access;</li>
          <li>location details without overstating convenience;</li>
          <li>house rules and practical restrictions;</li>
          <li>honest information on parking, utilities and privacy.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
          5. Use a platform built for this type of space
        </h2>

        <p className="leading-7 text-neutral-700">
          Mainstream rental platforms are broad by design. ModRent is being
          built specifically for modular homes, garden cabins, detached studios
          and standalone small rental spaces in Ireland. That makes it easier
          for owners to present this type of accommodation to the right audience.
        </p>
      </section>

      <div className="rounded-2xl bg-neutral-900 p-8 text-white">
        <h2 className="mb-3 text-2xl font-semibold">
          Ready to list your garden cabin?
        </h2>
        <p className="mb-6 leading-7 text-neutral-200">
          Create a ModRent listing for your modular unit, cabin or detached
          studio and reach people looking for this type of space.
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
            <Link className="underline" href="/rent-a-room-relief-modular-units-ireland">
              Rent-a-Room Relief and modular units in Ireland
            </Link>
          </li>
          <li>
            <Link className="underline" href="/create">
              Create a listing on ModRent
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}