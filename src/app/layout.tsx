import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOANA | Sustainable Cycling Tour Yogyakarta",
  description:
    "Explore Jogja in an authentic and mindful way. Village cycling tours, local culture, and community-based sustainable tourism in Menoreh & Nanggulan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Mansalva&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-moana-bg text-moana-navy">{children}</body>
    </html>
  );
}
