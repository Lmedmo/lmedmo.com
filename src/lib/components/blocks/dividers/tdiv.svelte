<script lang="ts">
    let { accentcolor }: { accentcolor?: string } = $props();

    let style = $derived(`background: ${accentcolor};`)
</script>


<div class="text-divider">
    <div class="divider" {style}></div>
</div>


<style>
    .text-divider {
        display: inline-flex;
        width: 2px;
        padding: 5px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }
    .divider {
        display: inline-flex;
        width: 2px;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
        border-radius: 1px;
        box-shadow: -0.5px -0.5px 1px 0 rgba(32, 32, 32, 0.20) inset, 1px 1px 4px 0 rgba(32, 32, 32, 0.20);
    }
</style>