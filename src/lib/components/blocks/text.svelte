<script lang="ts">
    import { DEFAULT_TXT_CFG, to_style } from "$lib/config";
    import type { TextBlockCfgTemp } from "$lib/config";

    let { 
        txt, 
        txtstylecfg = DEFAULT_TXT_CFG 
    }: { 
        txt: string, 
        txtstylecfg?: TextBlockCfgTemp 
    } = $props();

    let style = $derived(to_style(txtstylecfg));

</script>


<div class="textbox">
    <span {style}>{txt}</span>
</div>


<style>
    .textbox {
        display: inline;
    }
</style>