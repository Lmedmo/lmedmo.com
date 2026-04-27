import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

export const PAGE_ICONPATH: string = "/icons/_a/pageicons";


//% Pageheader Icons %/
export const PAGEICON_CERTS: AppIconTemp = {
    key: "icon",
    src: asset(`${PAGE_ICONPATH}/v3.5.0-certificate--3d-std-x1-195br-256p.png`), 
    alt: "certification-icon",
    color: "#11CC00"
}
export const PAGEICON_SKILLS: AppIconTemp = {
    key: "icon",
    src: asset(`${PAGE_ICONPATH}/v3.5.0-skills--3d-std-x1-195br-256p.png`), 
    alt: "skills-icon",
    color: "#FF3030"
}
export const PAGEICON_REFS: AppIconTemp = {
    key: "icon",
    src: asset(`${PAGE_ICONPATH}/v3.5.0-message--3d-std-x1-195br-256p.png`), 
    alt: "references-icon",
    color: "#B300D3"
}
export const PAGEICON_PROJX: AppIconTemp = {
    key: "icon",
    src: asset(`${PAGE_ICONPATH}/v3.5.0-projects--3d-std-x1-195br-256p.png`), 
    alt: "projects-icon",
    color: "#FF6B00"
}
export const PAGEICON_CAREER: AppIconTemp = {
    key: "icon",
    src: asset(`${PAGE_ICONPATH}/v3.5.0-career--3d-std-x1-195br-256p.png`), 
    alt: "employment-icon",
    color: "#F7DC6E"
}
export const PAGEICON_EDU: AppIconTemp = {
    key: "icon",
    src: asset(`${PAGE_ICONPATH}/v3.5.0-education--3d-std-x1-195br-256p.png`), 
    alt: "education-icon",
    color: "#0040FF"
}

//) * PAGEICON ICONSET * ------------------------------------------------------ (//
export const PAGE_ICONS: AppIconTemp[] = [ 
    PAGEICON_CERTS,
    PAGEICON_SKILLS,
    PAGEICON_REFS,
    PAGEICON_PROJX,
    PAGEICON_CAREER,
    PAGEICON_EDU,
];