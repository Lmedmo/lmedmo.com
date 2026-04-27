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
            background: 
                linear-gradient(0deg, #80808033 0%, #80808033 100%),
                linear-gradient(0deg, ${accentcolor}0d 0%, ${accentcolor}0d 100%), 
                #ffffff40;
            background-blend-mode: overlay, normal, normal;
        `;
        return s
    });
</script>


<div class="infoblock">
  {#if htxtbox}
    <div class="headingbox">
        {@render htxtbox()}
    </div>
  {/if}

    <div class="blockpane" style={panestyle}>
        {@render blocks()}
    </div>
</div>


<style>
    .infoblock {
        display: flex;
        min-width: 302px;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        flex: 1 0 0;
    }
    .headingbox {
        display: flex;
        align-items: center;
        align-self: stretch;
    }
    .blockpane {
        display: flex;
        padding: 15px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        border-radius: 20px;
        corner-shape: squircle;
        box-shadow: 3px 5px 10px 0 rgba(53, 53, 53, 0.15);
        backdrop-filter: blur(22.5px);
    }
</style>