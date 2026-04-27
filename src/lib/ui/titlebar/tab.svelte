<script lang="ts">
    import type { AppIconTemp, AppPageCfgTemp, TextBlockCfgTemp } from "$lib/config";
    import { AppConfig, setPage, isSelected } from "$lib/config";
    import { Iconblock, Txt } from "$lib/components";

    let { 
        tabPage,
        currentPage
    }: { 
        tabPage: AppPageCfgTemp,
        currentPage: AppPageCfgTemp
    } = $props();

    let tabicon: AppIconTemp = $derived(tabPage.icons.tabicon);
    let color_main = $derived(currentPage.colors.main);
    let color_gradL = $derived(currentPage.colors.tabGradL);
    let color_gradD = $derived(currentPage.colors.tabGradD);

    let selStyle = $derived(`
        cursor: default;
        border: 1px solid rgba(255, 255, 255, 0.40);
        background: 
            linear-gradient(96deg, ${color_gradL}CC 9.18%, ${color_main}CC 52.2%, ${color_gradD}CC 95.22%), ${color_main};
    `);
    let normalStyle = $derived(`
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.01);
        background-color: transparent;
    `);

    let tabUrl = $derived.by(() => {
        if (tabPage.redirects) {
            let rtps = AppConfig.rt_pages;

            let rtp = rtps.find((rtpg) => rtpg.page_id === tabPage.id);

            if (typeof(rtp) !== 'undefined') {
                let destination = AppConfig.pages.find((pg) => pg.id === rtp.default_redirect_page_id);

                if (typeof(destination) !== 'undefined') {
                    console.log("Redirect destination found:", destination.url);
                    return destination.url;
                }
            }
        } else {
            console.log(`Tab page '${tabPage.name}' (${tabPage.url}) does not redirect`);
            return tabPage.url
        }
    });

    let txtstyle: TextBlockCfgTemp = $derived.by(() => {
        let cfg: TextBlockCfgTemp = {
            font: "Mulish",
            lvl: "tab",
            color: "#FFF",
            fontstyle: "normal",
            letspace: 0.18,
            txtalign: "left",
            shdwstyle: "1px 1px 2px rgba(48, 48, 48, 0.25)",
            fxstyle: "font-feature-settings: 'case' on, 'liga' off; text-decoration: none;",
        }
        return cfg
    });

    function onclick() {
        // hovered = false;
        setPage(tabPage);
	}
</script>


{#if (isSelected(tabPage, currentPage))}
    <a class="tab" href={tabUrl} style={selStyle}>
        <Iconblock icon={tabicon} style={"tab"} showpane={false} />
        <Txt txt={tabPage.name} txtstylecfg={txtstyle} />
    </a>
{:else}
    <a class="tab" href={tabUrl} onclick={onclick} style={normalStyle}>
        <Iconblock icon={tabicon} style={"tab"} showpane={false} />
        <Txt txt={tabPage.name} txtstylecfg={txtstyle} />
    </a>
{/if}
   

<style>
    .tab {
        display: flex;
        height: 32px;
        max-height: 32px;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        padding: 0 12px 0 6px;
        gap: 8px;
        border-radius: 10px;
        text-decoration: none;
    }
    .tab:hover {
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.5);
        /* border: 1px solid rgba(255, 255, 255, 0.10); */
        background: linear-gradient(96deg, rgba(255, 255, 255, 0.16) 0%, rgba(156, 156, 156, 0.16) 100%);
        box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.35);
    }
</style>