export const metadata = {
  title: "ModRent | Modular Homes, Garden Cabins and Rentals in Ireland",
  description:
    "Browse modular homes, garden cabins, detached studios and standalone rental accommodation across Ireland, or list your own unit on ModRent.",
};

const guideCards = [
  {
    category: "Rental income",
    title: "How much can I rent my garden cabin for?",
    description:
      "Explore the factors that influence monthly rent, including location, size, finish, parking and broadband.",
    href: "/how-much-can-i-rent-my-garden-cabin-for",
    number: "01",
  },
  {
    category: "Planning",
    title: "Are modular units exempt from planning?",
    description:
      "A careful guide to the developing planning position and the checks owners should make before proceeding.",
    href: "/are-modular-units-exempt-from-planning-ireland",
    number: "02",
  },
  {
    category: "Owner guide",
    title: "Can I rent out a log cabin in Ireland?",
    description:
      "Understand the main planning, safety, insurance, tax and rental considerations for detached accommodation.",
    href: "/can-i-rent-out-a-log-cabin-in-ireland",
    number: "03",
  },
  {
    category: "Tax considerations",
    title: "Rent-a-Room Relief and modular units",
    description:
      "What owners should consider before assuming that a detached modular unit qualifies for tax relief.",
    href: "/rent-a-room-relief-modular-units-ireland",
    number: "04",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ea] text-[#1f2933]">
      {/* Hero */}
      <section className="relative">
        <div className="absolute left-[-160px] top-[160px] h-[340px] w-[340px] rounded-full bg-[#e5eee7] blur-2xl" />
        <div className="absolute right-[-130px] top-[-130px] h-[390px] w-[390px] rounded-full bg-[#f0dfc7] blur-xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 md:px-6 md:pb-24 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#d7ccbb] bg-[#fffdf8]/90 px-4 py-2 text-sm font-semibold text-[#244e3b] shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#c9823a]" />
                Ireland&apos;s dedicated modular rental marketplace
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-[#173528] sm:text-5xl md:text-6xl lg:text-[68px]">
                Find a different kind of place to call home.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#536158] md:text-xl md:leading-9">
                Discover modular homes, garden cabins, detached studios and
                standalone rentals across Ireland — all in one specialist
                marketplace.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/listings"
                  className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#244e3b] px-7 py-4 text-center font-bold text-white shadow-[0_14px_30px_rgba(36,78,59,0.2)] transition hover:-translate-y-0.5 hover:bg-[#1d4232]"
                  style={{ textDecoration: "none" }}
                >
                  Browse rentals
                </a>

                <a
                  href="/create"
                  className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-[#d1c4b1] bg-[#fffdf8] px-7 py-4 text-center font-bold text-[#244e3b] transition hover:-translate-y-0.5 hover:border-[#bda98d]"
                  style={{ textDecoration: "none" }}
                >
                  List your property
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#d8cdbb] pt-7 text-sm text-[#5f6b63]">
                <div>
                  <p className="font-bold text-[#173528]">Free to list</p>
                  <p className="mt-1">Standard owner listings</p>
                </div>

                <div>
                  <p className="font-bold text-[#173528]">Direct enquiries</p>
                  <p className="mt-1">Owners and renters connect</p>
                </div>

                <div>
                  <p className="font-bold text-[#173528]">Built for Ireland</p>
                  <p className="mt-1">A specialist Irish platform</p>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-6">
              <div className="absolute -left-3 top-16 hidden rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-4 shadow-xl lg:block">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c9823a]">
                  Discover
                </p>
                <p className="mt-1 font-bold text-[#173528]">
                  Standalone living
                </p>
              </div>

              <div className="overflow-hidden rounded-[36px] border border-[#d8cdbb] bg-[#fffdf8] p-3 shadow-[0_28px_70px_rgba(31,41,51,0.16)] md:p-4">
                <div className="relative overflow-hidden rounded-[28px]">
                  <img
                    src="/modular-unit.jpg"
                    alt="Modern modular garden unit available as standalone accommodation"
                    className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[590px]"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10281f]/95 via-[#10281f]/55 to-transparent px-6 pb-7 pt-24 text-white md:px-8">
                    <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#f1c994]">
                      A growing rental category
                    </p>

                    <h2 className="max-w-md text-2xl font-bold leading-tight md:text-3xl">
                      Unique homes deserve a marketplace of their own.
                    </h2>

                    <a
                      href="/listings"
                      className="mt-5 inline-flex items-center gap-2 font-bold text-white"
                      style={{ textDecoration: "none" }}
                    >
                      Explore current listings
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 right-1 hidden max-w-[230px] rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-5 shadow-xl md:block">
                <p className="text-sm leading-6 text-[#5f6b63]">
                  Garden cabins, modular homes and detached studios — easier to
                  find, easier to list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category navigation */}
      <section className="border-y border-[#d8cdbb] bg-[#fffdf8]">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
          <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#c9823a]">
                Explore the marketplace
              </p>

              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#173528] md:text-4xl">
                Accommodation that does not fit the usual rental mould.
              </h2>
            </div>

            <a
              href="/listings"
              className="font-bold text-[#244e3b] underline decoration-[#c9823a] decoration-2 underline-offset-8"
            >
              View all listings
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <a
              href="/listings"
              className="group relative min-h-[270px] overflow-hidden rounded-[28px] bg-[#244e3b] p-7 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              style={{ textDecoration: "none" }}
            >
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full border-[28px] border-white/10" />

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d7e7dc]">
                Modular homes
              </p>

              <h3 className="mt-16 max-w-xs text-3xl font-bold leading-tight">
                Modern, self-contained homes built differently.
              </h3>

              <p className="absolute bottom-7 left-7 font-bold">
                Browse modular rentals <span aria-hidden="true">→</span>
              </p>
            </a>

            <a
              href="/listings"
              className="group relative min-h-[270px] overflow-hidden rounded-[28px] border border-[#d8cdbb] bg-[#f1dfc8] p-7 text-[#173528] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              style={{ textDecoration: "none" }}
            >
              <div className="absolute -bottom-16 -right-10 h-52 w-52 rounded-full bg-[#c9823a]/15" />

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a5528]">
                Garden cabins
              </p>

              <h3 className="mt-16 max-w-xs text-3xl font-bold leading-tight">
                Private spaces with character, independence and flexibility.
              </h3>

              <p className="absolute bottom-7 left-7 font-bold">
                Discover garden cabins <span aria-hidden="true">→</span>
              </p>
            </a>

            <a
              href="/listings"
              className="group relative min-h-[270px] overflow-hidden rounded-[28px] border border-[#d8cdbb] bg-[#e5eee7] p-7 text-[#173528] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              style={{ textDecoration: "none" }}
            >
              <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-[#244e3b]/20" />
              <div className="absolute right-14 top-14 h-8 w-8 rounded-full bg-[#244e3b]/10" />

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#476b58]">
                Detached studios
              </p>

              <h3 className="mt-16 max-w-xs text-3xl font-bold leading-tight">
                Compact standalone accommodation for modern living.
              </h3>

              <p className="absolute bottom-7 left-7 font-bold">
                Explore detached spaces <span aria-hidden="true">→</span>
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Why ModRent */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[34px] bg-[#173528] p-8 text-white shadow-[0_24px_60px_rgba(23,53,40,0.2)] md:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[46px] border-white/5" />

              <p className="relative text-sm font-bold uppercase tracking-[0.2em] text-[#efc38e]">
                Why ModRent
              </p>

              <h2 className="relative mt-5 max-w-xl text-3xl font-bold leading-tight md:text-5xl">
                A clearer home for an emerging rental market.
              </h2>

              <p className="relative mt-7 max-w-xl text-lg leading-8 text-[#dfe9e2]">
                Modular homes and standalone units can be difficult to find on
                traditional property platforms. ModRent gives this growing
                category a dedicated place to be listed and discovered.
              </p>

              <div className="relative mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/8 p-5">
                  <p className="font-bold">For renters</p>
                  <p className="mt-2 text-sm leading-6 text-[#dfe9e2]">
                    Find independent accommodation that may never appear in a
                    standard apartment search.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/8 p-5">
                  <p className="font-bold">For owners</p>
                  <p className="mt-2 text-sm leading-6 text-[#dfe9e2]">
                    Reach people already interested in modular and detached
                    accommodation.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#c9823a]">
                Simple by design
              </p>

              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#173528] md:text-4xl">
                Browse, enquire or list without unnecessary complexity.
              </h2>

              <div className="mt-9 space-y-4">
                <div className="flex gap-5 rounded-[24px] border border-[#d8cdbb] bg-[#fffdf8] p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e5eee7] font-bold text-[#244e3b]">
                    1
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#173528]">
                      Browse specialist listings
                    </h3>
                    <p className="mt-2 leading-7 text-[#5f6b63]">
                      Search a marketplace focused on modular homes, cabins and
                      standalone spaces.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 rounded-[24px] border border-[#d8cdbb] bg-[#fffdf8] p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f1dfc8] font-bold text-[#8a5528]">
                    2
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#173528]">
                      Make a direct enquiry
                    </h3>
                    <p className="mt-2 leading-7 text-[#5f6b63]">
                      Contact owners through the listing enquiry system and ask
                      about availability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 rounded-[24px] border border-[#d8cdbb] bg-[#fffdf8] p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#244e3b] font-bold text-white">
                    3
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#173528]">
                      List a suitable unit
                    </h3>
                    <p className="mt-2 leading-7 text-[#5f6b63]">
                      Owners can submit a unit for review and receive direct
                      enquiries from interested renters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="border-y border-[#d8cdbb] bg-[#fffdf8]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="mb-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#c9823a]">
                Advice and guides
              </p>

              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-[#173528] md:text-5xl">
                Clear information for owners exploring modular rental.
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5f6b63]">
                Practical information about rental income, planning, listing,
                tax and the responsibilities involved in offering detached
                accommodation.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <a
              href="/how-much-can-i-rent-my-garden-cabin-for"
              className="group relative min-h-[430px] overflow-hidden rounded-[32px] bg-[#244e3b] p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-10"
              style={{ textDecoration: "none" }}
            >
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[55px] border-white/5" />
              <div className="absolute bottom-[-90px] left-[-80px] h-64 w-64 rounded-full bg-[#c9823a]/20" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-5">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#efc38e]">
                      Featured owner guide
                    </p>

                    <span className="text-sm font-bold text-white/60">01</span>
                  </div>

                  <h3 className="mt-16 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
                    How much can I rent my garden cabin for?
                  </h3>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-[#dfe9e2]">
                    Learn which features influence rental value and explore
                    indicative monthly rental ranges for garden cabins, modular
                    homes and detached studios.
                  </p>
                </div>

                <p className="mt-12 font-bold">
                  Read the full guide <span aria-hidden="true">→</span>
                </p>
              </div>
            </a>

            <div className="grid gap-4">
              {guideCards.slice(1).map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="group flex gap-5 rounded-[24px] border border-[#d8cdbb] bg-[#f7f3ea] p-6 transition hover:-translate-y-1 hover:border-[#bfae96] hover:shadow-md"
                  style={{ color: "#1f2933", textDecoration: "none" }}
                >
                  <span className="pt-1 text-sm font-bold text-[#c9823a]">
                    {guide.number}
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#718077]">
                      {guide.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold leading-snug text-[#173528]">
                      {guide.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#5f6b63]">
                      {guide.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <a
              href="/where-to-advertise-a-log-cabin-rental-ireland"
              className="rounded-[24px] border border-[#d8cdbb] bg-[#f1dfc8] p-7 transition hover:-translate-y-1 hover:shadow-md"
              style={{ color: "#173528", textDecoration: "none" }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#8a5528]">
                Listing guide
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Where should you advertise a log cabin rental?
              </h3>

              <p className="mt-3 leading-7 text-[#665747]">
                Compare general property websites with a specialist marketplace
                created specifically for modular accommodation.
              </p>
            </a>

            <a
              href="/how-to-earn-income-from-a-garden-cabin-ireland"
              className="rounded-[24px] border border-[#cddbd0] bg-[#e5eee7] p-7 transition hover:-translate-y-1 hover:shadow-md"
              style={{ color: "#173528", textDecoration: "none" }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#476b58]">
                Income planning
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Earning income from a garden cabin
              </h3>

              <p className="mt-3 leading-7 text-[#536158]">
                Review the practical checks owners should make before treating a
                detached unit as a rental asset.
              </p>
            </a>
          </div>

          <p className="mt-8 max-w-4xl text-sm leading-6 text-[#718077]">
            ModRent provides general information only. Owners remain responsible
            for checking the planning, building, fire safety, insurance, tax and
            rental requirements that apply to their circumstances.
          </p>
        </div>
      </section>

      {/* Owner CTA */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="relative overflow-hidden rounded-[36px] bg-[#173528] px-7 py-12 text-white shadow-[0_28px_70px_rgba(23,53,40,0.2)] md:px-12 md:py-16 lg:px-16">
            <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border-[62px] border-white/5" />
            <div className="absolute -bottom-28 left-[30%] h-64 w-64 rounded-full bg-[#c9823a]/15" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#efc38e]">
                  For property owners
                </p>

                <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                  Have a modular home, garden cabin or detached studio?
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#dfe9e2]">
                  Create a listing and reach people specifically searching for
                  this kind of accommodation. Standard listings and direct
                  enquiries are currently free.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="/create"
                  className="inline-flex min-h-14 min-w-[190px] items-center justify-center rounded-2xl bg-white px-7 py-4 text-center font-bold text-[#244e3b] transition hover:-translate-y-0.5"
                  style={{ textDecoration: "none" }}
                >
                  List your property
                </a>

                <a
                  href="/contact"
                  className="inline-flex min-h-14 min-w-[190px] items-center justify-center rounded-2xl border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
                  style={{ textDecoration: "none" }}
                >
                  Contact ModRent
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}