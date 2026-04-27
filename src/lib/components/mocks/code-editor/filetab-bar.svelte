<script lang="ts">
    import type { TextBlockCfgTemp } from "$lib/config";
    import { to_style } from "$lib/config";

    let txt: string = $derived("basic.json");

    let txtstyle: string = $derived.by(() => {
        let cfg: TextBlockCfgTemp = {
            font: "Sono",
            lvl: "none",
            size: 15,
            wght: 480,
            polychromatic: false,
            color: "#56C804",
            fontstyle: "normal",
            letspace: -0.98,
            txtalign: "left",
            shdwstyle: "1px 1px 2px rgba(37, 37, 37, 0.25)",
            fxstyle: "font-kerning: none; font-feature-settings: 'ss03' on;",
            overridelvlwght: true,
        }
        return to_style(cfg);
    });
</script>

<div class="filetab-bar">
    <div class="arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_654_5)">
                <g filter="url(#filter0_dii_654_5)">
                    <path d="M14.276 19.9661L7.44792 13.138C6.81941 12.5095 6.81941 11.4905 7.44792 10.862L14.276 4.03388C14.9045 3.40537 15.9235 3.40537 16.5521 4.03388C17.1806 4.66239 17.1806 5.68141 16.5521 6.30991L12.0035 10.8585C11.1183 11.7437 11.1183 12.2563 12.0035 13.1415L16.5521 17.6901C17.1806 18.3186 17.1806 19.3376 16.5521 19.9661C15.9235 20.5946 14.9045 20.5946 14.276 19.9661Z" fill="#55CC00"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_dii_654_5" x="3.77656" y="1.1625" width="18.0469" height="24.875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="0.8" dy="1.6"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.2 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_654_5"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_654_5" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-0.4" dy="-0.4"/>
                    <feGaussianBlur stdDeviation="0.4"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_654_5"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="0.4" dy="0.4"/>
                    <feGaussianBlur stdDeviation="0.4"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.988235 0 0 0 0 0.988235 0 0 0 0.65 0"/>
                    <feBlend mode="normal" in2="effect2_innerShadow_654_5" result="effect3_innerShadow_654_5"/>
                </filter>
                <clipPath id="clip0_654_5">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    </div>

    <div class="filetab">
        <div class="textbox">
            <span style={txtstyle}>{txt}</span>
        </div>
    </div>
</div>

<style>
    .filetab-bar {
        display: flex;
        padding: 10px 10px 8px 14px;
        align-items: center;
        gap: 8px;
        align-self: stretch;
        border-radius: 25px 25px 0 0;
        corner-shape: squircle;
        background: linear-gradient(90deg,
            rgba(251, 251, 251, 0.10) 0%,
            rgba(246, 246, 246, 0.35) 40%,
            rgba(232, 232, 232, 0.25) 100%
        );
        /* mix-blend-mode: multiply; */
    }
    .arrow {
        display: flex;
        width: 24px;
        height: 24px;
        aspect-ratio: 1/1;
        justify-content: center;
        align-items: center;
    }
    .filetab {
        display: flex;
        /* padding: 10px 12px; */
        justify-content: center;
        align-items: center;
        border-radius: 14px;
        corner-shape: squircle;
        border: 2px solid rgba(245, 245, 245, 0.90);
        background: rgba(250, 250, 250, 0.15);
        box-shadow: 1px 1px 10px 0 rgba(37, 37, 37, 0.15);
    }
    .textbox {
        display: flex;
        padding: 10px 12px 10px 15px;
        justify-content: center;
        align-items: center;
        border-radius: 14px;
        corner-shape: squircle;
        background: rgba(238, 238, 238, 0.40
        );
        backdrop-filter: blur(2px);
    }
</style>