import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const EDU_ICONPATH: string = "/icons/schools";


//$ Schools
export const EDU_KCTCS_ICON: AppIconTemp = {
    key: "gctc",
    src: asset(`${EDU_ICONPATH}/kctcs--3d-std-x1-195br-256p.png`),
    alt: "kctcs-icon",
    color: "#002D60"
};
export const EDU_BCHS_ICON: AppIconTemp = {
    key: "bchs",
    src: asset(`${EDU_ICONPATH}/bchs--3d-std-x1-195br-256p.png`),
    alt: "bchs-icon",
    color: "#66CCFF"
};

//) * SCHOOLS ICONSET * ------------------------------------------------------ (//
export const EDU_ICONS: AppIconTemp[] = [ EDU_KCTCS_ICON, EDU_BCHS_ICON ]