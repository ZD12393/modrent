import Link from "next/link";

export const metadata = {
  title: "Rent-a-Room Relief and Modular Units in Ireland | ModRent",
  description:
    "A cautious owner guide to modular units, detached accommodation and Rent-a-Room Relief in Ireland.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-semibold">
        Rent-a-Room Relief and modular units in Ireland
      </h1>

      <p className="mb-6 text-lg leading-8 text-neutral-700">
        Recent Government proposals may create opportunities for owners of
        detached modular accommodation, garden cabins and standalone units.
        However, owners should not assume that planning exemptions, tax relief
        or rental eligibility automatically apply.
      </p>

      <p className="mb-6 leading-7 text-neutral-700">
        ModRent is a listing marketplace only. We do not provide legal, tax,
        planning or building regulation advice. Owners should get independent
        professional advice before listing or renting out a unit.
      </p>

      <Link href="/create" className="underline">
        Create a listing
      </Link>
    </main>
  );
}