import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle } from "lucide-react";
import heroFloor from "@/assets/hero-floor.jpg";
import sprayWalls from "@/assets/spray-walls.jpg";
import roofCoating from "@/assets/roof-coating.jpg";
import epoxyFloor from "@/assets/epoxy-floor.jpg";

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  applications: string[];
  whyUs: string;
  image: StaticImageData | string;
  reverse?: boolean;
}

function ServiceSection({
  id,
  title,
  description,
  benefits,
  applications,
  whyUs,
  image,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${reverse ? "bg-secondary" : "bg-background"}`}
    >
      <div className="container-custom">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Section */}
          <div className={reverse ? "lg:order-2" : ""}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">
                Key Benefits
              </h4>
              <ul className="space-y-2">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">
                Ideal For
              </h4>
              <div className="flex flex-wrap gap-2">
                {applications.map((app) => (
                  <span
                    key={app}
                    className="inline-block px-3 py-1 bg-gold/10 text-foreground text-sm rounded-full"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-charcoal/5 border-l-4 border-gold rounded-r-lg mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-2">
                Why Lustra?
              </h4>
              <p className="text-sm text-muted-foreground">{whyUs}</p>
            </div>

            <Button variant="gold" size="lg" asChild>
              <Link href="/contact">Get a Quote for {title}</Link>
            </Button>
          </div>

          {/* Image Section */}
          <div className={reverse ? "lg:order-1" : ""}>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elevated relative">
              <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    id: "marble-floors",
    title: "Marble-Look Floors",
    description:
      "Experience the timeless elegance of marble without the high cost and maintenance. Our marble-look epoxy floors deliver stunning veined patterns and a flawless high-gloss finish that transforms any space into a showcase of luxury.",
    benefits: [
      "Cost-effective alternative to natural marble",
      "Seamless, joint-free installation",
      "Highly durable and scratch-resistant",
      "Easy to clean and maintain",
      "Customizable patterns and colors",
    ],
    applications: ["Homes", "Offices", "Hotels", "Showrooms", "Retail Spaces"],
    whyUs:
      "Our skilled artisans create authentic marble veining patterns using advanced epoxy techniques, ensuring each floor is a unique work of art with unmatched durability.",
    image: heroFloor,
  },
  {
    id: "epoxy-resin",
    title: "Epoxy & Resin Floors",
    description:
      "Make a bold statement with our trending metallic and resin floors. From swirling 3D effects to TikTok-worthy metallic finishes, we create floors that are as unique as your vision. Perfect for those who want their space to stand out.",
    benefits: [
      "Stunning metallic and 3D effects",
      "UV-stable and fade-resistant",
      "Chemical and stain resistant",
      "Seamless hygienic surface",
      "Endless color combinations",
    ],
    applications: ["Garages", "Warehouses", "Restaurants", "Gyms", "Commercial Spaces"],
    whyUs:
      "We specialize in the latest viral floor trends, using premium metallic pigments and cutting-edge techniques to create show-stopping floors that go viral for all the right reasons.",
    image: epoxyFloor,
  },
  {
    id: "spray-coatings",
    title: "Air-Spray Walls & Pavements",
    description:
      "Achieve flawless, professional finishes on walls, ceilings, and pavements with our precision air-spray coating technology. From textured to smooth finishes, we deliver consistent, high-quality results across any surface.",
    benefits: [
      "Uniform, streak-free application",
      "Faster completion than traditional methods",
      "Professional factory-like finish",
      "Wide range of textures available",
      "Ideal for large surface areas",
    ],
    applications: ["Interior Walls", "Exterior Facades", "Driveways", "Pavements", "Industrial Buildings"],
    whyUs:
      "Our advanced spray equipment and trained technicians ensure even coverage and superior adhesion, delivering finishes that look impeccable and last for years.",
    image: sprayWalls,
  },
  {
    id: "roof-waterproofing",
    title: "Rooftop Waterproofing & Heat-Reflective Coatings",
    description:
      "Protect your property from water damage and reduce cooling costs with our professional roof coatings. Our waterproofing solutions seal cracks and joints while our heat-reflective coatings keep interiors cooler and extend roof life.",
    benefits: [
      "Complete waterproof protection",
      "Reflects heat and reduces energy costs",
      "Extends roof lifespan significantly",
      "Prevents cracks and leaks",
      "Suitable for all roof types",
    ],
    applications: ["Commercial Buildings", "Industrial Facilities", "Residential Homes", "Shopping Centers", "Warehouses"],
    whyUs:
      "We use industrial-grade waterproofing membranes and reflective coatings tested for South African conditions, backed by comprehensive warranties for your peace of mind.",
    image: roofCoating,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-charcoal py-16 md:py-24">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Premium Services"
            description="From stunning floors to protective coatings, we deliver comprehensive surface solutions for residential and commercial properties across South Africa."
            light={true}
          />
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 bg-gold/10 text-gold border border-gold/30 rounded-full text-sm font-medium hover:bg-gold hover:text-charcoal-dark transition-colors duration-300"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          {...service}
          reverse={index % 2 === 1}
        />
      ))}

      {/* CTA Section */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Need Multiple Services?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            We offer comprehensive packages for complete property transformations. Contact us for a custom quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+27680652679">Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
