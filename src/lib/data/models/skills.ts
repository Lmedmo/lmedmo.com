export interface SkillTemp {
    iconkey: string;
    name: string;
    details: string;
    topickeys: string[];
    experience_level?: "Beginner" | "Intermediate" | "Advanced" | string;
}
export interface SkillSubsetTemp {
    iconkey: string;
    subsetname: string;
    skills: SkillTemp[];
}
export interface SkillsetTemp {
    iconkey: string;
    skillset_name: string;
    skills: SkillTemp[];
    subsets: SkillSubsetTemp[];
}



