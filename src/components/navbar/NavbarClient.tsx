"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function NavbarClient() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top bar */}
      <div className="flex h-16 md:h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-lg md:text-xl font-semibold tracking-wide text-white">
            LUSTRA
          </span>
          <span className="text-[10px] md:text-xs tracking-widest text-yellow-500 -mt-1">
            FLOORS & COATINGS
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={cn(
                    "group text-gray-300 transition-colors",
                    isActive && "text-yellow-500"
                  )}
                >
                  {link.name}

                  {/* underline animation */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-yellow-500 transition-transform duration-300",
                      "group-hover:scale-x-100",
                      isActive && "scale-x-100"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+27000000000"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-500 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>

          <Link
            href="/contact"
            className={cn(
              "rounded-md bg-yellow-500 px-6 py-2 text-sm font-semibold text-black transition-all",
              "shadow-[0_0_25px_rgba(234,179,8,0.35)]",
              "hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(234,179,8,0.55)]"
            )}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-4 py-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block text-base transition-colors",
                    isActive
                      ? "text-yellow-500"
                      : "text-gray-300 hover:text-yellow-500"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-md bg-yellow-500 py-3 text-center font-semibold text-black"
          >
            Get a Free Quote
          </Link>
        </ul>
      </div>
    </>
  );
}
