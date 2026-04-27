<script lang="ts">
    let { num, isFlex = false }: { num: number, isFlex?: boolean } = $props();

</script>

{#if isFlex}
    <div class="num" id="flex">{num}</div>
{:else}
    <div class="num" id="normal">{num}</div>
{/if}
<style>
    .num {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        width: 64px;
        /* height: 36px;
        min-height: 36px; */
        padding: 5px 20px;
        align-items: flex-end;


        align-self: stretch;
        color: rgba(152, 152, 152, 0.70);
        /* text-align: center; */
        font-family: "JetBrains Mono";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        word-spacing: normal;
        white-space: normal;
    }
    #flex {
        flex: 1 0 0;
    }
    #normal {
        height: 36px;
        min-height: 36px;
    }
</style>