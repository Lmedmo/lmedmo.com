import { buildset, PAGE_ICONS, PROJX_ICONS, SYMBOL_ICONS, TAB_ICONS, TBAR_ICONS } from '$lib/config/iconcfg';
import type { AppIconTemp } from '$lib/config/iconcfg';


export * from './pageicons';
export * from './projx';
export * from './symbols';
export * from './tabicons';
export * from './titlebar';

//) * APP ICONSET * ------------------------------------------------------ (//
export const APP_ICONS: AppIconTemp[] = buildset([ 
    PAGE_ICONS,
    PROJX_ICONS,
    TAB_ICONS,
    SYMBOL_ICONS,
    TBAR_ICONS
]);