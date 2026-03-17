import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "nidhiabroad — Your guide to moving, working & living in Europe",
  description:
    "Real, honest guides and resources for Indians navigating Europe — jobs, visas, housing, and everything in between. By someone who actually did it.",
  metadataBase: new URL("https://nidhiabroad.com"),
  openGraph: {
    title: "nidhiabroad",
    description: "Your guide to moving, working & living in Europe",
    url: "https://nidhiabroad.com",
    siteName: "nidhiabroad",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "nidhiabroad",
    description: "Your guide to moving, working & living in Europe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
