export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#1f2933]">
      <section className="relative overflow-hidden">
        <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#e6efe8]" />
        <div className="absolute bottom-[-140px] left-[-120px] h-[300px] w-[300px] rounded-full bg-[#f0dfc7]" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-block rounded-full border border-[#d8cdbb] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-[#244e3b] shadow-sm">
                Ireland’s dedicated modular rental marketplace
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#173528] md:text-6xl">
                A dedicated Irish marketplace for modular rentals, garden cabins
                and standalone accommodation.
              </h1>

              <p className="mb-6 max-w-xl text-lg leading-8 text-[#4f5f55] md:text-xl">
                ModRent is a specialist Irish platform for modular homes,
                garden cabins, detached studios and other self-contained rental
                spaces.
              </p>

              <p className="mb-8 max-w-xl text-base leading-8 text-[#5f6b63]">
                Created in response to Ireland’s changing approach to detached
                modular accommodation, ModRent gives this emerging rental
                category a dedicated place to be discovered.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/listings"
                  style={{
                    backgroundColor: "#244e3b",
                    color: "#ffffff",
                    padding: "16px 28px",
                    borderRadius: "14px",
                    display: "inline-block",
                    textAlign: "center",
                    fontWeight: 700,
                    minWidth: "170px",
                    textDecoration: "none",
                    boxShadow: "0 10px 24px rgba(36, 78, 59, 0.18)",
                  }}
                >
                  Browse Rentals
                </a>

                <a
                  href="/create"
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
                  List Your Unit
                </a>
              </div>

              <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-4">
                  <p className="text-sm font-semibold text-[#244e3b]">
                    Free standard listings
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#5f6b63]">
                    Owners can list suitable units and receive direct enquiries
                    at no cost.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-4">
                  <p className="text-sm font-semibold text-[#244e3b]">
                    Built for this category
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#5f6b63]">
                    Modular rentals and standalone accommodation deserve their
                    own dedicated marketplace.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-4">
                  <p className="text-sm font-semibold text-[#244e3b]">
                    Designed for Ireland
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#5f6b63]">
                    Built around the Irish planning, rental and compliance
                    landscape.
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
                    Modular units
                  </span>

                  <span className="rounded-full bg-[#f0dfc7] px-3 py-1 text-sm font-semibold text-[#7a4a1f]">
                    Garden cabins
                  </span>
                </div>

                <h2 className="mb-3 text-2xl font-bold text-[#173528]">
                  A better home for modular and standalone rentals
                </h2>

                <p className="leading-7 text-[#5f6b63]">
                  Instead of getting buried among apartments, house shares and
                  holiday lets, modular accommodation and detached rental spaces
                  finally have a platform built specifically for them.
                </p>
              </div>

              <a
                href="/listings"
                style={{
                  color: "#244e3b",
                  fontWeight: 700,
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                Browse current listings
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8cdbb] bg-[#fffdf8]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#c9823a]">
                Why ModRent was created
              </p>

              <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#173528] md:text-4xl">
                A dedicated marketplace for an emerging Irish rental
                opportunity.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[#5f6b63]">
                <p>
                  Recent Government proposals have significantly increased
                  interest in detached modular accommodation, garden cabins and
                  other standalone rental spaces as potential income-generating
                  assets.
                </p>

                <p>
                  ModRent was created to give this category a dedicated
                  marketplace, rather than forcing owners and renters to use
                  platforms built for completely different types of
                  accommodation.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#244e3b] p-7 text-white shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">
                Built for owners and renters
              </h3>

              <ul className="space-y-4 leading-7 text-[#eef5ef]">
                <li>List suitable modular or standalone rental spaces</li>
                <li>
                  Browse a category often overlooked by larger rental platforms
                </li>
                <li>Connect directly through simple enquiry tools</li>
                <li>
                  Access clear reminders around owner compliance
                  responsibilities
                </li>
              </ul>

              <a
                href="/create"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#244e3b",
                  display: "inline-block",
                  marginTop: "28px",
                  padding: "14px 22px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                List your property
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ea]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#c9823a]">
              Owner resources
            </p>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#173528] md:text-4xl">
              Practical guides for cabin and modular unit owners
            </h2>

            <p className="text-lg leading-8 text-[#5f6b63]">
              These guides are written for owners considering whether a modular
              unit, garden cabin or detached space could be suitable for rental
              use. ModRent does not provide legal, tax or planning advice.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                A practical guide for owners looking for the right place to list
                a log cabin, garden cabin or detached rental space.
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
                A careful guide to recent proposals and what owners should check
                before assuming any planning position.
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

          <div className="mt-10 rounded-[28px] bg-[#244e3b] p-7 text-white md:flex md:items-center md:justify-between md:gap-8">
            <div className="max-w-2xl">
              <h3 className="mb-3 text-2xl font-bold">
                Have a suitable cabin or modular unit?
              </h3>

              <p className="leading-7 text-[#eef5ef]">
                Owners can submit suitable standalone rental spaces to ModRent
                for review. Standard listings and direct enquiries are currently
                free.
              </p>
            </div>

            <a
              href="/create"
              style={{
                backgroundColor: "#ffffff",
                color: "#244e3b",
                display: "inline-block",
                marginTop: "24px",
                padding: "14px 22px",
                borderRadius: "12px",
                fontWeight: 700,
                minWidth: "160px",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              List your property
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}