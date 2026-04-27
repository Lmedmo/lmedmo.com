<script lang="ts">
    let { color }: { color: string } = $props();
</script>

<div class="arrow-cap-box">
    <svg width="32" height="52" viewBox="0 0 32 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="seperatorbox">
            <g id="arrow_cap" filter="url(#filter0_dii_1184_450)">
                <path d="M19.1681 25.0355L3.67694 6.59126C2.21239 4.84752 3.452 2.18738 5.72917 2.18726C6.52105 2.18721 7.27242 2.53735 7.7817 3.14373L25.3578 24.0707C26.2948 25.1863 26.2948 26.8139 25.3578 27.9295L7.78161 48.8565C7.27238 49.4628 6.52111 49.813 5.72932 49.813C3.45217 49.813 2.2125 47.1529 3.67702 45.4092L19.1681 26.965C19.6366 26.4072 19.6366 25.5934 19.1681 25.0355Z" fill="#EAACF6"/>
            </g>
        </g>
        <defs>
            <filter id="filter0_dii_1184_450" x="0.000467181" y="-1.291" width="31.7123" height="56.3214" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="1.30435" dy="0.869565"/>
                <feGaussianBlur stdDeviation="2.17391"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                <feBlend mode="plus-darker" in2="BackgroundImageFix" result="effect1_dropShadow_1184_450"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1184_450" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-1.30435" dy="-0.304348"/>
                <feGaussianBlur stdDeviation="0.869565"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.1 0"/>
                <feBlend mode="plus-darker" in2="shape" result="effect2_innerShadow_1184_450"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="0.869565" dy="0.434783"/>
                <feGaussianBlur stdDeviation="1.30435"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                <feBlend mode="plus-lighter" in2="effect2_innerShadow_1184_450" result="effect3_innerShadow_1184_450"/>
            </filter>
        </defs>
    </svg>
</div>

<style>
    .arrow-cap-box {
        /* background-color: blue; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>