<script lang="ts">
    let { 
        color = "#D000FA", 
        //size = 1024 
    }: { 
        color: string, 
        //size: number 
    } = $props();

    /* GitHub-icon: Properties */
    // let icon_label: string = "GitHub"; //~ Define here
    // let init_bg_color: string = "#001A4D"; //~ Define here

    let iconfill: string = $derived(color);
    //let style: string = $derived(`width: ${size}px; height: ${size}px;`);
    let hovered: boolean = $state(false);

	// function onmouseenter(){
    //     iconfill = "#FFFFFF";
    //     hovered = true;
	// }
	// function onmouseleave(){
    //     iconfill = color;
    //     hovered = false;
	// }
</script>

<div class="email-basic">
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.1742 0.383272C1.82479 2.98023e-08 2.75755 0 4.5 0H23.5C25.2431 0 26.1759 0 26.8265 0.383703L15.1888 11.245C14.5196 11.8695 13.4812 11.8695 12.8121 11.245L1.1742 0.383272ZM0.432507 1.09536C0.0463282 1.67941 0.00496247 2.48854 0.000531558 3.94653C-2.32831e-10 4.12144 0 4.30568 0 4.5V16.3151C0 16.4925 3.34694e-09 16.6616 0.00040496 16.8228C0.00412793 18.3051 0.0420777 19.1245 0.428915 19.7142L10.5449 10.5331L0.432507 1.09536ZM1.18134 20.436C1.79738 20.7951 2.66653 20.814 4.23241 20.815L4.5 20.8151H23.5L23.7676 20.815C25.3342 20.814 26.2034 20.7951 26.8195 20.4355L16.6932 11.245L15.8679 12.0153C14.8163 12.9966 13.1846 12.9966 12.133 12.0153L11.3077 11.245L1.18134 20.436ZM27.5714 19.7138C28 19.06 28 18.1237 28 16.3151V4.5C28 2.68641 28 1.74998 27.5678 1.09589L17.4559 10.5332L27.5714 19.7138Z" fill={color}/>
    </svg>

</div>

<style>
    .email-basic {
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        border-radius: 12px;
        border: 1px solid #EFC9F6;
        background: rgba(255, 255, 255, 0.80);
        box-shadow: 0.604px 0.604px 5px 0 rgba(48, 48, 48, 0.20);
    }
</style>