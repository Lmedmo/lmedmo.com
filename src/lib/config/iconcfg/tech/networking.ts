import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const NET_ICONPATH: string = "/icons/_tech/networking";

//$ Main
export const NET_NETWORK_ICON: AppIconTemp = {
    key: "network",
    src: asset(`${NET_ICONPATH}/v3.4-network--3d-alt_dk-x1-195br-256p.png`),
    alt: "network-icon",
    color: "#57F105"
}

//% Generic
export const NET_CONFIG_ICON: AppIconTemp = {
    key: "netcfg",
    src: asset(`${NET_ICONPATH}/v3.4-net_config--3d-std-x1-195br-256p.png`),
    alt: "net_config-icon",
    color: "#005CE5"
}
export const NET_IMPL_ICON: AppIconTemp = {
    key: "netimpl",
    src: asset(`${NET_ICONPATH}/v3.4-net_implement--3d-std-x1-195br-256p.png`),
    alt: "net_implement-icon",
    color: "#005CE5"
}
export const NET_MODEL_ICON: AppIconTemp = {
    key: "netmodel",
    src: asset(`${NET_ICONPATH}/v3.4-net_modeling--3d-std-x1-195br-256p.png`),
    alt: "net_modeling-icon",
    color: "#005CE5"
}
export const NET_MONITOR_ICON: AppIconTemp = {
    key: "netmon",
    src: asset(`${NET_ICONPATH}/v3.4-net_monitor--3d-std-x1-195br-256p.png`),
    alt: "net_monitor-icon",
    color: "#005CE5"
}
export const NET_PLAN_ICON: AppIconTemp = {
    key: "netplan",
    src: asset(`${NET_ICONPATH}/v3.4-net_planning--3d-std-x1-195br-256p.png`),
    alt: "net_planning-icon",
    color: "#005CE5"
}
export const NET_SERV_ICON: AppIconTemp = {
    key: "netserv",
    src: asset(`${NET_ICONPATH}/v3.4-net_servicing--3d-std-x1-195br-256p.png`),
    alt: "net_servicing-icon",
    color: "#005CE5"
}

//~ Specific
export const NET_CISCO_ICON: AppIconTemp = {
    key: "cisco",
    src: asset(`${NET_ICONPATH}/cisco--3d-alt_lt-x1-195br-256p.png`),
    alt: "cisco-icon",
    color: "#C50F31"
}
export const NET_CLOUDFLARE_ICON: AppIconTemp = {
    key: "cloudflare",
    src: asset(`${NET_ICONPATH}/v3.4-cloudflare--3d-alt_orange-x1-195br-256p.png`),
    alt: "cloudflare-icon",
    color: "#"
}
export const NET_PFSENSE_ICON: AppIconTemp = {
    key: "pfsense",
    src: asset(`${NET_ICONPATH}/v3.4-pfsense--3d-alt_lt-x1-195br-256p.png`),
    alt: "pfsense-icon",
    color: "#394CAC"
}
export const NET_UNIFI_ICON: AppIconTemp = {
    key: "unifi",
    src: asset(`${NET_ICONPATH}/v3.4-ubiquiti_unifi--3d-alt_lt-x1-195br-256p.png`),
    alt: "unifi_icon",
    color: "#2398F5"
}


//) * NETWORKING ICONSET * ------------------------------------------------------ (//
export const NET_ICONS: AppIconTemp[] = [ 
    NET_NETWORK_ICON,
    NET_CONFIG_ICON,
    NET_IMPL_ICON,
    NET_MODEL_ICON,
    NET_MONITOR_ICON,
    NET_PLAN_ICON,
    NET_SERV_ICON,
    NET_CISCO_ICON,
    NET_PFSENSE_ICON,
    NET_UNIFI_ICON
];