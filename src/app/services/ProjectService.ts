import { ProjectType } from "../types/ProjectType";

const projectsApi = process.env.PROJECTS_API_URL;
if (!projectsApi) throw new Error("Falta el link de la API");

export const ProjectService = {
  get: async ():Promise<ProjectType[]> => {
    const response = await fetch(projectsApi);
    if (!response.ok) throw new Error("Error de conexión");
    return response.json() || [];
  },
};
