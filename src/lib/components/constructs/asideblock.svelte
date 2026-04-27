<script lang="ts">
    import type { Snippet } from "svelte";
    import { Heading } from "$lib/components"

    let { 
        blocks,
        labeltxt,
        accentcolor,
        labeliconkey,
    }: { 
        blocks: Snippet,
        labeltxt: string,
        accentcolor: string,
        labeliconkey?: string;
    } = $props();

    let color = $derived(accentcolor);

    let bordercolor = $derived(`hsl(from ${accentcolor} h calc(s - 50) calc(l + 1))`);
    let labelcolor = $derived(`hsl(from ${accentcolor} calc(h - 2) calc(s - 35) 75%)`);

    let cornerstyle: string = `border-radius: 14px; corner-shape: squircle;`;

    let panestyle: string = $derived(
       `${cornerstyle}   
        background:
            linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%),
            ${accentcolor}99;
        background-blend-mode: hard-light, normal;`
    );

    let borderstyle: string = $derived(
       `border: 2px dashed ${bordercolor}; ${cornerstyle}`
    );

    let labelstyle: string = $derived(
       `background: ${labelcolor};`
    );

</script>


<div class="asideblock">
    <div class="asidepane" style={panestyle}>
        <div class="dashoutlinebox" style={borderstyle}>
            <div class="labeltxtbox" style={labelstyle}>
                <Heading htxt={labeltxt} lvl={"h4"} accentcolor={color}
                    iconkey={labeliconkey}
                    showiconpane={false} 
                    eolchar={"arrow"}
                />
            </div>
        
            <div class="blockbox">
                {@render blocks()}
            </div>
        </div>
    </div>
</div>


<style>
    .asideblock {
        display: flex;
        flex-direction: column;
        padding-top: 15px;
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }
    .asidepane {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        box-shadow: 3px 3px 7px 0 rgba(80, 80, 80, 0.25);
    }
    .dashoutlinebox {
        display: flex;
        padding: 7px;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
        flex: 1 0 0;
    }
    .labeltxtbox {
        /* background-color: aqua; */
        display: flex;
        align-items: flex-end;
        align-self: stretch;
        border-radius: 9px;
        corner-shape: squircle;
        backdrop-filter: blur(22.5px);
        border: 1px solid rgba(64, 64, 64, 0.20);
        box-shadow: 1px 2px 2px 0 rgba(37, 37, 37, 0.10);
    }
    .blockbox {
        display: flex;
        padding: 6px 4px 4px 4px;
        align-items: flex-start;
        align-content: flex-start;
        gap: 5px;
        align-self: stretch;
        flex-wrap: wrap;
    }
</style>