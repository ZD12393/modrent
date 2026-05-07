export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">

      {/* HERO SECTION */}

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>

            <div className="mb-6 inline-block rounded-full border border-[#d7d2c8] bg-white px-3 py-1 text-sm font-medium">
              Ireland’s modular rental marketplace
            </div>

            <h1 className="mb-6 text-5xl font-semibold leading-tight md:text-6xl">
              A new way to find and list modular garden rentals in Ireland.
            </h1>

            <p className="mb-6 max-w-xl text-lg leading-8 text-[#555] md:text-xl">
              ModRent is a dedicated platform for modular homes,
              garden units, backyard studios and small standalone
              rental spaces across Ireland.
            </p>

            <p className="mb-8 max-w-xl text-base leading-8 text-[#555]">
              Following the Irish Government’s announcement on proposed
              planning exemptions for certain modular garden units,
              ModRent helps owners and renters explore this emerging
              rental category clearly and responsibly.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">

              <a
                href="/listings"
                style={{
                  backgroundColor: "#1f1f1f",
                  color: "#ffffff",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  display: "inline-block",
                  textAlign: "center",
                  fontWeight: 600,
                  minWidth: "170px",
                  textDecoration: "none",
                }}
              >
                Browse Rentals
              </a>

              <a
                href="/create"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#1f1f1f",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  display: "inline-block",
                  textAlign: "center",
                  fontWeight: 600,
                  border: "1px solid #d7d2c8",
                  minWidth: "170px",
                  textDecoration: "none",
                }}
              >
                List Your Unit
              </a>

            </div>

          </div>

          <div className="rounded-[28px] border border-[#e6e0d5] bg-white p-6 shadow-sm">

            <div className="mb-5 overflow-hidden rounded-[22px]">
              <img
                src="/modular-unit.jpg"
                alt="Example modular garden unit"
                className="h-[360px] w-full object-cover"
              />
            </div>

            <div className="mb-4">

              <h2 className="mb-2 text-2xl font-semibold">
                Modular units, garden studios and compact rentals
              </h2>

              <p className="leading-7 text-[#555]">
                ModRent brings together modular and garden unit rentals
                from across Ireland in one focused platform, making it
                easier for owners and renters to understand available
                options.
              </p>

            </div>

            <div className="mb-4 flex flex-wrap gap-2">

              <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm">
                Modular units
              </span>

              <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm">
                Garden studios
              </span>

              <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm">
                Self-contained spaces
              </span>

            </div>

            <a
              href="/listings"
              style={{
                color: "#1f1f1f",
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Browse current listings
            </a>

          </div>

        </div>
      </section>

      {/* WHY MODRENT SECTION */}

      <section className="border-y border-[#e3ddd2] bg-white">

        <div className="mx-auto max-w-6xl px-6 py-16">

          <div className="max-w-3xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#777]">
              Why ModRent exists
            </p>

            <h2 className="mb-6 text-4xl font-semibold tracking-tight text-[#111827]">
              A focused platform for a new Irish rental category.
            </h2>

            <p className="mb-6 text-lg leading-8 text-[#555]">
              Modular garden units may offer homeowners a practical way
              to create additional accommodation, while giving renters
              access to a different type of small, self-contained living space.
            </p>

            <p className="text-lg leading-8 text-[#555]">
              ModRent keeps this category separate from standard house shares,
              apartment rentals and holiday lets, so listings can be easier
              to find, understand and compare.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}