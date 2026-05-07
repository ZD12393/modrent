"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type Listing = {
  id: number;
  title: string;
  county: string;
  town: string | null;
  unit_type: string | null;
  rent: string;
  available_from: string | null;
  image_url: string | null;
  banner_image_url: string | null;
  photos: string[] | null;
  description: string | null;
  email: string | null;
  status: string | null;
};

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCounty, setSelectedCounty] = useState("All Counties");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadListings() {
      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .or("status.eq.active,status.is.null")
        .order("id", { ascending: false });

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setListings(data || []);
      setLoading(false);
    }

    loadListings();
  }, []);

  const counties = useMemo(() => {
    const uniqueCounties = listings
      .map((listing) => listing.county)
      .filter(Boolean)
      .map((county) => county.trim());

    return ["All Counties", ...Array.from(new Set(uniqueCounties)).sort()];
  }, [listings]);

  const filteredListings = useMemo(() => {
    const normalisedSearch = searchTerm.trim().toLowerCase();

    return listings.filter((listing) => {
      const matchesCounty =
        selectedCounty === "All Counties" ||
        listing.county?.trim().toLowerCase() ===
          selectedCounty.trim().toLowerCase();

      const searchableText = [
        listing.title,
        listing.town,
        listing.county,
        listing.unit_type,
        listing.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalisedSearch || searchableText.includes(normalisedSearch);

      return matchesCounty && matchesSearch;
    });
  }, [listings, selectedCounty, searchTerm]);

  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <div className="mb-5 inline-block rounded-full border border-[#d7d2c8] bg-white px-3 py-1 text-sm font-medium">
            Available rentals
          </div>

          <h1 className="mb-4 text-5xl font-semibold tracking-tight">
            Browse Rentals
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-[#555]">
            Explore modular homes, garden units, backyard studios and small
            standalone rental spaces listed on ModRent.
          </p>
        </div>

        <div className="mb-10 rounded-3xl border border-[#e3ddd2] bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-[1fr_280px]">
            <div>
              <label
                htmlFor="search"
                className="mb-2 block text-sm font-semibold text-[#333]"
              >
                Search by town, county or unit type
              </label>

              <input
                id="search"
                type="text"
                placeholder="e.g. Bray, Wicklow, Garden Studio"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-2xl border border-[#d7d2c8] bg-white px-4 py-3 text-[#1f1f1f] shadow-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label
                htmlFor="county"
                className="mb-2 block text-sm font-semibold text-[#333]"
              >
                Filter by county
              </label>

              <select
                id="county"
                value={selectedCounty}
                onChange={(event) => setSelectedCounty(event.target.value)}
                className="w-full rounded-2xl border border-[#d7d2c8] bg-white px-4 py-3 text-[#1f1f1f] shadow-sm outline-none focus:border-black"
              >
                {counties.map((county) => (
                  <option key={county} value={county}>
                    {county}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">
            <p className="text-[#555]">Loading listings...</p>
          </div>
        ) : filteredListings.length === 0 ? (
          <div className="rounded-3xl border border-[#e3ddd2] bg-white p-10 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">No listings found</h2>

            <p className="mb-6 max-w-2xl leading-7 text-[#555]">
              There are currently no listings matching your search. Try changing
              the town, county or unit type, or check back as more units are
              added.
            </p>

            <a
              href="/create"
              style={{
                backgroundColor: "#1f1f1f",
                color: "#ffffff",
                padding: "14px 24px",
                borderRadius: "14px",
                display: "inline-block",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              List Your Unit
            </a>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredListings.map((listing) => {
              const cardImage =
                listing.banner_image_url ||
                listing.image_url ||
                listing.photos?.[0] ||
                "";

              return (
                <article
                  key={listing.id}
                  className="overflow-hidden rounded-[28px] border border-[#e3ddd2] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative">
                    {cardImage ? (
                      <img
                        src={cardImage}
                        alt={listing.title}
                        className="h-60 w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-60 w-full items-center justify-center bg-[#ebe7df] text-[#777]">
                        No image added
                      </div>
                    )}

                    <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-medium text-[#1f1f1f] shadow-sm">
                      {listing.town
                        ? `${listing.town}, Co. ${listing.county}`
                        : listing.county || "Ireland"}
                    </div>
                  </div>

                  <div className="p-6">
                    {listing.unit_type && (
                      <p className="mb-2 text-sm font-medium uppercase tracking-[0.12em] text-[#777]">
                        {listing.unit_type}
                      </p>
                    )}

                    <h2 className="mb-2 text-2xl font-semibold leading-tight">
                      {listing.title || "Modular rental unit"}
                    </h2>

                    <p className="mb-4 line-clamp-2 min-h-[56px] leading-7 text-[#555]">
                      {listing.description ||
                        "A modular or garden unit rental listed on ModRent."}
                    </p>

                    <div className="mb-6 border-t border-[#e8e1d7] pt-5">
                      <p className="text-2xl font-semibold">
                        €{listing.rent || "POA"}
                        {listing.rent && (
                          <span className="text-sm font-normal text-[#666]">
                            {" "}
                            per month
                          </span>
                        )}
                      </p>

                      {listing.available_from && (
                        <p className="mt-2 text-sm text-[#666]">
                          Available from{" "}
                          {new Date(
                            listing.available_from
                          ).toLocaleDateString("en-IE", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      )}
                    </div>

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
                        textDecoration: "none",
                      }}
                    >
                      View Listing
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}