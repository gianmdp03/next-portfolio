import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
  dict: {
    workExperience: string;
    projects: string;
    aboutMe: string;
  };
};

const Navbar = ({ dict }: Props) => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-4 px-5 py-2.5 rounded-lg bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-sm font-medium text-zinc-400 shadow-xl shadow-black/50">
      <Link
          href="#experiencia"
          className="hover:text-white hover:bg-zinc-800 px-3 py-1 rounded transition-all"
        >
          {dict.workExperience}
        </Link>
        <Link
          href="#proyectos"
          className="hover:text-white hover:bg-zinc-800 px-3 py-1 rounded transition-all"
        >
          {dict.projects}
        </Link>
        <Link
          href="#sobre-mi"
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
