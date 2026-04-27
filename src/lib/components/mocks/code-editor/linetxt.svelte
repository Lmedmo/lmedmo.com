<script lang="ts">
    import type { Snippet } from "svelte";

    let { txtblocks, indent = 0 }: { txtblocks: Snippet, indent?: number } = $props();

    let style: string = $derived.by(() => {
        return `padding: 5px 0 5px ${indent * 36}px;`;
    });
    
</script>

<div class="line" {style}>
    {@render txtblocks()}
</div>

<style>
    .line {
        /* Block styles */
        display: inline;
        box-sizing: border-box;
        min-height: 36px;
        align-items: start;
        /* max-height: 36px; */
        align-self: stretch;
        gap: 0px;

        /* Text styles */
        color: #CACACA;
        font-family: "JetBrains Mono";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        /* word-spacing: -1ch; */
        word-spacing: -.5ch;
        white-space: normal;
        /* text-wrap-mode: wrap; */
        /* font-style: normal;
        text-wrap: wrap; */
    }
</style>