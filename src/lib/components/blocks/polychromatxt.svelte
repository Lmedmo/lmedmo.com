<script lang="ts">
    import { Tdiv } from "$lib/components";
    import { to_style } from "$lib/config";
    import type { TextBlockCfgTemp } from "$lib/config";

    let { 
        txtspanarr,
        txtcolorarr,
        stylecfg,
        showsep,
        accentcolor
    }: {
        txtspanarr: string[],
        txtcolorarr: string[],
        stylecfg: TextBlockCfgTemp,
        showsep?: boolean,
        accentcolor?: string
    } = $props();

    let style = $derived(to_style(stylecfg));
</script>


<div class="polychromatic-text">
    {#each txtspanarr as span, i}
        <span style={`color: ${txtcolorarr[i]}; ${style}`}>{span}</span>
        {#if showsep && i < txtspanarr.length - 1}
            <Tdiv {accentcolor} />
            <!-- <span style={`color: ${accentcolor}; ${style}`}>|</span> -->
        {/if}
    {/each}
</div>


<style>
    .polychromatic-text {
        /* display: inline-flex; */
        display: flex;
        align-items: center;
        align-content: center;
        gap: 0 12px;
        align-self: stretch;
        flex-wrap: wrap;
    }
</style>