import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-head",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "nidhiabroad — Building careers that belong anywhere",
  description:
    "Guides, coaching, and resources for non-technical professionals breaking into tech and landing international opportunities. By Nidhi Duhan.",
  metadataBase: new URL("https://nidhiabroad.com"),
  openGraph: {
    title: "nidhiabroad",
    description: "Building careers that belong anywhere.",
    url: "https://nidhiabroad.com",
    siteName: "nidhiabroad",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "nidhiabroad",
    description: "Building careers that belong anywhere.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
