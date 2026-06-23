import { ProjectService } from "@/app/services/ProjectService";
import ProjectItem from "./ProjectItem";

type Props = {
  dict: {
    title: string;
    repository: string;
    repositoryFrontend: string;
    repositoryBackend: string;
  };
  lang: "es" | "en";
};

const Projects = async ({ dict, lang }: Props) => {
  const data = await ProjectService.get(lang);
  return (
    <section id="projects" className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold text-zinc-100 flex items-center justify-center gap-3">
        <span className="text-accent-tech">/</span> {dict.title}
        <span className="text-accent-tech">\</span>
      </h2>
      <div className="flex flex-col gap-12">
        {data.map((project) => (
          <ProjectItem
            key={project.id}
            img={project.img}
            name={project.name}
            developedIn={project.developedIn}
            description={project.description}
            githubLink={project.githubLink}
            previewLink={project.previewLink}
            dict={{
              repository: dict.repository,
              repositoryFrontend: dict.repositoryFrontend,
              repositoryBackend: dict.repositoryBackend,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
