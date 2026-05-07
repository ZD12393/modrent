import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import ListingDetailClient from "./ListingDetailClient";

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

async function getListing(id: string): Promise<Listing | null> {
  const { data, error } = await supabase
    .from("listings")
    .select("*")
    .eq("id", Number(id))
    .or("status.eq.active,status.is.null")
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const listing = await getListing(params.id);

  if (!listing) {
    return {
      title: "Listing Not Found",
      description: "This ModRent listing could not be found.",
    };
  }

  const location = listing.town
    ? `${listing.town}, Co. ${listing.county}`
    : listing.county;

  const title = `${listing.title} | ModRent`;

  const description =
    listing.description?.slice(0, 150) ||
    `Browse this ${listing.unit_type || "modular rental"} in ${location} on ModRent.`;

  const image =
    listing.banner_image_url || listing.image_url || listing.photos?.[0] || "/modular-unit.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://modrent.vercel.app/listings/${listing.id}`,
      siteName: "ModRent",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: listing.title,
        },
      ],
      locale: "en_IE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ListingPage({
  params,
}: {
  params: { id: string };
}) {
  const listing = await getListing(params.id);

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

  return <ListingDetailClient listing={listing} />;
}