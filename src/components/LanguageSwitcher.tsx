"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  if (!pathname) return null;

  const segments = pathname.split("/");
  const currentLang = segments[1] || "es";

  const toggleLang = (newLang: string) => {
    if (newLang === currentLang) return;
    const newSegments = [...segments];
    newSegments[1] = newLang;
    router.push(newSegments.join("/"));
  };

  return (
    <div className="flex items-center gap-1 bg-zinc-950/60 p-0.5 rounded border border-zinc-800/80 text-[11px] font-mono select-none">
      <button
        onClick={() => toggleLang("es")}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          currentLang === "es"
            ? "bg-zinc-800 text-white font-semibold"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => toggleLang("en")}
        className={`px-1.5 py-0.5 rounded transition-colors ${
          currentLang === "en"
            ? "bg-zinc-800 text-white font-semibold"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        EN
      </button>
    </div>
  );
}
