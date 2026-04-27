import type { AppIconTemp, AppFontDefinitionTemp, AppTextCfgTemp, AppPageCfgTemp, AppRoutingPageCfgTemp } from "$lib/config";
import { AppConfig } from "$lib/config";

//$ Default 'AppState' Values ---------------------------------- */
export function defaultAppPage(): AppPageCfgTemp {
    let p = AppConfig.pages[0];
    return p
}


//) State ------------------------------------------ */
export const AppState: AppStateTemp = $state({
    page: defaultAppPage(),
});


//> Models ------------------------------------------------------- */
export interface AppStateTemp {
    page: AppPageCfgTemp;
}
export interface AppConfigTemp {
    icon: AppIconTemp;
    contentmaxwidth: number;
    text: AppTextCfgTemp;
    fonts: AppFontDefinitionTemp[];
    pages: AppPageCfgTemp[];
    rt_pages: AppRoutingPageCfgTemp[];
}

//~ Buttons */
export type ButtonActionOpt = "mailto" | "download" | "linkto" | "navto" | "choosepath";

export interface ButtonCfgTemp {
    action: ButtonActionOpt;
    href: string; // email_address, asset_filepath., link(external), page(internal), directory(host)
    assetname?: string; // Only used for "download" action
}



