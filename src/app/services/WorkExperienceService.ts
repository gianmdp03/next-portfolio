import { WorkExperienceType, WorkExperienceResponse } from "../types/WorkExperienceType";

const workExperienceApi = process.env.WORK_EXPERIENCE_API_URL;
if (!workExperienceApi) throw new Error("Falta el link de la API");

export const WorkExperienceService = {
  get: async (lang: "es" | "en"): Promise<WorkExperienceType[]> => {
    const response = await fetch(workExperienceApi, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });
    if (!response.ok) throw new Error("Error de conexión");
    let text = await response.text();
    text = text.trim();
    if (!text.startsWith("{")) {
      text = "{" + text + "}";
    }
    const data: WorkExperienceResponse = JSON.parse(text);
    return data[lang] || [];
  },
};
