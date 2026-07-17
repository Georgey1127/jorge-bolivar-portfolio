export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}