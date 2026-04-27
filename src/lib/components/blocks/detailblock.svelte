<script lang="ts">
    import type { TextBlockCfgTemp } from '$lib/config';
    import { ArrowLong, Txt } from '$lib/components';

    let { 
        labeltxt = "",
        valuetxt = "",
        accentcolor = "#282828",
        showeolchar = true,
    }: { 
        labeltxt: string;
        valuetxt: string;
        accentcolor: string;
        showeolchar?: boolean;
    } = $props();

    let color = $derived(accentcolor);

    let l: TextBlockCfgTemp = $derived.by(() => {
        let cfg: TextBlockCfgTemp = {
            font: "Sono",
            lvl: "h4",
            color: "#505050",
            fontstyle: "normal",
            letspace: -0.4,
            txtalign: "left",
            shdwstyle: "1.5px 1.5px 2.5px rgba(32, 32, 32, 0.20)",
            fxstyle: "font-variant-numeric: slashed-zero; font-feature-settings: 'case' on, 'ss03' on;"
        };
        
        return cfg
    });

    let v: TextBlockCfgTemp = $derived.by(() => {
        let cfg: TextBlockCfgTemp = {
            font: "Aleo",
            lvl: "reg",
            color: "#7F7F7F",
            fontstyle: "normal",
            letspace: 0.72,
            txtalign: "left",
            shdwstyle: "1.5px 1.5px 2.5px rgba(32, 32, 32, 0.20)",
            fxstyle: "font-feature-settings: 'case' on, 'liga' off;"
        };
        
        return cfg
    });
</script>


<div class="detailblock">
    <div class="labelblox" >
        <Txt txt={labeltxt} txtstylecfg={l} />

      {#if showeolchar}
        <div class="charbox">
            <ArrowLong direction={"right"} color={color} size={22} /> 
        </div>
      {/if}
    </div>

    <div class="detailtxtbox">
        <Txt txt={valuetxt} txtstylecfg={v} />
    </div>
</div>


<style>
    .detailblock {
        display: flex;
        padding: 4px 4px 4px 8px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 5px;
        align-self: stretch;
    }
    .labelblox {
        display: flex;
        align-items: center;
        align-self: stretch;
    }
    
    .charbox {
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        /* align-items: center; */
        align-items: flex-start;
    }
    .detailblock {
        display: flex;
        padding: 0 5px 0 10px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
    }
    
</style>