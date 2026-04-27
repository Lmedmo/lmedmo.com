<script lang="ts">
    import type { Snippet } from "svelte";
    import { AppConfig } from "$lib/config";
    import { Vdiv } from '$lib/components';

    let { 
        heading,
        content,
        showblockspan,
        // bgfill,
        accentcolor = "#000000",
    }: {
        heading?: Snippet,
        content: Snippet,
        showblockspan: boolean,
        // bgfill: string
        accentcolor: string,
    } = $props();

    let maxW = `max-width: ${AppConfig.contentmaxwidth}px;`;
</script>

<div class="sectionbox">
    <div class="sectionblock" style={maxW}>
      {#if heading}
        {@render heading()}
      {/if}
    
        <div class="sectioncontents">
          {#if showblockspan}
            <Vdiv color={accentcolor} width={2}
                toppad={2} botpad={2} leftpad={6} rightpad={10} 
            />
          {/if}
            <div class="contentbox">
                {@render content()}
            </div>
        </div>
    </div>
</div>


<style>
    .sectionbox {
        /* background-color: green; */
        display: flex;
        align-self: stretch;
        justify-content: center;
    }
    .sectionblock {
        /* border: 1px solid aqua; */
        display: flex;
        min-width: 378px;
        flex-direction: column;
        padding: 0 10px 0 20px;
        flex: 1 0 0;
    }
    .sectioncontents {
        /* background-color: blueviolet; */
        display: flex;
        padding: 4px 0 12px 3px;
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }
    .contentbox {
        /* background-color: darkorange; */
        display: flex;
        padding: 6px 0 12px 0;
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
        flex: 1 0 0;
    }
</style>