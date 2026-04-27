<script lang="ts">
    let { 
        accentcolor = "#000000",
        orientation = "s2e"
    }: { 
        accentcolor?: string,
        orientation?: "s2e" | "e2n" | "n2w" | "w2s" | "s2w" | "w2n" | "n2e" | "e2s"
    } = $props();

    let color = $derived(accentcolor);
    let { deg, svg }: { deg: number, svg: number } = $derived.by(() => {
        switch (orientation) {
            case "s2e":
                return { deg: 0, svg: 0 };
            case "e2n":
                return { deg: 90, svg: 0 };
            case "n2w":
                return { deg: 180, svg: 0 };
            case "w2s":
                return { deg: -90, svg: 0 };
            case "s2w":
                return { deg: 0, svg: 1 };
            case "w2n":
                return { deg: 90, svg: 1 };
            case "n2e":
                return { deg: 180, svg: 1 };
            case "e2s":
                return { deg: -90, svg: 1 };
            default:
                console.warn(`Invalid orientation: ${orientation}. Defaulting to s2e.`);
                return { deg: 0, svg: 0 };
        }
    });

// let fill = $derived(`fill: linear-gradient(180deg, #ffffff80 0%, #ffffff80 100%), ${color};`);
</script>

<div class="turnarrow">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.69219 14.5092C3.31579 14.5092 2.2 13.3934 2.2 12.017V3.44659C2.2 2.75812 2.7583 2.20001 3.447 2.20001C4.13569 2.20001 4.69399 2.75812 4.69399 3.44659V11.2419C4.69399 11.6691 5.04027 12.0154 5.46743 12.0154H15.5427L12.3808 8.85333C11.8938 8.36633 11.8938 7.57675 12.3808 7.08975C12.8678 6.60275 13.6573 6.60275 14.1443 7.08975L19.4348 12.3805C19.9217 12.8675 19.9218 13.6571 19.4348 14.1441L14.1443 19.4348C13.6573 19.9218 12.8678 19.9217 12.3808 19.4348C11.8938 18.9478 11.8938 18.1582 12.3808 17.6712L15.5427 14.5092H4.69219Z" fill={color}/>
        <path d="M4.69219 14.5092C3.31579 14.5092 2.2 13.3934 2.2 12.017V3.44659C2.2 2.75812 2.7583 2.20001 3.447 2.20001C4.13569 2.20001 4.69399 2.75812 4.69399 3.44659V11.2419C4.69399 11.6691 5.04027 12.0154 5.46743 12.0154H15.5427L12.3808 8.85333C11.8938 8.36633 11.8938 7.57675 12.3808 7.08975C12.8678 6.60275 13.6573 6.60275 14.1443 7.08975L19.4348 12.3805C19.9217 12.8675 19.9218 13.6571 19.4348 14.1441L14.1443 19.4348C13.6573 19.9218 12.8678 19.9217 12.3808 19.4348C11.8938 18.9478 11.8938 18.1582 12.3808 17.6712L15.5427 14.5092H4.69219Z" fill="white" fill-opacity="0.5" style="mix-blend-mode:hard-light"/>
    </svg>
</div>
<!-- {#if svg === 0}
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="arrow-turn-s2e">
        <g id="arrow-turn-s2e_vec" transform="rotate({deg} 8 8)">
            <path d="M0 1.13325V10.0571C0 10.683 0.507545 11.1903 1.13363 11.1903L12.1297 11.1901L9.25526 14.0647C8.81256 14.5075 8.81256 15.2253 9.25526 15.668C9.69797 16.1107 10.4157 16.1107 10.8584 15.668L15.668 10.8582C16.1107 10.4155 16.1106 9.6977 15.668 9.25497L10.8584 4.44521C10.4157 4.00249 9.69797 4.00249 9.25526 4.44521C8.81256 4.88794 8.81256 5.60574 9.25526 6.04847L12.1297 8.92305L3.40438 8.92383C2.52262 8.92383 2.26727 8.66857 2.26727 7.7871L2.26727 1.13325C2.26727 0.507374 1.75972 0 1.13363 0C0.507546 0 0 0.507374 0 1.13325Z" fill={color}/>
            <path d="M0 1.13325V10.0571C0 10.683 0.507545 11.1903 1.13363 11.1903L12.1297 11.1901L9.25526 14.0647C8.81256 14.5075 8.81256 15.2253 9.25526 15.668C9.69797 16.1107 10.4157 16.1107 10.8584 15.668L15.668 10.8582C16.1107 10.4155 16.1106 9.6977 15.668 9.25497L10.8584 4.44521C10.4157 4.00249 9.69797 4.00249 9.25526 4.44521C8.81256 4.88794 8.81256 5.60574 9.25526 6.04847L12.1297 8.92305L3.40438 8.92383C2.52262 8.92383 2.26727 8.66857 2.26727 7.7871L2.26727 1.13325C2.26727 0.507374 1.75972 0 1.13363 0C0.507546 0 0 0.507374 0 1.13325Z" fill="url(#paint0_linear_818_11911)"/>
        </g>
    </g>
    <defs>
        <linearGradient id="paint0_linear_818_11911" x1="7.99999" y1="0" x2="7.99999" y2="16" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.5"/>
            <stop offset="1" stop-color="white" stop-opacity="0.5"/>
        </linearGradient>
    </defs>
</svg>
{:else}
    <div>{"<-|"}</div>
{/if} -->


<style>
    .turnarrow {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* svg {
        width: 16px;
        height: 16px;
        fill: linear-gradient(180deg, #ffffff80 0%, #ffffff80 100%), #0040FF;
    } */
</style>