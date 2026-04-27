import type { AppIconTemp } from '$lib/config';
import { AppState, AppConfig, defaultAppPage } from '$lib/config';


export interface AppPageCfgTemp {
    id: number;
    url: string;
    redirects: boolean;
    name: string;
    // pageicons: AppIconTemp[];
    icons: AppPageIconSet;
    colors: AppPageColorSet;
    parent: number;
}

export interface AppRoutingPageCfgTemp {
    id: number;
    page_id: number;
    default_redirect_page_id: number;
}
export interface AppPageIconSet {
    tabicon: AppIconTemp;
    headericon: AppIconTemp;
    titlebaricon: AppIconTemp;
    menubaricon: AppIconTemp;
    pageicons: AppIconTemp[];
}
export interface AppPageColorSet {
    main: string;
    frameGradL: string;
    frameGradD: string;
    tabGradL: string;
    tabGradD: string;
    frameStroke: string;
    frameShad: string;
    txtcolor: string;
    // lighter: string;
    // darker: string;
}


//& Methods ------------------------------------------ */
export function setPage(p: AppPageCfgTemp) {
    console.log("[fn]: setPage, [arg]: 'p' = ", p);

    AppState.page.id = p.id;
    AppState.page.url = p.url;
    AppState.page.name = p.name;
    AppState.page.icons = p.icons;
    AppState.page.parent = p.parent;

    console.log("[fn]: setPage, [updated-state]: 'AppState' = ", $state.snapshot(AppState));
}

export function isSelected(tabpage: AppPageCfgTemp, statepage: AppPageCfgTemp ): boolean {
    console.log("[fn]: isSelected, [arg]: 'tabpage' = ", tabpage);
    console.log("[fn]: isSelected, [arg]: 'statepage' = ", statepage);

    if (tabpage.id === statepage.id) {
        console.log("[fn]: isSelected, [result]: true, [info]: 'statepage.id' matches 'tabpage.id'");
        return true;
    } else if (tabpage.id === 0) { // 'Home' tab
        if (statepage.id !== 0) {
            console.log("[fn]: isSelected, [result]: false, [info]: 'tabpage.id' = 0 and 'statepage.id' != 0");
            return false;
        }
    } else { // Not 'Home' tab  
        if (statepage.id === 0) { 
            console.log("[fn]: isSelected, [result]: false, [info]: 'tabpage.id' != 0 and 'statepage.id' = 0");
            return false;
        } else {
            let n: number = 1;
            let statePageNthParentID: number = statepage.parent;

            while (statePageNthParentID !== 0) {
                let statepageParent = AppConfig.pages.find((pg) => pg.id === statePageNthParentID);

                if (typeof statepageParent === "undefined") {
                    console.log("[fn]: isSelected, [info]: 'statepageParent' is undefined, breaking loop...");
                    break
                }

                if (statepageParent.id === tabpage.id) {
                    console.log("[fn]: isSelected, [result]: true, [info]: statepageParent.id === tabpage.id");

                    return true;
                } else if (statepageParent.id === 0) {
                    console.log("[fn]: isSelected, [result]: false, [info]: statepageParent.id === 0");

                    return false;
                } else {
                    statePageNthParentID = statepageParent.parent;
                    n += 1;

                    console.log(`[fn]: isSelected, [info]: continuing to generation ${n}...`);
                }
            }

            console.log("[fn]: isSelected, [result]: false, [info]: loop escaped without match");

            return false;
        }
    }
    console.log("[fn]: isSelected, [result]: false, [info]: no conditions met");
    return false;
}

export function getPageByUrl(url: string): AppPageCfgTemp {
    console.log("[fn]: getPageByUrl, [arg]: 'url' = ", url);

    let page = AppConfig.pages.find((pg) => pg.url === url);

    if (typeof(page) === "undefined") {
        console.log("[fn]: getPageByUrl, [result]: defaultAppPage(), [info]: 'page' is undefined");

        return defaultAppPage();
    } else {
        console.log("[fn]: getPageByUrl, [result]: 'page' found = ", page);

        return page;
    }
}
