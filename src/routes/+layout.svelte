<script lang="ts">
    import { asset } from '$app/paths';
    import { Titlebar } from "$lib/ui";
    import { BasicInfo } from "$lib/data";
    import { AppConfig } from "$lib/config";
    import type { BasicInfoObj, LinkedAcctObj } from "$lib/data";
    import type { AppPageCfgTemp } from "$lib/config";

	let { children } = $props();

    let info: BasicInfoObj = BasicInfo;
    let pages: AppPageCfgTemp[] = AppConfig.pages;

    let title: string = $derived(`${info.first_name} ${info.last_name}`);
    let links: LinkedAcctObj[] = $derived(info.linked_accounts);

    let fontpath = $derived(asset('/fonts/fonts.css'));
</script>

<svelte:head>
	<link rel="stylesheet" href={fontpath} />
</svelte:head>

<div class="f0">
    <Titlebar {title} {pages} {links} />
    <div class="f1_pageBox">
        {@render children()}
    </div> 
</div>


<style>
    .f0 {
      /* Positioning */
        position: absolute;
		z-index: 0;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
      /* Layout */
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
		align-items: center;
        align-self: stretch;
        flex: 1 0 0;
		padding: 6px;
        gap: 8px;
		overflow: hidden;
        background: linear-gradient(121deg, #ffffff00 50%, #ffffff80 100%), #F4F4F4;
    }
    .f1_pageBox {
        display: flex;
        box-sizing: border-box;
        min-width: 370px;
        flex-direction: column;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;
        overflow: hidden;
        /* overflow-y: hidden;
        overflow-x: hidden; */
    }
</style>
