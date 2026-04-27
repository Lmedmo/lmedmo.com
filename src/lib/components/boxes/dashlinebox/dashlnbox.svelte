<script lang="ts">
    import type { TextBlockCfgTemp } from "$lib/config";
    import { Txt } from "$lib/components";
    import { asset } from "$app/paths";
    import Node from "./boxselectnode.svelte";

    let { htxt, nodecolor }: { htxt: string, nodecolor: string } = $props();

    let txtstyle: TextBlockCfgTemp = $derived.by(() => {
        let cfg: TextBlockCfgTemp = {
            font: "Sono",
            lvl: "h1",
            color: "#4d4d4d",
            fontstyle: "normal",
            letspace: -3.36,
            txtalign: "center",
            shdwstyle: "2.5px 2.8px 5px 0 rgba(48, 48, 48, 0.20)",
            fxstyle: "font-variant-numeric: slashed-zero; font-feature-settings: 'case' on, 'ss03' on;",
        }
        return cfg
    });

    let color = $derived(nodecolor);

    let lr_dash = asset("/imgs/dashes/flxdash--120x30px-XY--30px-padLR-hi_res-e5.png");
    let vert_dash = asset("/imgs/dashes/flxdash--30x120px-XY--30px-padTB-hi_res-e5.png");

    let lr_style = $derived(`background: url(${lr_dash}) 0px 0px / contain repeat-x;`);
    let vert_style = $derived(`background: url(${vert_dash}) 0px 0px / contain repeat-y;`);
</script>

<!--) NO FILL  -->
<div class="nodebox">
  <!--& Horizontal-Line-(has nodes) -->
    <div class="lr-node-ln">
        <Node fill={color} pad={"R"} />
        <div class="flxdash-lr-filler" style={lr_style}></div>
        <div class="flxdash-lr-filler" style={lr_style}></div>
        <Node fill={color} pad={"L"} />
    </div>

    <div class="ln-text-ln">
      <!--> Vertical-Line-(no nodes) -->
        <div class="vert-dash-ln">
            <div class="flxdash-vert-filler" style={vert_style}></div>
            <div class="flxdash-vert-filler" style={vert_style}></div>
        </div>
      <!--% Text -->
        <div class="content">
             <Txt txt={htxt} txtstylecfg={txtstyle} />
        </div>

      <!--> Vertical-Line-(no nodes) -->
        <div class="vert-dash-ln">
            <div class="flxdash-vert-filler" style={vert_style}></div>
            <div class="flxdash-vert-filler" style={vert_style}></div>
        </div>
    </div>

  <!--& Horizontal-Line-(has nodes) -->
    <div class="lr-node-ln">
        <Node fill={color} pad={"R"} />
        <div class="flxdash-lr-filler" style={lr_style}></div>
        <div class="flxdash-lr-filler" style={lr_style}></div>
        <Node fill={color} pad={"L"} />
    </div>
</div>


<style>
    .nodebox {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
    }
    .ln-text-ln {
        display: flex;
        box-sizing: border-box;
        padding: 3px 4.5px;
        justify-content: center;
        align-items: center;
        gap: 7.5px
    }
    .content {
        display: flex;
        box-sizing: border-box;
        padding: 5px 12px 5px 12px;
        justify-content: center;
        align-items: center;
    }
    
    /* Horizontal-Line */
    .lr-node-ln {
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }
    .flxdash-lr-filler {
        display: flex;
        /* box-sizing: border-box; */
        height: 3px;
        justify-content: space-between;
        align-items: center;
        flex: 1 0 0;
        border-radius: 1.5px;
    }
    
    /* Vertical-Line */
    .vert-dash-ln {
        display: flex;
        /* box-sizing: border-box; */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }
    .flxdash-vert-filler {
        display: flex;
        /* box-sizing: border-box; */
        width: 3px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex: 1 0 0;
        border-radius: 1.5px;
    }
</style>