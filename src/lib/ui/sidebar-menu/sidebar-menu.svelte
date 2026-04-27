<script lang="ts">
    import type { AppPageCfgTemp } from "$lib/config";
    import MenuButton from "./sidebar-button.svelte";

    let { 
        options, 
        selected 
    }: {
        options: AppPageCfgTemp[];
        selected: AppPageCfgTemp;
    } = $props();

    let menuState: boolean = $state(false)

    function checkActive(pg: AppPageCfgTemp): boolean {
        return pg.id === selected.id;
    }
</script>


<div class="sidebar-menu">
    {#each options as pg}
        <MenuButton 
            txt={pg.name} 
            link={pg.url} 
            icon={pg.icons.menubaricon}
            color={pg.colors.main}
            isActive={checkActive(pg)} 
            isExpanded={menuState}
        />
    {/each}
</div>


<style>
    .sidebar-menu {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 40px;
    }
</style>