<script lang="ts">
    import type { TextBlockCfgTemp } from "$lib/config";
    import { to_style } from "$lib/config";

    let { txt, indentLvl }: { txt: string, indentLvl: number } = $props();

    let txtvalue: string = $derived(txt);

    let txtstyle = $derived.by(() => {
        let color: string = (indentLvl === 1) ? "#99CC00" : (indentLvl === 2) ? "#FF8700" : "#CACACA";
        let cfg: TextBlockCfgTemp = {
            font: "Red-Hat-Mono",
            lvl: "reg",
            color: color,
            fontstyle: "normal",
            letspace: -0.36,
            txtalign: "left",
            shdwstyle: "1px 1px 2px rgba(16, 16, 16, 0.20)",
            fxstyle: "font-variant-numeric: stacked-fractions; font-feature-settings: 'case' on, 'ss01' on;",
        }
        return to_style(cfg);
    });
</script>


<span class="txt" id="l1" style={txtstyle}>{txtvalue}</span>


<style>
    .txt {
        display: inline;
        box-sizing: border-box;
    }
</style>