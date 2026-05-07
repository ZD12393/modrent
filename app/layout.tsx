import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://modrent.vercel.app"),
  title: {
    default: "ModRent | Modular Home & Garden Unit Rentals in Ireland",
    template: "%s | ModRent",
  },
  description:
    "ModRent is an Irish rental marketplace for modular homes, garden units, backyard studios and small standalone rental spaces.",
  keywords: [
    "modular home rental Ireland",
    "garden unit rental Ireland",
    "garden studio to rent",
    "backyard studio rental",
    "modular rental Ireland",
    "self contained garden room Ireland",
    "tiny home rental Ireland",
    "Rent-a-Room Relief Ireland",
    "planning exemption modular home Ireland",
  ],
  openGraph: {
    title: "ModRent | Modular Home & Garden Unit Rentals in Ireland",
    description:
      "Browse and list modular homes, garden units, backyard studios and small standalone rental spaces across Ireland.",
    url: "https://modrent.vercel.app",
    siteName: "ModRent",
    images: [
      {
        url: "/modular-unit.jpg",
        width: 1200,
        height: 630,
        alt: "Modular garden unit listed on ModRent",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ModRent | Modular Home & Garden Unit Rentals in Ireland",
    description:
      "Irish rental marketplace for modular homes, garden units and backyard studios.",
    images: ["/modular-unit.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IE">
      <body className="flex min-h-screen flex-col bg-[#f8f7f4] text-[#111827]">
        <header className="border-b border-[#d6d3cc] bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-[#111827]"
            >
              ModRent
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="/"
                className="text-[#111827] transition hover:text-[#4b5563]"
              >
                Home
              </Link>

              <Link
                href="/listings"
                className="text-[#111827] transition hover:text-[#4b5563]"
              >
                Browse Rentals
              </Link>

              <Link
                href="/create"
                className="text-[#111827] transition hover:text-[#4b5563]"
              >
                List Your Unit
              </Link>

              <Link
                href="/faq"
                className="text-[#111827] transition hover:text-[#4b5563]"
              >
                FAQ
              </Link>

              <Link
                href="/legal"
                className="text-[#111827] transition hover:text-[#4b5563]"
              >
                Legal
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-20 border-t border-[#d6d3cc] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <h2 className="mb-4 text-2xl font-bold text-[#111827]">
                  ModRent
                </h2>

                <p className="mb-4 text-base leading-7 text-[#4b5563]">
                  ModRent is an Irish rental marketplace focused on modular
                  homes, garden units, backyard studios and small standalone
                  rental spaces.
                </p>

                <p className="text-sm leading-6 text-[#6b7280]">
                  ModRent provides a listing platform only and does not provide
                  legal, tax, planning or building compliance advice. Property
                  owners remain responsible for ensuring compliance with
                  applicable laws, regulations and safety requirements.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#111827]">
                  Navigation
                </h3>

                <div className="flex flex-col gap-3 text-sm">
                  <Link
                    href="/"
                    className="text-[#4b5563] transition hover:text-[#111827]"
                  >
                    Home
                  </Link>

                  <Link
                    href="/listings"
                    className="text-[#4b5563] transition hover:text-[#111827]"
                  >
                    Browse Rentals
                  </Link>

                  <Link
                    href="/create"
                    className="text-[#4b5563] transition hover:text-[#111827]"
                  >
                    List Your Unit
                  </Link>

                  <Link
                    href="/faq"
                    className="text-[#4b5563] transition hover:text-[#111827]"
                  >
                    FAQ
                  </Link>

                  <Link
                    href="/legal"
                    className="text-[#4b5563] transition hover:text-[#111827]"
                  >
                    Legal & Compliance
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-[#e5e1da] pt-6">
              <p className="text-sm text-[#6b7280]">
                © {new Date().getFullYear()} ModRent. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}