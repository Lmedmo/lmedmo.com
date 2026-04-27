import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

export const SKILLS_ICONPATH: string = "/icons/_work/skills";


export const SKILL_ASSETMGMT_ICON: AppIconTemp = {
    key: "assetmgmt",
    src: asset(`${SKILLS_ICONPATH}/v3.4.1-asset_mgmt--3d-std-x1-195br-256p.png`),
    alt: "asset_mgmt-icon",
    color: "#17CE63"
}
export const SKILL_DOCS_ICON: AppIconTemp = {
    key: "docs",
    src: asset(`${SKILLS_ICONPATH}/v3.4-docs--3d-std-x1-195br-256p.png`),
    alt: "docs-icon",
    color: "#0080FF"
}
export const SKILL_TEAM_ICON: AppIconTemp = {
    key: "teamwork",
    // key: "projmgmt",
    src: asset(`${SKILLS_ICONPATH}/v3.4.1-teamwork--3d-std-x1-195br-256p.png`),
    alt: "teamwork-icon",
    color: "#A413EC"
}

//) * WRKPROD ICONSET * ------------------------------------------------------ (//
export const SKILL_ICONS: AppIconTemp[] = [ 
    SKILL_ASSETMGMT_ICON,
    SKILL_DOCS_ICON,
    SKILL_TEAM_ICON
];