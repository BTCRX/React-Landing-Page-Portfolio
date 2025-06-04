// src/types/content.ts
export interface ContentType {
  header_hero: string;
  paragraph_hero: string;
  header_about_us: string;
  paragraph_about_us: string;
  header_services: string;
  paragraph_services: string;
  body: string;
  logo_top_projects_url: string[];
  image_about_us_url?: string;
  is_published: boolean;
}
