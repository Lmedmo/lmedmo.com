import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

export const TAB_ICONPATH: string = "/icons/_a/tabicons";


//% Tab Icons %/
export const TABICON_HOME: AppIconTemp = {
    key: "tab",
    src: asset(`${TAB_ICONPATH}/v3.2.4-home--0f-alt_sym-m1-0br-256p.png`), 
    alt: "home-tab-icon",
    color: "#404040"
};
export const TABICON_RESUME: AppIconTemp = {
    key: "tab",
    src: asset(`${TAB_ICONPATH}/v3.4.2-resume--0f-alt_sym-m1-0br-256p.png`), 
    alt: "resume-tab-icon",
    color: "#404040"
};


//) * TAB ICONSET * ------------------------------------------------------ (//
export const TAB_ICONS: AppIconTemp[] = [ TABICON_HOME, TABICON_RESUME ];