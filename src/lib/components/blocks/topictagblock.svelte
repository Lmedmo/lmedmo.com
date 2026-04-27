<script lang="ts">
    import type { TextBlockCfgTemp, TopicTagTemp } from '$lib/config';
    import { findtopic } from '$lib/config';
    import { Txt, Iconblock } from '$lib/components';

    let { keyword }: { keyword: string } = $props();

    let topictag: TopicTagTemp = $derived(findtopic(keyword));

    let name = $derived(topictag.name);
    let icon = $derived(topictag.icon);

    let color = $derived(icon.color);
    let boost = $derived(icon.boostcontrast);

    let txtstylecfg: TextBlockCfgTemp = $derived({
        font: "Sono",
        lvl: "tag",
        color: color,
        fontstyle: "normal",
        letspace: -1.44,
        txtalign: "left",
        shdwstyle: "0.9px 0.7px 2px rgba(32, 32, 32, 0.30)",
        fxstyle: "font-kerning: none; font-feature-settings: 'ss03' on;",
    });

    let tagstyle = $derived.by(() => {
        if (boost){
            return `
                border: 1px solid ${color};
                background: 
                    linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%), hsl(from ${color} h s calc(l + 30));
            `
        } else {
            return `
                border: 1px solid ${color};
                background: 
                    linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%), ${color};
            `
        }
    });
</script>


<div class="topictag" style={tagstyle}>
    <Iconblock {icon} style={"tag"} showpane={false} />

    <div class="txtbox">
        <Txt txt={name} {txtstylecfg} />
    </div>
</div>


<style>
    .topictag {
        display: flex;
        padding: 4px;
        align-items: center;
        gap: 6px;
        border-radius: 8px;
        corner-shape: squircle;      
        background-blend-mode: hard-light, normal;
        box-shadow: 1px 1px 2px 0 rgba(48, 48, 48, 0.20);
    }
    .txtbox {
        display: flex;
        max-height: 20px;
        padding: 1px 10px 0 3px;
        align-items: center;
    }
</style>