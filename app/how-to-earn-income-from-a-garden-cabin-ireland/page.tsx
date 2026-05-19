import Link from "next/link";

export const metadata = {
  title: "How to Earn Income from a Garden Cabin in Ireland | ModRent",
  description:
    "A practical guide for Irish owners considering whether a garden cabin or detached studio could generate rental income.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-semibold text-[#1f2933]">
        How to earn income from a garden cabin in Ireland
      </h1>

      <p className="mb-6 text-lg leading-8 text-[#4b5563]">
        A garden cabin, detached studio or modular unit may have income
        potential, but owners should check planning, tax, insurance, building
        regulations and suitability before renting it out.
      </p>

      <p className="mb-10 leading-7 text-[#4b5563]">
        ModRent helps owners list suitable standalone spaces. Compliance,
        permissions and tax treatment remain the responsibility of the owner.
      </p>

      <section className="rounded-3xl bg-[#174f3a] p-8">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Ready to list your garden cabin?
        </h2>

        <p className="mb-8 leading-7 text-white">
          Create a ModRent listing for your modular unit, cabin or detached
          studio and reach people looking for this type of space.
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