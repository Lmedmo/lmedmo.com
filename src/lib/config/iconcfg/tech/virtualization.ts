import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const VIRT_ICONPATH: string = "/icons/_tech/virtualization";

//$ Main
export const VIRT_ICON: AppIconTemp = {
    key: "virt",
    src: asset(`${VIRT_ICONPATH}/v3.4-virtualization--3d-std-x1-195br-256p.png`),
    alt: "virtualization-icon",
    color: "#95FF00"
}

//% Specific
export const VIRT_DOCKER_ICON: AppIconTemp = {
    key: "docker",
    src: asset(`${VIRT_ICONPATH}/v3.4-docker--3d-std-x1-195br-256p.png`),
    alt: "docker-icon",
    color: "#0062FB"
}
export const VIRT_HYPERV_ICON: AppIconTemp = {
    key: "hyperv",
    src: asset(`${VIRT_ICONPATH}/v3.4-hyper_v--3d-std-x1-195br-256p.png`),
    alt: "hyperv-icon",
    color: "#00A8C5"
}
export const VIRT_PODMAN_ICON: AppIconTemp = {
    key: "podman",
    src: asset(`${VIRT_ICONPATH}/v3.4-podman--3d-alt_dk-x1-195br-256p.png`),
    alt: "podman-icon",
    color: "#DD33FF"
}
export const VIRT_PROXMOX_ICON: AppIconTemp = {
    key: "proxmox",
    src: asset(`${VIRT_ICONPATH}/v3.4-proxmox--3d-alt_dk-x1-195br-256p.png`),
    alt: "proxmox-icon",
    color: "#FF8400"
}
export const VIRT_VMWARE_ICON: AppIconTemp = {
    key: "vmware",
    src: asset(`${VIRT_ICONPATH}/v3.4-vmware--3d-alt_dk-x1-195br-256p.png`),
    alt: "vmware-icon",
    color: "#95BF40"
}


//) * VIRTUALIZATION ICONSET * ------------------------------------------------------ (//
export const VIRT_ICONS: AppIconTemp[] = [ 
    VIRT_ICON,
    VIRT_DOCKER_ICON,
    VIRT_HYPERV_ICON,
    VIRT_PODMAN_ICON,
    VIRT_PROXMOX_ICON,
    VIRT_VMWARE_ICON
];