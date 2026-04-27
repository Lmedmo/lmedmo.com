<script lang="ts">
    import type { Snippet } from "svelte";

    let { blockcontents }: { blockcontents: Snippet } = $props();
</script>

<div class="block">
    {@render blockcontents()}
</div>

<style>
    .block {
        /* background-color: rgba(0, 0, 0, 0.05); */
        display: flex;
        padding: 3px 8px;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        border-radius: 8px;
        gap: 1px;
    }
</style>