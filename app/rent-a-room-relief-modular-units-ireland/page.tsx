import Link from "next/link";

export const metadata = {
  title: "Rent-a-Room Relief and Modular Units in Ireland | ModRent",
  description:
    "A cautious owner guide to modular units, detached accommodation and Rent-a-Room Relief in Ireland.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-semibold text-[#1f2933]">
        Rent-a-Room Relief and modular units in Ireland
      </h1>

      <p className="mb-6 text-lg leading-8 text-[#4b5563]">
        Recent Government proposals may create opportunities for owners of
        detached modular accommodation, garden cabins and standalone units.
        However, owners should not assume that planning exemptions, tax relief
        or rental eligibility automatically apply.
      </p>

      <p className="mb-10 leading-7 text-[#4b5563]">
        ModRent is a listing marketplace only. We do not provide legal, tax,
        planning or building regulation advice. Owners should get independent
        professional advice before listing or renting out a unit.
      </p>

      <section className="rounded-3xl bg-[#174f3a] p-8">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Have a modular unit or garden cabin?
        </h2>

        <p className="mb-8 leading-7 text-white">
          List your space on ModRent and reach people specifically looking for
          small standalone rental accommodation in Ireland.
        </p>

        <Link
          href="/create"
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 font-semibold no-underline"
          style={{ color: "#0b3325" }}
        >
          List your property
        </Link>
      </section>
    </main>
  );
}