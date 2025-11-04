export interface Project {
  id: string;
  title: string;
  description: string;
  repogit?: string;
  tech: string[];
  publishat?: Date;
  imageUrl?: string;
}
