"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Listing = {
  id: number;
  title: string;
  county: string;
  town: string | null;
  rent: string;
  status: string | null;
  banner_image_url: string | null;
};

type Message = {
  id: number;
  listing_id: number;
  sender_email: string;
  message: string;
  created_at: string;
};

export default function AdminPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    setLoading(true);

    const { data: listingData } = await supabase
      .from("listings")
      .select("*")
      .order("id", { ascending: false });

    const { data: messageData } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });

    setListings(listingData || []);
    setMessages(messageData || []);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function hideListing(id: number) {
    const confirmed = confirm(
      "Hide this listing from the public website?"
    );

    if (!confirmed) return;

    await supabase
      .from("listings")
      .update({ status: "hidden" })
      .eq("id", id);

    loadData();
  }

  async function activateListing(id: number) {
    await supabase
      .from("listings")
      .update({ status: "active" })
      .eq("id", id);

    loadData();
  }

  async function deleteListing(id: number) {
    const confirmed = confirm(
      "Delete this listing permanently?"
    );

    if (!confirmed) return;

    await supabase
      .from("listings")
      .delete()
      .eq("id", id);

    loadData();
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f6f4ef] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p>Loading admin dashboard...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-12">
          <div className="mb-5 inline-block rounded-full border border-[#d7d2c8] bg-white px-3 py-1 text-sm font-medium">
            Private admin area
          </div>

          <h1 className="mb-4 text-5xl font-semibold">
            Admin Dashboard
          </h1>

          <p className="text-lg leading-8 text-[#555]">
            Manage listings and review enquiries submitted through ModRent.
          </p>
        </div>

        {/* LISTINGS */}

        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-semibold">
            Listings
          </h2>

          <div className="space-y-5">

            {listings.length === 0 ? (
              <div className="rounded-3xl border border-[#e3ddd2] bg-white p-8">
                No listings found.
              </div>
            ) : (
              listings.map((listing) => (
                <div
                  key={listing.id}
                  className="rounded-3xl border border-[#e3ddd2] bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex gap-5">

                      {listing.banner_image_url ? (
                        <img
                          src={listing.banner_image_url}
                          alt={listing.title}
                          className="h-28 w-36 rounded-2xl object-cover"
                        />
                      ) : (
                        <div className="flex h-28 w-36 items-center justify-center rounded-2xl bg-[#ebe7df] text-sm text-[#777]">
                          No image
                        </div>
                      )}

                      <div>

                        <div className="mb-2 flex flex-wrap items-center gap-2">

                          <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm font-medium">
                            {listing.status || "active"}
                          </span>

                          <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm font-medium">
                            {listing.town
                              ? `${listing.town}, Co. ${listing.county}`
                              : listing.county}
                          </span>

                        </div>

                        <h3 className="mb-2 text-2xl font-semibold">
                          {listing.title}
                        </h3>

                        <p className="text-lg font-medium">
                          €{listing.rent} per month
                        </p>

                      </div>

                    </div>

                    <div className="flex flex-wrap gap-3">

                      {listing.status !== "hidden" ? (
                        <button
                          onClick={() => hideListing(listing.id)}
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#1f1f1f",
                            padding: "12px 18px",
                            borderRadius: "12px",
                            border: "1px solid #d7d2c8",
                            fontWeight: 600,
                          }}
                        >
                          Hide
                        </button>
                      ) : (
                        <button
                          onClick={() => activateListing(listing.id)}
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#1f1f1f",
                            padding: "12px 18px",
                            borderRadius: "12px",
                            border: "1px solid #d7d2c8",
                            fontWeight: 600,
                          }}
                        >
                          Activate
                        </button>
                      )}

                      <button
                        onClick={() => deleteListing(listing.id)}
                        style={{
                          backgroundColor: "#1f1f1f",
                          color: "#ffffff",
                          padding: "12px 18px",
                          borderRadius: "12px",
                          fontWeight: 600,
                        }}
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                </div>
              ))
            )}

          </div>
        </div>

        {/* MESSAGES */}

        <div>
          <h2 className="mb-6 text-3xl font-semibold">
            Enquiries
          </h2>

          <div className="space-y-5">

            {messages.length === 0 ? (
              <div className="rounded-3xl border border-[#e3ddd2] bg-white p-8">
                No enquiries received yet.
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className="rounded-3xl border border-[#e3ddd2] bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm font-medium">
                      Listing #{message.listing_id}
                    </span>

                    <span className="text-sm text-[#666]">
                      {new Date(message.created_at).toLocaleDateString(
                        "en-IE",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </span>

                  </div>

                  <p className="mb-4 font-medium">
                    From: {message.sender_email}
                  </p>

                  <p className="whitespace-pre-line leading-7 text-[#555]">
                    {message.message}
                  </p>

                </div>
              ))
            )}

          </div>
        </div>

      </section>
    </main>
  );
}