"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

import heroFloor from "@/assets/hero-floor.jpg";
import sprayWalls from "@/assets/spray-walls.jpg";
import roofCoating from "@/assets/roof-coating.jpg";
import epoxyFloor from "@/assets/epoxy-floor.jpg";

const projects = [
  { title: "Modern Living Room", category: "Marble-Look Floor", image: heroFloor },
  { title: "Luxury Retail Space", category: "Metallic Epoxy Floor", image: epoxyFloor },
  { title: "Commercial Interior", category: "Air-Spray Walls", image: sprayWalls },
  { title: "Industrial Rooftop", category: "Waterproof Coating", image: roofCoating },
  { title: "Executive Office", category: "Marble-Look Floor", image: heroFloor },
  { title: "Showroom Floor", category: "Metallic Epoxy Floor", image: epoxyFloor },
];

const categories = ["All", "Floors", "Walls", "Rooftops"];

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-charcoal py-16 md:py-24">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="Our Work"
            title="Gallery of Excellence"
            description="Browse our portfolio of completed projects. Each installation showcases our commitment to quality craftsmanship and stunning design."
            light
          />
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  category === "All"
                    ? "bg-gold text-charcoal-dark"
                    : "bg-gold/10 text-gold border border-gold/30 hover:bg-gold hover:text-charcoal-dark"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-gold text-xs uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-semibold text-primary-foreground mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              This is a sample of our work. Contact us to see more examples relevant to your project.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Transformations"
            title="Before & After"
            description="See the dramatic difference our services make. From worn surfaces to stunning finishes, we transform spaces completely."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-elevated">
              <Image src={heroFloor} alt="After transformation" fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-gold text-charcoal-dark px-3 py-1 rounded-full text-sm font-semibold">
                After
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-elevated bg-charcoal/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Before image placeholder</p>
              </div>
              <div className="absolute top-4 left-4 bg-charcoal text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Before
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Inspired by What You See?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Let us create something beautiful for your space. Book a site inspection and get your free quote today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/27680652679" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
