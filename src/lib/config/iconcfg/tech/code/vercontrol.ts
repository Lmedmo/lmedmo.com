import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const VC_ICONPATH: string = "/icons/_tech/_code/vercontrol";

//$ Main
export const DEV_VERSCTRL_ICON: AppIconTemp = {
    key: "versctrl",
    src: asset(`${VC_ICONPATH}/v3.4.1-version_control--3d-std-x1-195br-256p.png`),
    alt: "version_control_icon",
    color: "#FF8800"
}
export const DEV_GIT_ICON: AppIconTemp = {
    key: "git",
    src: asset(`${VC_ICONPATH}/v3.4-git--3d-std-x1-195br-256p.png`),
    alt: "git-icon",
    color: "#FF6B30"
}

//% Specific
export const DEV_GITLAB_ICON: AppIconTemp = {
    key: "gitlab",
    src: asset(`${VC_ICONPATH}/v3.4-gitlab--3d-std-x1-195br-256p.png`),
    alt: "gitlab-icon",
    color: "#085891"
}

//? GitHub??
// export const VC_GITHUB_ICON: AppIconTemp = {
//     key: "",
//     src: asset(`${VC_ICONPATH}/v3.4-_--3d-std-x1-195br-256p.png`),
//     alt: "-icon"
// }


//) * VERSION-CONTROL ICONSET * ------------------------------------------------------ (//
export const VC_ICONS: AppIconTemp[] = [ 
    DEV_VERSCTRL_ICON, DEV_GIT_ICON, DEV_GITLAB_ICON 
];