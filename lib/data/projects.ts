export type Project = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  coverImage: string; // path relatif di /public/projects
  tags: string[];
};

// Diisi pada tahap pengembangan portfolio.
export const projects: Project[] = [];
