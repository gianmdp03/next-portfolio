import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/dictionaries/get-dictionary";
import ContactForm from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  
  const title = isEn
    ? "Contact Me | Gianluca Castorina"
    : "Contacto | Gianluca Castorina";
    
  const description = isEn
    ? "Send me a message to get in touch. Let's work together on your software, API, backend, or frontend projects."
    : "Envíame un mensaje para ponerte en contacto conmigo. Trabajemos juntos en proyectos de software, APIs, backend o frontend.";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://castorina.dev";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${lang}/contact`,
      languages: {
        es: `${siteUrl}/es/contact`,
        en: `${siteUrl}/en/contact`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: isEn ? "en_US" : "es_ES",
      url: `${siteUrl}/${lang}/contact`,
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

export default async function ContactPage({
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

  return (
    <>
      <Navbar dict={dict.navbar} lang={lang} />
      <main className="max-w-3xl mx-auto px-6 pt-36 flex flex-col gap-16 min-h-[calc(100vh-140px)] justify-center">
        <ContactForm dict={dict.contactForm} lang={lang} />
      </main>
      <Footer linkedinLink={linkedinLink} githubLink={githubLink} />
    </>
  );
}
