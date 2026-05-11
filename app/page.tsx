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
                Ireland’s modular rental marketplace
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#173528] md:text-6xl">
                Find and list modular garden rentals across Ireland.
              </h1>

              <p className="mb-6 max-w-xl text-lg leading-8 text-[#4f5f55] md:text-xl">
                ModRent is a dedicated Irish platform for modular homes, garden
                units, backyard studios and self-contained rental spaces.
              </p>

              <p className="mb-8 max-w-xl text-base leading-8 text-[#5f6b63]">
                Built for homeowners, renters and small accommodation providers,
                ModRent makes this emerging rental category easier to discover,
                compare and manage responsibly.
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
                    Free to list
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#5f6b63]">
                    Launch listings are reviewed before going live.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-4">
                  <p className="text-sm font-semibold text-[#244e3b]">
                    Focused niche
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#5f6b63]">
                    Built specifically for standalone small rental spaces.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-4">
                  <p className="text-sm font-semibold text-[#244e3b]">
                    Ireland-first
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#5f6b63]">
                    Designed around the Irish rental and planning context.
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
                    Garden studios
                  </span>
                </div>

                <h2 className="mb-3 text-2xl font-bold text-[#173528]">
                  A clearer place for compact rental spaces
                </h2>

                <p className="leading-7 text-[#5f6b63]">
                  Instead of mixing garden units with house shares, holiday lets
                  and apartments, ModRent gives this category its own focused
                  home.
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
                Why ModRent exists
              </p>

              <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#173528] md:text-4xl">
                A dedicated platform for a new Irish rental category.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-[#5f6b63]">
                <p>
                  Modular garden units may offer homeowners a practical way to
                  create additional accommodation, while giving renters access
                  to a different type of small, self-contained living space.
                </p>

                <p>
                  ModRent keeps this category separate from standard house
                  shares, apartment rentals and holiday lets, so suitable
                  listings are easier to find and understand.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#244e3b] p-7 text-white shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">
                For owners and renters
              </h3>

              <ul className="space-y-4 leading-7 text-[#eef5ef]">
                <li>List suitable units for review before publication.</li>
                <li>Browse standalone modular and garden rental spaces.</li>
                <li>Send enquiries directly through the platform.</li>
                <li>
                  Access clear compliance reminders before making decisions.
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
                Submit a listing
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}