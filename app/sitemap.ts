import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.modrent.ie";

  const routes = [
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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}