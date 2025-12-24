
export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  subtitle: string;
  overview: string;
  problem: string;
  role: string;
  process: {
    title: string;
    description: string;
  }[];
  tools: string[];
  outcome: string;
  fullImage: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  tags: string[];
}
