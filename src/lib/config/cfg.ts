import type { AppConfigTemp } from "$lib/config";
import { APP_ICON } from "$lib/config/iconcfg";
import {
    HOME_PAGE_CFG, RESUME_PAGE_CFG, SKILLS_PAGE_CFG, EMPLOYMENT_PAGE_CFG, EDUCATION_PAGE_CFG, CERTIFICATIONS_PAGE_CFG, PROJECTS_PAGE_CFG, REFERENCES_PAGE_CFG
} from '$lib/config/pgs';
import {
    APP_TEXT_LEVELS, APP_BASELINE_FONTSIZE,
    FONTCFG_ALEO, FONTCFG_BE_VIETNAM_PRO, FONTCFG_MULISH, FONTCFG_SONO, FONTCFG_GEIST_PX_LN, FONTCFG_GEIST_PX_SQR, FONTCFG_RED_HAT_MONO
} from "$lib/config/fontcfg";



//) * App Configuration Object * ------------------------------------------------------- */ 
export const AppConfig: AppConfigTemp = {
    icon: APP_ICON,
    contentmaxwidth: 1300,
    text: {
        baselinefontsize: APP_BASELINE_FONTSIZE,
        levels: APP_TEXT_LEVELS
    },
    fonts: [
        FONTCFG_ALEO, 
        FONTCFG_BE_VIETNAM_PRO, 
        FONTCFG_GEIST_PX_LN,
        FONTCFG_GEIST_PX_SQR,
        FONTCFG_MULISH,
        FONTCFG_RED_HAT_MONO,
        FONTCFG_SONO
    ],
    pages: [
        HOME_PAGE_CFG,
        RESUME_PAGE_CFG,
        SKILLS_PAGE_CFG,
        EMPLOYMENT_PAGE_CFG,
        EDUCATION_PAGE_CFG,
        CERTIFICATIONS_PAGE_CFG,
        PROJECTS_PAGE_CFG,
        REFERENCES_PAGE_CFG,
    ],
    rt_pages: [
        {
            id: 0,
            page_id: 1,
            default_redirect_page_id: 2
        }
    ],
};