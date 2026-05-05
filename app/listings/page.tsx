"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Listing = {
  id: number;
  title: string;
  county: string;
  rent: string;
  image_url: string | null;
  description: string | null;
  email: string | null;
};

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    async function loadListings() {
      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setListings(data || []);
    }

    loadListings();
  }, []);

  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-10">
          <div className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-white border mb-5">
            Available rentals
          </div>

          <h1 className="text-5xl font-semibold mb-4">Browse Rentals</h1>

          <p className="text-lg text-[#555] max-w-2xl leading-8">
            Browse modular and garden unit rentals listed on ModRent.
          </p>
        </div>

        {listings.length === 0 ? (
          <div className="bg-white border border-[#e3ddd2] rounded-3xl p-8">
            <p>No listings added yet.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white border border-[#e3ddd2] rounded-[28px] overflow-hidden shadow-sm"
              >
                {listing.image_url ? (
                  <img
                    src={listing.image_url}
                    alt={listing.title}
                    className="w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 bg-[#ebe7df] flex items-center justify-center text-[#777]">
                    No image
                  </div>
                )}

                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {listing.title}
                  </h2>

                  <p className="text-[#666] mb-3">{listing.county}</p>

                  <p className="text-2xl font-semibold mb-5">
                    €{listing.rent}
                    <span className="text-sm font-normal text-[#666]">
                      {" "}
                      per month
                    </span>
                  </p>

                  <a
                    href={`/listings/${listing.id}`}
                    style={{
                      backgroundColor: "#1f1f1f",
                      color: "#ffffff",
                      padding: "12px 20px",
                      borderRadius: "12px",
                      display: "inline-block",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    View Listing
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}