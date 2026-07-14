import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.modrent.ie";

  const staticPages = [
    "",
    "/listings",
    "/create",
    "/faq",
    "/legal",
    "/terms",
    "/privacy",
    "/contact",
    "/can-i-rent-out-a-log-cabin-in-ireland",
    "/rent-a-room-relief-modular-units-ireland",
    "/how-to-earn-income-from-a-garden-cabin-ireland",
    "/are-modular-units-exempt-from-planning-ireland",
    "/where-to-advertise-a-log-cabin-rental-ireland",
    "/modular-home-rental-ireland",
    "/garden-cabins-to-rent-ireland",
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const { data: listings, error } = await supabase
    .from("listings")
    .select("id, status")
    .or("status.eq.active,status.is.null");

  if (error) {
    console.error("Could not load listings for sitemap:", error);
  }

  const listingRoutes: MetadataRoute.Sitemap =
    listings?.map((listing) => ({
      url: `${baseUrl}/listings/${listing.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    })) || [];

  return [...staticRoutes, ...listingRoutes];
}