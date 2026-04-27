<!--% X-icon: -->
<!--& ~ Variable icon color and background(L0) visibility -->
<!---------------------------------------------------------------------------------->
<script lang="ts">
    let { color = "#000000", size = 1024 }: { color: string, size: number } = $props();

  /* X-icon: Properties */
    let icon_label: string = "X (Twitter)"; //) <--- Define here
    let init_bg_color: string = "#252525"; //) <---- Define here

    let iconfill: string = $derived(color);
    let style: string = $derived(`width: ${size}px; height: ${size}px;`);
    let hovered: boolean = $state(false);

	function onmouseenter(){
        iconfill = "#FFFFFF";
        hovered = true;
	}
	function onmouseleave(){
        iconfill = color;
        hovered = false;
	}
</script>


<button class="link-icon" {style} {onmouseenter} {onmouseleave} aria-label={icon_label}>
    <svg width="1025" height="1024" viewBox="0 0 1025 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="x--s1-alt_qlnk_clr_flat-o1-512br-1024p">
            {#if (hovered)} <!-- ~ Show background (icon base-layer(0)) -->
                <g id="base-v3.4">
                    <g id="solid-512px">
                        <rect x="0.855469" width="1024" height="1024" rx="512" fill={init_bg_color}/>
                        <rect x="12.8555" y="12" width="1000" height="1000" rx="500" stroke="black" stroke-opacity="0.25" stroke-width="24"/>
                    </g>
                </g>
            {/if}
                
            <g id="container">
                <g id="icon">
                    <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M376.182 214.029C377.971 214.03 379.66 214.876 380.726 216.313L545.534 438.592L753.383 215.833C754.453 214.687 755.971 214.029 757.539 214.029H796.013C800.959 214.03 803.524 219.938 800.145 223.551L569.075 470.353L813.503 799.993C816.267 803.723 813.602 809.01 808.959 809.012H641.913C640.123 809.009 638.434 808.168 637.369 806.728L468.268 578.033L252.815 808.19C251.747 809.329 250.245 809.971 248.683 809.971H212.104C207.16 809.971 204.599 804.064 207.971 800.449L444.909 546.455L205.802 223.048C203.042 219.316 205.704 214.029 210.346 214.029H376.182ZM284.553 255.037C281.459 255.038 279.678 258.577 281.516 261.065L657.964 770.47C658.675 771.431 659.805 771.999 661.001 771.999L743.519 772.022C746.626 772.023 748.398 768.479 746.533 765.994L364.195 256.544C363.482 255.603 362.362 255.037 361.181 255.037H284.553Z" fill={iconfill}/>
                </g>
            </g>
        </g>
    </svg> 
</button>


<style>
    .link-icon {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background: none;
        border: none;
        aspect-ratio: 1/1;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        cursor: pointer;

        /* box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.25); */
    }
    svg {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
</style>