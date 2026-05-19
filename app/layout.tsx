import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "ModRent",
  description:
    "Irish rental marketplace for modular homes, garden units and backyard studios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#f8f7f4] text-[#111827]">
        <header className="border-b border-[#d6d3cc] bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-6">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-[#111827]"
            >
              ModRent
            </Link>

            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
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

              <Link
                href="/contact"
                className="text-[#111827] transition hover:text-[#4b5563]"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-20 border-t border-[#d6d3cc] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
              <div className="max-w-xl">
                <h2 className="mb-4 text-2xl font-bold text-[#111827]">
                  ModRent
                </h2>

                <p className="mb-4 text-base leading-7 text-[#4b5563]">
                  ModRent is a specialist Irish rental marketplace focused on
                  modular homes, garden cabins, detached studios and standalone
                  rental spaces.
                </p>

                <div className="space-y-4 text-sm leading-6 text-[#6b7280]">
                  <p>
                    ModRent provides a listing platform only and does not
                    provide legal, tax, planning or building compliance advice.
                    Property owners remain responsible for ensuring compliance
                    with applicable laws, regulations and safety requirements.
                  </p>

                  <p>
                    Need to edit or remove your listing? Please contact
                    hello@modrent.ie using the same email address used when
                    submitting the listing and include the listing title or
                    location details.
                  </p>
                </div>

                <SubscribeForm />
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

                  <Link
                    href="/terms"
                    className="text-[#4b5563] transition hover:text-[#111827]"
                  >
                    Terms of Use
                  </Link>

                  <Link
                    href="/privacy"
                    className="text-[#4b5563] transition hover:text-[#111827]"
                  >
                    Privacy Policy
                  </Link>

                  <Link
                    href="/contact"
                    className="text-[#4b5563] transition hover:text-[#111827]"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#111827]">
                  Owner resources
                </h3>

                <div className="flex flex-col gap-3 text-sm leading-6">
                  <Link
                    href="/can-i-rent-out-a-log-cabin-in-ireland"
                    className="text-[#4b5563] transition hover:text-[#111827]"
                  >
                    Can I rent out a log cabin in Ireland?
                  </Link>

                  <Link
                    href="/rent-a-room-relief-modular-units-ireland"
                    className="text-[#4b5563] transition hover:text-[#111827]"
                  >
                    Rent-a-Room Relief and modular units
                  </Link>

                  <Link
                    href="/how-to-earn-income-from-a-garden-cabin-ireland"
                    className="text-[#4b5563] transition hover:text-[#111827]"
                  >
                    How to earn income from a garden cabin
                  </Link>

                  <Link
                    href="/create"
                    className="mt-2 inline-block font-semibold text-[#244e3b] underline underline-offset-4"
                  >
                    List your property
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