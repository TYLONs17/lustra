export const websiteSchema = {
  "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Lustra Floors & Coatings",
      url: "https://lustrafloorsandcoatings.co.za",
      logo: "https://lustrafloorsandcoatings.co.za/logo.png",
      image: "https://lustrafloorsandcoatings.co.za/og-image.jpg",
      description:
        "Premium epoxy floors, marble-look flooring, wall coatings, and rooftop waterproofing across South Africa.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ZA",
      },
      areaServed: {
        "@type": "Country",
        name: "South Africa",
      },
      sameAs: [
        "https://www.facebook.com/...", // when available
        "https://www.instagram.com/lustrafloorsandcoatings/",
      ],
      serviceOffered: [
        "Epoxy Flooring",
        "Marble-Look Floors",
        "Wall Coatings",
        "Roof Waterproofing",
      ],

      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+27-68-065-2679",
        contactType: "customer service",
        },
        
};
