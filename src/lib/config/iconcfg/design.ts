import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const DESIGN_ICONPATH: string = "/icons/design";

//$ Main
export const DESIGN_ICON: AppIconTemp = {
    key: "design",
    src: asset(`${DESIGN_ICONPATH}/v3.4-design--3d-std-x1-195br-256p.png`),
    alt: "design-icon",
    color: "#95DB00"
}

//% Tools
export const DESIGN_ADOBECC_ICON: AppIconTemp = {
    key: "adobe_cc",
    src: asset(`${DESIGN_ICONPATH}/v3.4-adobe_cc--3d-alt_red-x1-195br-256p.png`),
    alt: "adobe-cc-icon",
    color: "#FF242C"
}
export const DESIGN_AUTODESK_ICON: AppIconTemp = {
    key: "autodesk",
    src: asset(`${DESIGN_ICONPATH}/v3.4-autodesk--3d-std-x1-195br-256p.png`),
    alt: "autodesk-icon",
    color: "#356EB9"
}
export const DESIGN_FIGMA_ICON: AppIconTemp = {
    key: "figma",
    src: asset(`${DESIGN_ICONPATH}/v3.4-figma--3d-alt_lt-x1-195br-256p.png`),
    alt: "figma-icon",
    color: "#F23D1A"
}
export const DESIGN_SKETCH_ICON: AppIconTemp = {
    key: "sketch",
    src: asset(`${DESIGN_ICONPATH}/v3.4-sketch--3d-alt_dk-x1-195br-256p.png`),
    alt: "sketch-icon",
    color: "#FDAD00"
}
export const DESIGN_SPLINE_ICON: AppIconTemp = {
    key: "spline",
    src: asset(`${DESIGN_ICONPATH}/v3.4-spline--3d-std-x1-195br-256p.png`),
    alt: "spline-icon",
    color: "#36ecb5",
    boostcontrast: true
}

//) * DESIGN ICONSET * ------------------------------------------------------ (//
export const DESIGN_ICONS: AppIconTemp[] = [
    DESIGN_ICON,
    DESIGN_ADOBECC_ICON,
    DESIGN_AUTODESK_ICON,
    DESIGN_FIGMA_ICON,
    DESIGN_SKETCH_ICON,
    DESIGN_SPLINE_ICON,
]