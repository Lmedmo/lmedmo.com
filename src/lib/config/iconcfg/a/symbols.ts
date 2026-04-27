import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const SYMBOLS_ICONPATH: string = "/icons/_a/symbols";

//$ Main
export const SYMBOL_INFO: AppIconTemp = {
    key: "info",
    src: asset(`${SYMBOLS_ICONPATH}/v3.5-info--s1-alt_bw-x1-298br-80cs-24p.svg`),
    alt: "info-icon",
    color: "#202020"
}

//) * SYMBOLS ICONSET * ------------------------------------------------------ (//
export const SYMBOL_ICONS: AppIconTemp[] = [ 
    SYMBOL_INFO
];