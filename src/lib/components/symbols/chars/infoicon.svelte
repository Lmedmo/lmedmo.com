<script lang="ts">
    import { asset } from "$app/paths";

    let {
        accentcolor,
        sizeXY,
    }: {
        accentcolor?: string,
        sizeXY?: number,
    } = $props();
    
    let color = $derived(accentcolor ?? '#E0E0E0');

    let [ symbolsrc, symbolalt, iconstyle ] = $derived.by(() => {
        let src = asset(`/icons/_a/symbols/v3.5.2-info--fx-alt_grey-x1-298br-80cs-1024p.png`);
        let alt = "info_symbol";
        let s = `
            width: ${sizeXY}px;
            height: ${sizeXY}px;
            border-radius: 7.57px;
            box-shadow: 0.8px 1px 1.5px 0 rgba(32, 32, 32, 0.20);
        `;

        switch (color) {
            case "#FF4422": { 
                src = asset(`/icons/_a/symbols/v3.5.2-info--fx-alt_red-x1-298br-80cs-64p.png`); break; 
            }
            case "#FF7300": { 
                src = asset(`/icons/_a/symbols/v3.5.2-info--fx-alt_orange-x1-298br-80cs-64p.png`); break; 
            }
            case "#FFE733": { 
                src = asset(`/icons/_a/symbols/v3.5.2-info--fx-alt_yellow-x1-298br-80cs-64p.png`); break; 
            }
            case "#77DD00": { 
                src = asset(`/icons/_a/symbols/v3.5.2-info--fx-alt_green-x1-298br-80cs-64p.png`); break; 
            }
            case "#0080FF": { 
                src = asset(`/icons/_a/symbols/v3.5.2-info--fx-alt_blue-x1-298br-80cs-64p.png`); break; 
            }
            case "#A022FF": { 
                src = asset(`/icons/_a/symbols/v3.5.2-info--fx-alt_purple-x1-298br-80cs-64p.png`); break; 
            }
        }
        return [src, alt, s ];
    });

    let size = $derived(sizeXY ?? 64);
</script>


<div class="symbol" style={`width: ${size}px; height: ${size}px;`}>
    <img class="icon" src={symbolsrc} alt={symbolalt} style={iconstyle} />
</div>


<style>
    .symbol {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 7.57px;
        corner-shape: squircle;
        box-shadow: 1px 1px 1.5px 0 rgba(32, 32, 32, 0.20);
    }
</style>