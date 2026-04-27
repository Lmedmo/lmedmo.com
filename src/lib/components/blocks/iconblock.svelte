<script lang="ts">
    import type { AppIconTemp, AppIconStyleOpt } from "$lib/config";

    let { 
        icon,
        style,
        showpane,
        panecolor
    }: {
        icon: AppIconTemp,
        style: AppIconStyleOpt,
        showpane?: boolean,
        panecolor?: string
    } = $props();


    let panestyle = $derived.by(() => {
        let s = "";
        let shd = "";
        let br = 0;
        let pad = 0;

        let bg = `
            linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), rgba(255, 255, 255, 0.95)
        `;

        switch (style) {
            case "h1": { br = 22; pad = 6; shd = "5.152px 5.152px 19.318px 0 rgba(0, 0, 0, 0.15)"; break; }
            case "h2": { br = 18; pad = 5; shd = "5.152px 5.152px 19.318px 0 rgba(0, 0, 0, 0.15)"; break; }
            case "h3": { br = 15; pad = 4; shd = "4px 4px 15px 0 rgba(0, 0, 0, 0.15)"; break; }
            default:   { br = 0;  pad = 0; shd = ""; break; }
        }

        s = `
            border: 2px solid ${panecolor}40;
            border-radius: ${br}px;
            padding: ${pad}px;
            box-shadow: ${shd};
            background: ${bg};
        `;
        
        return s;
    });

    let iconstyle = $derived.by(() => {
        let s = "";
        let xy = 0;
        let br = 0;
        let shd = "";

        switch (style) {
            case "phdr": {
                xy = 96;
                br = 18.28;
                shd = "5.152px 5.152px 19.318px 0 rgba(0, 0, 0, 0.15)";
                break;
            }
            case "cnav": {
                xy = 96;
                br = 18.28;
                shd = "none";
                // shd = "5.152px 5.152px 19.318px 0 rgba(0, 0, 0, 0.15)";
                break;
            }
            case "h1": {
                xy = 75;
                br = 14.28;
                shd = (showpane) ? "1.172px 1.172px 2.344px 0 rgba(37, 37, 37, 0.20)" : "5.152px 5.152px 19.318px 0 rgba(0, 0, 0, 0.15)";
                break;
            }
            case "h2": {
                xy = 64;
                br = 12.19;
                shd = (showpane) ? "1px 1px 2px 0 rgba(37, 37, 37, 0.20)" : "5.152px 5.152px 19.318px 0 rgba(0, 0, 0, 0.15)";
                break;
            }
            case "alt_h1": {
                xy = 58;
                br = 0; //nobg
                shd = "none";
                // shd = "1.5px 1.5px 3px 0 rgba(37, 37, 37, 0.35)";
                break;
            }
            case "h3": {
                xy = 46;
                br = 8.76;
                shd = (showpane) ? "0.5px 0.5px 1.5px 0 rgba(37, 37, 37, 0.20)" : "4px 4px 15px 0 rgba(0, 0, 0, 0.15)";
                break;
            }
            case "side": {
                xy = 42;
                br = 8;
                shd = "1px 1px 3px 0 rgba(37, 37, 37, 0.25)";
                break;
            }
            case "tbar": {
                xy = 42;
                br = 0; //nobg
                shd = "none";
                // shd = "box-shadow: 0.25px 0.75px 1px 0 rgba(37, 37, 37, 0.20);";
                break;
            }
            case "hbtn": {
                xy = 40;
                br = 0; //nobg
                shd = "0.25px 0.75px 1px 0 rgba(37, 37, 37, 0.20)";
                break;
            }
            case "h4": {
                xy = 26;
                br = 7.57;
                shd = "0.586px 0.586px 1.758px 0 rgba(61, 61, 61, 0.15)";
                break;
            }
            case "btn": {
                xy = 22;
                br = 0; //nobg
                shd = "0.9px 0.6px 1.5px 0 rgba(48, 48, 48, 0.30)";
                break;
            }
            case "tag": {
                xy = 22;
                br = 4.19;
                shd = "0.6px 0.4px 2px 0 rgba(32, 32, 32, 0.20)";
                break;
            }
            case "tab": {
                xy = 20;
                br = 0; //nobg
                shd = "none";
                // shd = "0.9px 0.7px 1px 0 rgba(32, 32, 32, 0.35)";
                break;
            }
            default: {
                xy = 0;
                br = 0;
                shd = "";
                break;
            }
        }

        s = `
            width: ${xy}px;
            height: ${xy}px;
            border-radius: ${br}px;
            box-shadow: ${shd};
        `;

        return s;
    });
</script>


<div class="iconbox">
  {#if showpane}
    <div class="iconpane" style={panestyle}>
        <img class="icon" src={icon.src} alt={icon.alt} style={iconstyle} />
    </div>
  {:else}
    <img class="icon" src={icon.src} alt={icon.alt} style={iconstyle} />
  {/if}
</div>


<style>
    .iconbox {
        /* background-color: #7fffd4; */
        display: inline-flex;
        align-items: center;
    }
    .iconpane {
        display: flex;
        justify-content: center;
        align-items: center;
        corner-shape: squircle;
        background-blend-mode: difference, color-burn;
        backdrop-filter: blur(15px);
    }
    .icon {
        aspect-ratio: 1/1;
        corner-shape: squircle;
    }
</style>