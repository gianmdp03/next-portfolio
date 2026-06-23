import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://gianlucacastorina.vercel.app";

  const locales = ["es", "en"];
  const routes = ["", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  // Add baseline URL
  entries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1.0,
  });

  // Add localized routes
  locales.forEach((locale) => {
    routes.forEach((route) => {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
      });
    });
  });

  return entries;
}
