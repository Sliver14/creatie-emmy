import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// Custom Fonts
const erbar = localFont({
  src: [
    { path: "../public/fonts/fonnts.com-ERBAR-W01-LIGHT.ttf", weight: "400" },
    { path: "../public/fonts/fonnts.com-ERBAR-W01-LIGHT.ttf", weight: "700" },
  ],
  variable: "--font-erbar",
  display: "swap",
});

const museo = localFont({
  src: [
    { path: "../public/fonts/Museo700-Regular.otf", weight: "400" },
    { path: "../public/fonts/Museo700-Regular.otf", weight: "600" },
  ],
  variable: "--font-museo",
  display: "swap",
});

// --------------------------------------
// SEO CONFIGURATION
// --------------------------------------
export const metadata: Metadata = {
  title: "Creative Emmy — Branding, Graphics & Logo Design",
  description:
    "Creative Emmy delivers world-class branding, logo design, and graphic design services. Explore premium projects crafted with passion and excellence.",
  keywords: [
    "branding",
    "logo design",
    "graphic design",
    "creative designer",
    "brand identity",
    "UI design",
    "visual design",
    "Creative Emmy",
  ],
  authors: [{ name: "Creative Emmy" }],
  creator: "Creative Emmy",
  publisher: "Creative Emmy",

  // Canonical URL
  alternates: {
    canonical: "https://creativeemmy.com",
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Creative Emmy — Branding, Graphics & Logo Design",
    description:
      "Explore world-class branding, logo design, and graphics created by Creative Emmy.",
    url: "https://creativeemmy.com",
    siteName: "Creative Emmy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://creativeemmy.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Creative Emmy Branding Preview",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Creative Emmy — Branding, Graphics & Logo Design",
    description:
      "Explore premium graphics, branding, and logo design projects crafted by Creative Emmy.",
    images: ["https://creativeemmy.com/og-image.jpg"],
    creator: "@creativeemmy",
  },

  // Favicon
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  metadataBase: new URL("https://creativeemmy.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${erbar.variable} ${museo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
