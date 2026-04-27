import { asset } from "$app/paths";
import { TBARICON_LMEDMO, DESIGN_ICONS, EDU_ICONS, SOCIAL_ICONS, TECH_ICONS, WORK_ICONS, APP_ICONS } from '$lib/config/iconcfg'


export * from './a';
export * from './tech';
export * from './work';
export * from './design';
export * from './schools';
export * from './social';


//) Models ------------------------------------------------------------- */
export interface AppIconTemp {
    key: string;
    src: string;
    alt: string;
    color: string;
    boostcontrast?: boolean;
}
 export type AppIconStyleOpt = "phdr" | "cnav" | "h1" | "h2" | "h3" | "alt_h1" | "tbar" | "side" | "hbtn" | "h4" | "btn" | "tab" | "tag";


//> Methods: ------------------------------------------------------------ */
export function findicon(iconkey: string): AppIconTemp {
    //console.log("[fn]: 'findicon' [arg]: 'iconkey' = ", iconkey);

    let key = (iconkey === "phdr" || iconkey === "cnav") ? "icon" : iconkey

    // let icon = iconset.find(i => i.key === key);
    let icon = ALL_ICONS.find(i => i.key === key);

    if (!icon) {
        console.warn(`[fn]: findicon, [warn]: Icon with key "${key}" not found. Returning default icon.`);
        icon = DEFAULT_ICON;
    }
    return icon
}
export function buildset(iconsets: AppIconTemp[][]){
    console.log("[fn]: 'buildset' [arg]: 'iconsets' = ", iconsets);
    
    let superset: AppIconTemp[] = [];
    
    for (let set of iconsets){
        set.forEach((i) => {superset.push(i)});
    }
    
    console.log("[fn]: 'buildset' [result]: 'superset' = ", superset);
    
    return superset
}


//$ Declarations: ----------------------------------------------------- */
//? Default icons */
export const APP_ICON: AppIconTemp = {
    key: "app",
    src: TBARICON_LMEDMO.src, 
    alt: "app-icon",
    color: "#4d4d4d"
};
export const DEFAULT_ICON: AppIconTemp = {
    key: "default",
    src: asset(`/icons/_a/v3.4-missing--0f-alt_vistmp-x1-0br-256p.png`), 
    alt: "missing-icon",
    color: "#4d4d4d"
};


//) * ALL ICONS * ------------------------------------------------------ (//
export const ALL_ICONS: AppIconTemp[] = buildset([
    APP_ICONS,
    TECH_ICONS, 
    WORK_ICONS, 
    DESIGN_ICONS, 
    EDU_ICONS, 
    SOCIAL_ICONS 
]);