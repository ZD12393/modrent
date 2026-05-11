"use client";

import { useState } from "react";

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

  async function loadData(adminPassword = password) {
    setLoading(true);

    const [listingResponse, messageResponse] = await Promise.all([
      fetch("/api/admin/listings", {
        headers: {
          Authorization: `Bearer ${adminPassword}`,
        },
      }),
      fetch("/api/admin/messages", {
        headers: {
          Authorization: `Bearer ${adminPassword}`,
        },
      }),
    ]);

    if (!listingResponse.ok || !messageResponse.ok) {
      alert("Admin session failed. Please log in again.");
      setAuthenticated(false);
      setLoading(false);
      return;
    }

    const listingData = await listingResponse.json();
    const messageData = await messageResponse.json();

    setListings(listingData || []);
    setMessages(messageData || []);
    setLoading(false);
  }

  function login(e: React.FormEvent) {
    e.preventDefault();

    if (!password.trim()) {
      alert("Please enter the admin password.");
      return;
    }

    setAuthenticated(true);
    loadData(password);
  }

  async function updateListingStatus(id: number, status: string) {
    const response = await fetch("/api/admin/listings/update-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${password}`,
      },
      body: JSON.stringify({ id, status }),
    });

    if (!response.ok) {
      alert("Could not update listing.");
      return;
    }

    loadData();
  }

  async function deleteListing(id: number) {
    const confirmed = confirm("Delete this listing permanently?");

    if (!confirmed) return;

    const response = await fetch("/api/admin/listings/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${password}`,
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      alert("Could not delete listing.");
      return;
    }

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
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm font-medium">
                {listing.status || "active"}
              </span>

              {listing.unit_type && (
                <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm font-medium">
                  {listing.unit_type}
                </span>
              )}
            </div>

            <h3 className="mb-2 text-2xl font-semibold">{listing.title}</h3>

            <p className="mb-2">€{listing.rent} per month</p>

            <p className="mb-3 text-[#555]">
              {listing.town
                ? `${listing.town}, Co. ${listing.county}`
                : listing.county}
            </p>

            <p className="line-clamp-2 max-w-2xl text-[#555]">
              {listing.description || "No description provided."}
            </p>

            <a
              href={`/listings/${listing.id}`}
              target="_blank"
              className="mt-4 inline-block font-semibold underline"
            >
              Review full listing
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {mode === "pending" && (
              <button onClick={() => updateListingStatus(listing.id, "active")}>
                Approve
              </button>
            )}

            {mode !== "hidden" && (
              <button onClick={() => updateListingStatus(listing.id, "hidden")}>
                Hide
              </button>
            )}

            {mode === "hidden" && (
              <button onClick={() => updateListingStatus(listing.id, "active")}>
                Restore
              </button>
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
                {pendingListings.length === 0 ? (
                  <div className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">
                    No pending listings.
                  </div>
                ) : (
                  pendingListings.map((listing) => (
                    <ListingCard
                      key={listing.id}
                      listing={listing}
                      mode="pending"
                    />
                  ))
                )}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-semibold">
                Active ({activeListings.length})
              </h2>

              <div className="space-y-5">
                {activeListings.length === 0 ? (
                  <div className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">
                    No active listings.
                  </div>
                ) : (
                  activeListings.map((listing) => (
                    <ListingCard
                      key={listing.id}
                      listing={listing}
                      mode="active"
                    />
                  ))
                )}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-semibold">
                Hidden ({hiddenListings.length})
              </h2>

              <div className="space-y-5">
                {hiddenListings.length === 0 ? (
                  <div className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">
                    No hidden listings.
                  </div>
                ) : (
                  hiddenListings.map((listing) => (
                    <ListingCard
                      key={listing.id}
                      listing={listing}
                      mode="hidden"
                    />
                  ))
                )}
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-3xl font-semibold">
                Enquiries ({messages.length})
              </h2>

              <div className="space-y-5">
                {messages.length === 0 ? (
                  <div className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">
                    No enquiries yet.
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className="rounded-3xl border border-[#e3ddd2] bg-white p-6 shadow-sm"
                    >
                      <p className="mb-3 font-medium">
                        From: {message.sender_email}
                      </p>

                      <p className="mb-3 text-sm text-[#666]">
                        Listing #{message.listing_id}
                      </p>

                      <p className="whitespace-pre-line text-[#555]">
                        {message.message}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </section>
          </>
        )}
      </section>
    </main>
  );
}