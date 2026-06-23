import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/dictionaries/get-dictionary";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  
  const title = isEn
    ? "Gianluca Castorina - Full-Stack Developer Portfolio"
    : "Gianluca Castorina - Portafolio de Desarrollador Full-Stack";
    
  const description = isEn
    ? "Full-Stack Developer from Mar del Plata, Argentina. I specialize in backend development with Spring Boot and database management, and frontend development with Next.js/Angular."
    : "Desarrollador Full-Stack de Mar del Plata, Argentina. Me especializo en desarrollo backend con Spring Boot y gestión de bases de datos, y en el frontend con Next.js/Angular.";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://castorina.dev";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: isEn ? "en_US" : "es_ES",
      url: `${siteUrl}/${lang}`,
      siteName: "Gianluca Castorina Portfolio",
      images: [
        {
          url: "/about-me.png",
          width: 1200,
          height: 630,
          alt: "Gianluca Castorina - Full-Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/about-me.png"],
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  const linkedinLink = process.env.LINKEDIN_LINK || "#";
  const githubLink = process.env.GITHUB_LINK || "#";
  const email = process.env.EMAIL || "#";

  return (
    <>
      <Navbar dict={dict.navbar} lang={lang} />
      <main className="max-w-3xl mx-auto px-6 pt-36 flex flex-col gap-16">
        <Hero
          dict={dict.hero}
          linkedinLink={linkedinLink}
          githubLink={githubLink}
          email={email}
          lang={lang}
        />
        <WorkExperience dict={dict.workExperience} lang={lang} />
        <Projects dict={dict.projects} lang={lang} />
        <AboutMe dict={dict.aboutMe} />
      </main>
      <Footer linkedinLink={linkedinLink} githubLink={githubLink} />
    </>
  );
}
