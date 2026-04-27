import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const HOST_ICONPATH: string = "/icons/_tech/hosting";

//$ Hosting Tools
export const HOST_ACME_ICON: AppIconTemp = {
    key: "acme",
    src: asset(`${HOST_ICONPATH}/v3.4-acme--3d-std-x1-195br-256p.png`),
    alt: "acme-icon",
    color: "#52E05E",
}
export const HOST_APACHE_ICON: AppIconTemp = {
    key: "apache",
    src: asset(`${HOST_ICONPATH}/v3.4-apache--3d-alt_lt-x1-195br-256p.png`),
    alt: "apache-icon",
    color: "#ea2052"
}
export const HOST_CADDY_ICON: AppIconTemp = {
    key: "caddy",
    src: asset(`${HOST_ICONPATH}/v3.4-caddy--3d-std-x1-195br-256p.png`),
    alt: "caddy-icon",
    color: "#0099E5"
}
export const HOST_COOLIFY_ICON: AppIconTemp = {
    key: "coolify",
    src: asset(`${HOST_ICONPATH}/v3.4-coolify--3d-std-x1-195br-256p.png`),
    alt: "coolify-icon",
    color: "#8C52FF"
}
export const HOST_LETSENCRYPT_ICON: AppIconTemp = {
    key: "lets_encrypt",
    src: asset(`${HOST_ICONPATH}/v3.4-lets_encrypt--3d-std-x1-195br-256p.png`),
    alt: "lets_encrypt-icon",
    color: "#003A70"
}
export const HOST_NGINX_ICON: AppIconTemp = {
    key: "nginx",
    src: asset(`${HOST_ICONPATH}/v3.4-nginx--3d-std-x1-195br-256p.png`),
    alt: "nginx-icon",
    color: "#1DC924"
}

//) * HOSTING ICONSET * ------------------------------------------------------ (//
export const HOST_ICONS: AppIconTemp[] = [ 
    HOST_ACME_ICON,
    HOST_APACHE_ICON,
    HOST_CADDY_ICON,
    HOST_COOLIFY_ICON,
    HOST_LETSENCRYPT_ICON,
    HOST_NGINX_ICON
];