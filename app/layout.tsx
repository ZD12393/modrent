import "./globals.css";

export const metadata = {
  title: "ModRent",
  description: "Modular and garden unit rentals in Ireland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold">
              ModRent
            </a>

            <nav className="flex gap-6">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/listings" className="hover:underline">
                Browse Rentals
              </a>
              <a href="/create" className="hover:underline">
                List Your Unit
              </a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}