<script lang="ts">
    import type { FontFamilyOpt, TextBlockCfgTemp } from "$lib/config";
    import { AppConfig } from "$lib/config";
    import { Txt } from "$lib/components";

    let { 
        hdrtxt,
        pos = "left", 
        hasImg = true, 
        ord = "*:txt", 
        imgtype = "icon", 
        imgpath = "", 
        boxBgfill = "background: transparent"
    }:
    {
        hdrtxt: string,
        pos: "left" | "center",
        ord: "*:txt" | "txt:*",
        hasImg: boolean,
        imgtype?: "icon" | "textimg",
        imgpath?: string,
        boxBgfill?: string
    } = $props();

    let src: string = $derived(imgpath);
    let alt: string = "header-image-text";

    let style: string = $derived.by(() => {
        let maxW = AppConfig.contentmaxwidth;
        
        let flexdir = (ord === "txt:*") ? "flex-direction: row-reverse;" : "flex-direction: row;";

        let posStyle = (pos === "center") ? "justify-content: center; align-self: stretch;" : "flex: 1 0 0;";

        let adjuStyle = (hasImg && imgtype === "icon") ? "padding: 0 10px 0 20px; gap: 15px 30px;" : "padding: 20px 10px;";

        return  flexdir + posStyle + adjuStyle + `max-width: ${maxW}px;`;
    });

    let imgstyle: string = $derived.by(() => {
        let style = "display: none;";

        if (hasImg) {
            if (imgtype === "icon") {
                style = `        
                    width: 96px;
                    height: 96px;
                    border-radius: 18.28px;
                    box-shadow: 0 -35px 50px 0 #ffffff99;
                    aspect-ratio: 1/1;
                    flex-shrink: 0;
                `;
            } else if (imgtype === "textimg") {
                style = `
                    width: 272px;
                    justify-content: flex-end;
                `;
            }
        } 
        
        return style
    });

    let htxtcfg: TextBlockCfgTemp = $derived.by(() => {
        let color = "#303030";
        let font: FontFamilyOpt = "Mulish";
        let ls: number = -1;

        if (pos === "center") {
            color = "#000000";
            font = "Be-Vietnam-Pro";
            ls = -3
        }

        let s: TextBlockCfgTemp = {
            font: font,
            lvl: "h0",
            color: color,
            fontstyle: "normal",
            letspace: ls,
            //letspace: `${ls}` + "%;",
            txtalign: "left",
            shdwstyle: "text-shadow: 3px 3.5px 8px rgba(64, 64, 64, 0.30);"
        };

        return s;
    });
</script>


<div class="headerblock" style={boxBgfill}>
    <div class="headercontentbox" {style}>
      {#if hasImg}
        <div class="imgbox">
            <img {src} {alt} style={imgstyle} />
        </div>
      {/if}
        
        <Txt txt={hdrtxt} txtstylecfg={htxtcfg} />
    </div>
</div>


<style>
    .headerblock {
        display: flex;
        min-width: 378px;
        padding-top: 80px;
        justify-content: center; 
        align-items: center;
        align-self: stretch;
    }
    .imgbox {
        display: flex;
        align-items: center;
    }
    .headercontentbox {
        /* border: 1px solid black; */
        display: flex;        
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        
        /* STANDARD:
        padding: 0 10px 0 20px;
        align-items: center;
        align-content: center;
        gap: 15px 25px;
        flex: 1 0 0;
        flex-wrap: wrap;
        */
        /* CENTERED:
        padding: 20px 10px;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex: 1 0 0;
        flex-wrap: wrap;
        */
    }  
</style>