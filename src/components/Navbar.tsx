import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  dict: {
    start:string;
    workExperience: string;
    projects: string;
    aboutMe: string;
  };
  lang: string;
};

const Navbar = ({ dict, lang }: Props) => {
  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] md:w-auto">
      <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-4 px-4 py-2 md:px-5 md:py-2.5 rounded-lg bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-xs md:text-sm font-medium text-zinc-400 shadow-xl shadow-black/50 w-full">
      <Link
          href={`/${lang}#hero`}
          className="hover:text-white hover:bg-zinc-800 px-3 py-1 rounded transition-all"
        >
          {dict.start}
        </Link>
      <Link
          href={`/${lang}#experience`}
          className="hover:text-white hover:bg-zinc-800 px-3 py-1 rounded transition-all"
        >
          {dict.workExperience}
        </Link>
        <Link
          href={`/${lang}#projects`}
          className="hover:text-white hover:bg-zinc-800 px-3 py-1 rounded transition-all"
        >
          {dict.projects}
        </Link>
        <Link
          href={`/${lang}#about-me`}
          className="hover:text-white hover:bg-zinc-800 px-3 py-1 rounded transition-all"
        >
          {dict.aboutMe}
        </Link>
        <span className="w-px h-4 bg-zinc-800" />
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Navbar;
