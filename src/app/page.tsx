import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustBadges } from "@/components/TrustBadges";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ChevronDown } from "lucide-react";
import heroFloor from "@/assets/hero-floor.jpg";
import sprayWalls from "@/assets/spray-walls.jpg";
import roofCoating from "@/assets/roof-coating.jpg";
import epoxyFloor from "@/assets/epoxy-floor.jpg";

const services = [
  {
    title: "Luxury Marble-Look Floors",
    description:
      "Transform your space with stunning marble-effect epoxy floors that combine elegance with durability.",
    image: heroFloor,
  },
  {
    title: "Epoxy & Resin Floors",
    description:
      "Trending metallic and resin floors that create dramatic, one-of-a-kind visual statements.",
    image: epoxyFloor,
  },
  {
    title: "Air-Spray Wall Coatings",
    description:
      "Professional spray-applied coatings for flawless, seamless wall and pavement finishes.",
    image: sprayWalls,
  },
  {
    title: "Rooftop Waterproofing",
    description:
      "Heat-reflective and waterproof roof coatings that protect and extend your roof's lifespan.",
    image: roofCoating,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroFloor}
            alt="Luxury marble floor in modern interior"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/80 via-charcoal-dark/60 to-charcoal-dark/90" />
        </div>

        <div className="relative z-10 container-custom text-center px-4 pt-20">
          <span className="inline-block text-gold text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-6 animate-fade-in">
            Lustra Floors & Coatings
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Premium Floors.
            <br />
            <span className="text-gradient-gold">Flawless Coatings.</span>
            <br />
            Lasting Protection.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-10 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Transform your residential and commercial spaces with luxury marble-look floors, stunning epoxy finishes, professional wall coatings, and protective rooftop solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <Button variant="hero" size="xl" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link href="/contact">Book Site Inspection</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-gold" />
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete Surface Solutions"
            description="From floors to rooftops, we deliver premium finishes that elevate any space. Our expert team combines cutting-edge techniques with quality materials for results that last."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                delay={index * 100}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="gold" size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
