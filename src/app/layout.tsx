import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_TITLE = "STRIDE — Kinetic Flooring That Turns Footsteps Into Energy";
const SITE_DESC =
  "STRIDE is a modular kinetic flooring platform that converts everyday foot traffic into usable electrical energy — and turns the floor into a distributed sensing and energy-monitoring layer for high-traffic spaces.";

export const metadata: Metadata = {
  metadataBase: new URL("https://stride-kinetic.example"),
  title: SITE_TITLE,
  description: SITE_DESC,
  applicationName: "STRIDE Kinetic Flooring",
  keywords: [
    "kinetic flooring",
    "energy harvesting floor",
    "footfall energy",
    "AFPM generator",
    "smart flooring",
    "energy harvesting tiles",
    "smart building infrastructure",
    "distributed sensing floor",
  ],
  authors: [{ name: "STRIDE Kinetic Energy Systems" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    type: "website",
    siteName: "STRIDE",
    images: [{ url: "/assets/hero-floor.jpg", width: 1024, height: 886, alt: "Kinetic hexagonal flooring in a high-traffic concourse" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
