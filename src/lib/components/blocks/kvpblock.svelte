<script lang="ts">
    import type { TextBlockCfgTemp } from '$lib/config';
    import type { CharSymbolOpt } from '$lib/components';
    import { ArrowLong } from '$lib/components';
    import { to_style } from "$lib/config";

    let { 
        keytxt = "",
        valuetxt = "",
        accentcolor = "#282828",
        sepchar = ":",
        sepcharcolor,
    }: { 
        keytxt: string;
        valuetxt: string;
        accentcolor: string;
        sepchar?: CharSymbolOpt;
        sepcharcolor?: string;
    } = $props();

    let k: TextBlockCfgTemp = $derived.by(() => {
        let cfg: TextBlockCfgTemp = {
            font: "Mulish",
            lvl: "bold",
            polychromatic: false,
            color: accentcolor,
            fontstyle: "normal",
            letspace: 0.18,
            txtalign: "left",
            shdwstyle: "1px 1px 2px 0 rgba(32, 32, 32, 0.20)",
            fxstyle: "font-feature-settings: 'case' on, 'liga' off;"
        };
        
        return cfg
    });

    let v: TextBlockCfgTemp = $derived.by(() => {
        let cfg: TextBlockCfgTemp = {
            font: "Mulish",
            lvl: "reg",
            polychromatic: false,
            color: "#282828",
            fontstyle: "normal",
            letspace: 0.18,
            txtalign: "left",
            shdwstyle: "1px 1px 2px rgba(16, 16, 16, 0.20)",
            fxstyle: "font-feature-settings: 'case' on, 'liga' off;"
        };
        
        return cfg
    });

    let sepcolor = $derived(sepcharcolor ? sepcharcolor : accentcolor); // if not provided, use keytxtcfg color;

    let keytxtstyle = $derived(to_style(k));

    let valuetxtstyle = $derived(to_style(v));
</script>


<div class="kvp">
    <div class="key" style={keytxtstyle}>
        {keytxt}
      {#if sepchar === "-->" && keytxt !== ""}
        <div class="charbox">
            <ArrowLong direction={"right"} color={sepcolor} size={22} /> 
        </div>
      {/if}
    </div>

    <span class="value" style={valuetxtstyle}>{valuetxt}</span>
</div>


<style>
    .kvp {
        display: inline;
        box-sizing: border-box;
        align-items: flex-start;
        padding-left: 10px;
        align-self: stretch;
        word-spacing: normal;
        white-space: normal;
        line-height: normal;
    }
    .key {
        display: inline-flex;
        box-sizing: border-box;
        padding: 5px 3px 0 0;
        align-items: flex-start;
        word-spacing: normal;
        white-space: normal;
        line-height: normal;
        /* box-shadow: 1px 0.75px 2px 0 rgba(32, 32, 32, 0.20); */
    }
    .charbox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .value {
        display: inline;
        box-sizing: border-box;
        /* align-items: flex-start; ~ DISABLED not flex*/ 
        /* flex: 1 0 0;  ~ DISABLED not flex*/
        padding: 5px 0 0 3px;
        word-spacing: normal;
        white-space: normal;
        line-height: normal;
    }
</style>