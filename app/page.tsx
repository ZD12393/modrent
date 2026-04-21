export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">ModRent</h1>

          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            A simpler place to find and list modular and garden unit rentals in
            Ireland.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/listings"
              className="bg-black text-white px-6 py-3 rounded-md text-center"
            >
              Browse Rentals
            </a>

            <a
              href="/create"
              className="border border-black px-6 py-3 rounded-md text-center"
            >
              List Your Unit
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">Clear Listings</h2>
            <p>
              Modular and garden unit rentals in one place, without having to
              search across multiple property websites.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">Simple to Use</h2>
            <p>
              Owners can add a listing quickly, and renters can browse available
              units in a clean, focused format.
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">Transparent</h2>
            <p>
              Listings can clearly explain that they operate within a
              Rent-a-Room style arrangement and that tax treatment depends on
              current Irish rules.
            </p>
          </div>
        </div>

        <div className="border rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Why ModRent?</h2>
          <p className="mb-4">
            ModRent is designed to make this new rental category easier to
            understand for both owners and renters.
          </p>
          <p>
            Instead of trawling through general property platforms, users can
            come to one dedicated place built specifically for modular and
            garden unit rentals.
          </p>
        </div>
      </div>
    </main>
  );
}