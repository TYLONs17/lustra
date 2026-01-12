import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "./HeroMotion";
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full"> 
            <Image
                src="/assets/hero-floor.jpg"
                alt="Luxury marble floor in modern interior"
                fill
                className="object-cover"
                priority // because it's a Hero image (loads faster)
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center px-6 pt-16">
        <FadeUp delay={0}>
          <span className="inline-block text-yellow-500 text-sm uppercase tracking-[0.3em] mb-6">
            Lustra Floors & Coatings
          </span>
        </FadeUp>

        <FadeUp delay={0.15}>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            Premium Floors.
            <br />
            <span className="text-yellow-500">Flawless Coatings.</span>
            <br />
            Lasting Protection.
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
            Transform your residential and commercial spaces with luxury marble-look floors, stunning epoxy finishes, professional wall coatings, and protective rooftop solutions.
          </p>
        </FadeUp>

        <FadeUp delay={0.45}>
            <div className="flex flex-col sm:flex-row justify-center gap-6">

                {/* Primary CTA */}
                <Link
                href="/contact"
                className="
                    relative bg-yellow-500 text-black text-lg px-12 py-4 font-semibold rounded-md
                    shadow-[0_0_30px_rgba(234,179,8,0.35)]
                    hover:shadow-[0_0_45px_rgba(234,179,8,0.55)]
                    hover:-translate-y-1 transition-all duration-300
                "
                >
                Get a Free Quote
                </Link>

                {/* Secondary CTA with arrow */}
                <Link
                href="/contact"
                className="
                    group relative flex items-center justify-center gap-2
                    border border-yellow-500 text-lg text-yellow-500 px-12 py-4 font-semibold rounded-md
                    hover:bg-yellow-500/10 hover:-translate-y-1 transition-all duration-300
                    group-hover:text-yellow-400

                "
                >

                    <ChevronDown
                    size={28}               
                    strokeWidth={3} 
                    className=" animate-arrow-float group-hover:translate-y-1 transition"
                    />

                    Book Site Inspection
                
                </Link>

            </div>
        </FadeUp>


      </div>

      {/* Scroll Indicator */}
      <FadeUp delay={0.8}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-yellow-500 animate-bounce" />
        </div>
      </FadeUp>
    </section>
  );
}




