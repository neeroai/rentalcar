import type { MetadataRoute } from "next";

import { vehicles } from "@/data/mock";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rentatelo-demo.vercel.app";

const staticRoutes = [
  "",
  "/search",
  "/how-it-works",
  "/account/trips",
  "/account/messages",
  "/account/wishlist",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));

  const vehicleEntries: MetadataRoute.Sitemap = vehicles.map((vehicle) => ({
    url: `${siteUrl}/vehicle/${vehicle.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...vehicleEntries];
}
