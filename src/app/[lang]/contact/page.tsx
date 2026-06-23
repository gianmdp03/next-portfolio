// Force recompilation
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/dictionaries/get-dictionary";
import ContactForm from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
