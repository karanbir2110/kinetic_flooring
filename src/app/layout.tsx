import type { Metadata, Viewport } from "next";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const SITE_TITLE =
  "Spandan — Kinetic Flooring That Turns Footsteps Into Energy";
const SITE_DESC =
  "Spandan is a modular kinetic flooring platform that converts everyday foot traffic into usable electrical energy — and turns the floor into a distributed sensing and energy-monitoring layer for high-traffic spaces.";

export const metadata: Metadata = {
  metadataBase: new URL("https://Spandan-kinetic.example"),
  title: SITE_TITLE,
  description: SITE_DESC,
  applicationName: "Spandan Kinetic Flooring",
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
  authors: [{ name: "Spandan Kinetic Energy Systems" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    type: "website",
    siteName: "Spandan",
    images: [
      {
        url: "/assets/hero-floor.jpgg",
        width: 1024,
        height: 886,
        alt: "Kinetic hexagonal flooring in a high-traffic concourse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAF0EA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="1" suppressHydrationWarning>
      <head>
        {/* Apply the saved color scheme before first paint (prevents a flash). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("spandan-theme");if(t==="1"||t==="2"||t==="3"){document.documentElement.setAttribute("data-theme",t);var m={"1":"#FAF0EA","2":"#F5EEDD","3":"#3E000C"};var x=document.querySelector('meta[name="theme-color"]');if(x)x.setAttribute("content",m[t])}}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Cinzel:wght@500;600&family=Mukta:wght@400;500;600&family=Tiro+Devanagari+Sanskrit&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
