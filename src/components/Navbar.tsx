import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-4 px-5 py-2.5 rounded-lg bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-sm font-medium text-zinc-400 shadow-xl shadow-black/50">
        <Link
          href="#experiencia"
          className="hover:text-white hover:bg-zinc-800 px-3 py-1 rounded transition-all"
        >
          Experiencia
        </Link>
        <Link
          href="#proyectos"
          className="hover:text-white hover:bg-zinc-800 px-3 py-1 rounded transition-all"
        >
          Proyectos
        </Link>
        <Link
          href="#sobre-mi"
          className="hover:text-white hover:bg-zinc-800 px-3 py-1 rounded transition-all"
        >
          Sobre mí
        </Link>
        <Link
          href="#contacto"
          className="hover:text-white hover:bg-zinc-800 px-3 py-1 rounded transition-all"
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
