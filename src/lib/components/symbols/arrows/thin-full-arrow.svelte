<script lang="ts">
    let {
        accentcolor = "#FF3311", 
        size = 1024, 
    }:
    {
        accentcolor: string,
        size: number,
    } = $props();

    let color: string = $derived(accentcolor);
    let style: string = $derived(`width: ${size}px; height: ${size}px;`);

    // let cen: number = $derived(size / 2);

    // let deg: number = $derived.by(() => {
    //     switch (direction) {
    //         case "right": return 0;
    //         case "down": return 90;
    //         case "left": return 180;
    //         case "up": return 270;
    //         case "ne": return 315;
    //         case "nw": return 225;
    //         case "se": return 45;
    //         case "sw": return 135;
    //         default: return 0;
    //     }
    // });
</script>


<div class="arrow-vec" {style}>
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="arrow-full-thin--26p">
            <g id="arrow-full-right--16x16" filter="url(#filter0_dii_1754_11863)">
                <path d="M50.8841 30.0486C51.9616 31.1263 51.9617 32.8737 50.8841 33.9513L33.9515 50.884C32.8738 51.9617 31.1265 51.9616 30.0488 50.884C28.9711 49.8063 28.9711 48.059 30.0488 46.9813L42.2707 34.7593L15.0676 34.7606C13.5435 34.7605 12.3076 33.5247 12.3076 32.0006C12.3076 30.4765 13.5435 29.2407 15.0676 29.2406H42.2707L30.0488 17.0186C28.9711 15.9409 28.9711 14.1936 30.0488 13.1159C31.1265 12.0382 32.8738 12.0382 33.9515 13.1159L50.8841 30.0486Z" fill={color}/>
            </g>
        </g>
        <defs>
            <filter id="filter0_dii_1754_11863" x="11.0768" y="10.5845" width="47.7538" height="46.7694" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="3.44615" dy="1.96923"/>
                <feGaussianBlur stdDeviation="1.84615"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1754_11863"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1754_11863" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-1.23077" dy="-0.738462"/>
                <feGaussianBlur stdDeviation="0.984616"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1754_11863"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="1.23077" dy="0.738462"/>
                <feGaussianBlur stdDeviation="0.984616"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="effect2_innerShadow_1754_11863" result="effect3_innerShadow_1754_11863"/>
            </filter>
        </defs>
    </svg>
</div>


<style>
    .arrow-vec {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        /* flex-shrink: 0; */
    }
    svg {
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        /* flex-shrink: 0; */
    }
</style>