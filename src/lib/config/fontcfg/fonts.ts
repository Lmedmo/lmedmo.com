import type { TextLevelOpt } from "./text";


//$ Models ----------------------------------------- */
//> Font-Definition template -- */
export interface AppFontDefinitionTemp {
    fontfamily: FontFamilyOpt;
    varfont: boolean;
    italicfont: boolean;
    lvlwghts: TxtLvlWghtMapTemp[];
}

//> 'Font-Weight' => 'Text-Level' mapping template -- */
export interface TxtLvlWghtMapTemp {
    lvlname: TextLevelOpt;
    varwghtval: number;
    staticwghtval: AppFontFaces;
}


//& DEFINITIONS ---------------------------------------------------------------------- */
/*//) * Font-Face Options -- DEFINITIONS... 
//*   - Corresponds to assigned 'font-family' values of each '@font-face' declaration:
//*     '-> See font stylesheet (ie. "$app/static/fonts/font.css").
//*   - Each font-face added here AND defined below:
//*     '-> Added to AppConfig.fonts[] (See 'cfg.ts').
// ---------------------------------------------------- */

export type AppFontFaces = 
    "Aleo" | "Aleo-Italic" | "Be-Vietnam-Pro" | "Be-Vietnam-Pro-Italic" | "Geist-Pixel-Line" | "Geist-Pixel-Sqr" | "Mulish" | "Mulish-Italic" | "Sono" | "Red-Hat-Mono" | ""
;


/*//) * Font-Family Options -- DEFINITIONS...
//*   - Referenced in markup / styles. Generic name (no italic/weight specifiers).
// ----------------------------------------------------------------------------------- */

export type FontFamilyOpt = 
    "Aleo" | "Be-Vietnam-Pro" | "Mulish" | "Geist-Pixel-Line" | "Geist-Pixel-Sqr" | "Sono" | "Red-Hat-Mono" | "Red-Hat-Mono-Italic";


/*//) * App Font-Definitions -- DEFINITIONS...
//*   - Includes 'Text-Level' definitions for specified font.
//*     '-> Defines size/wght values of a font-face/family for each text-style ~ [ h0, h1, h2, ... , reg ].
// -------------------------------------------------------------------------------------------------------- */

//% Aleo ------------------------------------------------------------- */
export const FONTCFG_ALEO: AppFontDefinitionTemp = {
    fontfamily: "Aleo",
    varfont: true,
    italicfont: true,
    lvlwghts: [
        { lvlname: "h2",   varwghtval: 780, staticwghtval: "" },
        { lvlname: "h3",   varwghtval: 730, staticwghtval: "" },
        { lvlname: "h4",   varwghtval: 450, staticwghtval: "" },
        { lvlname: "qt",   varwghtval: 380, staticwghtval: "" },
        { lvlname: "reg",  varwghtval: 375, staticwghtval: "" },
    ]
}

//% Be-Vietnam-Pro ------------------------------------------------------------- */
export const FONTCFG_BE_VIETNAM_PRO: AppFontDefinitionTemp = {
    fontfamily: "Be-Vietnam-Pro",
    varfont: true,
    italicfont: true,
    lvlwghts: [
        { lvlname: "h0",   varwghtval: 900, staticwghtval: "" },
        // { lvlname: "h1",   varwghtval: 800, staticwghtval: "" },
        // { lvlname: "h2",   varwghtval: 700, staticwghtval: "" },
        // { lvlname: "h3",   varwghtval: 600, staticwghtval: "" },
        { lvlname: "h4",   varwghtval: 200, staticwghtval: "" },
    ]
}

//% Mulish ------------------------------------------------------------- */
export const FONTCFG_MULISH: AppFontDefinitionTemp = {
    fontfamily: "Mulish",
    varfont: true,
    italicfont: true,
    lvlwghts: [
        { lvlname: "h0",   varwghtval: 930, staticwghtval: "" },
        { lvlname: "h1",   varwghtval: 900, staticwghtval: "" },
        { lvlname: "h2",   varwghtval: 690, staticwghtval: "" },
        { lvlname: "h3",   varwghtval: 670, staticwghtval: "" },
        { lvlname: "h4",   varwghtval: 430, staticwghtval: "" },
        { lvlname: "tab",  varwghtval: 370, staticwghtval: "" },
        { lvlname: "tbar", varwghtval: 490, staticwghtval: "" },
        { lvlname: "bold", varwghtval: 800, staticwghtval: "" },
        { lvlname: "reg",  varwghtval: 360, staticwghtval: "" },
    ]
}

//% Geist-Pixel-Line ------------------------------------------------------------- */
export const FONTCFG_GEIST_PX_LN: AppFontDefinitionTemp = {
    fontfamily: "Geist-Pixel-Line",
    varfont: true,
    italicfont: false,
    lvlwghts: [
        { lvlname: "h0",   varwghtval: 400, staticwghtval: "" },
        { lvlname: "h1",   varwghtval: 400, staticwghtval: "" },
        { lvlname: "h2",   varwghtval: 400, staticwghtval: "" },
        { lvlname: "h3",   varwghtval: 400, staticwghtval: "" },
        { lvlname: "h4",   varwghtval: 400, staticwghtval: "" },
    ]
}

//% Geist-Pixel-Sqr ------------------------------------------------------------- */
export const FONTCFG_GEIST_PX_SQR: AppFontDefinitionTemp = {
    fontfamily: "Geist-Pixel-Sqr",
    varfont: true,
    italicfont: false,
    lvlwghts: [
        { lvlname: "h0",   varwghtval: 400, staticwghtval: "" },
        { lvlname: "h1",   varwghtval: 400, staticwghtval: "" },
        { lvlname: "h2",   varwghtval: 400, staticwghtval: "" },
        { lvlname: "h3",   varwghtval: 400, staticwghtval: "" },
        { lvlname: "h4",   varwghtval: 400, staticwghtval: "" },
    ]
}

//% Sono ------------------------------------------------------------- */
export const FONTCFG_SONO: AppFontDefinitionTemp = {
    fontfamily: "Sono",
    varfont: true,
    italicfont: false,
    lvlwghts: [
        { lvlname: "h1",   varwghtval: 500, staticwghtval: "" },
        { lvlname: "h2",   varwghtval: 520, staticwghtval: "" },
        { lvlname: "h3",   varwghtval: 445, staticwghtval: "" },
        { lvlname: "h4",   varwghtval: 510, staticwghtval: "" },
        { lvlname: "cnav", varwghtval: 385, staticwghtval: "" },
        { lvlname: "btn",  varwghtval: 410, staticwghtval: "" },
        { lvlname: "tag",  varwghtval: 430, staticwghtval: "" },
    ]
}

//% Red-Hat-Mono ------------------------------------------------------------- */
export const FONTCFG_RED_HAT_MONO: AppFontDefinitionTemp = {
    fontfamily: "Red-Hat-Mono",
    varfont: true,
    italicfont: true,
    lvlwghts: [
        { lvlname: "bold", varwghtval: 700, staticwghtval: "" },
        { lvlname: "reg",  varwghtval: 440, staticwghtval: "" },
    ]
}