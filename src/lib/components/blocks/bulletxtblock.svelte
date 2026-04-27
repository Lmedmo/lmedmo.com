<script lang="ts">
    import type { TextBlockCfgTemp } from "$lib/config";
    import { Txt } from "$lib/components";
    import { DeltaArrow, Doughnut } from "$lib/components/symbols/bullets";

    let { 
        txt,
        indentlvl = 1,
        bullet,
        bulletcolor,
    }: { 
        txt: string;
        indentlvl?: number;
        bullet: "deltaarrow" | "doughnut";
        bulletcolor: string;
    } = $props();

    let txtstylecfg: TextBlockCfgTemp = $derived.by(() => {
        let cfg: TextBlockCfgTemp = {
            font: "Mulish",
            lvl: "reg",
            color: "#282828",
            fontstyle: "normal",
            letspace: 0.18,
            txtalign: "left",
            shdwstyle: "1px 1px 2px rgba(16, 16, 16, 0.20)",
            fxstyle: "font-feature-settings: 'case' on, 'liga' off;",
        };
        return cfg
    });

    function calc_sublvlpad() {
        let pad = 7 + ((indentlvl - 1) * 26);

        return `padding-left: ${pad}px; padding-right: 7px;`;
    }
</script>

<div class="bulletxtblock" style={calc_sublvlpad()}>
    <div class="bulletbox">
      {#if bullet === "deltaarrow"}
        <DeltaArrow color={bulletcolor} />
      {:else if bullet === "doughnut"}
        <Doughnut color={bulletcolor} />
      {/if}
    </div>

    <div class="txtbox">
        <Txt txt={txt} {txtstylecfg} />
    </div>
</div>

<style>
    .bulletxtblock {
        display: flex;
        padding: 0 7px;
        align-items: flex-start;
        gap: 5px;
        align-self: stretch;
    }
    .bulletbox {
        /* background-color: springgreen; */
        display: flex;
        flex-direction: column;
        padding-top: 5px;
        align-items: flex-start;
        align-self: stretch;
        /* flex: 1 0 0; */
    }
    .txtbox {
        display: flex;
        padding-top: 5px;
        align-items: flex-start;
        flex: 1 0 0;
    }
</style>