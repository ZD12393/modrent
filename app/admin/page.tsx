"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Listing = {
  id: number;
  title: string;
  county: string;
  town: string | null;
  unit_type: string | null;
  rent: string;
  status: string | null;
  banner_image_url: string | null;
  image_url: string | null;
  description: string | null;
};

type Message = {
  id: number;
  listing_id: number;
  sender_email: string;
  message: string;
  created_at: string;
};

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const [listings, setListings] = useState<Listing[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

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

  function login(e: React.FormEvent) {
    e.preventDefault();

    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true);
      loadData();
    } else {
      alert("Incorrect password.");
    }
  }

  async function approveListing(id: number) {
    await supabase.from("listings").update({ status: "active" }).eq("id", id);
    loadData();
  }

  async function hideListing(id: number) {
    await supabase.from("listings").update({ status: "hidden" }).eq("id", id);
    loadData();
  }

  async function deleteListing(id: number) {
    await supabase.from("listings").delete().eq("id", id);
    loadData();
  }

  const pendingListings = listings.filter(
    (listing) => listing.status === "pending"
  );

  const activeListings = listings.filter(
    (listing) => listing.status === "active" || listing.status === null
  );

  const hiddenListings = listings.filter(
    (listing) => listing.status === "hidden"
  );

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
        <section className="mx-auto max-w-md px-6 py-24">
          <div className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">
            <h1 className="mb-4 text-3xl font-semibold">Admin Login</h1>

            <p className="mb-6 leading-7 text-[#555]">
              Enter the admin password to access the ModRent dashboard.
            </p>

            <form onSubmit={login} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
              />

              <button
                type="submit"
                style={{
                  backgroundColor: "#1f1f1f",
                  color: "#ffffff",
                  padding: "14px 24px",
                  borderRadius: "12px",
                  fontWeight: 600,
                  width: "100%",
                }}
              >
                Login
              </button>
            </form>
          </div>
        </section>
      </main>
    );
  }

  function ListingCard({
    listing,
    mode,
  }: {
    listing: Listing;
    mode: "pending" | "active" | "hidden";
  }) {
    const image = listing.banner_image_url || listing.image_url;

    return (
      <div className="rounded-3xl border border-[#e3ddd2] bg-white p-5 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr_auto] lg:items-center">
          {image ? (
            <img
              src={image}
              alt={listing.title}
              className="h-44 w-full rounded-2xl object-cover lg:w-[260px]"
            />
          ) : (
            <div className="flex h-44 w-full items-center justify-center rounded-2xl bg-[#ebe7df] text-[#777] lg:w-[260px]">
              No image
            </div>
          )}

          <div>
            <h3 className="mb-2 text-2xl font-semibold">{listing.title}</h3>
            <p className="mb-2">€{listing.rent} per month</p>
            <p className="mb-3 text-[#555]">
              {listing.town
                ? `${listing.town}, Co. ${listing.county}`
                : listing.county}
            </p>

            <a
              href={`/listings/${listing.id}`}
              target="_blank"
              className="font-semibold underline"
            >
              Review full listing
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {mode === "pending" && (
              <button onClick={() => approveListing(listing.id)}>
                Approve
              </button>
            )}

            {mode !== "hidden" && (
              <button onClick={() => hideListing(listing.id)}>Hide</button>
            )}

            {mode === "hidden" && (
              <button onClick={() => approveListing(listing.id)}>Restore</button>
            )}

            <button onClick={() => deleteListing(listing.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="mb-10 text-5xl font-semibold">Admin Dashboard</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-semibold">
                Pending ({pendingListings.length})
              </h2>

              <div className="space-y-5">
                {pendingListings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                    mode="pending"
                  />
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-semibold">
                Active ({activeListings.length})
              </h2>

              <div className="space-y-5">
                {activeListings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    listing={listing}
                    mode="active"
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-3xl font-semibold">
                Enquiries ({messages.length})
              </h2>

              <div className="space-y-5">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className="rounded-3xl border border-[#e3ddd2] bg-white p-6 shadow-sm"
                  >
                    <p className="mb-3 font-medium">
                      From: {message.sender_email}
                    </p>

                    <p className="whitespace-pre-line text-[#555]">
                      {message.message}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </section>
    </main>
  );
}