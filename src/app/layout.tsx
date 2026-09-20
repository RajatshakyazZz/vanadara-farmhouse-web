import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#121E17",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://varanadah.com"),
  title: `${siteConfig.brand.name} ${siteConfig.brand.subName} | ${siteConfig.brand.tagline}`,
  description:
    "A peaceful boutique countryside farmhouse retreat surrounded by mountain views, open skies and the signature expansive verandah. Reconnect with nature and quiet luxury.",
  keywords: [
    "Varanadah Farmstay",
    "Luxury Farmstay",
    "Countryside Farmhouse",
    "Verandah Living",
    "Mountain Retreat",
    "Boutique Farmhouse Stay",
    "Mindful Travel",
    "Western Ghats Stay",
  ],
  authors: [{ name: "Varanadah" }],
  creator: "Varanadah The Farmstay",
  openGraph: {
    title: `${siteConfig.brand.name} ${siteConfig.brand.subName} | ${siteConfig.brand.heroHeading}`,
    description:
      "A peaceful countryside retreat where the rustic beauty of the countryside meets modern comfort. Large open verandah, mountain views, and slow living.",
    url: "https://varanadah.com",
    siteName: "Varanadah The Farmstay",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Varanadah Farmstay L-shaped architecture and verandah overlooking mountains",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} | ${siteConfig.brand.subName}`,
    description: "Breath. Unwind. Rejoice. Luxury countryside farmhouse retreat.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FCFAF7] text-[#241B16] font-sans selection:bg-[#BD5B3E] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
