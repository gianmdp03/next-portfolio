import Link from "next/link";

type Props = {
  githubLink: string;
  linkedinLink: string;
};

const Footer = ({ githubLink, linkedinLink }: Props) => {
  return (
    <footer className="max-w-3xl mx-auto px-6 mt-28 border-t border-zinc-900 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-600">
      <p>// © 2026 Gianluca Castorina.</p>
      <div className="flex gap-4">
        <Link
          href={githubLink}
          className="hover:text-zinc-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link
          href={linkedinLink}
          className="hover:text-zinc-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
