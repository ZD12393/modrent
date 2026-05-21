export const metadata = {
  title: "Garden Cabins to Rent in Ireland | ModRent",
  description:
    "Find or list garden cabins, detached studios and standalone small rental spaces in Ireland through ModRent.",
};

export default function Page() {
  return (
    <>
      <style>{`
        .seoCtaButton,
        .seoCtaButton span {
          color: #244e3b !important;
          -webkit-text-fill-color: #244e3b !important;
          font-size: 16px !important;
          line-height: 24px !important;
          font-weight: 700 !important;
          opacity: 1 !important;
          visibility: visible !important;
          text-decoration: none !important;
        }
      `}</style>

      <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
        <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <div className="mb-8 inline-block rounded-full border border-[#d7d2c8] bg-white px-4 py-2 text-sm font-semibold text-[#244e3b]">
            Garden cabin rentals in Ireland
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#173528] md:text-5xl">
            Garden cabins to rent in Ireland
          </h1>

          <p className="mb-8 text-lg leading-8 text-[#555]">
            Garden cabins, detached studios and small standalone rental spaces
            are becoming a more visible part of Ireland’s rental market.
          </p>

          <div className="mb-10 space-y-5 text-lg leading-8 text-[#5f6b63]">
            <p>
              For renters, these spaces may offer a more private alternative to
              a house share, depending on location, facilities and suitability.
            </p>

            <p>
              For owners, a well-presented garden cabin or detached unit may
              provide a way to reach people specifically looking for compact
              standalone accommodation.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#173528]">
              What types of spaces appear on ModRent?
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h3 className="mb-2 font-bold text-[#173528]">
                  Garden cabins
                </h3>
                <p className="leading-7 text-[#5f6b63]">
                  Detached cabin-style accommodation located beside or behind a
                  main home.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h3 className="mb-2 font-bold text-[#173528]">
                  Detached studios
                </h3>
                <p className="leading-7 text-[#5f6b63]">
                  Self-contained studio spaces separate from the main property.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h3 className="mb-2 font-bold text-[#173528]">
                  Modular units
                </h3>
                <p className="leading-7 text-[#5f6b63]">
                  Modern modular or prefabricated structures used as compact
                  accommodation.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h3 className="mb-2 font-bold text-[#173528]">
                  Standalone small rentals
                </h3>
                <p className="leading-7 text-[#5f6b63]">
                  Independent rental spaces that do not fit neatly into
                  traditional house or apartment categories.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#173528]">
              Why use a specialist rental marketplace?
            </h2>

            <div className="space-y-5 text-lg leading-8 text-[#5f6b63]">
              <p>
                General property websites are broad by design. Garden cabins and
                detached rental units can be difficult to categorise clearly on
                platforms built around conventional homes, apartments and house
                shares.
              </p>

              <p>
                ModRent is focused specifically on modular homes, garden cabins,
                detached studios and standalone small rental spaces in Ireland.
              </p>
            </div>
          </section>

          <div className="mb-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-[24px] border border-[#d8cdbb] bg-white p-6">
              <h2 className="mb-3 text-xl font-bold text-[#173528]">
                Looking for a garden cabin to rent?
              </h2>

              <p className="mb-6 leading-7 text-[#5f6b63]">
                Browse current ModRent listings and contact owners directly
                through the enquiry form.
              </p>

              <a
                href="/listings"
                className="block text-[#244e3b] underline underline-offset-4"
              >
                Browse rentals
              </a>
            </div>

            <div className="rounded-[24px] bg-[#244e3b] p-6 text-white">
              <h2 className="mb-3 text-xl font-bold">
                Own a garden cabin?
              </h2>

              <p className="mb-6 leading-7 text-[#eef5ef]">
                Owners can submit suitable cabins, detached studios and modular
                units for review. Standard listings are currently free.
              </p>

              <a
                href="/create"
                className="seoCtaButton"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffffff",
                  padding: "14px 22px",
                  borderRadius: "12px",
                  minWidth: "170px",
                  minHeight: "52px",
                }}
              >
                <span>List your property</span>
              </a>
            </div>
          </div>

          <section className="rounded-[24px] border border-[#d8cdbb] bg-white p-6">
            <h2 className="mb-4 text-xl font-bold text-[#173528]">
              Related guides
            </h2>

            <div className="space-y-3">
              <a
                href="/modular-home-rental-ireland"
                className="block text-[#244e3b] underline underline-offset-4"
              >
                Modular home rental in Ireland
              </a>

              <a
                href="/where-to-advertise-a-log-cabin-rental-ireland"
                className="block text-[#244e3b] underline underline-offset-4"
              >
                Where to advertise a log cabin rental
              </a>

              <a
                href="/can-i-rent-out-a-log-cabin-in-ireland"
                className="block text-[#244e3b] underline underline-offset-4"
              >
                Can I rent out a log cabin in Ireland?
              </a>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}