import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const SEC_ICONPATH: string = "/icons/_tech/infosec";

//$ Main
export const SEC_ICON: AppIconTemp = {
    key: "infosec",
    src: asset(`${SEC_ICONPATH}/v3.4-infosec--3d-std-x1-195br-256p.png`),
    alt: "infosec-icon",
    color: "#FF5C00"
}

//% Generic
export const SEC_PENTEST_ICON: AppIconTemp = {
    key: "pentest",
    src: asset(`${SEC_ICONPATH}/v3.4-pentest--3d-std-x1-195br-256p.png`),
    alt: "pentest-icon",
    color: "#FF5C00"
}
export const SEC_VULN_DETECT_ICON: AppIconTemp = {
    key: "vulndetect",
    src: asset(`${SEC_ICONPATH}/v3.4-vuln_detect--3d-std-x1-195br-256p.png`),
    alt: "vuln_detect-icon",
    color: "#FF5C00"
}
export const SEC_VULN_FIX_ICON: AppIconTemp = {
    key: "secfix",
    src: asset(`${SEC_ICONPATH}/v3.4-vuln_fix--3d-std-x1-195br-256p.png`),
    alt: "secfix-icon",
    color: "#FF5C00"
}


//) * INFOSEC ICONSET * ------------------------------------------------------ (//
export const SEC_ICONS: AppIconTemp[] = [ 
    SEC_ICON,
    SEC_PENTEST_ICON,
    SEC_VULN_DETECT_ICON,
    SEC_VULN_FIX_ICON
];