export type TProject = {
  id: number;
  imageUrl?: HTMLImageElement | string;
  name: string;
  githubUrl?: string;
  twitterUrl?: string;
  link: { href: string; label: string };
  shortDescription: string;
  tags: string[];
};
