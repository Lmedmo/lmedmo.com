import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const CERT_ICONPATH: string = "/icons/_work/certifications";


//$ Certificates
export const CERT_TESTOUTSECPRO_ICON: AppIconTemp = {
    key: "securitypro",
    src: asset(`${CERT_ICONPATH}/v3.4-testout_sec_pro--3d-std-x1-195br-256p.png`),
    alt: "testout-securitypro-icon",
    color: "#EEAC2B"
};
export const CERT_KCTCSCERT_ICON: AppIconTemp = {
    key: "kctcscert",
    src: asset(`${CERT_ICONPATH}/v3.4-kctcscert--3d-std-x1-195br-256p.png`),
    alt: "kctcscert-icon",
    color: "#002D60"
};
export const CERT_USGOVOPM_ICON: AppIconTemp = {
    key: "usgov_opm",
    src: asset(`${CERT_ICONPATH}/v3.4-usgov_opm--3d-std-x1-195br-256p.png`),
    alt: "usgov_opm-icon",
    color: "#002266"
};
export const CERT_NOCTI_ICON: AppIconTemp = {
    key: "nocti_cert",
    src: asset(`${CERT_ICONPATH}/v3.4-nocti_cert--3d-std-x1-195br-256p.png`),
    alt: "nocti_cert-icon",
    color: "#064079"
};

//) * CERT ICONSET * ------------------------------------------------------ (//
export const CERT_ICONS: AppIconTemp[] = [ 
    CERT_TESTOUTSECPRO_ICON,
    CERT_KCTCSCERT_ICON,
    CERT_USGOVOPM_ICON,
    CERT_NOCTI_ICON
];