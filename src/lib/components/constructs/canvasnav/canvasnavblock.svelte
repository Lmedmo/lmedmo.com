<script lang="ts">
    import type { Snippet } from "svelte";

    let { iconnavbuttons }: { iconnavbuttons: Snippet } = $props();
</script>


<div class="canvasnavblock">
    <div class="navpane">
        <div class="buttonbox">
            {@render iconnavbuttons()}
        </div>
    </div>
</div>


<style>
    .canvasnavblock {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
    }
    .navpane {
        display: flex;
        /* width: 960px; */
        /* max-width: 960px; */
        padding: 28px 12px 18px 12px;
        justify-content: center;
        align-items: center;
        border-radius: 40px;
        corner-shape: squircle;
        background: 
            linear-gradient(140deg, rgba(159, 159, 159, 0.15) 13.89%, rgba(100, 100, 100, 0.17) 45.53%, rgba(125, 125, 125, 0.15) 77.17%);
        background-blend-mode: soft-light;
        box-shadow: 
            3px 2px 11px 0 rgba(237, 237, 237, 0.75) inset,
            -2px -2px 10px 0 rgba(0, 0, 0, 0.10) inset,
            -9px -8px 20px 0 rgba(0, 0, 0, 0.03),
            9px 8px 20px 0 rgba(0, 0, 0, 0.07);
        backdrop-filter: blur(4.5px);
    }
    .buttonbox {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
        gap: 20px 0;
        flex: 1 0 0;
        flex-wrap: wrap;
    }
</style>