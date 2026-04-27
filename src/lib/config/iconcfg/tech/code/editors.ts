import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const IDE_ICONPATH: string = "/icons/_tech/_code/editors";

//$ Code Editors
export const IDE_VSCODE_ICON: AppIconTemp = {
    key: "vscode",
    src: asset(`${IDE_ICONPATH}/v3.4-vscode--3d-alt_lt-x1-195br-256p.png`),
    alt: "vscode-icon",
    color: "#156AF3"
}

//) * CODE-EDITOR ICONSET * ------------------------------------------------------ (//
export const IDE_ICONS: AppIconTemp[] = [ IDE_VSCODE_ICON ];