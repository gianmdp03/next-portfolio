export interface ProjectType {
  id: string;
  img: string;
  name: string;
  developedIn: Stack[];
  description: string;
  githubLink?: string;
  previewLink?: string;
}

export interface Stack {
  stackId: string;
  stackName: string;
}
