<script lang="ts">
    import { ArrowTurn, ArrowLong, Block } from '$lib/components';
    import { to_style } from "$lib/config";
    import type { TextBlockCfgTemp } from '$lib/config';
    import type { CharSymbolOpt,  } from '$lib/components';

    let { 
        sublvl = 0,
        keytxt = "",
        valuetxt = "",
        accentcolor = "#AAAAAA",
        sepchar = ":",
        sepcharcolor,
    }: { 
        sublvl: number;
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
            color: `hsl(from ${accentcolor} h calc(s - 15) calc(l + 22))`,
            fontstyle: "italic",
            letspace: 0.18,
            txtalign: "left",
            shdwstyle: "text-shadow: 1px 0.75px 2px rgba(32, 32, 32, 0.20);",
            fxstyle: "font-feature-settings: 'case' on, 'liga' off;"
        };
        
        return cfg
    });

    let v: TextBlockCfgTemp = $derived.by(() => {
        let cfg: TextBlockCfgTemp = {
            font: "Mulish",
            lvl: "reg",
            polychromatic: false,
            color: "#707070",
            fontstyle: "italic",
            letspace: 0.18,
            txtalign: "left",
            shdwstyle: "text-shadow: 1px 1px 2px rgba(16, 16, 16, 0.20);",
            fxstyle: "font-feature-settings: 'case' on, 'liga' off;"
        };
        
        return cfg
    });

    let style = $derived.by(() => {
        let lpad = 10;

        if (sublvl > 1) {
            lpad += (sublvl * 26);
        }

        let s = `padding-left: ${lpad}px;`;

        return s;
    })
    
    let sepcolor = $derived(sepcharcolor ? sepcharcolor : accentcolor); // if not provided, use keytxtcfg color;

    let keytxtstyle = $derived(`${to_style(k)}`);

    let valuetxtstyle = $derived(`${to_style(v)}`);
</script>


<div class="nestedkvp" style={style}>
    <div class="subarrowcharbox">
        <ArrowTurn orientation="s2e" accentcolor={sepcolor} />
    </div>
    
    <div class="subkeytxt" style={keytxtstyle}>
        {keytxt}
    </div>
    {#if sepchar === "-->" && keytxt !== ""}
    <div class="charbox">
        <ArrowLong direction={"right"} color={sepcolor} size={20} /> 
    </div>
    {/if}

    <span class="subvaluetxt" style={valuetxtstyle}>{valuetxt}</span>
</div>


<style>
    .nestedkvp {
        /* border: 1px solid #007fee; */
        display: inline;
        align-items: flex-start;
        /* padding-left: 10px; */
        /* box-sizing: border-box; */
        /* align-items: center; */
        /* gap: 4px; */
        align-self: stretch;
        word-spacing: normal;
        white-space: normal;
        line-height: normal;
    }
    .subarrowcharbox {
        display: inline-flex;
        padding-bottom: 2px;
        justify-content: center;
        align-items: flex-start;
    }
    .charbox {
        display: flex;
        padding-top: 2px;
        justify-content: center;
        align-items: flex-start;
    }
    .subkeytxt {
        display: inline-flex;
        box-sizing: border-box;
        /* padding-top: 2px; */
        padding: 2px 2px 0 2px;
        /* justify-content: center; */
        /* align-items: center; */
        align-items: flex-start;
        word-spacing: normal;
        white-space: normal;
        line-height: normal;
    }
    .subvaluetxt {
        display: inline;
        box-sizing: border-box;
        padding: 2px 0 0 1px;
        align-items: flex-start;
        /* flex: 1 0 0; */
        word-spacing: normal;
        white-space: normal;
        line-height: normal;
    }
</style>