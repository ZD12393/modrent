export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-white border mb-6">
              Ireland’s modular rental marketplace
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
              Find and list modular units for rent, all in one place.
            </h1>

            <p className="text-lg md:text-xl text-[#555] max-w-xl mb-8 leading-8">
              ModRent is a dedicated platform for modular and garden unit
              rentals in Ireland, designed to make listings clearer, simpler,
              and easier to understand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                }}
              >
                List Your Unit
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-lg">
              <div className="bg-white border border-[#e3ddd2] rounded-2xl p-4">
                <p className="text-2xl font-semibold">Clear</p>
                <p className="text-sm text-[#666] mt-1">Dedicated listings</p>
              </div>

              <div className="bg-white border border-[#e3ddd2] rounded-2xl p-4">
                <p className="text-2xl font-semibold">Simple</p>
                <p className="text-sm text-[#666] mt-1">Easy to browse</p>
              </div>

              <div className="bg-white border border-[#e3ddd2] rounded-2xl p-4">
                <p className="text-2xl font-semibold">Focused</p>
                <p className="text-sm text-[#666] mt-1">One rental category</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#e6e0d5] rounded-[28px] p-6 shadow-sm">
            <div className="rounded-[22px] overflow-hidden mb-5">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                alt="Interior of modular rental"
                className="w-full h-[360px] object-cover"
              />
            </div>

            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-semibold mb-1">
                  Garden Studio in Wicklow
                </h2>
                <p className="text-[#666]">Wicklow</p>
              </div>

              <div className="text-right">
                <p className="text-2xl font-semibold">€1,100</p>
                <p className="text-sm text-[#666]">per month</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm bg-[#f3efe7] px-3 py-1 rounded-full">
                Modular unit
              </span>
              <span className="text-sm bg-[#f3efe7] px-3 py-1 rounded-full">
                Private access
              </span>
              <span className="text-sm bg-[#f3efe7] px-3 py-1 rounded-full">
                Self-contained
              </span>
            </div>

            <a
              href="/listings"
              className="inline-block text-sm font-medium underline underline-offset-4"
            >
              View available rentals
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}