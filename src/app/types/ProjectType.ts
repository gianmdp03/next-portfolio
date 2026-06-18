export interface ProjectType {
  id: string;
  img: string;
  name: string;
  developedIn: StackId[];
  description: string;
  githubLink?: string | GitHubDualLink;
  previewLink?: string;
}

export const STACKS = {
  1: "Spring Boot (Java)",
  2: "Next.JS",
  3: "TypeScript",
  4: "Tailwind CSS",
  5: "Angular",
  6: "PostgreSQL",
  7: "MySQL",
  8: "React",
  9: "React Native",
} as const;

export type StackId = keyof typeof STACKS;

export type GitHubDualLink = {
  backendLink: string;
  frontendLink: string;
};

export const getStackName = (id: StackId): string => {
  return STACKS[id];
};
