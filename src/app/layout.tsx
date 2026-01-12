import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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

export const metadata = {
  title: "Lustra Floors & Coatings",
  description: "Premium Floors. Flawless Coatings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 1. We apply the font variables 
          2. We set 'font-sans' (Inter) as the default for the whole body 
      */}
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}