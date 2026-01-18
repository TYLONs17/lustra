import type { Metadata } from "next";

export const baseMetadata: Metadata = { 
  metadataBase: new URL("https://lustrafloorsandcoatings.co.za"),

  title: {
    default: "Lustra Floors & Coatings | Premium Epoxy & Marble-Look Floors",
    template: "%s | Lustra Floors & Coatings",
  },

  description:
    "Lustra Floors & Coatings is a South African specialist in premium epoxy floors, marble-look flooring, wall coatings, and rooftop waterproofing for residential and commercial spaces.",

  keywords: [
    "epoxy",
    "epoxy floors",
    "epoxy floors South Africa",
    "marble look epoxy floors",
    "resin flooring",
    "floor coatings",
    "roof waterproofing",
    "commercial flooring South Africa",
    "luxury epoxy floors",
    "lustra floors and coatings",
    "decorative wall coatings",
    "industrial floor solutions",
    "durable flooring options",
    "custom epoxy designs",
    "flooring South Africa",
    "waterproof roof coatings",
    
    "epoxy flooring South Africa",
    "epoxy floors Johannesburg",
    "marble look floors",
    "floor coatings SA",
    "roof waterproofing South Africa",
    
  ],

  authors: [{ name: "Lustra Floors & Coatings" }],
  creator: "Lustra Floors & Coatings",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://lustrafloorsandcoatings.co.za",
    siteName: "Lustra Floors & Coatings",
    title: "Lustra Floors & Coatings | Premium Surface Solutions",
    description:
      "Luxury epoxy flooring, marble-look floors, wall coatings, and rooftop waterproofing across South Africa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lustra Floors & Coatings – Luxury Epoxy Flooring",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lustra Floors & Coatings",
    description:
      "Premium epoxy floors, marble-look finishes, and waterproofing solutions across South Africa.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};