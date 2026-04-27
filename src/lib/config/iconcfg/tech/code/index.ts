import { buildset, CODELANG_ICONS, DEVFW_ICONS, DEVGEN_ICONS, IDE_ICONS, VC_ICONS } from '$lib/config/iconcfg';
import type { AppIconTemp } from '$lib/config/iconcfg';


export * from './editors';
export * from './frameworks';
export * from './general';
export * from './langs';
export * from './vercontrol';


//) * CODE ICONSET * ------------------------------------------------------ (//
export const CODE_ICONS: AppIconTemp[] = buildset([ 
    IDE_ICONS, 
    DEVFW_ICONS, 
    DEVGEN_ICONS, 
    CODELANG_ICONS, 
    VC_ICONS
]);