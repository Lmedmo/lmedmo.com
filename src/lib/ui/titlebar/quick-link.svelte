<script lang="ts">
    import { LinkIcon, GithubIcon, LinkedinIcon, XIcon } from "$lib/components/symbols";
    import type { LinkedAcctObj } from "$lib/data/models";

    let { link, accentcolor }: { link: LinkedAcctObj, accentcolor: string } = $props();

    let color = $derived(accentcolor);

    let size: number = 42;

    let desc = $derived(link.description);
</script>

<a href={link.url} target="_blank" rel="noopener noreferrer">
    {#if (desc === "GitHub")}
        <GithubIcon {color} {size} />
    {:else if (desc === "X")}
        <XIcon {color} {size} />
    {:else if (desc === "LinkedIn")}
        <LinkedinIcon {color} {size}/>
    {:else}
        <LinkIcon {color} {size} />
    {/if}
</a>