import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const JOB_ICONPATH: string = "/icons/_work/jobs";


//$ Jobs
export const JOB_CDI_ICON: AppIconTemp = {
    key: "cdi",
    src: asset(`${JOB_ICONPATH}/turfway_std-DK-256p.png`),
    alt: "cdi-icon",
    color: "#DBB031"
};
export const JOB_TLPG_ICON: AppIconTemp = {
    key: "tlpg",
    src: asset(`${JOB_ICONPATH}/tlpg_256p.png`),
    alt: "tlpg-icon",
    color: "#6033AB"
};
export const JOB_ABB_ICON: AppIconTemp = {
    key: "abb",
    src: asset(`${JOB_ICONPATH}/abb_256p.png`),
    alt: "abb-icon",
    color: "#5badf1"
};

//) * JOBS ICONSET * ------------------------------------------------------ (//
export const JOB_ICONS: AppIconTemp[] = [ 
    JOB_CDI_ICON,
    JOB_TLPG_ICON,
    JOB_ABB_ICON
];