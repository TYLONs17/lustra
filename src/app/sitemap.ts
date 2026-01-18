import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lustrafloorsandcoatings.co.za",
      lastModified: new Date(),
    },
    {
      url: "https://lustrafloorsandcoatings.co.za/services",
      lastModified: new Date(),
    },
    {
      url: "https://lustrafloorsandcoatings.co.za/contact",
      lastModified: new Date(),
    },
    {
      url: "https://lustrafloorsandcoatings.co.za/about",
      lastModified: new Date(),
    },
    {
      url: "https://lustrafloorsandcoatings.co.za/gallery",
      lastModified: new Date(),
    },
  ];
}
