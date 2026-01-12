"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string | StaticImageData; // <-- allow StaticImageData
  delay?: number;
}

export function ServiceCard({ title, description, image, delay = 0 }: ServiceCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-primary-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-primary-foreground/70 mb-4 line-clamp-2">
          {description}
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all duration-300"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
