import { IconType } from "react-icons";
import {
  SiOpenjdk,
  SiSpringboot,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiAngular,
} from "react-icons/si";

type BadgeConfig = {
  name: string;
  icon: IconType;
  colorClass: string;
};

const techBadges: BadgeConfig[] = [
  {
    name: "Java",
    icon: SiOpenjdk,
    colorClass:
      "hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-400 hover:shadow-amber-500/5",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    colorClass:
      "hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400 hover:shadow-emerald-500/5",
  },
  {
    name: "React",
    icon: SiReact,
    colorClass:
      "hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-cyan-500/5",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    colorClass:
      "hover:bg-zinc-800/40 hover:border-zinc-500/50 hover:text-zinc-100 hover:shadow-zinc-500/5",
  },
  {
    name: "Angular",
    icon: SiAngular,
    colorClass:
      "hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400 hover:shadow-red-500/5",
  },
];

export default function TechBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-2">
      {techBadges.map((tech) => {
        const Icon = tech.icon;
        return (
          <div
            key={tech.name}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border bg-zinc-900/60 backdrop-blur-xs border-zinc-800 text-zinc-400 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-xs cursor-default ${tech.colorClass}`}
          >
            <Icon className="w-4 h-4" />
            <span>{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
}
