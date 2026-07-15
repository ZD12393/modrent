import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Modular Homes Legislation Ireland (2026) | Everything You Need to Know | ModRent",
  description:
    "The latest information on Ireland's modular homes legislation, including what it means for owners, renters and garden cabin accommodation.",
  alternates: {
    canonical:
      "https://www.modrent.ie/modular-homes-legislation-ireland",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <article className="mx-auto max-w-4xl px-6 py-16">

        <p className="mb-6 text-sm text-[#666]">
          Last updated: 15 July 2026
        </p>

        <h1 className="mb-8 text-5xl font-bold">
          Modular Homes Legislation Ireland (2026)
        </h1>

        <p className="mb-8 text-xl leading-9">
          Ireland is introducing new legislation aimed at increasing housing
          supply by making better use of modular homes, garden cabins and
          detached residential accommodation.
        </p>

        <p className="mb-12 text-lg leading-8">
          This guide explains the latest position, what has been announced,
          what owners should know and how to prepare if you are considering
          renting out a modular unit.
        </p>

        <h2 className="mb-4 text-3xl font-bold">
          Current position
        </h2>

        <p className="mb-8 leading-8">
          The Government has announced legislation intended to make it easier
          for certain modular and detached residential units to be used as
          accommodation. The Minister has publicly stated that he hopes the
          legislation will become operational during July 2026. We will update
          this guide as further announcements are made.
        </p>

        <h2 className="mb-4 text-3xl font-bold">
          What accommodation may benefit?
        </h2>

        <ul className="mb-10 list-disc space-y-2 pl-6">
          <li>Modular homes</li>
          <li>Garden cabins</li>
          <li>Detached studios</li>
          <li>Backyard accommodation</li>
          <li>Self-contained residential units</li>
        </ul>

        <h2 className="mb-4 text-3xl font-bold">
          Does planning permission disappear?
        </h2>

        <p className="mb-10 leading-8">
          No. Owners remain responsible for complying with planning law,
          building regulations, fire safety requirements, tax obligations,
          insurance requirements and landlord responsibilities.
        </p>

        <h2 className="mb-4 text-3xl font-bold">
          What should owners do now?
        </h2>

        <ul className="mb-10 list-disc space-y-2 pl-6">
          <li>Take professional photographs.</li>
          <li>Prepare an accurate description.</li>
          <li>Review planning and insurance.</li>
          <li>Decide on an appropriate monthly rent.</li>
          <li>Submit your listing before demand increases.</li>
        </ul>

        <div className="my-12 rounded-3xl border border-[#d8d2c7] bg-white p-8">

          <h2 className="mb-4 text-3xl font-bold">
            List your modular unit
          </h2>

          <p className="mb-6 leading-8">
            Owners can submit listings now so they are ready once demand
            increases.
          </p>

          <a
            href="/create"
            className="inline-block rounded-xl bg-[#244e3b] px-6 py-4 font-semibold text-white"
          >
            Submit your listing
          </a>

        </div>

        <h2 className="mb-6 text-3xl font-bold">
          Frequently Asked Questions
        </h2>

        <h3 className="mb-2 text-xl font-semibold">
          Can I rent out a garden cabin?
        </h3>

        <p className="mb-8 leading-8">
          Potentially. The answer depends on the legislation together with
          planning, safety and other legal requirements applicable to your
          property.
        </p>

        <h3 className="mb-2 text-xl font-semibold">
          When will the legislation begin?
        </h3>

        <p className="mb-8 leading-8">
          The Minister has indicated that he hopes the legislation will be
          operational during July 2026, although commencement depends on the
          completion of the legislative process.
        </p>

        <h3 className="mb-2 text-xl font-semibold">
          Can I advertise my modular home now?
        </h3>

        <p className="leading-8">
          Yes. Owners can prepare and submit listings now so they are ready
          before demand increases.
        </p>

      </article>
    </main>
  );
}