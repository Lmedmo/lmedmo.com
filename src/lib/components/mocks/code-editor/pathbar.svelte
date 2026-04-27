<script lang="ts">
    import type { TextBlockCfgTemp } from "$lib/config";
    import { to_style } from "$lib/config";

    let { txtarr }: { txtarr: string[] } = $props();
    
    let last: number = $derived(txtarr.length - 1);

    let style: string = $derived.by(() => {
        let cfg: TextBlockCfgTemp = {
            font: "Red-Hat-Mono",
            lvl: "none",
            size: 15,
            wght: 500,
            polychromatic: false,
            color: "#A0A0A0",
            fontstyle: "italic",
            letspace: -0.15,
            txtalign: "left",
            shdwstyle: "1px 1px 3px rgba(32, 32, 32, 0.20)",
            fxstyle: "font-variant-numeric: stacked-fractions; font-feature-settings: 'ss01' on;",
        }
        return to_style(cfg);
    });
</script>


<div class="breadcrumb">
  {#each txtarr as dir, i}
    <span class="pathtxt" {style}>{dir}</span>

    {#if i < last}
      <div class="wackbox">
        {@render wack()}
      </div>
    {/if}
  {/each}
</div>

{#snippet wack()}
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
    <g filter="url(#filter0_d_1810_12171)">
        <path d="M10.5276 2.64193C10.7598 2.14256 11.2507 1.87932 11.6241 2.05396C11.9975 2.22861 12.112 2.775 11.8799 3.27437L3.47238 21.3581C3.24021 21.8574 2.7493 22.1207 2.37588 21.946C2.00247 21.7714 1.88797 21.225 2.12014 20.7256L10.5276 2.64193Z" fill="#55CC00" fill-opacity="0.6"/>
    </g>
    <defs>
        <filter id="filter0_d_1810_12171" x="1.19209e-07" y="1.19209e-07" width="14" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.825 0 0 0 0 1 0 0 0 0 0.7 0 0 0 0.8 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1810_12171"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1810_12171" result="shape"/>
        </filter>
    </defs>
</svg>
{/snippet}

<style>
    .breadcrumb {
        display: flex;
        padding: 12px 15px 10px 20px;
        align-items: center;
        gap: 3px;
        align-self: stretch;
    }
    .pathtxt {
        display: inline-flex;
        /* padding-right: 2px; */
    }
    .wackbox {
        display: flex;
        width: 10px;
        height: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* display: flex;
        width: 8px;
        padding: 1px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: stretch; */
    }
    svg {
        width: 10px;
        height: 20px;
        fill: rgba(85, 204, 0, 0.60);
        filter: drop-shadow(0 0 2px rgba(210, 255, 178, 0.80));
    }
</style>