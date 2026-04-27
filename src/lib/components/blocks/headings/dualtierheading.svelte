<script lang="ts">
    import type { TextBlockCfgTemp, AppIconTemp } from "$lib/config";
    import { findicon, DEFAULT_ICON } from "$lib/config";
    import { Iconblock, Txt, Tdiv } from "$lib/components";

    let {
        mainhtxts,
        subhtxt,
        accentcolor,
        iconkey,
    }: {
        mainhtxts: string[],
        subhtxt: string,
        accentcolor: string,
        iconkey?: string;
    } = $props();

    let color = $derived(accentcolor);

    let textcolor = $derived(`hsl(from ${accentcolor} h calc(s - 25) calc(l - 12))`);
    
    let hicon: AppIconTemp = $derived(iconkey ? findicon(iconkey) : DEFAULT_ICON);
    
    let htxtcfg: TextBlockCfgTemp = $derived({
        font: "Mulish",
        lvl: "h1",
        color: "#606060",
        fontstyle: "normal",
        letspace: -0.48,
        txtalign: "left",
        shdwstyle: "2.5px 2.5px 5px 0 rgba(48, 48, 48, 0.20)",
        fxstyle: "font-feature-settings: 'case' on, 'liga' off;",
    });

    let subhtxtcfg: TextBlockCfgTemp = $derived({
        font: "Mulish",
        lvl: "h3",
        color: textcolor,
        fontstyle: "italic",
        letspace: -0.56,
        txtalign: "left",
        shdwstyle: "2.5px 2.8px 8px 0 rgba(61, 61, 61, 0.25)",
        fxstyle: "font-feature-settings: 'case' on, 'liga' off;",
    });
</script>


<div class="dual-tier-heading">
    <div class="iconbox">
        <Iconblock icon={hicon} style={"h1"} showpane={true} panecolor={color} />
    </div>

    <div class="textboxcolumn">
        <div class="maintxt">
          {#if mainhtxts.length > 1}
            {#each mainhtxts as mainhtxt, i }
              {#if ((i + 1) === mainhtxts.length)}
                <Txt txt={mainhtxt} txtstylecfg={htxtcfg} />
              {:else}
                <Txt txt={mainhtxt} txtstylecfg={htxtcfg} />
                <Tdiv accentcolor={color} />
              {/if}
            {/each}
          {:else}
            <Txt txt={mainhtxts[0]} txtstylecfg={htxtcfg} />
          {/if}
        </div>

        <div class="subtxt">
            <Txt txt={subhtxt} txtstylecfg={subhtxtcfg} />
        </div>
    </div>
</div>


<style>
    .dual-tier-heading {
        display: flex;
        align-items: flex-start;
        padding: 35px 0 2px 3px;
    }
    .iconbox {
        display: flex;
        padding-right: 20px;
        align-items: center;
    }
    .textboxcolumn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
    }
    .maintxt {
        display: flex;
        align-items: center;
        gap: 15px;
        align-self: stretch;
    }
    .subtxt {
        display: inline-flex;
    }
</style>