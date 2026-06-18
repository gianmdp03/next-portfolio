import { ProjectService } from "@/app/services/ProjectService";
import ProjectItem from "./ProjectItem";

const Projects = async () => {
  const { get } = ProjectService;
  const data = await get();
  return (
    <section id="proyectos" className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold text-zinc-100 flex items-center justify-center gap-3">
        <span className="text-accent-tech">/</span> Proyectos Destacados
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
            githubLink={project?.githubLink}
            previewLink={project?.previewLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
