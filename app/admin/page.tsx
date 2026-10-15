
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";

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

type EnquirySummary = {
  count: number;
  latest: string | null;
};

function formatDate(value: string | null): string {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "—";

  return date.toLocaleDateString("en-IE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getStatus(listing: Listing): string {
  return listing.status || "active";
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const [listings, setListings] = useState<Listing[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [busyListingId, setBusyListingId] = useState<number | null>(null);
  const [error, setError] = useState("");

  const loadData = useCallback(
    async (adminPassword: string) => {
      setLoading(true);
      setError("");

      try {
        const [listingResponse, messageResponse] = await Promise.all([
          fetch("/api/admin/listings", {
            headers: {
              Authorization: `Bearer ${adminPassword}`,
            },
            cache: "no-store",
          }),
          fetch("/api/admin/messages", {
            headers: {
              Authorization: `Bearer ${adminPassword}`,
            },
            cache: "no-store",
          }),
        ]);

        if (!listingResponse.ok || !messageResponse.ok) {
          if (
            listingResponse.status === 401 ||
            listingResponse.status === 403 ||
            messageResponse.status === 401 ||
            messageResponse.status === 403
          ) {
            setAuthenticated(false);
            setError("Admin session failed. Please log in again.");
          } else {
            setError(
              "Could not load the dashboard. Please try refreshing."
            );
          }
          return;
        }

        const listingData = await listingResponse.json();
        const messageData = await messageResponse.json();

        if (!Array.isArray(listingData) || !Array.isArray(messageData)) {
          throw new Error("Unexpected dashboard data.");
        }

        setListings(listingData);
        setMessages(messageData);
        setAuthenticated(true);
      } catch {
        setError(
          "Could not connect to ModRent. Please try again."
        );
      } finally {
        setLoading(false);
      }
    },
    []
  );

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!password.trim()) {
      setError("Please enter the admin password.");
      return;
    }

    await loadData(password);
  }

  async function updateListingStatus(id: number, status: string) {
    setBusyListingId(id);

    try {
      const response = await fetch(
        "/api/admin/listings/update-status",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${password}`,
          },
          body: JSON.stringify({ id, status }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Could not update listing.");
        return;
      }

      if (status === "active" && result.emailSent) {
        alert("Listing approved and confirmation email sent.");
      } else if (
        status === "active" &&
        result.emailSent === false &&
        !result.emailNotRequired
      ) {
        alert(
          result.emailError ||
            "Listing approved, but the confirmation email could not be sent."
        );
      }

      await loadData(password);
    } catch {
      alert("Could not update listing. Please try again.");
    } finally {
      setBusyListingId(null);
    }
  }

  async function deleteListing(id: number) {
    const confirmed = window.confirm(
      "Delete this listing permanently?"
    );

    if (!confirmed) return;

    setBusyListingId(id);

    try {
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

      await loadData(password);
    } catch {
      alert("Could not delete listing. Please try again.");
    } finally {
      setBusyListingId(null);
    }
  }

  const enquiriesByListing = useMemo(() => {
    const summaries = new Map<number, EnquirySummary>();

    for (const message of messages) {
      const existing = summaries.get(message.listing_id) || {
        count: 0,
        latest: null,
      };

      existing.count += 1;

      if (
        !existing.latest ||
        new Date(message.created_at).getTime() >
          new Date(existing.latest).getTime()
      ) {
        existing.latest = message.created_at;
      }

      summaries.set(message.listing_id, existing);
    }

    return summaries;
  }, [messages]);

  const pendingListings = listings.filter(
    (listing) => listing.status === "pending"
  );

  const activeListings = listings.filter(
    (listing) =>
      listing.status === "active" || listing.status === null
  );

  const hiddenListings = listings.filter(
    (listing) => listing.status === "hidden"
  );

  const listingSummaries = useMemo(() => {
    return listings
      .map((listing) => ({
        listing,
        enquiry:
          enquiriesByListing.get(listing.id) || {
            count: 0,
            latest: null,
          },
      }))
      .sort((a, b) => b.enquiry.count - a.enquiry.count);
  }, [listings, enquiriesByListing]);

  const enquiriesForKnownListings = listingSummaries.reduce(
    (total, item) => total + item.enquiry.count,
    0
  );

  const enquiriesForMissingListings =
    messages.length - enquiriesForKnownListings;

  function ListingCard({
    listing,
    mode,
  }: {
    listing: Listing;
    mode: "pending" | "active" | "hidden";
  }) {
    const image = listing.banner_image_url || listing.image_url;
    const enquiry = enquiriesByListing.get(listing.id) || {
      count: 0,
      latest: null,
    };
    const busy = busyListingId === listing.id;

    return (
      <div className="rounded-3xl border border-[#e3ddd2] bg-white p-5 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr_auto] lg:items-center">
          {image ? (
            <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-[#ebe7df]">
              <Image
                src={image}
                alt={listing.title}
                fill
                sizes="(max-width: 1024px) 100vw, 260px"
                quality={65}
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex h-44 w-full items-center justify-center rounded-2xl bg-[#ebe7df] text-[#777]">
              No image
            </div>
          )}

          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm font-medium">
                {getStatus(listing)}
              </span>

              {listing.unit_type && (
                <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm font-medium">
                  {listing.unit_type}
                </span>
              )}
            </div>

            <h3 className="mb-2 text-2xl font-semibold">
              {listing.title}
            </h3>

            <p className="mb-2">€{listing.rent} per month</p>

            <p className="mb-3 text-[#555]">
              {listing.town
                ? `${listing.town}, Co. ${listing.county}`
                : listing.county}
            </p>

            <p className="line-clamp-2 max-w-2xl text-[#555]">
              {listing.description || "No description provided."}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <div className="rounded-xl bg-[#f3efe7] px-4 py-3">
                <p className="text-xs text-[#666]">
                  Enquiries received
                </p>
                <p className="text-xl font-semibold">
                  {enquiry.count}
                </p>
              </div>

              <div className="rounded-xl bg-[#f3efe7] px-4 py-3">
                <p className="text-xs text-[#666]">
                  Latest enquiry
                </p>
                <p className="text-base font-semibold">
                  {formatDate(enquiry.latest)}
                </p>
              </div>
            </div>

            <a
              href={`/listings/${listing.id}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block font-semibold underline"
            >
              Review full listing
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {mode === "pending" && (
              <button
                type="button"
                disabled={busy}
                onClick={() =>
                  updateListingStatus(listing.id, "active")
                }
                className="text-left font-medium disabled:opacity-50"
              >
                Approve
              </button>
            )}

            {mode !== "hidden" && (
              <button
                type="button"
                disabled={busy}
                onClick={() =>
                  updateListingStatus(listing.id, "hidden")
                }
                className="text-left font-medium disabled:opacity-50"
              >
                Hide
              </button>
            )}

            {mode === "hidden" && (
              <button
                type="button"
                disabled={busy}
                onClick={() =>
                  updateListingStatus(listing.id, "active")
                }
                className="text-left font-medium disabled:opacity-50"
              >
                Restore
              </button>
            )}

            <button
              type="button"
              disabled={busy}
              onClick={() => deleteListing(listing.id)}
              className="text-left font-medium text-red-700 disabled:opacity-50"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
        <section className="mx-auto max-w-md px-6 py-24">
          <div className="rounded-3xl border border-[#e3ddd2] bg-white p-8 shadow-sm">
            <h1 className="mb-4 text-3xl font-semibold">
              Admin Login
            </h1>

            <p className="mb-6 leading-7 text-[#555]">
              Enter the admin password to access the ModRent
              dashboard.
            </p>

            {error && (
              <p className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
                {error}
              </p>
            )}

            <form onSubmit={login} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="current-password"
                className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#1f1f1f] px-6 py-3.5 font-semibold text-white disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Admin Dashboard
            </h1>
            <p className="mt-3 text-[#666]">
              Property listings and enquiry performance
            </p>
          </div>

          <button
            type="button"
            onClick={() => loadData(password)}
            disabled={loading}
            className="rounded-xl border border-[#d8d2c7] bg-white px-5 py-3 font-medium disabled:opacity-50"
          >
            {loading ? "Refreshing..." : "Refresh data"}
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {loading && listings.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-6 shadow-sm">
                <p className="mb-2 text-sm text-[#666]">
                  Total enquiries
                </p>
                <p className="text-4xl font-semibold">
                  {messages.length}
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-6 shadow-sm">
                <p className="mb-2 text-sm text-[#666]">
                  Active properties
                </p>
                <p className="text-4xl font-semibold">
                  {activeListings.length}
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-6 shadow-sm">
                <p className="mb-2 text-sm text-[#666]">
                  Properties with enquiries
                </p>
                <p className="text-4xl font-semibold">
                  {
                    listingSummaries.filter(
                      (item) => item.enquiry.count > 0
                    ).length
                  }
                </p>
              </div>
            </div>

            <section className="mb-14">
              <div className="mb-5">
                <h2 className="text-3xl font-semibold">
                  Enquiry Overview
                </h2>
                <p className="mt-2 text-sm text-[#666]">
                  Enquiries recorded in ModRent, grouped by
                  property. Email delivery is tracked separately
                  in Resend.
                </p>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-[#e3ddd2] bg-white shadow-sm">
                <table className="w-full min-w-[680px] text-left">
                  <thead className="bg-[#f3efe7] text-sm">
                    <tr>
                      <th className="px-5 py-4 font-semibold">
                        Property
                      </th>
                      <th className="px-5 py-4 font-semibold">
                        Status
                      </th>
                      <th className="px-5 py-4 text-right font-semibold">
                        Enquiries
                      </th>
                      <th className="px-5 py-4 font-semibold">
                        Latest enquiry
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {listingSummaries.map(
                      ({ listing, enquiry }) => (
                        <tr
                          key={listing.id}
                          className="border-t border-[#eee9e0]"
                        >
                          <td className="px-5 py-4">
                            <a
                              href={`/listings/${listing.id}`}
                              target="_blank"
                              rel="noreferrer"
                              className="font-semibold hover:underline"
                            >
                              {listing.title}
                            </a>
                            <p className="mt-1 text-xs text-[#777]">
                              Listing #{listing.id}
                            </p>
                          </td>

                          <td className="px-5 py-4">
                            <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm">
                              {getStatus(listing)}
                            </span>
                          </td>

                          <td className="px-5 py-4 text-right text-lg font-semibold">
                            {enquiry.count}
                          </td>

                          <td className="px-5 py-4 text-sm text-[#555]">
                            {formatDate(enquiry.latest)}
                          </td>
                        </tr>
                      )
                    )}

                    {listingSummaries.length === 0 && (
                      <tr>
                        <td
                          colSpan={4}
                          className="px-5 py-8 text-center text-[#666]"
                        >
                          No listings found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {enquiriesForMissingListings > 0 && (
                <p className="mt-3 text-sm text-amber-800">
                  {enquiriesForMissingListings} enquiries
                  belong to listings not returned by the
                  current listings API, possibly deleted
                  properties. They are included in the total.
                </p>
              )}
            </section>

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
          </>
        )}
      </section>
    </main>
  );
}
