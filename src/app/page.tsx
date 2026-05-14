import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  let linkedinLink = process.env.LINKEDIN_LINK
    ? process.env.LINKEDIN_LINK
    : "#";
  let githubLink = process.env.GITHUB_LINK ? process.env.GITHUB_LINK : "#";
  let email = process.env.EMAIL ? process.env.EMAIL : "#";
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-36 flex flex-col gap-28">
        <Hero
          linkedinLink={linkedinLink}
          githubLink={githubLink}
          email={email}
        />
        <WorkExperience />
        <Projects />
        <AboutMe />
      </main>
      <Footer linkedinLink={linkedinLink} githubLink={githubLink} />
    </>
  );
}
