import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const DEVFW_ICONPATH: string = "/icons/_tech/_code/frameworks";

//$ Frameworks
export const DEVFW_DENO_ICON: AppIconTemp = {
    key: "deno",
    src: asset(`${DEVFW_ICONPATH}/v3.4-deno--3d-std-x1-195br-256p.png`),
    alt: "deno-icon",
    color: "#252525"
}
export const DEVFW_DOTNET_ICON: AppIconTemp = {
    key: "dotnet",
    src: asset(`${DEVFW_ICONPATH}/v3.4-dotnet--3d-std-x1-195br-256p.png`),
    alt: "dotnet-icon",
    color: "#502BD3"
}
export const DEVFW_NODE_ICON: AppIconTemp = {
    key: "node",
    src: asset(`${DEVFW_ICONPATH}/v3.4-node--3d-std-x1-195br-256p.png`),
    alt: "node-icon",
    color: "#1FAF00"
}
export const DEVFW_JAVAFX_ICON: AppIconTemp = {
    key: "javafx",
    src: asset(`${DEVFW_ICONPATH}/v3.4.1-java_fx--3d-alt_aqua-x1-195br-256p.png`),
    alt: "javafx-icon",
    color: "#FF9124"
}
export const DEVFW_SCENEBLDR_ICON: AppIconTemp = {
    key: "scenebuilder",
    src: asset(`${DEVFW_ICONPATH}/v3.4-scenebuilder--3d-std-x1-195br-256p.png`),
    alt: "scenebuilder-icon",
    color: "#FC4800"
}
export const DEVFW_SVELTE_ICON: AppIconTemp = {
    key: "svelte",
    src: asset(`${DEVFW_ICONPATH}/v3.4-svelte--3d-alt_clr-x1-195br-256p.png`),
    alt: "svelte-icon",
    color: "#FF3E00"
}
export const DEVFW_TAURI_ICON: AppIconTemp = {
    key: "tauri",
    src: asset(`${DEVFW_ICONPATH}/v3.4-tauri--3d-alt_dk-x1-195br-256p.png`),
    alt: "tauri-icon",
    color: "#13DAEC",
    boostcontrast: true
}
export const DEVFW_XAMP_ICON: AppIconTemp = {
    key: "xamp",
    src: asset(`${DEVFW_ICONPATH}/v3.4-xamp--3d-std-x1-195br-256p.png`),
    alt: "xamp-icon",
    color: "#FF791A"
}

//) * DEV-FRAMEWORK ICONSET * ------------------------------------------------------ (//
export const DEVFW_ICONS: AppIconTemp[] = [ 
    DEVFW_JAVAFX_ICON,
    DEVFW_SCENEBLDR_ICON,
    DEVFW_SVELTE_ICON,
    DEVFW_TAURI_ICON,
    DEVFW_XAMP_ICON
];