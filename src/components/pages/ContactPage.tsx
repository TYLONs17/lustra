"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+27 (0) 68 065 2679", href: "tel:+27680652679" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/27680652679" },
  { icon: Mail, label: "Email", value: "info@lustrafloors.co.za", href: "mailto:info@lustrafloors.co.za" },
  { icon: MapPin, label: "Service Area", value: "Nationwide, South Africa", href: null },
  { icon: Clock, label: "Working Hours", value: "Mon - Fri: 8am - 5pm", href: null },
];

const services = [
  "Marble-Look Floors",
  "Epoxy & Resin Floors",
  "Air-Spray Wall Coatings",
  "Roof Waterproofing",
  "Other",
];

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-charcoal py-16 md:py-24">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's Discuss Your Project"
            description="Ready to transform your space? Contact us for a free quote or book a site inspection. We're here to help bring your vision to life."
            light
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground font-medium hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="mt-8 p-6 bg-charcoal rounded-lg">
                <h4 className="text-lg font-display font-semibold text-primary-foreground mb-3">
                  Prefer a Quick Chat?
                </h4>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  Get instant responses via WhatsApp. We&apos;re quick to reply!
                </p>
                <Button variant="whatsapp" className="w-full" asChild>
                  <a href="https://wa.me/27680652679" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-secondary p-6 md:p-8 rounded-lg">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                        placeholder="John Smith"
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                        placeholder="john@example.com"
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                        placeholder="+27 00 000 0000"
                        maxLength={20}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                      placeholder="Tell us about your project, space size, timeline, and any specific requirements..."
                      maxLength={1000}
                    />
                  </div>

                  <Button type="submit" variant="gold" size="xl" className="w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services, durability, and maintenance."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { q: "How long do epoxy floors last?", a: "With proper care, our epoxy floors can last 15-20 years or more. They're highly durable and resistant to wear, chemicals, and impacts." },
              { q: "Are your floors easy to maintain?", a: "Yes! Our seamless floors are incredibly easy to clean. Regular sweeping and occasional mopping is all that's needed to keep them looking pristine." },
              { q: "How long does installation take?", a: "Installation time varies by project size. Most residential floors take 2-5 days, including curing time. We'll provide an accurate timeline during your consultation." },
              { q: "Do you offer warranties?", a: "Absolutely. We stand behind our work with comprehensive warranties on both materials and workmanship. Specific terms depend on the service provided." },
              { q: "What about waterproofing maintenance?", a: "Our waterproof coatings require minimal maintenance. We recommend annual inspections and can provide maintenance packages for commercial properties." },
              { q: "Do you work outside major cities?", a: "Yes, we provide services nationwide across South Africa. Contact us to discuss your location and project requirements." },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                  {faq.q}
                </h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
