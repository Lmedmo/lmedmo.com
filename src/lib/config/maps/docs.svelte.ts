import { asset } from "$app/paths";

//~ Models ------------------------------------------------------------- */
export interface AppDocObj {
    filepath: string;
    filename: string;
}


//$ Document Mappings ---------------------------------------------------------------- */
export const CV_PDF: AppDocObj = {
    filepath: asset("/docs/v3.0.3-logan-edmondson-resume.pdf"),
    filename: "v3.0.3-logan-edmondson-resume.pdf"
}
export const CVREF_ANOBLE_PDF: AppDocObj = {
    filepath: asset("/docs/cvref--allen_noble.pdf"),
    filename: "cvref--allen_noble.pdf"
}
export const CVREF_BJING_PDF: AppDocObj = {
    filepath: asset("/docs/cvref--bill_jing.pdf"),
    filename: "cvref--bill_jing.pdf"
}
export const CVREF_DDRIF_PDF: AppDocObj = {
    filepath: asset("/docs/cvref--dustin_drifmeyer.pdf"),
    filename: "cvref--dustin_drifmeyer.pdf"
}