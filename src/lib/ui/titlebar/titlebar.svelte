<script lang="ts">
    import type { AppIconTemp, AppPageCfgTemp, TextBlockCfgTemp } from "$lib/config";
    import type { LinkedAcctObj } from "$lib/data/models";
    import { page } from "$app/state";
    import { APP_ICON, getPageByUrl } from "$lib/config";
    import { Iconblock, Txt } from '$lib/components';
    import TbTab from "./tab.svelte";
    import Qlink from "./quick-link.svelte";

    let {
        title,
        pages,
        links
    }: {
        title: string,
        pages: AppPageCfgTemp[],
        links: LinkedAcctObj[]
    } = $props();
    
    let url = $derived(page.url.pathname);
    let currentPage: AppPageCfgTemp = $derived(getPageByUrl(url));
    
    let pagecolor: string = $derived(currentPage.colors.main);
    let pageicon: AppIconTemp = $derived(currentPage.icons.titlebaricon);

    let titletxtcfg: TextBlockCfgTemp = $derived.by(() => {
        let cfg: TextBlockCfgTemp = {
            font: "Mulish",
            lvl: "tbar",
            color: "#404040",
            fontstyle: "normal",
            letspace: .18,
            txtalign: "left",
            shdwstyle: "1px 1px 2px rgba(48, 48, 48, 0.25)",
            fxstyle: "font-feature-settings: 'case' on, 'liga' off;",
        }
        return cfg
    });

    let mainpgs: AppPageCfgTemp[] = $derived(pages.filter((pg) => pg.parent === 0));
</script>


<div class="titlebar">
    <div class="titlebox">
        <img class="icon" src={APP_ICON.src} alt={APP_ICON.alt} />

        <div class="separatorbox">
            <div class="separator"></div>
        </div>

        {#if (currentPage.id !== 0)}
            <Iconblock icon={pageicon} style={"tbar"} showpane={false} />
        {:else}
            <Txt txt={title} txtstylecfg={titletxtcfg} />
        {/if}
    </div>

    <div class="navbar">
        {#each mainpgs as p}
            <TbTab tabPage={p} {currentPage} />
        {/each}
    </div>

    <div class="qlinks">
        {#each links as link}
            <Qlink {link} accentcolor={pagecolor} />
        {/each}
    </div>
</div>


<style>
  /* Parent */
    .titlebar {
        /* Positioning */
        position: sticky;
        top: 0px;
        left: 0px;

        /* Layout */
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        padding: 0 5px;
    }
  /* Child: title */
    .titlebox {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        gap: 10px;
    }
    .icon {
        display: flex;
        width: 42px;
        height: 42px;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
    .separatorbox {
        display: flex;
        padding: 4px 2px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }
    .separator {
        display: flex;
        width: 1px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
        border-radius: 0.5px;
        background: #CFCFCF;
        box-shadow: 0.25px 0.25px 0.3px 0 #f8f8f899 inset, -0.25px -0.25px 0.3px 0 #30303052 inset, 1px 1px 5px 0 #00000026;
    }
  /* Child: navbar */
    .navbar {
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        margin: 0 auto;
        padding: 4px;
        justify-content: center;
        align-items: center;
        gap: 6px;
        border-radius: 14px;
        border: 1px solid #5C5C5C;
        background: rgba(32, 32, 32, 0.90);
        box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(2.5px);
    }
  /* Child: qlinks */
    .qlinks {
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        gap: 10px;
        /* position: absolute; */
        /* right: 0; */
        /* align-self: stretch; */
    }
</style>