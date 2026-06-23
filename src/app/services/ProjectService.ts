import { ProjectType, ProjectsResponse } from "../types/ProjectType";

const projectsApi = process.env.PROJECTS_API_URL;
if (!projectsApi) throw new Error("Falta el link de la API");

export const ProjectService = {
  get: async (lang: "es" | "en"): Promise<ProjectType[]> => {
    const response = await fetch(projectsApi, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });
    if (!response.ok) throw new Error("Error de conexión");
    let text = await response.text();
    text = text.trim();
    if (!text.startsWith("{")) {
      text = "{" + text + "}";
    }
    const data: ProjectsResponse = JSON.parse(text);
    return data[lang] || [];
  },
};
