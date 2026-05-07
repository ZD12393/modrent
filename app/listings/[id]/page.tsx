"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
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
};

export default function ListingDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

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
        setSelectedImage(
          data.banner_image_url || data.image_url || data.photos?.[0] || ""
        );
      }

      setLoading(false);
    }

    if (id) {
      loadListing();
    }
  }, [id]);

  const galleryImages = useMemo(() => {
    if (!listing) return [];

    const images = [
      listing.banner_image_url,
      listing.image_url,
      ...(listing.photos || []),
    ].filter(Boolean) as string[];

    return Array.from(new Set(images));
  }, [listing]);

  const formattedAvailableFrom = useMemo(() => {
    if (!listing?.available_from) return "Not specified";

    return new Date(listing.available_from).toLocaleDateString("en-IE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }, [listing]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!listing) return;

    setSending(true);

    const { error } = await supabase.from("messages").insert([
      {
        listing_id: listing.id,
        sender_email: senderEmail,
        message,
      },
    ]);

    if (error) {
      alert(`There was a problem sending the message: ${error.message}`);
      setSending(false);
      return;
    }

    alert("Message sent.");
    setSenderEmail("");
    setMessage("");
    setShowForm(false);
    setSending(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p>Loading listing...</p>
        </section>
      </main>
    );
  }

  if (!listing) {
    return (
      <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h1 className="mb-4 text-4xl font-semibold">Listing not found</h1>

          <a
            href="/listings"
            style={{
              color: "#1f1f1f",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
          >
            Back to listings
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <a
          href="/listings"
          style={{
            color: "#1f1f1f",
            display: "inline-block",
            fontWeight: 600,
            marginBottom: "32px",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          Back to listings
        </a>

        <div className="overflow-hidden rounded-[32px] border border-[#e3ddd2] bg-white shadow-sm">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt={listing.title}
              className="h-[460px] w-full object-cover"
            />
          ) : (
            <div className="flex h-[460px] w-full items-center justify-center bg-[#ebe7df] text-[#777]">
              No image added
            </div>
          )}

          {galleryImages.length > 1 && (
            <div className="grid grid-cols-3 gap-3 border-b border-[#e3ddd2] bg-[#fbfaf7] p-4 sm:grid-cols-5">
              {galleryImages.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-2xl border bg-white ${
                    selectedImage === image
                      ? "border-black"
                      : "border-[#e3ddd2]"
                  }`}
                >
                  <img
                    src={image}
                    alt="Listing gallery image"
                    className="h-24 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="p-8 md:p-10">
            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {listing.unit_type && (
                    <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm font-medium">
                      {listing.unit_type}
                    </span>
                  )}

                  <span className="rounded-full bg-[#f3efe7] px-3 py-1 text-sm font-medium">
                    {listing.town
                      ? `${listing.town}, Co. ${listing.county}`
                      : listing.county}
                  </span>
                </div>

                <h1 className="mb-3 text-4xl font-semibold leading-tight">
                  {listing.title}
                </h1>
              </div>

              <div className="rounded-3xl border border-[#e3ddd2] bg-[#fbfaf7] p-6 md:min-w-[220px] md:text-right">
                <p className="text-3xl font-semibold">
                  €{listing.rent || "POA"}
                </p>

                {listing.rent && (
                  <p className="text-sm text-[#666]">per month</p>
                )}
              </div>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-[#e3ddd2] bg-[#fbfaf7] p-5">
                <p className="mb-1 text-sm text-[#666]">Unit type</p>
                <p className="font-semibold">
                  {listing.unit_type || "Not specified"}
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-[#fbfaf7] p-5">
                <p className="mb-1 text-sm text-[#666]">Location</p>
                <p className="font-semibold">
                  {listing.town
                    ? `${listing.town}, Co. ${listing.county}`
                    : listing.county}
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-[#fbfaf7] p-5">
                <p className="mb-1 text-sm text-[#666]">Available from</p>
                <p className="font-semibold">{formattedAvailableFrom}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-semibold">Description</h2>

              <p className="whitespace-pre-line leading-8 text-[#555]">
                {listing.description || "No description provided."}
              </p>
            </div>

            <div className="mb-8 rounded-3xl border border-[#e3ddd2] bg-[#fbfaf7] p-6">
              <h2 className="mb-3 text-2xl font-semibold">
                Important information
              </h2>

              <ul className="space-y-2 leading-7 text-[#555]">
                <li>
                  Rent-a-Room treatment depends on current Irish rules and owner
                  eligibility.
                </li>
                <li>
                  Owners are responsible for planning, safety, insurance and
                  compliance.
                </li>
                <li>
                  ModRent is a listing platform and does not provide legal, tax,
                  planning or building compliance advice.
                </li>
              </ul>
            </div>

            {!showForm && (
              <button
                type="button"
                onClick={() => setShowForm(true)}
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
              </button>
            )}

            {showForm && (
              <form
                onSubmit={sendMessage}
                className="mt-6 space-y-4 rounded-3xl border border-[#e3ddd2] bg-[#f6f4ef] p-6"
              >
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your email
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="you@example.ie"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>

                  <textarea
                    required
                    placeholder="Write your message to the owner"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="h-32 w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    disabled={sending}
                    style={{
                      backgroundColor: "#1f1f1f",
                      color: "#ffffff",
                      padding: "14px 24px",
                      borderRadius: "12px",
                      display: "inline-block",
                      fontWeight: 600,
                      opacity: sending ? 0.6 : 1,
                    }}
                  >
                    {sending ? "Sending..." : "Send message"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#1f1f1f",
                      padding: "14px 24px",
                      borderRadius: "12px",
                      display: "inline-block",
                      fontWeight: 600,
                      border: "1px solid #d7d2c8",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}