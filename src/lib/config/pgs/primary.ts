import type { AppPageCfgTemp } from '$lib/config';
import { DEFAULT_ICON, APP_ICON, TABICON_HOME, TABICON_RESUME } from '$lib/config';


//$ Page Configs ------------------------------------------------------- */
export const HOME_PAGE_CFG: AppPageCfgTemp = {
    id: 0,
    url: "/",
    redirects: false,
    name: "Home",
    icons: {
        tabicon: TABICON_HOME,
        headericon: APP_ICON,
        titlebaricon: APP_ICON,
        menubaricon: APP_ICON,
        pageicons: []
    },
    colors: { 
        main: "#55CC00",
        frameGradD: "#409900",
        frameGradL: "#86E500",
        tabGradL: "#86E500",
        tabGradD: "#00B22D",
        frameStroke: "#11CC00",
        frameShad: "#204D00",
        txtcolor: "#55CC00"
    },
    parent: 0, 
}

export const RESUME_PAGE_CFG: AppPageCfgTemp = {
    id: 1,
    url: "/resume",
    redirects: true,
    name: "Resumé",
    icons: {
        tabicon: TABICON_RESUME,
        headericon: DEFAULT_ICON,
        titlebaricon: DEFAULT_ICON,
        menubaricon: DEFAULT_ICON,
        pageicons: []
    },
    colors: { 
        main: "#4D4D4D",
        frameGradD: "#808080",
        frameGradL: "#E0E0E0",
        tabGradL: "#C0C0C0",
        tabGradD: "#101010",
        frameStroke: "#303030",
        frameShad: "#000000",
        txtcolor: "#101010"
    },
    parent: 0,
}