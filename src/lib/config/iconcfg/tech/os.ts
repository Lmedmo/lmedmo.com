import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const OS_ICONPATH: string = "/icons/_tech/os";

//$ Desktop
export const OS_LINUX_ICON: AppIconTemp = {
    key: "linux",
    src: asset(`${OS_ICONPATH}/v3.4-linux--3d-alt_dk-x1-195br-256p.png`),
    alt: "linux-icon",
    color: "#FFD600"
}
export const OS_MACOS_ICON: AppIconTemp = {
    key: "macos",
    src: asset(`${OS_ICONPATH}/v3.4-macos--liq-std-x1-256br-256p.png`),
    alt: "macos-icon",
    color: "#23ADFD"
}
export const OS_NIXOS_ICON: AppIconTemp = {
    key: "nixos",
    src: asset(`${OS_ICONPATH}/v3.4-nixos--3d-std-x1-195br-256p.png`),
    alt: "nixos-icon",
    color: "#5277C3"
}
export const OS_RHEL_ICON: AppIconTemp = {
    key: "rhel",
    src: asset(`${OS_ICONPATH}/v3.4-rhel--3d-std-x1-195br-256p.png`),
    alt: "rhel-icon",
    color: "#EE0000"
}
export const OS_UBUNTU_ICON: AppIconTemp = {
    key: "ubuntu",
    src: asset(`${OS_ICONPATH}/v3.4-ubuntu--3d-std-x1-195br-256p.png`),
    alt: "ubuntu-icon",
    color: "#DD5E14"
}
export const OS_WINDOWS_ICON: AppIconTemp = {
    key: "windows",
    src: asset(`${OS_ICONPATH}/v3.4-windows--3d-alt_lt-x1-195br-256p.png`),
    alt: "windows-icon",
    color: "#2398F5"
}
export const OS_WINSERVER_ICON: AppIconTemp = {
    key: "winserver",
    src: asset(`${OS_ICONPATH}/v3.4-winserver--3d-alt_lt-x1-195br-256p.png`),
    alt: "windows-server-icon",
    color: "#A426CC"
}


//) * OS ICONSET * ------------------------------------------------------ (//
export const OS_ICONS: AppIconTemp[] = [ 
    OS_LINUX_ICON,
    OS_MACOS_ICON,
    OS_NIXOS_ICON,
    OS_RHEL_ICON,
    OS_UBUNTU_ICON,
    OS_WINDOWS_ICON,
    OS_WINSERVER_ICON
];