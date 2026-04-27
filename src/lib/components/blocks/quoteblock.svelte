<script lang="ts">
    import type { TextBlockCfgTemp } from '$lib/config';
    import { LeftQuotation, RightQuotation } from '$lib/components';
    import { to_style } from '$lib/config';

    let { quotxt, color }:{ quotxt: string, color: string } = $props();

    let quotetxtstyle: TextBlockCfgTemp = {
        font: "Aleo",
        lvl: "qt",
        color: "#505050",
        fontstyle: "italic",
        txtalign: "left",
        shdwstyle: "1px 1px 2px rgba(0, 0, 0, 0.25)",
        fxstyle: `
            font-feature-settings: 'case' on, 'liga' off; 
            line-height: 26px;`,
    };

    let cardstyle = $derived(`
        background:
            linear-gradient(0deg, #858585a6 0%, #858585a6 100%),
            ${color}bf;
    `)

    let style = to_style(quotetxtstyle);

</script>


<div class="quoteblock">
    <div class="quotecolorcard" style={cardstyle}>
        <div class="quotetxtcard">
            <div class="quotationbox-L">
                <LeftQuotation accentcolor={color} />
            </div>
            <div class="textblockbox">
                <div class="textblock" {style}>
                    {quotxt}
                </div>
            </div>
            <div class="quotationbox-R">
                <RightQuotation accentcolor={color} />
            </div>
        </div>
    </div>
</div>


<style>
    .quoteblock {
        display: flex;
        padding: 10px 0 0 20px;
        align-items: flex-start;
        align-self: stretch;
    }
    .quotecolorcard {
        display: flex;
        box-sizing: border-box;
        padding-left: 6px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 1 0 0;
        border-radius: 23px;
        corner-shape: squircle;
        /* background:
            linear-gradient(0deg, #858585a6 0%, #858585a6 100%),
            #0088ffbf; */
        background-blend-mode: hard-light, normal;
        box-shadow: 2px 2px 5px 0 rgba(21, 21, 21, 0.15);
        backdrop-filter: blur(25px);
    }
    .quotetxtcard {
        display: flex;
        box-sizing: border-box;
        min-height: 65px;
        padding: 0 15px;
        align-items: center;
        align-self: stretch;
        border-radius: 20px 23px 23px 20px;
        corner-shape: squircle;
        border: 1px solid rgba(255, 255, 255, 0.80);
        background: rgba(255, 255, 255, 0.85);
        background-blend-mode: hard-light;
    }
    .quotationbox-L {
        display: flex;
        padding-top: 10px;
        flex-direction: column;
        align-items: flex-end;
        align-self: stretch;
    }
    .quotationbox-R {
        display: flex;
        padding-bottom: 10px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        align-self: stretch;
    }
    .textblockbox {
        display: flex;
        padding: 45px 5px 35px 15px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 1 0 0;
    }
    .textblock {
        display: flex;
        align-items: center;
        align-self: stretch;
        flex: 1 0 0;
    }
</style>