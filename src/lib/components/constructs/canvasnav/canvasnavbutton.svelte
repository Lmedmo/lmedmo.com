<script lang="ts">
    import type { AppIconTemp, TextBlockCfgTemp } from "$lib/config";
    import { Iconblock, Txt } from "$lib/components";
    import { findicon, DEFAULT_ICON } from "$lib/config";

    let { 
        url,
        labeltxt, 
        accentcolor,
        icon,
        iconkey
        // hideLabel, 
    }: { 
        url: string,
        labeltxt: string, 
        accentcolor: string,
        icon?: AppIconTemp,
        iconkey?: string, 
        // hideLabel: boolean, 
    } = $props();

    let color = $derived(accentcolor);

    let txtcolor = $derived(`hsl(from ${color} h calc(s - 20) calc(l - 8))`);

    let hovered: boolean = $state(false);

    let btnicon: AppIconTemp = $derived.by(() => {
        if (icon) {
            return icon;
        } else if (iconkey) {
            return findicon(iconkey);
        } else {
            return DEFAULT_ICON;
        }
    });

    let txtstyle: TextBlockCfgTemp = $derived({
        font: "Sono",
        lvl: "cnav",
        color: (hovered) ? txtcolor : "#4D4D4D",
        fontstyle: "normal",
        letspace: -1.52,
        txtalign: "center",
        shdwstyle: "",
        fxstyle: "",
    });

    let labelstyle = $derived.by(() => {
        if (hovered) {
            return `
                background:
                    radial-gradient(50% 50% at 50% 50%,
                        #e9e9e9d9 5%,
                        #f0f0f0e6 60%,
                        #f5f5f5bf 100%),
                        ${color}80;
                box-shadow: 
                    2px 1.5px 4px 0 #ffffffe6 inset,
                    -2px -2px 4px 0 #fffffff2 inset,
                    -0.5px -1px 3px 0 #00000026 inset,
                    0 0 5px 2px ${color}40,
                    -2px -1px 10px 0 #fffffff5,
                    5px 5px 10px 0 #90909033;
                background-blend-mode: hard-light, normal;
                backdrop-filter: blur(2px);
            `;
        }
    });

    let iconstyle = $derived.by(() => {
        if (hovered) {
            return `
                background: #FFF;
                box-shadow: 0 0 8px 2px ${color}73;
            `;
        } else {
            return `
                background: #FFF;
                box-shadow: 4px 4px 8px 0 rgba(37, 37, 37, 0.25);
            `;
        }
    });

    

	function onmouseenter(){
		hovered = true;
	}
	function onmouseleave(){
		hovered = false;
	}
</script>


<a class="canvasnavbutton" href={url} {onmouseenter} {onmouseleave}>
    <div class="iconbox" style={iconstyle}>
        <Iconblock icon={btnicon} style={"cnav"}  />
    </div>
  
    <div class="labelbox" style={labelstyle}>
        <Txt txt={labeltxt} txtstylecfg={txtstyle} />
    </div>
</a>


<style>
    .canvasnavbutton {
        display: flex;
        flex-direction: column;
        min-width: 128px;
        max-width: 156px;
        align-items: center;
        /* justify-content: center; */
        /* align-items: flex-start; */
        gap: 8px;
        flex: 1 0 0;
        background: none;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
    .iconbox {
        display: flex;
        width: 96px;
        height: 96px;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        corner-shape: squircle; /* superellipse(2); */
        border-radius: 18.285px;
        background: rgba(255, 255, 255, 0.00);
        box-shadow: -3.75px -2.25px 11.25px 0 rgba(255, 255, 255, 0.35), 3.75px 3px 10.5px 0 rgba(21, 21, 21, 0.25);
        flex-shrink: 0;
    }
    .labelbox {
        display: flex;
        padding: 3px 8px;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
    }
</style>