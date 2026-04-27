import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const SOCIAL_ICONPATH: string = "/icons/social";

//$ Generic
export const SOCIAL_EMAIL_ICON: AppIconTemp = {
    key: "email",
    src: asset(`${SOCIAL_ICONPATH}/v3.4-email--3d-std-x1-195br-256p.png`),
    alt: "email-icon",
    color: "#4d4d4d"
}
//? Link ?? */


//% Platform
export const SOCIAL_DISCORD_ICON: AppIconTemp = {
    key: "discord",
    src: asset(`${SOCIAL_ICONPATH}/v3.4-discord--3d-std-x1-195br-256p.png`),
    alt: "discord-icon",
    color: "#5865F2"
}

//? LinkedIn ?? */

//? X ?? */


//) * SOCIAL ICONSET * ------------------------------------------------------ (//
export const SOCIAL_ICONS: AppIconTemp[] = [ SOCIAL_EMAIL_ICON, SOCIAL_DISCORD_ICON ];