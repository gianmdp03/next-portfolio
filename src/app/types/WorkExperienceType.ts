export interface WorkExperienceType {
  id: number | string;
  position: string;
  company: string;
  startYear: string;
  endYear: string;
  productionLink?: string;
  description: string;
}

export interface WorkExperienceResponse {
  es: WorkExperienceType[];
  en: WorkExperienceType[];
}
