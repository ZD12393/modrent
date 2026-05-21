export const metadata = {
  title: "Modular Home Rental Ireland | ModRent",
  description:
    "Browse or list modular homes, detached studios and standalone modular rental accommodation in Ireland through ModRent.",
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
            Modular rental accommodation in Ireland
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#173528] md:text-5xl">
            Modular home rental in Ireland
          </h1>

          <p className="mb-8 text-lg leading-8 text-[#555]">
            Modular homes are attracting increasing interest in Ireland as a
            flexible form of standalone accommodation.
          </p>

          <div className="space-y-5 text-lg leading-8 text-[#5f6b63] mb-10">
            <p>
              Whether described as modular homes, prefabricated accommodation,
              detached studios or compact standalone rental units, this category
              is growing quickly.
            </p>

            <p>
              Traditional rental platforms were not built specifically for this
              type of accommodation. ModRent was created to give modular rental
              spaces a more relevant Irish marketplace.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#173528]">
              What counts as modular rental accommodation?
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h3 className="mb-2 font-bold text-[#173528]">
                  Modular homes
                </h3>
                <p className="leading-7 text-[#5f6b63]">
                  Factory-built residential units designed for standalone use.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h3 className="mb-2 font-bold text-[#173528]">
                  Detached studios
                </h3>
                <p className="leading-7 text-[#5f6b63]">
                  Self-contained detached accommodation separate from the main
                  dwelling.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h3 className="mb-2 font-bold text-[#173528]">
                  Prefabricated accommodation
                </h3>
                <p className="leading-7 text-[#5f6b63]">
                  Modern off-site manufactured structures suitable for
                  accommodation use.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h3 className="mb-2 font-bold text-[#173528]">
                  Compact standalone units
                </h3>
                <p className="leading-7 text-[#5f6b63]">
                  Smaller independent rental spaces with appropriate facilities.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#173528]">
              Why ModRent exists
            </h2>

            <div className="space-y-5 text-lg leading-8 text-[#5f6b63]">
              <p>
                Mainstream rental sites focus primarily on houses, apartments
                and house shares.
              </p>

              <p>
                ModRent focuses specifically on modular homes, garden cabins and
                detached rental accommodation in Ireland.
              </p>
            </div>
          </section>

          <div className="mb-10 rounded-[28px] bg-[#244e3b] p-8 text-white">
            <h2 className="mb-4 text-2xl font-bold">
              Own a modular rental unit?
            </h2>

            <p className="mb-6 leading-7 text-[#eef5ef]">
              Owners of suitable modular homes, detached studios and standalone
              rental accommodation can submit listings for review.
            </p>

            <p className="mb-8 leading-7 text-[#eef5ef]">
              Standard listings and direct enquiries are currently free.
            </p>

            <a
              href="/create"
              className="seoCtaButton"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                padding: "16px 24px",
                borderRadius: "12px",
                minWidth: "190px",
                minHeight: "56px",
              }}
            >
              <span>List your property</span>
            </a>
          </div>

          <section className="rounded-[24px] border border-[#d8cdbb] bg-white p-6">
            <h2 className="mb-4 text-xl font-bold text-[#173528]">
              Related guides
            </h2>

            <div className="space-y-3">
              <a
                href="/are-modular-units-exempt-from-planning-ireland"
                className="block text-[#244e3b] underline underline-offset-4"
              >
                Are modular units exempt from planning?
              </a>

              <a
                href="/rent-a-room-relief-modular-units-ireland"
                className="block text-[#244e3b] underline underline-offset-4"
              >
                Rent-a-Room Relief and modular units
              </a>

              <a
                href="/where-to-advertise-a-log-cabin-rental-ireland"
                className="block text-[#244e3b] underline underline-offset-4"
              >
                Where to advertise a log cabin rental
              </a>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}