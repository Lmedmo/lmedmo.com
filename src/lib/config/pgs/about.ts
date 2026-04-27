import type { AppPageCfgTemp } from '$lib/config';

import { 
    TABICON_RESUME,
    PAGEICON_SKILLS, PAGEICON_CAREER, PAGEICON_EDU, PAGEICON_CERTS, PAGEICON_PROJX, PAGEICON_REFS,
    TBARICON_SKILLS, TBARICON_CAREER, TBARICON_EDU, TBARICON_CERTS, TBARICON_PROJX, TBARICON_REFS,
} from '$lib/config/iconcfg';


//$ Page Configs ------------------------------------------------------- */
export const SKILLS_PAGE_CFG: AppPageCfgTemp = {
    id: 2,
    url: "/resume/skills",
    redirects: false,
    name: "Skills",
    icons: {
        tabicon: TABICON_RESUME, 
        headericon: PAGEICON_SKILLS, 
        titlebaricon: TBARICON_SKILLS, 
        menubaricon: PAGEICON_SKILLS,
        pageicons: []
    },
    colors: { 
        main: "#FF4422",
        frameGradD: "#F00000",
        frameGradL: "#FF8080",
        tabGradL: "#FB5F51",
        tabGradD: "#D41111",
        frameStroke: "#FF3030",
        frameShad: "#B2000F",
        txtcolor: "#FF3030"
    },
    parent: 1,
}

export const EMPLOYMENT_PAGE_CFG: AppPageCfgTemp = {
    id: 3,
    url: "/resume/employment",
    redirects: false,
    name: "Employment",
    icons: {
        tabicon: TABICON_RESUME, 
        headericon: PAGEICON_CAREER, 
        titlebaricon: TBARICON_CAREER, 
        menubaricon: PAGEICON_CAREER,
        pageicons: []
    },
    colors: { 
        main: "#FFE733",
        frameGradD: "#E5AC00",
        frameGradL: "#FFE229",
        tabGradL: "#FFE566",
        tabGradD: "#F0C000",
        frameStroke: "#F7DC6E",
        frameShad: "#C3A822",
        txtcolor: "#E5BF00"
    },
    parent: 1
}

export const EDUCATION_PAGE_CFG: AppPageCfgTemp = {
    id: 4,
    url: "/resume/education",
    redirects: false,
    name: "Education",
    icons: {
        tabicon: TABICON_RESUME, 
        headericon: PAGEICON_EDU, 
        titlebaricon: TBARICON_EDU, 
        menubaricon: PAGEICON_EDU,
        pageicons: []
    },
    colors: { 
        main: "#0080FF",
        frameGradD: "#0043C6",
        frameGradL: "#00B2FF",
        tabGradL: "#0080FF",
        tabGradD: "#0033CC",
        frameStroke: "#3377FF",
        frameShad: "#4D6DCB",
        txtcolor: "#3366FF"
    },
    parent: 1
}

export const CERTIFICATIONS_PAGE_CFG: AppPageCfgTemp = {
    id: 5,
    url: "/resume/certifications",
    redirects: false,
    name: "Certificates",
    icons: {
        tabicon: TABICON_RESUME, 
        headericon: PAGEICON_CERTS, 
        titlebaricon: TBARICON_CERTS, 
        menubaricon: PAGEICON_CERTS,
        pageicons: []
    },
    colors: { 
        main: "#77DD00",
        frameGradD: "#409900",
        frameGradL: "#86E500",
        tabGradL: "#86E500",
        tabGradD: "#00B22D",
        frameStroke: "#11CC00",
        frameShad: "#204D00",
        txtcolor: "#55CC00"
    },
    parent: 1
}

export const PROJECTS_PAGE_CFG: AppPageCfgTemp = {
    id: 6,
    url: "/resume/projects",
    redirects: false,
    name: "Projects",
    icons: {
        tabicon: TABICON_RESUME, 
        headericon: PAGEICON_PROJX, 
        titlebaricon: TBARICON_PROJX, 
        menubaricon: PAGEICON_PROJX,
        pageicons: []
    },
    colors: { 
        main: "#FF7300", 
        frameGradD: "#FF670F", 
        frameGradL: "#FF9F1A",
        tabGradL: "#FF9F1A", 
        tabGradD: "#FF5500",
        frameStroke: "#FF6B00",
        frameShad: "#CC6600",
        txtcolor: "#FF6B00"
    },
    parent: 1
}

export const REFERENCES_PAGE_CFG: AppPageCfgTemp = {
    id: 7,
    url: "/resume/references",
    redirects: false,
    name: "References",
    icons: {
        tabicon: TABICON_RESUME, 
        headericon: PAGEICON_REFS, 
        titlebaricon: TBARICON_REFS, 
        menubaricon: PAGEICON_REFS,
        pageicons: []
    },
    colors: { 
        main: "#A022FF", 
        frameGradD: "#A800B1", 
        frameGradL: "#FF33BB",
        tabGradL: "#FA00F2", 
        tabGradD: "#660099",
        frameStroke: "#D100F6",
        frameShad: "#AA00CC",
        txtcolor: "#B300D3"
    },
    parent: 1
}