<script lang="ts">
    import { DashLnBox, ArrowVec } from "$lib/components";

    let { htxt, accentcolor }: { htxt: string, accentcolor: string } = $props();

    let color = $derived(accentcolor);

</script>


<div class="dashlnboxheading">
    <DashLnBox htxt={htxt} nodecolor={color} />

    <ArrowVec kind="full" points="right" showFx={true} color={color} size={36} />
</div>


<style>
    .dashlnboxheading {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: stretch;
        padding: 35px 0 2px 0;
        /* gap: 12px; */
    }
</style>