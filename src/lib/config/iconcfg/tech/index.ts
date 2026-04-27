import { buildset, CODE_ICONS, DB_ICONS, HOST_ICONS, NET_ICONS, OS_ICONS, SEC_ICONS, SVC_ICONS, SYSCM_ICONS, VIRT_ICONS } from '..';
import type { AppIconTemp } from '..';

export * from './code';
export * from './cfgmgmt';
export * from './databases';
export * from './hosting';
export * from './infosec';
export * from './networking';
export * from './os';
export * from './services';
export * from './virtualization';

//) * TECH ICONSET * ------------------------------------------------------ (//
export const TECH_ICONS: AppIconTemp[] = buildset([ 
    CODE_ICONS,
    SYSCM_ICONS, 
    DB_ICONS,
    HOST_ICONS, 
    SEC_ICONS, 
    NET_ICONS, 
    OS_ICONS, 
    SVC_ICONS, 
    VIRT_ICONS
]);