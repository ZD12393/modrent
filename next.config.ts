import type { NextConfig } from "next";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

if (!supabaseUrl) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL is not configured");
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: new URL(supabaseUrl).hostname,
        pathname: "/storage/v1/object/public/listing-photos/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;