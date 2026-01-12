"use client";

import { Shield, Award, Users, Clock } from "lucide-react";

interface Badge {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const badges: Badge[] = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Industry-leading materials and workmanship",
  },
  {
    icon: Award,
    title: "Premium Finishes",
    description: "Luxury aesthetics that last for years",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Skilled craftsmen with decades of experience",
  },
  {
    icon: Clock,
    title: "Durable Results",
    description: "Long-lasting protection for your investment",
  },
];

export function TrustBadges() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="text-center p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-4">
                <badge.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-base md:text-lg font-display font-semibold text-primary-foreground mb-2">
                {badge.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
