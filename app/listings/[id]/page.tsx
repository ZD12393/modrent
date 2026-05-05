"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

export default function ListingDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadListing() {
      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .eq("id", Number(id))
        .single();

      if (error) {
        console.error(error);
        setListing(null);
      } else {
        setListing(data);
      }

      setLoading(false);
    }

    if (id) {
      loadListing();
    }
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
        <section className="max-w-5xl mx-auto px-6 py-20">
          <p>Loading listing...</p>
        </section>
      </main>
    );
  }

  if (!listing) {
    return (
      <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-semibold mb-4">Listing not found</h1>
          <a href="/listings" className="underline">
            Back to listings
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <a href="/listings" className="inline-block mb-8 underline">
          Back to listings
        </a>

        <div className="bg-white border border-[#e3ddd2] rounded-[32px] overflow-hidden shadow-sm">
          {listing.image_url ? (
            <img
              src={listing.image_url}
              alt={listing.title}
              className="w-full h-[420px] object-cover"
            />
          ) : (
            <div className="w-full h-[420px] bg-[#ebe7df] flex items-center justify-center text-[#777]">
              No image
            </div>
          )}

          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <h1 className="text-4xl font-semibold mb-3">
                  {listing.title}
                </h1>
                <p className="text-lg text-[#666]">{listing.county}</p>
              </div>

              <div className="md:text-right">
                <p className="text-3xl font-semibold">€{listing.rent}</p>
                <p className="text-sm text-[#666]">per month</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">Description</h2>
              <p className="text-[#555] leading-8">
                {listing.description || "No description provided."}
              </p>
            </div>

            <div className="border border-[#e3ddd2] rounded-3xl p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-3">
                Important Information
              </h2>

              <ul className="space-y-2 text-[#555]">
                <li>Rent-a-Room treatment depends on current Irish rules.</li>
                <li>Owners are responsible for ensuring compliance.</li>
                <li>
                  ModRent is a listing platform and does not provide legal or
                  tax advice.
                </li>
              </ul>
            </div>

            <a
              href={`mailto:${listing.email || "hello@modrent.ie"}`}
              style={{
                backgroundColor: "#1f1f1f",
                color: "#ffffff",
                padding: "16px 28px",
                borderRadius: "14px",
                display: "inline-block",
                fontWeight: 600,
              }}
            >
              Contact owner
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}