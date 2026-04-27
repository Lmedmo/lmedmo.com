import type { FontFamilyOpt } from "./fonts";


//$ Models ----------------------------------------- */
//* App Text-Level template -- */
export interface TextLevelDefTemp {
    name: TextLevelOpt;
    sz: number;
}

//* App Text-Configuration template -- */
export interface AppTextCfgTemp {
    baselinefontsize: number;
    levels: TextLevelDefTemp[];
}

//* Text-Block Configuration template -- */
export interface TextBlockCfgTemp {
    font: FontFamilyOpt;
    lvl: TextLevelOpt; //? - Sets 'sz/wght'; If undefined || 'none' => Provide Definitions!
    size?: number;
    wght?: number;
    polychromatic?: boolean;
    color?: string;
    fontstyle?: FontStyleOpt;
    letspace?: number;
    txtalign?: TextAlignOpt;
    shdwstyle?: string;
    fxstyle?: string;
    overridelvlwght?: boolean;
}



//& DEFINITIONS ------------------------------------------------------------ */
//? Text-Level Options -- DEFINITIONS... /*
//?  - Text 'Levels' set default 'size' and 'wght' values of a particular font.
//?  - Each level added here AND to the APP_TEXT_LEVELS array:
//?    '-> Used in AppConfig.text.levels[] (See 'cfg.ts'). 
// ---------------------------------------------------------- */
export type TextLevelOpt = "h0" | "h1" | "h2" | "h3" | "h4" | "cnav" | "tab" | "tbar" | "btn" | "tag" | "qt" | "bold" | "reg" | "none";

//% Font-Style / Text-Alignment Options -- */
export type FontStyleOpt = "normal" | "italic";

export type TextAlignOpt = "left" | "center" | "right";


//) * App Baseline Font-size * (//
export const APP_BASELINE_FONTSIZE: number = 18;


//) * App Text-Levels * (//
export const APP_TEXT_LEVELS: TextLevelDefTemp[] = [
    { name: "h0",   sz: 58 },
    { name: "h1",   sz: 48 },
    { name: "h2",   sz: 38 }, 
    { name: "h3",   sz: 28 },
    { name: "h4",   sz: 20 }, 
    { name: "cnav", sz: 19 },
    { name: "tbar", sz: 18 },
    { name: "tab",  sz: 18 },
    { name: "tag",  sz: 18 },
    { name: "btn",  sz: 18 },
    { name: "qt",   sz: 18 },
    { name: "bold", sz: 18 },
    { name: "reg",  sz: 18 },
];


//> Defaults ------------------------------------------------------------ */
export const DEFAULT_TXT_CFG: TextBlockCfgTemp = {
    font: "Mulish",
    lvl: "reg",
    size: APP_BASELINE_FONTSIZE,
    wght: 400,
    polychromatic: false,
    color: "#404040",
    fontstyle: "normal",
    letspace: 0,
    txtalign: "left",
    shdwstyle: "text-shadow: none;",
    fxstyle: "",
    overridelvlwght: false,
};


// export const APP_VTEXT_LEVELS: TextLevelDefTemp[] = [
//     { name: "h0",   sz: APP_BASELINE_FONTSIZE * 3.25 },
//     { name: "h1",   sz: APP_BASELINE_FONTSIZE * 2.375 },
//     { name: "h2",   sz: APP_BASELINE_FONTSIZE * 2.0 }, 
//     { name: "h3",   sz: APP_BASELINE_FONTSIZE * 1.625 },
//     { name: "h4",   sz: APP_BASELINE_FONTSIZE * 1.25 }, 
//     { name: "tab",  sz: 18 },
//     { name: "tbar", sz: 18 },
//     { name: "btn",  sz: APP_BASELINE_FONTSIZE * 1.125 },
//     { name: "nav",  sz: APP_BASELINE_FONTSIZE * 1.0625 },
//     { name: "tag",  sz: APP_BASELINE_FONTSIZE },
//     { name: "qot",  sz: APP_BASELINE_FONTSIZE },
//     { name: "bold", sz: APP_BASELINE_FONTSIZE },
//     { name: "reg",  sz: APP_BASELINE_FONTSIZE },
// ];

// export const DEFAULT_POLYCHROMATIC_TXT: PolyChromaticTxtCfgTemp = {
//     enabled: true,
//     txtarr: ["hoopy", "floop", "woop"],
//     colorarr: ["#e10000", "#00c51a", "#3f86ff"],
// }