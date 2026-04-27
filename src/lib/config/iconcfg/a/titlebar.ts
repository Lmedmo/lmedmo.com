import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

export const TBAR_ICONPATH: string = "/icons/_a/titlebar";

export const TBARICON_LMEDMO: AppIconTemp = {
    key: "app",
    src: asset(`${TBAR_ICONPATH}/v3.5.4-lmedmo--0f-alt_bw-x1-0br-256p.png`), 
    alt: "lmedmo-sym-icon",
    color: "#404040"
};

//% Titlebar Icons %/
export const TBARICON_CERTS: AppIconTemp = {
    key: "tbar_certs",
    src: asset(`${TBAR_ICONPATH}/v3.5.2-certificate--0f-alt_inv-o1-0br-256p.png`), 
    alt: "certification-icon-flat-45px",
    color: "#11CC00"
}
export const TBARICON_SKILLS: AppIconTemp = {
    key: "tbar_skills",
    src: asset(`${TBAR_ICONPATH}/v3.5.2-skills--0f-alt_inv-o1-0br-256p.png`), 
    alt: "skills-icon-flat-45px",
    color: "#FF3030"
}
export const TBARICON_REFS: AppIconTemp = {
    key: "tbar_refs",
    src: asset(`${TBAR_ICONPATH}/v3.5.2-message--0f-alt_inv-o1-0br-256p.png`), 
    alt: "references-icon-flat-45px",
    color: "#B300D3"
}
export const TBARICON_PROJX: AppIconTemp = {
    key: "tbar_projx",
    src: asset(`${TBAR_ICONPATH}/v3.5.2-projects--0f-alt_inv-o1-0br-256p.png`), 
    alt: "projects-icon-flat-45px",
    color: "#FF6B00"
}
export const TBARICON_CAREER: AppIconTemp = {
    key: "tbar_work",
    src: asset(`${TBAR_ICONPATH}/v3.5.3-career--0f-alt_inv-o1-0br-256p.png`), 
    alt: "employment-icon-flat-45px",
    color: "#F7DC6E"
}
export const TBARICON_EDU: AppIconTemp = {
    key: "tbar_edu",
    src: asset(`${TBAR_ICONPATH}/v3.5.3-education--0f-alt_inv-o1-0br-256p.png`), 
    alt: "education-icon-flat-45px",
    color: "#0040FF"
}

//) * TITLEBAR ICONSET * ------------------------------------------------------ (//
export const TBAR_ICONS: AppIconTemp[] = [ 
    TBARICON_LMEDMO,
    TBARICON_CERTS,
    TBARICON_SKILLS,
    TBARICON_REFS,
    TBARICON_PROJX,
    TBARICON_CAREER,
    TBARICON_EDU,
];