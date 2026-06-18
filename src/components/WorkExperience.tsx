import { WorkExperienceService } from "@/app/services/WorkExperienceService";
import WorkExperienceItem from "./WorkExperienceItem";

const WorkExperience = async () => {
  const workExperience = await WorkExperienceService.get();
  return (
    <section id="experiencia" className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold text-zinc-100 flex items-center justify-center gap-3">
        <span className="text-accent-tech">/</span> Historial Laboral
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
