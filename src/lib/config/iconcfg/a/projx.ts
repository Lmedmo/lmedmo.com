import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";


export const PROJX_ICONPATH: string = "/icons/_a/projx";

export const PROJX_LMEDMO_C_ICON: AppIconTemp = {
    key: "lmedmo",
    src: asset(`${PROJX_ICONPATH}/lmedmosite/v3.4-lmedmo--3d-std-x1-195br-256p.png`),
    alt: "lmedmo-icon",
    color: "#875E33"
}

export const PROJX_FINANCEAPP_ICON: AppIconTemp = {
    key: "finance-app",
    src: asset(`${PROJX_ICONPATH}/financeapp/v3.5.0-dollar--3d-alt_mint_bord-x1-298br-80cs-256p.png`),
    alt: "finance-app-icon",
    color: "#00db99"
}
export const PROJX_HOMELAB_ICON: AppIconTemp = {
    key: "homelab",
    src: asset(`${PROJX_ICONPATH}/homelab/v3.4-homelab--3d-alt_dk-x1-195br-256p.png`),
    alt: "homelab-icon",
    color: "#57F105"
}

export const PROJX_MECM_ICON: AppIconTemp = {
    key: "proj_mecm",
    src: asset(`${PROJX_ICONPATH}/mecmtestlab/v3.4-mecm_sccm--3d-alt_lt-x1-195br-256p.png`),
    alt: "proj_mecm",
    color: "#1F3C93"
}

export const PROJX_RPS_ICON: AppIconTemp = {
    key: "rps",
    src: asset(`${PROJX_ICONPATH}/classprojects/v3.4-rps--3d-std-x1-195br-256p.png`),
    alt: "rps-icon",
    color: "#002478"
}
export const PROJX_XAMP_ICON: AppIconTemp = {
    key: "proj_xamp",
    src: asset(`${PROJX_ICONPATH}/classprojects/v3.4-xamp--3d-alt_lt-x1-195br-256p.png`),
    alt: "proj_xamp",
    color: "#FF791A"
}

//) * PROJECTS ICONSET * ------------------------------------------------------ (//
export const PROJX_ICONS: AppIconTemp[] = [ 
    PROJX_FINANCEAPP_ICON,
    PROJX_HOMELAB_ICON,
    PROJX_LMEDMO_C_ICON,
    PROJX_MECM_ICON,
    PROJX_RPS_ICON,
    PROJX_XAMP_ICON
];