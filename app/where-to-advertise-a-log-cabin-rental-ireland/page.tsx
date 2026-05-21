export const metadata = {
  title: "Where to Advertise a Log Cabin Rental in Ireland | ModRent",
  description:
    "A practical guide for Irish owners looking to advertise a log cabin, garden cabin or standalone rental space and reach relevant renters.",
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
            Owner listing guide
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#173528] md:text-5xl">
            Where should you advertise a log cabin rental in Ireland?
          </h1>

          <p className="mb-8 text-lg leading-8 text-[#555]">
            If you own a log cabin, garden cabin or detached rental space in
            Ireland, one of the first questions is simple: where do you actually
            advertise it?
          </p>

          <div className="space-y-5 text-lg leading-8 text-[#5f6b63] mb-10">
            <p>
              Most mainstream property platforms were built for traditional
              houses, apartments and house shares.
            </p>

            <p>
              Small standalone spaces like garden cabins, detached studios and
              modular rental units often sit awkwardly within those categories,
              making them harder for the right renters to discover.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#173528]">
              The problem with general rental platforms
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h3 className="mb-2 font-bold text-[#173528]">
                  Poor category fit
                </h3>
                <p className="leading-7 text-[#5f6b63]">
                  Garden cabins and detached units can get buried among standard
                  residential listings.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h3 className="mb-2 font-bold text-[#173528]">
                  Wrong audience
                </h3>
                <p className="leading-7 text-[#5f6b63]">
                  Many renters browsing mainstream portals are not specifically
                  looking for compact standalone accommodation.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h3 className="mb-2 font-bold text-[#173528]">
                  Confusing positioning
                </h3>
                <p className="leading-7 text-[#5f6b63]">
                  Owners can struggle to explain unusual rental formats inside
                  systems designed for conventional property stock.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h3 className="mb-2 font-bold text-[#173528]">
                  Mismatched search intent
                </h3>
                <p className="leading-7 text-[#5f6b63]">
                  Searchers looking for houses are not always ideal leads for
                  compact detached spaces.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#173528]">
              A more relevant option for this category
            </h2>

            <div className="space-y-5 text-lg leading-8 text-[#5f6b63]">
              <p>
                ModRent was created specifically for modular homes, garden
                cabins, detached studios and other small standalone rental
                accommodation in Ireland.
              </p>

              <p>
                Instead of forcing these listings into generic rental
                marketplaces, ModRent focuses on this specific accommodation
                category.
              </p>
            </div>
          </section>

          <div className="mb-10 rounded-[28px] bg-[#244e3b] p-8 text-white">
            <h2 className="mb-4 text-2xl font-bold">
              Have a suitable space?
            </h2>

            <p className="mb-6 leading-7 text-[#eef5ef]">
              Owners can submit suitable log cabins, garden cabins, modular
              homes and detached rental spaces for review.
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
              Related owner guides
            </h2>

            <div className="space-y-3">
              <a
                href="/can-i-rent-out-a-log-cabin-in-ireland"
                className="block text-[#244e3b] underline underline-offset-4"
              >
                Can I rent out a log cabin in Ireland?
              </a>

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
            </div>
          </section>
        </section>
      </main>
    </>
  );
}