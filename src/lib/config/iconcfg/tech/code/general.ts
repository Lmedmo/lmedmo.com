import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const DEVGEN_ICONPATH: string = "/icons/_tech/_code/general";

//$ General Development Topics
export const DEV_AGILE_ICON: AppIconTemp = {
    key: "agile",
    src: asset(`${DEVGEN_ICONPATH}/v3.4-agile_sprint--3d-std-x1-195br-256p.png`),
    alt: "agile-sprint-icon",
    color: "#0480FC"
}
export const DEV_COMMANDLINE_ICON: AppIconTemp = {
    key: "commandline",
    src: asset(`${DEVGEN_ICONPATH}/v3.4-commandline--3d-std-x1-195br-256p.png`),
    alt: "commandline-icon",
    color: "#"
}
export const DEV_PATCH_ICON: AppIconTemp = {
    key: "patch",
    src: asset(`${DEVGEN_ICONPATH}/v3.4-patch--3d-std-x1-195br-256p.png`),
    alt: "patch-icon",
    color: "#DCAC7F"
}
export const DEV_PROGRAMMING_ICON: AppIconTemp = {
    key: "programming",
    src: asset(`${DEVGEN_ICONPATH}/v3.4-programming--3d-alt_dkbg_blue-x1-195br-256p.png`),
    alt: "programming_icon",
    color: "#"
}
export const DEV_SOFTWDESIGN_ICON: AppIconTemp = {
    key: "softwdesign",
    src: asset(`${DEVGEN_ICONPATH}/v3.4-softw_design--3d-alt_dkbg_green-x1-195br-256p.png`),
    alt: "software_design_icon",
    color: "#"
}
export const DEV_SOFTWENGINEER_ICON: AppIconTemp = {
    key: "softwengineer",
    src: asset(`${DEVGEN_ICONPATH}/v3.4-softw_engr--3d-alt_dkbg_green-x1-195br-256p.png`),
    alt: "software_engineering_icon",
    color: "#"
}



//) * GENERAL DEVELOPMENT ICONSET * ------------------------------------------------------ (//
export const DEVGEN_ICONS: AppIconTemp[] = [ 
    DEV_AGILE_ICON,
    DEV_COMMANDLINE_ICON,
    DEV_PATCH_ICON,
    DEV_PROGRAMMING_ICON,
    DEV_SOFTWDESIGN_ICON,
    DEV_SOFTWENGINEER_ICON
];