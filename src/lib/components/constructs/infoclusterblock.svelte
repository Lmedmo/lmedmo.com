<script lang="ts">
    import type { Snippet } from "svelte";

    let { 
        htxtbox,
        blocks,
        accentcolor,
    }: { 
        htxtbox?: Snippet,
        blocks: Snippet,
        accentcolor: string,
    } = $props();

    let panestyle = $derived.by(() => {
        let s: string = `
            border: 2px solid ${accentcolor}40;
        `;
        return s
    });
</script>


<div class="infoclusterblock">
  {#if htxtbox}
    <div class="headingbox">
        {@render htxtbox()}
    </div>
  {/if}

    <div class="clusterpane" style={panestyle}>
        {@render blocks()}
    </div>
</div>


<style>
    .infoclusterblock {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        align-self: stretch;
    }
    .headingbox {
        display: flex;
        align-items: flex-end;
        align-self: stretch;
    }
    .clusterpane {
        display: flex;
        padding: 20px 18px;
        flex-direction: row;
        align-items: flex-start;
        align-content: flex-start;
        align-self: stretch;
        gap: 20px;
        flex-wrap: wrap;
        border-radius: 28px;
        corner-shape: squircle;
        background: 
            linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),
            rgba(255, 255, 255, 0.95)
        ;
        background-blend-mode: difference, color-burn;
        box-shadow: 4px 8px 15px 0 rgba(80, 80, 80, 0.15);
        backdrop-filter: blur(15px);
    }
</style>