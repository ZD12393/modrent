"use client";

import { useEffect, useState } from "react";

type Listing = {
  id: number;
  title: string;
  county: string;
  rent: string;
  imageUrl: string;
  description: string;
  email?: string;
};

export default function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [listing, setListing] = useState<Listing | null>(null);

  useEffect(() => {
    async function loadListing() {
      const resolvedParams = await params;
      const savedListings: Listing[] = JSON.parse(
        localStorage.getItem("modrentListings") || "[]"
      );

      const foundListing = savedListings.find(
        (item) => item.id.toString() === resolvedParams.id
      );

      if (foundListing) {
        setListing(foundListing);
      }
    }

    loadListing();
  }, [params]);

  if (!listing) {
    return (
      <main className="min-h-screen bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p>Listing not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {listing.imageUrl ? (
          <img
            src={listing.imageUrl}
            alt={listing.title}
            className="w-full h-80 object-cover rounded-lg mb-8"
          />
        ) : null}

        <h1 className="text-4xl font-bold mb-4">{listing.title}</h1>

        <p className="text-xl mb-2">€{listing.rent} per month</p>
        <p className="mb-6">{listing.county}</p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Description</h2>
          <p>{listing.description}</p>
        </div>

        <div className="border rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-3">Important Information</h2>
          <ul className="space-y-2">
            <li>Rent-a-Room arrangement</li>
            <li>Owner occupies the main home</li>
            <li>Tax treatment depends on current Irish rules</li>
          </ul>
        </div>

        <a
          href={`mailto:${listing.email || "hello@modrent.ie"}`}
          className="bg-black text-white px-6 py-3 rounded-md inline-block"
        >
          Contact owner
        </a>
      </div>
    </main>
  );
}