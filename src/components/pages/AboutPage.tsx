import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Target, Eye, Heart, Award } from "lucide-react";
import epoxyFloor from "@/assets/epoxy-floor.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "We never compromise on materials or workmanship. Every project receives our full attention and commitment to perfection.",
  },
  {
    icon: Target,
    title: "Precision Craftsmanship",
    description:
      "Our skilled technicians are trained in the latest techniques and use advanced equipment for flawless results.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We work closely with you to understand your vision and exceed expectations.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "We stay ahead of industry trends, bringing the latest designs and technologies to every project we undertake.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-charcoal py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            eyebrow="About Us"
            title="Transforming Spaces, One Surface at a Time"
            description="Lustra Floors & Coatings is South Africa's trusted partner for premium surface finishing solutions. We combine artistry with durability to create spaces that inspire."
            light
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Built on Passion, Driven by Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Lustra Floors & Coatings was founded with a clear vision: to bring world-class surface finishing to South African homes and businesses. What started as a passion for beautiful floors has grown into a comprehensive surface solutions company serving clients nationwide.
                </p>
                <p>
                  Our team of skilled craftsmen combines years of experience with continuous training in the latest techniques and materials. We take pride in staying ahead of global trends while understanding the unique needs of the South African market.
                </p>
                <p>
                  From luxury residential projects to large-scale commercial installations, we approach every job with the same dedication to quality and attention to detail that has made Lustra a trusted name in the industry.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elevated">
                <Image
                  src={epoxyFloor}
                  alt="Lustra craftsmanship"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-background p-8 md:p-10 rounded-lg shadow-card">
              <span className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Our Mission
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Delivering Premium Finishes That Last
              </h3>
              <p className="text-muted-foreground">
                To provide South African property owners with world-class surface finishing solutions that combine aesthetic excellence with exceptional durability, transforming ordinary spaces into extraordinary showcases of quality and craftsmanship.
              </p>
            </div>
            <div className="bg-background p-8 md:p-10 rounded-lg shadow-card">
              <span className="inline-block text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Our Vision
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Setting the Standard for Surface Excellence
              </h3>
              <p className="text-muted-foreground">
                To be recognized as South Africa&apos;s leading surface finishing company, known for innovation, reliability, and an unwavering commitment to customer satisfaction. We aim to set new standards in the industry while making premium finishes accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Values"
            title="What Sets Us Apart"
            description="These core values guide everything we do, from the first consultation to the final finish."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Let us bring our expertise and passion to your next project. Contact us today for a consultation.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
