<script lang="ts">
    import type { ButtonCfgTemp } from '$lib/config';
    import { DownloadIcon } from '$lib/components';

    let { btncfg }: 
    {
        btncfg: ButtonCfgTemp
    } = $props();


    let href = $derived(btncfg.href);
    let assetname = $derived(btncfg.assetname ? btncfg.assetname : "");

  // Regular
    let regBgShd = `
        background:
            linear-gradient(278deg, rgba(32, 32, 32, 0.80) 25.13%, rgba(0, 0, 0, 0.75) 49.79%, rgba(32, 32, 32, 0.80) 74.44%);
        box-shadow:
            3px 3px 5px 0 rgba(255, 255, 255, 0.20) inset,
            1px 1px 2px 0 rgba(255, 255, 255, 0.35) inset,
            -2px -3px 3px 0 rgba(0, 0, 0, 0.20) inset,
            -1px -2px 2px 0 rgba(255, 255, 255, 0.25) inset,
            4px 3px 5px 0 rgba(0, 0, 0, 0.25);
    `;

  // Hovered
    let hovBgShd = `
        background: 
            linear-gradient(273deg, rgba(147, 242, 13, 0.80) 0%, rgba(153, 229, 0, 0.85) 50%, rgba(170, 255, 51, 0.80) 100%);
        box-shadow: 
            3px 3px 5px 0 rgba(255, 255, 255, 0.20) inset,
            1px 1px 2px 0 rgba(255, 255, 255, 0.35) inset,
            -2px -2px 3.5px 0 rgba(32, 32, 32, 0.40) inset,
            -2px -2px 3px 0 rgba(255, 255, 255, 0.40) inset,
            4px 3px 5px 0 rgba(0, 0, 0, 0.25);
    `;

    let hovered: boolean = $state(false);

    function onmouseenter() {
        hovered = true;
    }
    function onmouseleave() {
        hovered = false;
    }
</script>


{#if btncfg.action === "download"}
  <!-- [Download Link (action='download')]: -->
    <a class="btn" href={href} download={assetname} style={hovered ? hovBgShd : regBgShd} {onmouseenter} {onmouseleave}>
        {@render contents()}
    </a>
{:else if btncfg.action === "mailto"}
  <!-- [Email Link (action='mailto')]: -->
    <a class="btn" href="mailto:{href}" style={hovered ? hovBgShd : regBgShd} {onmouseenter} {onmouseleave}>
        {@render contents()}
    </a>
{:else if btncfg.action === "navto"}
  <!-- [Internal Link (action='navto')]: -->
    <a class="btn" href={href} style={hovered ? hovBgShd : regBgShd} {onmouseenter} {onmouseleave}>
        {@render contents()}
    </a>
{:else if btncfg.action === "linkto"}
  <!-- [External Link (action='linkto')]: -->
    <a class="btn" href={href} target="_blank" rel="noopener noreferrer" style={hovered ? hovBgShd : regBgShd} {onmouseenter} {onmouseleave}>
        {@render contents()}
    </a>
{/if}

{#snippet contents()}
    <div class="icon">
        <DownloadIcon variant={hovered ? "light-hover" : "light-normal"} sizeXY={25}/>
    </div>
{/snippet}


<style>
    .btn {
        display: flex;
        padding: 10px 15px 10px 10px;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border-radius: 12px;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
    .icon {
        display: flex;
        width: 25px;
        height: 25px;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
    }
</style>