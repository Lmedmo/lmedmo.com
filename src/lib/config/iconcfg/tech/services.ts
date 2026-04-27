import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const SVC_ICONPATH: string = "/icons/_tech/services";

//$ Services
export const SVC_BITWARDEN_ICON: AppIconTemp = {
    key: "bitwarden",
    src: asset(`${SVC_ICONPATH}/v3.4-bitwarden--3d-std-x1-195br-256p.png`),
    alt: "bitwarden-icon",
    color: "#0048CE"
}
export const SVC_JELLYFIN_ICON: AppIconTemp = {
    key: "jellyfin",
    src: asset(`${SVC_ICONPATH}/v3.4-jellyfin--3d-alt_dk-x1-195br-256p.png`),
    alt: "jellyfin-icon",
    color: "#bd67ff"
}
export const SVC_NEXTCLOUD_ICON: AppIconTemp = {
    key: "nextcloud",
    src: asset(`${SVC_ICONPATH}/v3.4-nextcloud--3d-std-x1-195br-256p.png`),
    alt: "nextcloud-icon",
    color: "#0082C9"
}
export const SVC_RUSTDESK_ICON: AppIconTemp = {
    key: "rustdesk",
    src: asset(`${SVC_ICONPATH}/v3.4-rustdesk--3d-std-x1-195br-256p.png`),
    alt: "rustdesk-icon",
    color: "#009AF2"
}


//) * SERVICES ICONSET * ------------------------------------------------------ (//
export const SVC_ICONS: AppIconTemp[] = [ 
    SVC_BITWARDEN_ICON,
    SVC_JELLYFIN_ICON,
    SVC_NEXTCLOUD_ICON,
    SVC_RUSTDESK_ICON
];