import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { baseMetadata } from "@/SEO/base";
import { websiteSchema } from "@/SEO/jsonld";

export const metadata = {
  ...baseMetadata,
  // Add more default metadata properties here if needed
  // description: "Default description for Lustra Floors & Coatings",
  // keywords: ["epoxy flooring", "marble-look floors", "wall coatings", "waterproofing"],
 
};



// Luxury Heading Font
export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

// Clean Body Font
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth " >
    {/* <html lang="en" className="scroll-smooth " suppressHydrationWarning> */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <body
          className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
        >
          <Providers>
            {/* Vite #root replacement */}
            <div className="app-shell">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>

            {/* Global floating UI */}
            <WhatsAppButton />
          </Providers>
        </body>
      </head>
    </html>
  );
}
