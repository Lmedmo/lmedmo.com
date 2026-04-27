<script lang="ts">
    let { 
        kind = "full", 
        points = "right", 
        showFx = false, 
        color = "i", 
        size = 1024, 
        lighten = false 
    }:
    {
        kind: "full" | "cap" | "turn",
        points: "right" | "left" | "up" | "down" | "ne" | "nw" | "se" | "sw" | "s2e";
        showFx: boolean,
        color: string,
        size: number,
        lighten?: boolean
    } = $props();

    const INIT_COLOR: string = "#000000"; //) <-- Define here

    let iconfill: string = $state(getfill());
    let angle: number = $state(getangle());

    let cpathid = $derived.by(() => { if (showFx){ return "clip0_3588_2523" } else { return "" } });

    let filterid = $derived.by(() => { if (showFx){ return "filter0_dii_3588_2523" } else { return "" } });

    let style: string = $derived(`width: ${size}px; height: ${size}px;`);

    function getfill(){
        if (color === "i") { return INIT_COLOR } else { return color };
    }
    function getangle(): number {
        if (kind === "full" || kind === "cap") {
            switch (points) {
                case "right": return 0;
                case "down": return 90;
                case "left": return 180;
                case "up": return 270;
                case "ne": return 315;
                case "nw": return 225;
                case "se": return 45;
                case "sw": return 135;
                default: return 0;
            }
        // } else if (kind === "turn") {
            // TODO
        } else {
            return 0;
        }
    }
</script>


<div class="arrow-vec" {style}>
    <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="arrow-full-right--0f-alt_sym_fx-m1-0br-1024p" clip-path="url(#{cpathid})">
            <g id="arrow-full-right" filter="url(#{filterid})" transform="rotate({angle} 512 512)">
                <path d="M851.89 463.447C878.702 490.264 878.705 533.743 851.89 560.558L560.56 851.891C533.745 878.707 490.268 878.704 463.451 851.891C436.635 825.075 436.635 781.597 463.451 754.78L637.565 580.663L220.676 580.695C182.753 580.694 152 549.942 152 512.019C152 474.095 182.753 443.344 220.676 443.342H637.565L463.451 269.225C436.635 242.409 436.635 198.931 463.451 172.114C490.267 145.298 533.744 145.298 560.56 172.114L851.89 463.447Z" fill={iconfill}/>
            </g>
        </g>

      {#if showFx}
        <defs>
            <filter id={filterid} x="67" y="82.002" width="990" height="990" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="50" dy="65"/>
                <feGaussianBlur stdDeviation="67.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3588_2523"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3588_2523" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="18" dy="27"/>
                <feGaussianBlur stdDeviation="22.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_3588_2523"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-36" dy="-9"/>
                <feGaussianBlur stdDeviation="22.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="effect2_innerShadow_3588_2523" result="effect3_innerShadow_3588_2523"/>
            </filter>
    
            <clipPath id={cpathid}>
                <rect width="1024" height="1024" fill="white"/>
            </clipPath>
        </defs>  
      {/if}
    </svg>
</div>


<style>
    .arrow-vec {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background: none;
        border: none;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        /* flex-shrink: 0; */
    }
    svg {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
</style>