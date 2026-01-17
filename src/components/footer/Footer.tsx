import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const QUICK_LINKS = ["Home", "Services", "About", "Gallery", "Contact"] as const;
const SERVICES = ["Marble-Look Floors", "Epoxy & Resin Floors", "Air-Spray Coatings", "Roof Waterproofing"] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold tracking-wide">LUSTRA</span>
              <span className="block text-xs text-gold tracking-[0.2em] uppercase">Floors & Coatings</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium surface finishing solutions for homes and businesses across South Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="tel:+27000000000"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  +27 (0) 68 065 2679
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href="mailto:info@lustrafloors.co.za"
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  info@lustrafloors.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Nationwide Service, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Lustra Floors & Coatings (Pty) Ltd. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Premium Floors. Flawless Coatings. Lasting Protection.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
