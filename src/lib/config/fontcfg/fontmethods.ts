import { AppConfig } from "../cfg";
import type { TextLevelOpt, TextBlockCfgTemp, FontStyleOpt } from "./text";
import type { FontFamilyOpt, AppFontDefinitionTemp } from "./fonts";


//> Methods: ------------------------------------------------------------ */
export function useLvlDefinition(
    lvl: TextLevelOpt, 
    font: FontFamilyOpt,
    style: FontStyleOpt = "normal"
): [number, string, string, boolean] {
    
    // const STDSZ: number = AppConfig.text.baselinefontsize;
    const STDSZ: number = 16;

    let lvlsz: number = AppConfig.text.levels.find((l) => l.name === lvl)?.sz ?? STDSZ;
    let lvlwght: string = "0";
    let lvlface: string = "";
    let includewghtstyle: boolean = true;

    let italfont: boolean = false;
    let ftypevar: boolean = false;

    let fontdef: AppFontDefinitionTemp | undefined = AppConfig.fonts.find((f) => f.fontfamily === font);

    if (typeof fontdef !== "undefined") {
        ftypevar = fontdef.varfont; // true = 'variable'; false = 'static'
        italfont = fontdef.italicfont;

        let lvlwghtmap = fontdef.lvlwghts.find((w) => w.lvlname === lvl);

        if (typeof lvlwghtmap !== "undefined") {
            if (ftypevar) {
                lvlwght = "" + lvlwghtmap.varwghtval;
                lvlface = font;
                includewghtstyle = true;
            } else {
                lvlwght = "0";
                lvlface = lvlwghtmap.staticwghtval;
                includewghtstyle = false;
            }
        } else {
            console.warn(`
                [fn]: 'useLvlDefinition', [warn]: Level definition not found for 'lvl' = ${lvl} in the font-definition of '${font}'. Returning font as face, and setting wght to 0.
            `);
            lvlwght = "0";
            lvlface = font;
            includewghtstyle = false;
        }
    } else {
        console.warn(`
            [fn]: useLvlDefinition', [warn]: Definition not found for 'font' = ${font}. Returning default values [sz, wght, face, includewghtstyle] = [${lvlsz}, ${lvlwght}, ${lvlface}, ${includewghtstyle}].
        `);
    }

    if (style === "italic" && italfont) {
        lvlface += "-Italic";
    }

    // console.log("[fn]: 'useLvlDefinition', [result[3]]: 'lvlface' = ", lvlface);

    return  [lvlsz, lvlwght, lvlface, includewghtstyle]
}

export function to_style(t: TextBlockCfgTemp): string {
    // console.log("[fn]: to_style, [textblockcfg]: 't' = ", t);

    let sz: number = 0;
    let wght: string = "0";
    let face: string = "";
    let includeWghtStyle: boolean = true;
    
    if (t.lvl === "none") {
        [sz, wght, face, includeWghtStyle] = derivetxtstylevalues(t);
    } else {

        [sz, wght, face, includeWghtStyle] = useLvlDefinition(t.lvl, t.font, t.fontstyle);

        if (t.overridelvlwght) {
            if (face === t.font) {
                wght = "" + t.wght;
            } else {
                face = t.font + "-" + t.wght;
            }
        }
    }

    let txtstyle = 
        "font-family: " + face + "; " +
        "font-size: " + sz + "px; " +
        "font-style: " + (t.fontstyle ? t.fontstyle : "normal") + "; " +
        "letter-spacing: " + (t.letspace ? t.letspace : "0") + "px; " +
        "text-align: " + (t.txtalign ? t.txtalign : "left") + "; " +
        "text-shadow:" + (t.shdwstyle ? t.shdwstyle : "none") + ";" +
        (t.fxstyle ? t.fxstyle : "")
    ;

    if (!(t.polychromatic)){
        txtstyle += "color: " + (t.color ? t.color : "#404040") + ";";
    }
    
    if (includeWghtStyle) {
        txtstyle += "font-weight: " + wght + ";";
    }

    // console.log(`[fn]: to_style, [msg]: Generated textstyle: 'source' = ${JSON.stringify(t)}; 'txtstyle' = ${txtstyle}`);

    return txtstyle;
}

function derivetxtstylevalues(t: TextBlockCfgTemp): [number, string, string, boolean] {
    console.log("[fn]: derivetxtstylevalues, [textblockcfg]: 't' = ", t);
    // -- If textlevel is not provided in the text block config, determine size from value proivided (if exists) or baseline (if not). -- */
    let sz: number;
    let wght: string;
    let face: string;
    let includeWghtStyle: boolean;
    if (typeof(t.size) === "undefined"){
        sz = AppConfig.text.baselinefontsize;
    } else {
        sz = t.size;
    }

    if (typeof(t.wght) === "undefined"){
        wght = "0";
        includeWghtStyle = false;
    } else {
        wght = "" + t.wght;
        includeWghtStyle = true;
    }

    face = t.font;

    let ftypevar = AppConfig.fonts.find((f) => f.fontfamily === t.font)?.varfont;

    if (typeof ftypevar !== "undefined" && !ftypevar && includeWghtStyle) {
        face += "-" + wght;
        includeWghtStyle = false;
    }

    let italfont = AppConfig.fonts.find((f) => f.fontfamily === t.font)?.italicfont;

    if (typeof italfont !== "undefined" && t.fontstyle && t.fontstyle === "italic" && italfont) {
        face += "-Italic";
    }
    return [sz, wght, face, includeWghtStyle]
}