import Link from "next/link";

export const metadata = {
  title: "How to Earn Income from a Garden Cabin in Ireland | ModRent",
  description:
    "A practical guide for Irish owners considering whether a garden cabin or detached studio could generate rental income.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-semibold">
        How to earn income from a garden cabin in Ireland
      </h1>

      <p className="mb-6 text-lg leading-8 text-neutral-700">
        A garden cabin, detached studio or modular unit may have income
        potential, but owners should check planning, tax, insurance, building
        regulations and suitability before renting it out.
      </p>

      <p className="mb-6 leading-7 text-neutral-700">
        ModRent helps owners list suitable standalone spaces. Compliance,
        permissions and tax treatment remain the responsibility of the owner.
      </p>

      <Link href="/create" className="underline">
        Create a listing
      </Link>
    </main>
  );
}