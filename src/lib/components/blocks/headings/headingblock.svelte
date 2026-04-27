<script lang="ts">
    import type { Snippet } from "svelte";
    import type { AppIconTemp, FontFamilyOpt, TextBlockCfgTemp, TextLevelOpt } from "$lib/config";
    import { DEFAULT_ICON, findicon, AppConfig } from "$lib/config";
    import { Iconblock, InfoIcon, ArrowCap, ArrowVec, ArrowThin, Txt } from "$lib/components";
    
    let {
        htxt,
        lvl,
        accentcolor,
        iconkey,
        showiconpane,
        sepchar = "",
        eolchar = "",
        buttons
    }: {
        htxt: string,
        lvl: "h1" | "h2" | "h3" | "h4" | "alt_h1",
        accentcolor: string,
        iconkey?: string;// AppIconTemp,
        showiconpane?: boolean,
        sepchar?: "arrowcap" | "",
        eolchar?: "arrow" | "longarrow" | "",
        buttons?: Snippet
    } = $props();


    let hicon: AppIconTemp = $derived(iconkey ? findicon(iconkey) : DEFAULT_ICON);

    let hblockstyle = $derived.by(() => {
        let top = 0;
        let bot = 0;
        let l = 0;
        let r = 0;

        switch (lvl) {
            case "h1": { top = 30; bot = 2; l = 3; break; }
            case "h2": { top = 3; bot = 3; break; }
            case "h3": { top = 3; bot = 3; break; }
            case "h4": { top = 4; bot = 4; l = 4; r = 4; break; }
            case "alt_h1": { top = 35; bot = 2; l = 5; r = 5; break; }
        }

        let s = `
            padding: ${top}px ${r}px ${bot}px ${l}px; 
            max-width: ${AppConfig.contentmaxwidth}px;
        `;
        
        return s
    });

    let htxtcfg: TextBlockCfgTemp = $derived.by(() => {
        let ff: FontFamilyOpt = "Mulish";
        let txtlvl: TextLevelOpt = "reg"
        let color: string = "#000000";
        let shd: string = "none";
        let fx: string = "";
        let ls: number = 0;

        switch (lvl) {
            case "h1": {
                txtlvl = "h1";
                color = accentcolor; 
                shd = "2.5px 2.8px 5px rgba(48, 48, 48, 0.20)";
                ls = -0.38;
                fx = "font-feature-settings: 'case' on, 'liga' off;"
                break; 
            }
            case "h2": { 
                txtlvl = "h2";
                color = "#707070";
                shd = "2.5px 2.5px 5px rgba(48, 48, 48, 0.20)";
                ls = -0.96;
                fx = "font-feature-settings: 'case' on, 'liga' off;"
                break;
            }
            case "h3": {
                txtlvl = "h3";
                color = `hsl(from ${accentcolor} h calc(s - 15) calc(l + 15))`;
                shd = "2.5px 2.8px 8px rgba(61, 61, 61, 0.25)";
                ls = -0.56;
                fx = "font-feature-settings: 'case' on, 'liga' off;"
                break;
            }
            case "h4": {
                txtlvl = "h4";
                ff = "Geist-Pixel-Sqr";
                color = `hsl(from ${accentcolor} h calc(s - 25) calc(l - 20))`;
                shd = "1px 1px 2.2px rgba(48, 48, 48, 0.25)";
                ls = 0;
                fx = "font-feature-settings: 'case' on, 'liga' off;"
                break; 
            }
            case "alt_h1": {
                txtlvl = "h1";
                color = accentcolor; 
                shd = "2.5px 2.8px 5px rgba(48, 48, 48, 0.20)";
                ls = -0.38;
                fx = "font-feature-settings: 'case' on, 'liga' off;"
                break; 
            }
        }

        let s: TextBlockCfgTemp = {
            font: ff,
            lvl: txtlvl,
            color: color,
            fontstyle: "normal",
            letspace: ls,
            txtalign: "left",
            shdwstyle: shd,
            fxstyle: fx
        };

        console.log("[Heading]: 'htxtcfg' = ", s);

        return s
    });

    let iconboxpad = $derived.by(() => {
        let pad: number = 0;

        switch (lvl) {
            case "h1": { pad = 20; break; }
            case "h2": { pad = 18; break; }
            case "h3": { pad = 12; break; }
            case "h4": { pad = 8;  break; }
            case "alt_h1": { pad = 0;  break; }
        }

        return `padding-right: ${pad}px;`
    });

    let [charstyle, charsize, charcolor] = $derived.by(() => {
        let sz = 0;
        let c = "#000000";
        
        switch (lvl) {
            case "h1": { sz = 40; c = `${accentcolor}`; break; }
            case "h2": { sz = 32; c = `${accentcolor}`; break; }
            case "h3": { sz = 28; c = `${accentcolor}`; break; }
            case "h4": { sz = 26; c = `hsl(from ${accentcolor} h calc(s - 20) calc(l - 15))`; break; }
        }

        let s = `width: ${sz}px; height: ${sz}px;`;

        return [s, sz, c];
    });
</script>


<div class="headingblock" style={hblockstyle}>
  {#if iconkey}
    <div class="iconbox" style={iconboxpad}>
      {#if lvl === "h4"}
        <InfoIcon accentcolor={accentcolor} sizeXY={charsize} />
      {:else}
        <Iconblock icon={hicon} style={lvl} showpane={showiconpane} panecolor={accentcolor} />
      {/if}
    </div>
  {/if}

  {#if sepchar}
    <div class="sepcharbox">
        <ArrowCap color={accentcolor} />
    </div>
  {/if}

    <Txt txt={htxt} txtstylecfg={htxtcfg} />

  {#if eolchar}
    <div class="charbox" style={charstyle}>
      {#if lvl === "h4"}
        <ArrowThin accentcolor={charcolor} size={charsize} />
      {:else}
        <ArrowVec kind="full" points="right" showFx={true} color={accentcolor} size={charsize} />
      {/if}
    </div>
  {/if}
    
  {#if buttons}
    <div class="buttonbox">
        {@render buttons()}
    </div>
  {/if}
</div>


<style>
    .headingblock {
        /* background-color: deepskyblue; */
        display: flex;
        align-items: center;
        align-self: stretch;
        flex: 1 0 0;
    }
    .iconbox {
        display: flex;
        align-items: center;
    }
    .sepcharbox {
        display: flex;
        padding-right: 10px;
        align-items: center;
        align-self: stretch;
    }
    .charbox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .buttonbox {
        display: flex;
        padding: 0 10px 0 15px;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        flex: 1 0 0;
        align-self: stretch;
    }
</style>