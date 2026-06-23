import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/dictionaries/get-dictionary";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";

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
