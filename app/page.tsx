export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#1f2933]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#e6efe8]" />
        <div className="absolute bottom-[-140px] left-[-120px] h-[300px] w-[300px] rounded-full bg-[#f0dfc7]" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-block rounded-full border border-[#d8cdbb] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-[#244e3b] shadow-sm">
                Ireland&apos;s dedicated modular rental marketplace
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#173528] md:text-6xl">
                A dedicated place to find and list modular rentals in Ireland.
              </h1>

              <p className="mb-6 max-w-xl text-lg leading-8 text-[#4f5f55] md:text-xl">
                ModRent connects people looking for modular homes, garden cabins,
                detached studios and other self-contained accommodation with
                owners who have them to rent.
              </p>

              <p className="mb-8 max-w-xl text-base leading-8 text-[#5f6b63]">
                Looking for somewhere to live? Browse available properties.
                Have a suitable unit? Standard listings are currently free.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/create"
                  style={{
                    backgroundColor: "#244e3b",
                    color: "#ffffff",
                    padding: "16px 28px",
                    borderRadius: "14px",
                    display: "inline-block",
                    textAlign: "center",
                    fontWeight: 700,
                    minWidth: "190px",
                    textDecoration: "none",
                    boxShadow: "0 10px 24px rgba(36, 78, 59, 0.18)",
                  }}
                >
                  List Your Property
                </a>

                <a
                  href="/listings"
                  style={{
                    backgroundColor: "#fffdf8",
                    color: "#244e3b",
                    padding: "16px 28px",
                    borderRadius: "14px",
                    display: "inline-block",
                    textAlign: "center",
                    fontWeight: 700,
                    border: "1px solid #d8cdbb",
                    minWidth: "170px",
                    textDecoration: "none",
                  }}
                >
                  Browse Rentals
                </a>
              </div>

              <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-4">
                  <p className="text-sm font-semibold text-[#244e3b]">
                    Free standard listings
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#5f6b63]">
                    List a suitable property with no upfront listing fee.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-4">
                  <p className="text-sm font-semibold text-[#244e3b]">
                    Reach the right renters
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#5f6b63]">
                    Reach people specifically looking for this type of
                    accommodation.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-4">
                  <p className="text-sm font-semibold text-[#244e3b]">
                    Direct enquiries
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#5f6b63]">
                    Receive enquiries directly from prospective renters.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#d8cdbb] bg-[#fffdf8] p-4 shadow-[0_24px_60px_rgba(31,41,51,0.12)] md:p-6">
              <div className="mb-5 overflow-hidden rounded-[26px]">
                <img
                  src="/modular-unit.jpg"
                  alt="Example modular garden unit"
                  className="h-[300px] w-full object-cover md:h-[380px]"
                />
              </div>

              <div className="mb-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#e6efe8] px-3 py-1 text-sm font-semibold text-[#244e3b]">
                    Modular homes
                  </span>

                  <span className="rounded-full bg-[#f0dfc7] px-3 py-1 text-sm font-semibold text-[#7a4a1f]">
                    Garden cabins
                  </span>

                  <span className="rounded-full bg-[#e6efe8] px-3 py-1 text-sm font-semibold text-[#244e3b]">
                    Detached studios
                  </span>
                </div>

                <h2 className="mb-3 text-2xl font-bold text-[#173528]">
                  Put your property where people are looking for it
                </h2>

                <p className="leading-7 text-[#5f6b63]">
                  Modular and standalone accommodation can easily get lost among
                  apartments, house shares and holiday lets. ModRent gives this
                  category a dedicated marketplace of its own.
                </p>
              </div>

              <a
                href="/create"
                style={{
                  color: "#244e3b",
                  fontWeight: 700,
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                List your property free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OWNER CONVERSION SECTION */}
      <section className="border-y border-[#d8cdbb] bg-[#fffdf8]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#c9823a]">
                For property owners
              </p>

              <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#173528] md:text-5xl">
                The renters are looking.
                <br />
                Now we need the properties.
              </h2>

              <div className="max-w-2xl space-y-5 text-lg leading-8 text-[#5f6b63]">
                <p>
                  People are already finding ModRent while searching online for
                  modular homes and alternative accommodation to rent in Ireland.
                </p>

                <p>
                  If you have a garden cabin, modular home, detached studio or
                  other suitable self-contained space, ModRent gives you a
                  dedicated place to put it in front of people looking for this
                  type of accommodation.
                </p>

                <p>
                  You don&apos;t need to know whether there will be interest
                  before you advertise. Create your listing, add your property
                  details and photos, and let prospective renters find you.
                </p>
              </div>

              <a
                href="/create"
                style={{
                  backgroundColor: "#244e3b",
                  color: "#ffffff",
                  display: "inline-block",
                  marginTop: "30px",
                  padding: "16px 26px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 10px 24px rgba(36, 78, 59, 0.16)",
                }}
              >
                List Your Property for Free
              </a>

              <p className="mt-3 text-sm text-[#6b746e]">
                Standard listings are currently free.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#244e3b] p-7 text-white shadow-sm md:p-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#e9c58d]">
                Why list on ModRent?
              </p>

              <h3 className="mb-6 text-2xl font-bold md:text-3xl">
                A marketplace built specifically for your type of property.
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="mb-1 font-bold text-white">
                    Reach people looking for alternatives
                  </p>
                  <p className="leading-7 text-[#eef5ef]">
                    ModRent is focused on modular homes, cabins and standalone
                    accommodation rather than the wider property market.
                  </p>
                </div>

                <div className="border-t border-white/20 pt-5">
                  <p className="mb-1 font-bold text-white">
                    Receive direct enquiries
                  </p>
                  <p className="leading-7 text-[#eef5ef]">
                    Interested renters can enquire about your property directly
                    through ModRent.
                  </p>
                </div>

                <div className="border-t border-white/20 pt-5">
                  <p className="mb-1 font-bold text-white">
                    Get listed early
                  </p>
                  <p className="leading-7 text-[#eef5ef]">
                    Build visibility as awareness of modular and detached rental
                    accommodation continues to grow in Ireland.
                  </p>
                </div>

                <div className="border-t border-white/20 pt-5">
                  <p className="mb-1 font-bold text-white">
                    No standard listing fee
                  </p>
                  <p className="leading-7 text-[#eef5ef]">
                    Standard property listings are currently free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEGISLATION / MARKET CONTEXT */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="rounded-[30px] border border-[#d8cdbb] bg-[#fffdf8] p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#c9823a]">
                  A changing rental landscape
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-[#173528] md:text-4xl">
                  Could your unused space become a rental opportunity?
                </h2>
              </div>

              <div className="space-y-4 leading-7 text-[#5f6b63]">
                <p>
                  Government proposals around detached accommodation have
                  increased interest in garden cabins, modular units and other
                  self-contained spaces as potential long-term rental
                  accommodation.
                </p>

                <p>
                  Planning, tax and rental requirements can depend on the
                  property and individual circumstances. Owners should check
                  the applicable requirements before offering accommodation for
                  rent.
                </p>

                <a
                  href="/rent-a-room-relief-modular-units-ireland"
                  style={{
                    color: "#244e3b",
                    fontWeight: 700,
                    display: "inline-block",
                    marginTop: "4px",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Read our guide to Rent-a-Room Relief and modular units
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OWNER RESOURCES */}
      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#c9823a]">
              Owner resources
            </p>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#173528] md:text-4xl">
              Thinking about renting out a cabin or modular unit?
            </h2>

            <p className="text-lg leading-8 text-[#5f6b63]">
              Start with our practical guides for Irish owners considering
              whether a modular unit, garden cabin or detached space could be
              suitable for rental use. ModRent does not provide legal, tax or
              planning advice.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="/how-much-can-i-rent-my-garden-cabin-for"
              className="rounded-[24px] bg-[#244e3b] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#e9c58d]">
                Featured owner guide
              </p>

              <h3 className="mb-3 text-xl font-bold text-white">
                How much can I rent my garden cabin for?
              </h3>

              <p className="leading-7 text-[#eef5ef]">
                Understand the factors that can influence rental value and how
                to think about pricing a garden cabin or detached unit.
              </p>

              <p className="mt-5 font-bold text-white">
                Read the guide →
              </p>
            </a>

            <a
              href="/where-to-advertise-a-log-cabin-rental-ireland"
              className="rounded-[24px] border border-[#d8cdbb] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              style={{ color: "#1f2933", textDecoration: "none" }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#c9823a]">
                Owner listing guide
              </p>

              <h3 className="mb-3 text-xl font-bold text-[#173528]">
                Where to advertise a log cabin rental in Ireland
              </h3>

              <p className="leading-7 text-[#5f6b63]">
                A practical guide for owners looking for the right place to
                list a log cabin, garden cabin or detached rental space.
              </p>
            </a>

            <a
              href="/are-modular-units-exempt-from-planning-ireland"
              className="rounded-[24px] border border-[#d8cdbb] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              style={{ color: "#1f2933", textDecoration: "none" }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#c9823a]">
                Planning guide
              </p>

              <h3 className="mb-3 text-xl font-bold text-[#173528]">
                Are modular units exempt from planning?
              </h3>

              <p className="leading-7 text-[#5f6b63]">
                A careful guide to recent proposals and what owners should
                check before assuming any planning position.
              </p>
            </a>

            <a
              href="/modular-home-rental-ireland"
              className="rounded-[24px] border border-[#d8cdbb] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              style={{ color: "#1f2933", textDecoration: "none" }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#c9823a]">
                Category guide
              </p>

              <h3 className="mb-3 text-xl font-bold text-[#173528]">
                Modular home rental in Ireland
              </h3>

              <p className="leading-7 text-[#5f6b63]">
                A dedicated guide for modular homes, detached studios and
                standalone modular accommodation in the Irish rental market.
              </p>
            </a>

            <a
              href="/can-i-rent-out-a-log-cabin-in-ireland"
              className="rounded-[24px] border border-[#d8cdbb] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              style={{ color: "#1f2933", textDecoration: "none" }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#c9823a]">
                Owner guide
              </p>

              <h3 className="mb-3 text-xl font-bold text-[#173528]">
                Can I rent out a log cabin in Ireland?
              </h3>

              <p className="leading-7 text-[#5f6b63]">
                A cautious guide for owners thinking about listing a log cabin,
                garden cabin or detached space.
              </p>
            </a>

            <a
              href="/rent-a-room-relief-modular-units-ireland"
              className="rounded-[24px] border border-[#d8cdbb] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              style={{ color: "#1f2933", textDecoration: "none" }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#c9823a]">
                Tax considerations
              </p>

              <h3 className="mb-3 text-xl font-bold text-[#173528]">
                Rent-a-Room Relief and modular units in Ireland
              </h3>

              <p className="leading-7 text-[#5f6b63]">
                What owners should consider before assuming any tax relief or
                eligibility position.
              </p>
            </a>

            <a
              href="/how-to-earn-income-from-a-garden-cabin-ireland"
              className="rounded-[24px] border border-[#d8cdbb] bg-[#fffdf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              style={{ color: "#1f2933", textDecoration: "none" }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#c9823a]">
                Income planning
              </p>

              <h3 className="mb-3 text-xl font-bold text-[#173528]">
                How to earn income from a garden cabin in Ireland
              </h3>

              <p className="leading-7 text-[#5f6b63]">
                Practical points to check before treating a garden cabin or
                detached studio as a rental asset.
              </p>
            </a>
          </div>

          {/* FINAL OWNER CTA */}
          <div className="mt-10 rounded-[28px] bg-[#244e3b] p-7 text-white md:flex md:items-center md:justify-between md:gap-8">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#e9c58d]">
                Have a property to rent?
              </p>

              <h3 className="mb-3 text-2xl font-bold">
                Don&apos;t wait for renters to find you somewhere else.
              </h3>

              <p className="leading-7 text-[#eef5ef]">
                Put your garden cabin, modular home or suitable standalone
                accommodation where people are already looking for this type
                of property. Standard listings and direct enquiries are
                currently free.
              </p>
            </div>

            <a
              href="/create"
              style={{
                backgroundColor: "#ffffff",
                color: "#244e3b",
                display: "inline-block",
                marginTop: "24px",
                padding: "15px 24px",
                borderRadius: "12px",
                fontWeight: 700,
                minWidth: "190px",
                textAlign: "center",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              List Your Property
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}