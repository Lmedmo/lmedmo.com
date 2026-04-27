<script lang="ts">
    import { DownloadIcon } from '$lib/components';
    import { CV_PDF } from '$lib/config';

    let href = CV_PDF.filepath;
    let filename = CV_PDF.filename;

    let hovBgShd = `
        background: 
            linear-gradient(273deg, rgba(147, 242, 13, 0.80) 0%, rgba(153, 229, 0, 0.85) 50%, rgba(170, 255, 51, 0.80) 100%);
        box-shadow: 
            3px 3px 5px 0 rgba(255, 255, 255, 0.20) inset,
            1px 1px 2px 0 rgba(255, 255, 255, 0.35) inset,
            -2px -2px 3.5px 0 rgba(32, 32, 32, 0.40) inset,
            -2px -2px 3px 0 rgba(255, 255, 255, 0.40) inset,
            4px 3px 5px 0 rgba(0, 0, 0, 0.25);
    `;
    let regBgShd = `
        background:
            linear-gradient(278deg, rgba(32, 32, 32, 0.80) 25.13%, rgba(0, 0, 0, 0.75) 49.79%, rgba(32, 32, 32, 0.80) 74.44%);
        box-shadow:
            3px 3px 5px 0 rgba(255, 255, 255, 0.20) inset,
            1px 1px 2px 0 rgba(255, 255, 255, 0.35) inset,
            -2px -3px 3px 0 rgba(0, 0, 0, 0.20) inset,
            -1px -2px 2px 0 rgba(255, 255, 255, 0.25) inset,
            4px 3px 5px 0 rgba(0, 0, 0, 0.25);
    `;

    let hovPrimarytxt = `
        color: rgba(48, 48, 48, 0.90);
        text-shadow: -0.8px -0.4px 1.8px rgba(255, 255, 255, 0.60), 0.6px 0.5px 1.5px rgba(0, 0, 0, 0.30);
    `;
    let hovSecondarytxt = `
        color: rgba(251, 251, 251, 0.95);
        text-shadow: -0.8px -0.4px 1.9px rgba(255, 255, 255, 0.50), 0.8px 0.6px 1.8px rgba(0, 0, 0, 0.25);
    `;
    let regPrimarytxt = `
        color: #A6FF66;
        text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.22);
    `;
    let regSecondarytxt = `
        color: #A9A9A9;
        text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.22);
    `;

    let hovered: boolean = $state(false);

    function onmouseenter() {
        hovered = true;
    }
    function onmouseleave() {
        hovered = false;
    }
</script>


<a class="btn" {href} download={filename} style={hovered ? hovBgShd : regBgShd} {onmouseenter} {onmouseleave}>
    <div class="icon">
        <DownloadIcon variant={hovered ? "light-hover" : "light-normal"} sizeXY={25}/>
    </div>

    <div class="btntxt">
        <span class="primary" style={hovered ? hovPrimarytxt : regPrimarytxt}>Download CV</span>
        <span class="secondary" style={hovered ? hovSecondarytxt : regSecondarytxt}>(.pdf)</span>
    </div>
</a>


<style>
    .btn {
        display: flex;
        padding: 10px 15px 10px 10px;
        justify-content: center;
        align-items: center;
        gap: 5px;
        border-radius: 12px;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
    .icon {
        display: flex;
        width: 25px;
        height: 25px;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
    }
    .btntxt {
        display: flex;
        padding-bottom: 1px;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .primary {
        color: #A6FF66;
        text-align: center;
        text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.22);
        font-family: "Monosten";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.75px;
    }
    .secondary {
        color: #A9A9A9;
        font-family: "Monosten";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -1.5px;
    }
</style>