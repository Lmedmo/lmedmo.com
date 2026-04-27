import type { AppIconTemp } from "$lib/config";

import { 
    CODE_CSS_ICON, CODE_JAVA_ICON, CODE_JAVASCRIPT_ICON, CODE_PHP_ICON, CODE_PWRSH_ICON, CODE_PYTHON_ICON, CODE_RUST_ICON, CODE_TYPESCRIPT_ICON, DB_MSSQL_ICON, DB_MYSQL_ICON, DB_SQLITE_ICON, DEFAULT_ICON, DESIGN_ADOBECC_ICON, DESIGN_AUTODESK_ICON, DESIGN_FIGMA_ICON, DESIGN_SKETCH_ICON, DESIGN_SPLINE_ICON, DEV_COMMANDLINE_ICON, DEVFW_JAVAFX_ICON, DEVFW_SCENEBLDR_ICON, DEVFW_SVELTE_ICON, DEVFW_TAURI_ICON, DEVFW_XAMP_ICON, DEVFW_DENO_ICON, HOST_ACME_ICON, HOST_APACHE_ICON, HOST_CADDY_ICON, HOST_COOLIFY_ICON, HOST_LETSENCRYPT_ICON, HOST_NGINX_ICON, IDE_VSCODE_ICON, NET_CISCO_ICON, NET_PFSENSE_ICON, NET_UNIFI_ICON, OS_LINUX_ICON, OS_NIXOS_ICON, OS_UBUNTU_ICON, OS_WINDOWS_ICON, OS_WINSERVER_ICON, SKILL_ASSETMGMT_ICON, SVC_BITWARDEN_ICON, SVC_JELLYFIN_ICON, SVC_NEXTCLOUD_ICON, SVC_RUSTDESK_ICON, SYSCM_HCLBIGFIX_ICON, SYSCM_M365_ICON, SYSCM_MECM_ICON, SYSCM_MS_AD_ICON, DEV_GIT_ICON, DEV_GITLAB_ICON, VIRT_DOCKER_ICON, VIRT_HYPERV_ICON, VIRT_PODMAN_ICON, VIRT_PROXMOX_ICON, VIRT_VMWARE_ICON, CODE_CODELANG_ICON, CODE_HTML_ICON, DEV_PROGRAMMING_ICON, DEV_SOFTWDESIGN_ICON, DEV_SOFTWENGINEER_ICON, DEV_VERSCTRL_ICON, DEVFW_DOTNET_ICON, DEVFW_NODE_ICON, NET_CLOUDFLARE_ICON, 
    OS_RHEL_ICON,
    DEV_AGILE_ICON,
    SYSCM_FOGPROJ_ICON
} from "$lib/config/iconcfg";


export type TopicGroup = "codelang" | "networking" | "virtualization" | "services" | "os" | "databases" | "hosting" | "infosec" | "cfgmgmt" | "devtool" | "framework" | "coding" | "design" | "texteditor" | string;

export interface TopicTagTemp {
    keyword: string;
    name: string;
    icon: AppIconTemp;
    link: string;
}


export function findtopic(key: string): TopicTagTemp {
    console.log("[fn]: 'findtopic' [arg]: 'key' = ", key);

    let topic = ALL_TOPICS.find(t => t.keyword === key);

    if (!topic) {
        console.warn(`[fn]: findtopic, [warn]: Topic with keyword "${key}" not found.`);
        topic = {
            keyword: key,
            name: key,
            icon: DEFAULT_ICON,
            link: ""
        }
    }
    return topic
}


export const ALL_TOPICS: TopicTagTemp[] = [
    { keyword: "acme",          name: "ACME",                     icon: HOST_ACME_ICON,           link: "" },
    { keyword: "agile",         name: "Agile",                    icon: DEV_AGILE_ICON,           link: "" },
    { keyword: "adobe_cc",      name: "Adobe Creative Cloud",     icon: DESIGN_ADOBECC_ICON,      link: "" },
    { keyword: "apache",        name: "Apache",                   icon: HOST_APACHE_ICON,         link: "" },
    { keyword: "assetmgmt",     name: "Asset Management",         icon: SKILL_ASSETMGMT_ICON,     link: "" },
    { keyword: "autodesk",      name: "Autodesk",                 icon: DESIGN_AUTODESK_ICON,     link: "" },
    { keyword: "bitwarden",     name: "Bitwarden Server",         icon: SVC_BITWARDEN_ICON,       link: "" },
    { keyword: "caddy",         name: "Caddy",                    icon: HOST_CADDY_ICON,          link: "" },
    { keyword: "cisco",         name: "Cisco",                    icon: NET_CISCO_ICON,           link: "" },
    { keyword: "cloudflare",    name: "Cloudflare",               icon: NET_CLOUDFLARE_ICON,      link: "" },
    { keyword: "codelang",      name: "Code Languages",           icon: CODE_CODELANG_ICON,       link: "" },
    { keyword: "commandline",   name: "Command Line",             icon: DEV_COMMANDLINE_ICON,     link: "" },
    { keyword: "coolify",       name: "Coolify",                  icon: HOST_COOLIFY_ICON,        link: "" },
    { keyword: "css",           name: "CSS",                      icon: CODE_CSS_ICON,            link: "" },
    { keyword: "deno",          name: "Deno",                     icon: DEVFW_DENO_ICON,          link: "" },
    { keyword: "docker",        name: "Docker",                   icon: VIRT_DOCKER_ICON,         link: "" },
    { keyword: "dotnet",        name: ".NET",                     icon: DEVFW_DOTNET_ICON,        link: "" },
    { keyword: "figma",         name: "Figma",                    icon: DESIGN_FIGMA_ICON,        link: "" },
    { keyword: "fog_project",   name: "FOG Project",              icon: SYSCM_FOGPROJ_ICON,       link: "" },
    { keyword: "git",           name: "Git",                      icon: DEV_GIT_ICON,             link: "" },
    { keyword: "gitlab",        name: "GitLab Server",            icon: DEV_GITLAB_ICON,          link: "" },
    { keyword: "hcl_bigfix",    name: "HCL BigFix",               icon: SYSCM_HCLBIGFIX_ICON,     link: "" },
    { keyword: "html5",         name: "HTML5",                    icon: CODE_HTML_ICON,           link: "" },
    { keyword: "hyperv",        name: "Hyper-V",                  icon: VIRT_HYPERV_ICON,         link: "" },
    { keyword: "javascript",    name: "JavaScript",               icon: CODE_JAVASCRIPT_ICON,     link: "" },
    { keyword: "java",          name: "Java",                     icon: CODE_JAVA_ICON,           link: "" },
    { keyword: "javafx",        name: "JavaFX",                   icon: DEVFW_JAVAFX_ICON,        link: "" },
    { keyword: "jellyfin",      name: "Jellyfin Media Server",    icon: SVC_JELLYFIN_ICON,        link: "" },
    { keyword: "lets_encrypt",  name: "Let's Encrypt",            icon: HOST_LETSENCRYPT_ICON,    link: "" },
    { keyword: "linux",         name: "Linux",                    icon: OS_LINUX_ICON,            link: "" },
    { keyword: "mssql",         name: "MSSQL Server",             icon: DB_MSSQL_ICON,            link: "" },
    { keyword: "mecm",          name: "MECM",                     icon: SYSCM_MECM_ICON,          link: "" },
    { keyword: "m365",          name: "Microsoft 365",            icon: SYSCM_M365_ICON,          link: "" },
    { keyword: "ms_ad",         name: "Active Directory",         icon: SYSCM_MS_AD_ICON,         link: "" },
    { keyword: "mysql",         name: "MySQL",                    icon: DB_MYSQL_ICON,            link: "" },
    { keyword: "nextcloud",     name: "Nextcloud Server",         icon: SVC_NEXTCLOUD_ICON,       link: "" },
    { keyword: "nixos",         name: "NixOS",                    icon: OS_NIXOS_ICON,            link: "" },
    { keyword: "nginx",         name: "Nginx",                    icon: HOST_NGINX_ICON,          link: "" },
    { keyword: "node",          name: "Node.js",                  icon: DEVFW_NODE_ICON,          link: "" },
    { keyword: "pfsense",       name: "pfSense",                  icon: NET_PFSENSE_ICON,         link: "" },
    { keyword: "php",           name: "PHP",                      icon: CODE_PHP_ICON,            link: "" },
    { keyword: "podman",        name: "Podman",                   icon: VIRT_PODMAN_ICON,         link: "" },
    { keyword: "powershell",    name: "PowerShell",               icon: CODE_PWRSH_ICON,          link: "" },
    { keyword: "proxmox",       name: "Proxmox VE",               icon: VIRT_PROXMOX_ICON,        link: "" },
    { keyword: "programming",   name: "Programming",              icon: DEV_PROGRAMMING_ICON,     link: "" },
    { keyword: "python",        name: "Python",                   icon: CODE_PYTHON_ICON,         link: "" },
    { keyword: "rhel",          name: "RHEL",                     icon: OS_RHEL_ICON,             link: "" },
    { keyword: "rust",          name: "Rust",                     icon: CODE_RUST_ICON,           link: "" },
    { keyword: "rustdesk",      name: "RustDesk Server",          icon: SVC_RUSTDESK_ICON,        link: "" },
    { keyword: "scenebuilder",  name: "SceneBuilder",             icon: DEVFW_SCENEBLDR_ICON,     link: "" },
    { keyword: "sketch",        name: "Sketch",                   icon: DESIGN_SKETCH_ICON,       link: "" },
    { keyword: "softwdesign",   name: "Software Design",          icon: DEV_SOFTWDESIGN_ICON,     link: "" },
    { keyword: "softwengineer", name: "Software Engineer",        icon: DEV_SOFTWENGINEER_ICON,   link: "" },
    { keyword: "spline",        name: "Spline",                   icon: DESIGN_SPLINE_ICON,       link: "" },
    { keyword: "sqlite",        name: "SQLite",                   icon: DB_SQLITE_ICON,           link: "" },
    { keyword: "svelte",        name: "SvelteKit",                icon: DEVFW_SVELTE_ICON,        link: "" },
    { keyword: "tauri",         name: "Tauri",                    icon: DEVFW_TAURI_ICON,         link: "" },
    { keyword: "typescript",    name: "TypeScript",               icon: CODE_TYPESCRIPT_ICON,     link: "" },
    { keyword: "ubuntu",        name: "Ubuntu",                   icon: OS_UBUNTU_ICON,           link: "" },
    { keyword: "unifi",         name: "UniFi OS Server",          icon: NET_UNIFI_ICON,           link: "" },
    { keyword: "versctrl",      name: "Version Control",          icon: DEV_VERSCTRL_ICON,        link: "" },
    { keyword: "vmware",        name: "VMware",                   icon: VIRT_VMWARE_ICON,         link: "" },
    { keyword: "vscode",        name: "VSCode Server",            icon: IDE_VSCODE_ICON,          link: "" },
    { keyword: "windows",       name: "Windows",                  icon: OS_WINDOWS_ICON,          link: "" },
    { keyword: "winserver",     name: "Windows Server",           icon: OS_WINSERVER_ICON,        link: "" },
    { keyword: "xamp",          name: "XAMP",                     icon: DEVFW_XAMP_ICON,          link: "" },
]