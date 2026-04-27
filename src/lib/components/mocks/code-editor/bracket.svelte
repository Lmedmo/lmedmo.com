<script lang="ts">
    let { type, indentLvl }: { type: "open" | "close" | string, indentLvl: number } = $props();

    let oBrace: string = `{`;
    let cBrace: string = `}`;

    let char: string = $derived.by(() => {
        if (type === "open") {
            return oBrace;
        } else if (type === "close") {
            return cBrace;
        } else {
            return "UNKNOWN";
        }
    });

</script>

{#if indentLvl === 0}
    <span class="bracket" id="l0">{char}</span>
{:else if indentLvl === 1}
    <span class="bracket" id="l1">{char}</span>
{:else}
    <span class="bracket" id="std">{char}</span>
{/if}

<style>
    .bracket {
        display: inline;
        box-sizing: border-box;
        font-family: Monosten;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        text-shadow: 1px 1px 3px rgba(32, 32, 32, 0.20);
        line-height: normal;
        letter-spacing: -0.48px;
        word-spacing: normal;
        white-space: normal;
    }
    #l0 {
        color: #00DB99;
    }
    #l1 {
        color: #FFEA64;
    }
    #std {
        color: #CACACA;
    }
</style>