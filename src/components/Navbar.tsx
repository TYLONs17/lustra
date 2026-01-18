"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import trasparentLogo from "@/assets/Lustra-LOGO-removebg-preview.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      suppressHydrationWarning
      className="fixed top-0 left-0 right-0 z-50 bg-charcoal-dark/95 backdrop-blur-md border-b border-gold/10"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-col items-center justify-center relative transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="racking-wide text-center w-28 h-32 relative block">
              <Image src={trasparentLogo} alt="Lustra floors and coatings" fill className="object-cover" />
            </span>
            
            {/* <span className="text-lg md:text-xl font-display font-bold text-primary-foreground tracking-wide text-center">
              LUSTRA
            </span>

            <span className="text-[10px] md:text-xs text-gold tracking-[0.2em] uppercase -mt-1 text-center">
              Floors & Coatings
            </span> */}

            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-gold transition-all duration-300 -translate-x-1/2 group-hover:w-full" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    active
                      ? "text-gold"
                      : "text-primary-foreground/80 hover:text-gold"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-gold transition-all duration-300 ${
                      active ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+27680652679"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Call Us</span>
            </a>

            <Button variant="hero" size="sm" asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-charcoal-dark border-t border-gold/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-base font-medium transition-colors ${
                pathname === link.path
                  ? "text-gold"
                  : "text-primary-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Button variant="hero" asChild>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Get a Free Quote
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
