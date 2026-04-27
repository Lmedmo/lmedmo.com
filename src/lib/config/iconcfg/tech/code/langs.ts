import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const LANG_ICONPATH: string = "/icons/_tech/_code/langs";

//$ Languages
export const CODE_CODELANG_ICON: AppIconTemp = {
    key: "codelang",
    src: asset(`${LANG_ICONPATH}/v3.4-codelang--3d-alt_dk_blue-x1-195br-256p.png`),
    alt: "codelang-icon",
    color: "#004480"
}

export const CODE_JAVASCRIPT_ICON: AppIconTemp = {
    key: "javascript",
    src: asset(`${LANG_ICONPATH}/javascript--3d-std-x1-195br-256p.png`),
    alt: "javascript-icon",
    color: "#E0CA00"
}
export const CODE_PHP_ICON: AppIconTemp = {
    key: "php",
    src: asset(`${LANG_ICONPATH}/php--3d-std-x1-195br-256p.png`),
    alt: "php-icon",
    color: "#9F57FF"
}
export const CODE_TYPESCRIPT_ICON: AppIconTemp = {
    key: "typescript",
    src: asset(`${LANG_ICONPATH}/typescript--3d-std-x1-195br-256p.png`),
    alt: "typescript-icon",
    color: "#006AFF"
}

export const CODE_CSS_ICON: AppIconTemp = {
    key: "css",
    src: asset(`${LANG_ICONPATH}/v3.4-css--3d-std-x1-195br-256p.png`),
    alt: "css-icon",
    color: "#A72BFF"
}
export const CODE_HTML_ICON: AppIconTemp = {
    key: "html5",
    src: asset(`${LANG_ICONPATH}/v3.4-html_5--3d-std-x1-195br-256p.png`),
    alt: "html5-icon",
    color: "#FF4000"
}
export const CODE_JAVA_ICON: AppIconTemp = {
    key: "java",
    src: asset(`${LANG_ICONPATH}/v3.4-java--3d-alt_lt-x1-195br-256p.png`),
    alt: "java-icon",
    color: "#E93323"
}
export const CODE_PWRSH_ICON: AppIconTemp = {
    key: "powershell",
    src: asset(`${LANG_ICONPATH}/v3.4-powershell--3d-alt_lt-x1-195br-256p.png`),
    alt: "powershell-icon",
    color: "#4D7BD8"
}
export const CODE_PYTHON_ICON: AppIconTemp = {
    key: "python",
    src: asset(`${LANG_ICONPATH}/v3.4-python--3d-std-x1-195br-256p.png`),
    alt: "python-icon",
    color: "#002B80",
    boostcontrast: true
}
export const CODE_RUST_ICON: AppIconTemp = {
    key: "rust",
    src: asset(`${LANG_ICONPATH}/v3.4.1-rust--3d-std-x1-195br-256p.png`),
    alt: "rust-icon",
    color: "#F98315"
}


//) * CODELANG ICONSET * ------------------------------------------------------ (//
export const CODELANG_ICONS: AppIconTemp[] = [
    CODE_CODELANG_ICON,
    CODE_JAVASCRIPT_ICON,
    CODE_PHP_ICON,
    CODE_TYPESCRIPT_ICON,
    CODE_CSS_ICON,
    CODE_HTML_ICON,
    CODE_JAVA_ICON,
    CODE_PWRSH_ICON,
    CODE_PYTHON_ICON,
    CODE_RUST_ICON
];