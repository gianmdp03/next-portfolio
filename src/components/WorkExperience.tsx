import { WorkExperienceService } from "@/app/services/WorkExperienceService";
import WorkExperienceItem from "./WorkExperienceItem";

type Props = {
  dict: {
    title: string;
  };
  lang: "es" | "en";
};

const WorkExperience = async ({ dict, lang }: Props) => {
  const workExperience = await WorkExperienceService.get(lang);
  return (
    <section id="experiencia" className="flex flex-col gap-8">
      <h2 className="text-2xl font-semibold text-zinc-100 flex items-center justify-center gap-3">
        <span className="text-accent-tech">/</span> {dict.title}
        <span className="text-accent-tech">\</span>
      </h2>
      <div className="relative border-l border-zinc-800 ml-2 flex flex-col gap-12 pb-4">
        {workExperience.map((work) => (
          <WorkExperienceItem
            key={work.id}
            position={work.position}
            company={work.company}
            startYear={work.startYear}
            endYear={work.endYear}
            description={work.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
