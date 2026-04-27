<script lang="ts">
    let { 
        direction = "right", 
        color, 
        size = 1024, 
    }:
    {
        direction: "right" | "left" | "up" | "down" | "ne" | "nw" | "se" | "sw" | "s2e";
        color: string,
        size: number,
    } = $props();

    let style: string = $derived(`width: ${size}px; height: ${size}px;`);

    let cen: number = $derived(size / 2);

    let deg: number = $derived.by(() => {
        switch (direction) {
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
    });
</script>

<div class="arrow-vec" {style}>
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 {size} {size}" fill="none">
        <g clip-path="url(#clip0_790_291)">
            <g filter="url(#filter0_dii_790_291)" transform="rotate({deg} {cen} {cen})">
                <path d="M17.2063 9.28875C17.5979 9.68157 17.5979 10.3185 17.2063 10.7113L12.9521 14.9788C12.5605 15.3716 11.9256 15.3716 11.534 14.9788C11.1425 14.586 11.1425 13.9491 11.534 13.5563L14.0766 11.0058L3.50286 11.0062C2.94908 11.0062 2.5 10.5558 2.5 10.0002C2.5 9.44473 2.94908 8.99426 3.50286 8.99424H14.0766L11.534 6.4437C11.1425 6.05088 11.1425 5.414 11.534 5.02118C11.9256 4.62836 12.5605 4.62836 12.9521 5.02118L17.2063 9.28875Z" fill={color}/>
            </g>
        </g>

        <defs>
            <filter id="filter0_dii_790_291" x="1.25488" y="3.70117" width="18.9551" height="14.502" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="0.732422" dy="0.952149"/>
                <feGaussianBlur stdDeviation="0.98877"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_790_291"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_790_291" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="0.263672" dy="0.395508"/>
                <feGaussianBlur stdDeviation="0.32959"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_790_291"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-0.527344" dy="-0.131836"/>
                <feGaussianBlur stdDeviation="0.32959"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="effect2_innerShadow_790_291" result="effect3_innerShadow_790_291"/>
            </filter>

            <clipPath id="clip0_790_291">
                <rect width={size} height={size} fill="white"/>
            </clipPath>
        </defs>
    </svg>
</div>
    
    
<style>
    .arrow-vec {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        /* background: none; */
        /* border: none; */
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        flex-shrink: 0;
    }
    svg {
        display: flex;
        box-sizing: border-box;
        aspect-ratio: 1/1;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;

        /* fill: #000;
box-shadow: -27px -10px 30px 0 rgba(32, 32, 32, 0.20) inset, 15px 20px 30px 0 rgba(255, 255, 255, 0.35) inset;
filter: drop-shadow(37.5px 48.75px 101.25px rgba(21, 21, 21, 0.20)); */
    }
</style>