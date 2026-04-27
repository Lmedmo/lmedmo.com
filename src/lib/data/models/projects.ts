import type { TopicTagTemp } from "$lib/config";

export type ProjectCategory = "code" | "systems" | string; // | "Personal" | "Professional" | "Academic";

export interface ProjectInfoTemp {
    iconkey: string;
    title: string;
    category: ProjectCategory;
    description: string;
    links: ProjectLinkTemp[];
    topickeys: string[];
}

export interface ProjectLinkTemp {
    description: string;
    url: string;
}