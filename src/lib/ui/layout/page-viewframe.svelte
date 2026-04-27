<script lang="ts">
    import type { Snippet } from "svelte";

    let { 
        framecolor, 
        framebgstyle = "background: transparent;", 
        canvasbgstyle = "background: transparent;",
        sidebarSide = "none",
        sidebarMenu,
        canvas
    }: { 
        framecolor: string,
        framebgstyle: string,
        canvasbgstyle: string,
        sidebarSide: "left" | "right" | "none",
        sidebarMenu?: Snippet,
        canvas: Snippet,
    } = $props();

    let framestyle = $derived(`
        border: 3px solid ${framecolor};
        ${framebgstyle}
    `);

    let canvasstyle = $derived(`
        ${canvasbgstyle}
    `);
</script>


<div class="page-contentBox">
  {#if sidebarSide === "left" && sidebarMenu}
    <div class="sidebarBox-L">
        {@render sidebarMenu()}
    </div>
  {/if}

    <div class="page-viewBox">
        <div class="page-viewframe" style={framestyle}>
            <div class="content-canvas" style={canvasstyle}>
                {@render canvas()}
            </div>
        </div>
    </div>

  {#if sidebarSide === "right" && sidebarMenu}
    <div class="sidebarBox-R">
        {@render sidebarMenu()}
    </div>
  {/if}
</div>


<style>
    .page-contentBox {
        display: flex;
        box-sizing: border-box;
        align-items: flex-start;
        align-self: stretch;
        flex: 1 0 0;
        overflow: hidden;
    }
    .sidebarBox-L {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        align-self: stretch;
    }
    .page-viewBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;
    }
    .page-viewframe {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 20px;
        overflow: hidden;
    }
    .content-canvas {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;
        backdrop-filter: blur(32.5px);
        overflow: auto;
        scrollbar-width: none;
        scrollbar-gutter: stable;
        scrollbar-color: rgba(0, 0, 0, 0.05) transparent;
    }
    /* Experimenting (webkit-scrollbars) */
    /*
        .content-canvas::-webkit-scrollbar {
            width: 10px;  ~ sets thickness of the whole vertical scrollbar 
            background-color: rgba(0, 0, 0, 0.0);  ~ sets background of the whole scrollbar area
        }
        .content-canvas::-webkit-scrollbar-track {
            background-color: rgba(0, 0, 0, 0.0);  ~ color of the track
            border-radius: 5px;
        }
        .content-canvas::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.05);  ~ color of the draggable handle
            border-radius: 5px;  ~ rounds the corners of the handle
        }
        .content-canvas::-webkit-scrollbar-thumb:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    */
</style>