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
  status: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  bills_included: boolean | null;
  pet_friendly: boolean | null;
};

const siteUrl = "https://www.modrent.ie";

async function getListing(id: string): Promise<Listing | null> {
  const listingId = Number(id);

  if (!listingId) {
    return null;
  }

  const { data, error } = await supabase
    .from("listings")
    .select("*")
    .eq("id", listingId)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  /*
   * Only active listings should be publicly accessible.
   * Older listings with a null status are also treated as active.
   */
  if (data.status !== "active" && data.status !== null) {
    return null;
  }

  return data as Listing;
}

function getLocation(listing: Listing) {
  return listing.town
    ? `${listing.town}, Co. ${listing.county}`
    : `Co. ${listing.county}`;
}

function getListingType(listing: Listing) {
  return listing.unit_type || "modular home";
}

function getSeoTitle(listing: Listing) {
  const location = getLocation(listing);
  const unitType = getListingType(listing);

  return `${unitType} to Rent in ${location} | ModRent`;
}

function getSeoDescription(listing: Listing) {
  const location = getLocation(listing);
  const unitType = getListingType(listing);
  const rent = listing.rent
    ? `Available for €${listing.rent} per month.`
    : "";

  const fallback = `${unitType} to rent in ${location}. ${rent} View photos, rental details and enquire through ModRent.`;

  if (!listing.description) {
    return fallback.slice(0, 160);
  }

  const cleanedDescription = listing.description
    .replace(/\s+/g, " ")
    .trim();

  return `${cleanedDescription.slice(0, 120)} ${rent}`.trim().slice(0, 160);
}

function getImages(listing: Listing) {
  const images = [
    listing.banner_image_url,
    listing.image_url,
    ...(listing.photos || []),
  ].filter((image): image is string => Boolean(image));

  return [...new Set(images)];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const listing = await getListing(resolvedParams.id);

  if (!listing) {
    return {
      title: "Listing Not Found | ModRent",
      description: "This ModRent listing could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = getSeoTitle(listing);
  const description = getSeoDescription(listing);
  const listingUrl = `${siteUrl}/listings/${listing.id}`;

  const image =
    listing.banner_image_url ||
    listing.image_url ||
    listing.photos?.[0] ||
    `${siteUrl}/modular-unit.jpg`;

  return {
    title,
    description,

    alternates: {
      canonical: listingUrl,
    },

    openGraph: {
      title,
      description,
      url: listingUrl,
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
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const listing = await getListing(resolvedParams.id);

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

  const listingUrl = `${siteUrl}/listings/${listing.id}`;
  const location = getLocation(listing);
  const images = getImages(listing);
  const numericRent = Number(
    String(listing.rent).replace(/[^0-9.]/g, "")
  );

  const accommodationSchema = {
    "@context": "https://schema.org",
    "@type": "Residence",
    "@id": `${listingUrl}#residence`,
    url: listingUrl,
    name: listing.title,
    description:
      listing.description ||
      `${getListingType(listing)} available to rent in ${location}.`,
    image: images.length > 0 ? images : [`${siteUrl}/modular-unit.jpg`],

    address: {
      "@type": "PostalAddress",
      ...(listing.town
        ? {
            addressLocality: listing.town,
          }
        : {}),
      addressRegion: listing.county,
      addressCountry: "IE",
    },

    ...(listing.bedrooms !== null
      ? {
          numberOfBedrooms: listing.bedrooms,
        }
      : {}),

    ...(listing.bathrooms !== null
      ? {
          numberOfBathroomsTotal: listing.bathrooms,
        }
      : {}),

    ...(listing.pet_friendly !== null
      ? {
          petsAllowed: listing.pet_friendly,
        }
      : {}),

    offers: {
      "@type": "Offer",
      url: listingUrl,
      priceCurrency: "EUR",
      ...(Number.isFinite(numericRent) && numericRent > 0
        ? {
            price: numericRent,
          }
        : {}),
      availability: "https://schema.org/InStock",
      category: "Monthly rental",

      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "EUR",
        ...(Number.isFinite(numericRent) && numericRent > 0
          ? {
              price: numericRent,
            }
          : {}),
        unitText: "MONTH",
      },

      ...(listing.available_from
        ? {
            validFrom: listing.available_from,
          }
        : {}),
    },

    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Accommodation type",
        value: getListingType(listing),
      },
      {
        "@type": "PropertyValue",
        name: "Bills included",
        value: listing.bills_included ? "Yes" : "No",
      },
      {
        "@type": "PropertyValue",
        name: "Pet friendly",
        value: listing.pet_friendly ? "Yes" : "No",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Modular homes to rent",
        item: `${siteUrl}/listings`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: listing.title,
        item: listingUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(accommodationSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <ListingDetailClient listing={listing} />
    </>
  );
}