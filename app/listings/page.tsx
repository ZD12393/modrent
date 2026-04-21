"use client";

import { useEffect, useState } from "react";

type Listing = {
  id: number;
  title: string;
  county: string;
  rent: string;
  imageUrl: string;
  description: string;
};

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const savedListings = JSON.parse(
      localStorage.getItem("modrentListings") || "[]"
    );
    setListings(savedListings);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Browse Rentals</h1>

        {listings.length === 0 ? (
          <p>No listings added yet.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border"
              >
                {listing.imageUrl && (
                  <img
                    src={listing.imageUrl}
                    alt={listing.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2">
                    {listing.title}
                  </h2>

                  <p className="text-sm text-gray-600 mb-1">
                    {listing.county}
                  </p>

                  <p className="text-lg font-bold mb-4">
                    €{listing.rent} / month
                  </p>

                  <a
                    href={`/listings/${listing.id}`}
                    className="inline-block bg-black text-white px-4 py-2 rounded-md text-sm"
                  >
                    View listing
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}