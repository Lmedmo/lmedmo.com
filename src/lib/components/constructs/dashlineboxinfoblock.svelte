<script lang="ts">
    import type { Snippet } from "svelte";
    import type{ TextBlockCfgTemp } from "$lib/config";
    import { asset } from "$app/paths";
    import { AppState } from "$lib/config";
    import { BoxSelectNode, Txt } from "$lib/components";

    let { 
        content, 
        htxt 
    }: { 
        content: Snippet,
        htxt: string
    } = $props();

    let nodecolor = $derived(AppState.page.colors.main);

    let lr_dash = asset("/imgs/dashes/flxdash--120x30px-XY--30px-padLR-hi_res-e5.png");
    let vert_dash = asset("/imgs/dashes/flxdash--30x120px-XY--30px-padTB-hi_res-e5.png");

    let lr_style = $derived(`background: url(${lr_dash}) 0px 0px / contain repeat-x;`);
    let vert_style = $derived(`background: url(${vert_dash}) 0px 0px / contain repeat-y;`);

    let cardheadingcfg: TextBlockCfgTemp = {
        lvl: "h3", // 'size: 24', and 'wght: 640' implied by def,
        font: "Aleo",
        color: "#303030",
        //wght: 640,
        fontstyle: "italic",
        shdwstyle: `text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);`,
    }
</script>


<div class="dashlinebox-infoblock">
    <div class="dashlinebox">
        <!--? TOP Horizontal-Line (w/ node endcaps) -->
          <div class="horz-nodecap-dash-ln">
              <BoxSelectNode fill={nodecolor} pad={"R"} />
              <div class="flxdash-lr-filler" style={lr_style}></div>
              <div class="flxdash-lr-filler" style={lr_style}></div>
              <BoxSelectNode fill={nodecolor} pad={"L"} />
          </div>
        <!--?-->
      
          <!--& MIDDLE contents: vertical-line, {textblockBoxCard}, vertical-line  -->
          <div class="ln-textblockBox-ln">
            <!--~ Vertical-Line (no nodes) -->
              <div class="vert-nodecap-dash-ln">
                  <div class="flxdash-vert-filler" style={vert_style}></div>
                  <div class="flxdash-vert-filler" style={vert_style}></div>
              </div>
            <!--~-->
      
            <!--% Textblock Card -->
              <div class="contentcard">
                  <div class="headingBox">
                      <Txt txt={htxt} txtstylecfg={cardheadingcfg} />
                  </div>
                  {@render content()}
              </div>
            <!--%-->
      
            <!--~ Vertical-Line (no nodes) -->
              <div class="vert-nodecap-dash-ln">
                  <div class="flxdash-vert-filler" style={vert_style}></div>
                  <div class="flxdash-vert-filler" style={vert_style}></div>
              </div>
            <!--~-->
          </div>
          <!--&-->
      
        <!--? BOTTOM Horizontal-Line (w/ node endcaps) -->
          <div class="horz-nodecap-dash-ln">
              <BoxSelectNode fill={nodecolor} pad={"R"} />
              <div class="flxdash-lr-filler" style={lr_style}></div>
              <div class="flxdash-lr-filler" style={lr_style}></div>
              <BoxSelectNode fill={nodecolor} pad={"L"} />
          </div>
        <!--?-->
    </div>
</div>


<style>
    .dashlinebox-infoblock {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        align-self: stretch;
    }
    .dashlinebox {
        display: flex;
        max-width: 900px;
        padding: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
    }
    .ln-textblockBox-ln {
        display: flex;
        box-sizing: border-box;
        padding: 3px 4.5px;
        justify-content: center;
        align-items: center;
        gap: 7.5px
    }
    .contentcard {
        display: flex;
        padding: 25px 20px 30px 25px;
        gap: 10px;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 0;
        border-radius: 20px;
        corner-shape: squircle;
        border: 1px solid rgba(85, 204, 0, 0.40);
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.80) 26.45%, rgba(255, 255, 255, 0.85) 56.88%, rgba(246, 246, 246, 0.39) 87.31%);
        background-blend-mode: multiply;
        box-shadow: 6px 5px 15px 0 rgba(32, 32, 32, 0.05);
        backdrop-filter: blur(7.5px);
    }
    .headingBox {
        display: flex;
        padding: 3px 0;
        align-items: center;
        /* align-content: flex-start; */
        align-self: stretch;
        /* flex-wrap: wrap; */
        /* flex: 1 0 0; */
    }
    
    /* Horizontal-Line */
    .horz-nodecap-dash-ln {
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }
    .flxdash-lr-filler {
        display: flex;
        box-sizing: border-box;
        height: 3px;
        justify-content: space-between;
        align-items: center;
        flex: 1 0 0;
        border-radius: 1.5px;
    }
    
    /* Vertical-Line */
    .vert-nodecap-dash-ln {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }
    .flxdash-vert-filler {
        display: flex;
        width: 3px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex: 1 0 0;
        border-radius: 1.5px;
    }
</style>