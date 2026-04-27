import { buildset, CERT_ICONS, JOB_ICONS, SKILL_ICONS } from '..';
import type { AppIconTemp } from '..';

export * from './certifications';
export * from './skills';
export * from './jobs';

//) * WORK ICONSET * ------------------------------------------------------ (//
export const WORK_ICONS: AppIconTemp[] = buildset([ CERT_ICONS, JOB_ICONS, SKILL_ICONS ]);