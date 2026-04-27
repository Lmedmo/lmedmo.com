<script lang="ts">
    import type { AppIconTemp } from "$lib/config";
    import { Iconblock } from "$lib/components";

    let { 
        txt, 
        link, 
        icon, 
        color, 
        isActive, 
        isExpanded 
    }: { 
        txt: string; 
        link: string; 
        icon: AppIconTemp; 
        color: string; 
        isActive: boolean, 
        isExpanded: boolean 
    } = $props();

    let style = $derived(`
        background: ${color};
        border: none;
        box-shadow: 0.5px 0.5px 5px 0 #ffffff59 inset, -0.6px -0.6px 1.5px 0 #00000059 inset, -1px 0 4px 0 ${color}a6, 1px 0 4px 0 ${color}a6;
    `);
</script>



{#if isActive}
    <a class="menubutton" href={link}>
        <div class="iconbox">
            <Iconblock icon={icon} style={"side"} showpane={false} />
        </div>

        {#if isExpanded}
            <div class="label">{txt}</div>
        {/if}

        <div class="indicatorbox">
            <div class="indicator" style={style}></div>
        </div>
    </a>
{:else}
    <a class="menubutton" href={link} >
        <div class="iconbox" id="normal">
            <Iconblock icon={icon} style={"side"} showpane={false} />
        </div>

        {#if isExpanded}
            <div class="label">{txt}</div>
        {/if}
    </a>
{/if}


<style>
    .menubutton {
        display: flex;
        padding: 5px;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        gap: 7px;
    }
    .menubutton:hover {
        border-radius: 13px;
        border: 1px solid rgba(119, 119, 119, 0.20);
        background: rgba(208, 208, 208, 0.50);
        box-shadow: 2px 2px 5px 0 rgba(53, 53, 53, 0.20);
    }
    .iconbox {
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
    }
    .indicatorbox {
        display: flex;
        padding: 8px 0;
        align-items: center;
        align-self: stretch;
    }
    .indicator {
        display: flex;
        width: 3px;
        
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        border-radius: 1.5px;
    }
</style>