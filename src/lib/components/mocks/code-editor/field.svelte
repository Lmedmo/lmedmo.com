<script lang="ts">
    import type { TextBlockCfgTemp } from "$lib/config";
    import { Txt } from "$lib/components";

    let { txt, indentLvl }: { txt: string, indentLvl: number } = $props();

    let txtvalue: string = $derived(txt + ":");

    let txtcfg = $derived.by(() => {
        let color: string = (indentLvl === 1) ? "#0CE4F3" : (indentLvl === 2) ? "#FF3E88" : "#CACACA";
        
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
        return cfg;
    });
</script>

<!-- <span> -->
    <Txt txt={txtvalue} txtstylecfg={txtcfg} />&nbsp;
<!-- </span> -->
