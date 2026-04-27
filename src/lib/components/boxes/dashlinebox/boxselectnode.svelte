<script lang="ts">
    let { fill, pad, sizeXY = 12 }: { fill: string, pad: string, sizeXY?: number } = $props();

    let style = $derived.by(() => {
        switch (pad) {
            case "L":
                return "padding-left: 3px;"
            case "R":
                return "padding-right: 3px;"
            case "T":
                return "padding-top: 3px;"
            case "B":
                return "padding-bottom: 3px;"
            default:
                break;
        }
    });
</script>


<div class="node" {style}>
    <svg xmlns="http://www.w3.org/2000/svg" width={sizeXY} height={sizeXY} viewBox={`0 0 ${sizeXY} ${sizeXY}`} fill="none">
        <g clip-path="url(#clip0_916_710)" filter="url(#filter0_ii_916_710)">
            <path d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM3 6C3 7.65685 4.34315 9 6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6Z" fill={fill}/>
        </g>

        <defs>
            <filter id="filter0_ii_916_710" x="-0.8" y="-0.8" width="13.6" height="13.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-0.8" dy="-0.8"/>
                <feGaussianBlur stdDeviation="0.75"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.627451 0 0 0 0 0.627451 0 0 0 0 0.627451 0 0 0 0.3 0"/>
                <feBlend mode="difference" in2="shape" result="effect1_innerShadow_916_710"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="1" dy="1"/>
                <feGaussianBlur stdDeviation="0.4"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                <feBlend mode="color-burn" in2="effect1_innerShadow_916_710" result="effect2_innerShadow_916_710"/>
            </filter>
            <clipPath id="clip0_916_710">
                <rect width={sizeXY} height={sizeXY} fill="white"/>
            </clipPath>
        </defs>
    </svg>
</div>


<style>
    .node {
        /* background-color: slategrey; */
        display: flex;
        box-sizing: border-box;
        align-items: center;
        /* width: 12px; */
        /* height: 12px; */
    }
    svg {
        display: flex;
        /* box-sizing: border-box; */
        /* box-shadow: 1px 1px 0.8px 0 rgba(255, 255, 255, 0.50) inset, -0.8px -0.8px 1.5px 0 rgba(160, 160, 160, 0.30) inset; */
        /* filter: drop-shadow(2px 2px 5px rgba(48, 48, 48, 0.20)); */
    }
</style>