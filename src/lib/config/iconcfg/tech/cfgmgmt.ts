import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const SYSCM_ICONPATH: string = "/icons/_tech/cfgmgmt";

//$ Endpoint Configuration Tools
export const SYSCM_FOGPROJ_ICON: AppIconTemp = {
    key: "fog_project",
    src: asset(`${SYSCM_ICONPATH}/v3.4-fog_project--3d-std-x1-195br-256p.png`),
    alt: "fog_project-icon",
    color: "#064979"
}
export const SYSCM_HCLBIGFIX_ICON: AppIconTemp = {
    key: "hcl_bigfix",
    src: asset(`${SYSCM_ICONPATH}/v3.4-hcl_bigfix--3d-std-x1-195br-256p.png`),
    alt: "hcl_bigfix-icon",
    color: "#4798D1"
}
export const SYSCM_MECM_ICON: AppIconTemp = {
    key: "mecm",
    src: asset(`${SYSCM_ICONPATH}/v3.4-mecm_sccm--3d-std-x1-195br-256p.png`),
    alt: "mecm-icon",
    color: "#1F3C93"
}
export const SYSCM_MS_AD_ICON: AppIconTemp = {
    key: "ms_ad",
    src: asset(`${SYSCM_ICONPATH}/v3.4-ms_ad--3d-std-x1-195br-256p.png`),
    alt: "ms-ad-icon",
    color: "#1F3C93"
}
export const SYSCM_M365_ICON: AppIconTemp = {
    key: "m365",
    src: asset(`${SYSCM_ICONPATH}/v3.4-m365--3d-alt_lt-x1-195br-256p.png`),
    alt: "m365-icon",
    color: "#8C66BA"
}


//) * CONFIGURATION MANAGEMENT ICONSET * ------------------------------------------------------ (//
export const SYSCM_ICONS: AppIconTemp[] = [ 
    SYSCM_FOGPROJ_ICON,
    SYSCM_HCLBIGFIX_ICON,
    SYSCM_MECM_ICON,
    SYSCM_MS_AD_ICON,
    SYSCM_M365_ICON
];