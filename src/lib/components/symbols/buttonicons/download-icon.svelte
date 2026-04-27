<script lang="ts">
    let { variant, sizeXY }: { 
        variant: "light-normal" | "dark-normal" | "light-hover" | "dark-hover",
        sizeXY: number
    } = $props();

    let style: string = $derived(`width: ${sizeXY}px; height: ${sizeXY}px;`);
</script>

<div class="download-icon" {style}>
{#if ((variant === "dark-normal") || (variant === "light-hover"))}
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="container" clip-path="url(#clip0_882_10158)">
            <g id="Vector" filter="url(#filter0_ddii_882_10158)">
                <path d="M11.6401 14.7577C11.2866 15.1101 10.7134 15.1101 10.3598 14.7577L6.51901 10.9289C6.16549 10.5764 6.16552 10.005 6.51901 9.65261C6.87255 9.30018 7.44575 9.30018 7.79928 9.65261L10.0948 11.9409L10.0944 2.42454C10.0944 1.92615 10.4998 1.52198 10.9998 1.52197C11.4997 1.52197 11.9051 1.92614 11.9052 2.42454V11.9409L14.2006 9.65261C14.5542 9.30018 15.1274 9.30018 15.4809 9.65261C15.8345 10.005 15.8345 10.5764 15.4809 10.9289L11.6401 14.7577Z" fill="#508F24"/>
                <path d="M6.47224 15.9029L6.47221 15.3381C6.47219 14.8382 6.06688 14.4329 5.56692 14.4329C5.06694 14.4329 4.66162 14.8382 4.66162 15.3382V15.9029C4.66162 16.2411 4.72823 16.5759 4.85765 16.8884C4.98706 17.2008 5.17675 17.4847 5.41588 17.7238C5.65501 17.9629 5.93889 18.1526 6.25133 18.282C6.56377 18.4115 6.89864 18.4781 7.23682 18.4781H14.7632C15.1014 18.4781 15.4362 18.4115 15.7487 18.282C16.0611 18.1526 16.345 17.9629 16.5841 17.7238C16.8232 17.4847 17.0129 17.2008 17.1423 16.8884C17.2718 16.5759 17.3384 16.2411 17.3384 15.9029V15.3382C17.3384 14.8382 16.9331 14.4329 16.4331 14.4329C15.9331 14.4329 15.5278 14.8382 15.5278 15.3381L15.5277 15.9029C15.5277 16.0033 15.508 16.1027 15.4695 16.1955C15.4311 16.2882 15.3748 16.3725 15.3038 16.4435C15.2328 16.5145 15.1485 16.5708 15.0558 16.6092C14.963 16.6477 14.8636 16.6674 14.7632 16.6674H7.23682C7.13641 16.6674 7.03699 16.6477 6.94423 16.6092C6.85146 16.5708 6.76718 16.5145 6.69618 16.4435C6.62518 16.3725 6.56886 16.2882 6.53044 16.1955C6.49202 16.1027 6.47224 16.0033 6.47224 15.9029Z" fill="#508F24"/>
            </g>
        </g>

        <defs>
            <filter id="filter0_ddii_882_10158" x="2.06162" y="-0.678027" width="17.8768" height="21.5561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-0.8" dy="-0.4"/>
                <feGaussianBlur stdDeviation="0.9"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.313726 0 0 0 0 0.313726 0 0 0 0 0.313726 0 0 0 0.1 0"/>
                <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_882_10158"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="0.8" dy="0.6"/>
                <feGaussianBlur stdDeviation="0.9"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_882_10158" result="effect2_dropShadow_882_10158"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_882_10158" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-0.35" dy="-0.34"/>
                <feGaussianBlur stdDeviation="0.35"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="shape" result="effect3_innerShadow_882_10158"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="0.3" dy="0.3"/>
                <feGaussianBlur stdDeviation="0.35"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
                <feBlend mode="plus-lighter" in2="effect3_innerShadow_882_10158" result="effect4_innerShadow_882_10158"/>
            </filter>

            <clipPath id="clip0_882_10158">
                <rect width="22" height="22" fill="white"/>
            </clipPath>
        </defs>
    </svg>
{:else}
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="container">
            <g id="Vector" filter="url(#filter0_dii_882_10145)">
                <path d="M11.6401 14.7577C11.2866 15.1101 10.7134 15.1101 10.3598 14.7577L6.51901 10.9289C6.16549 10.5764 6.16552 10.005 6.51901 9.65261C6.87255 9.30018 7.44575 9.30018 7.79928 9.65261L10.0948 11.9409L10.0944 2.42454C10.0944 1.92615 10.4998 1.52198 10.9998 1.52197C11.4997 1.52197 11.9051 1.92614 11.9052 2.42454V11.9409L14.2006 9.65261C14.5542 9.30018 15.1274 9.30018 15.4809 9.65261C15.8345 10.005 15.8345 10.5764 15.4809 10.9289L11.6401 14.7577Z" fill="#A6FF66"/>
                <path d="M11.6401 14.7577C11.2866 15.1101 10.7134 15.1101 10.3598 14.7577L6.51901 10.9289C6.16549 10.5764 6.16552 10.005 6.51901 9.65261C6.87255 9.30018 7.44575 9.30018 7.79928 9.65261L10.0948 11.9409L10.0944 2.42454C10.0944 1.92615 10.4998 1.52198 10.9998 1.52197C11.4997 1.52197 11.9051 1.92614 11.9052 2.42454V11.9409L14.2006 9.65261C14.5542 9.30018 15.1274 9.30018 15.4809 9.65261C15.8345 10.005 15.8345 10.5764 15.4809 10.9289L11.6401 14.7577Z" fill="white"/>
                <path d="M6.47224 15.9029L6.47221 15.3381C6.47219 14.8382 6.06688 14.4329 5.56692 14.4329C5.06694 14.4329 4.66162 14.8382 4.66162 15.3382V15.9029C4.66162 16.2411 4.72823 16.5759 4.85765 16.8884C4.98706 17.2008 5.17675 17.4847 5.41588 17.7238C5.65501 17.9629 5.93889 18.1526 6.25133 18.282C6.56377 18.4115 6.89864 18.4781 7.23682 18.4781H14.7632C15.1014 18.4781 15.4362 18.4115 15.7487 18.282C16.0611 18.1526 16.345 17.9629 16.5841 17.7238C16.8232 17.4847 17.0129 17.2008 17.1423 16.8884C17.2718 16.5759 17.3384 16.2411 17.3384 15.9029V15.3382C17.3384 14.8382 16.9331 14.4329 16.4331 14.4329C15.9331 14.4329 15.5278 14.8382 15.5278 15.3381L15.5277 15.9029C15.5277 16.0033 15.508 16.1027 15.4695 16.1955C15.4311 16.2882 15.3748 16.3725 15.3038 16.4435C15.2328 16.5145 15.1485 16.5708 15.0558 16.6092C14.963 16.6477 14.8636 16.6674 14.7632 16.6674H7.23682C7.13641 16.6674 7.03699 16.6477 6.94423 16.6092C6.85146 16.5708 6.76718 16.5145 6.69618 16.4435C6.62518 16.3725 6.56886 16.2882 6.53044 16.1955C6.49202 16.1027 6.47224 16.0033 6.47224 15.9029Z" fill="#A6FF66"/>
                <path d="M6.47224 15.9029L6.47221 15.3381C6.47219 14.8382 6.06688 14.4329 5.56692 14.4329C5.06694 14.4329 4.66162 14.8382 4.66162 15.3382V15.9029C4.66162 16.2411 4.72823 16.5759 4.85765 16.8884C4.98706 17.2008 5.17675 17.4847 5.41588 17.7238C5.65501 17.9629 5.93889 18.1526 6.25133 18.282C6.56377 18.4115 6.89864 18.4781 7.23682 18.4781H14.7632C15.1014 18.4781 15.4362 18.4115 15.7487 18.282C16.0611 18.1526 16.345 17.9629 16.5841 17.7238C16.8232 17.4847 17.0129 17.2008 17.1423 16.8884C17.2718 16.5759 17.3384 16.2411 17.3384 15.9029V15.3382C17.3384 14.8382 16.9331 14.4329 16.4331 14.4329C15.9331 14.4329 15.5278 14.8382 15.5278 15.3381L15.5277 15.9029C15.5277 16.0033 15.508 16.1027 15.4695 16.1955C15.4311 16.2882 15.3748 16.3725 15.3038 16.4435C15.2328 16.5145 15.1485 16.5708 15.0558 16.6092C14.963 16.6477 14.8636 16.6674 14.7632 16.6674H7.23682C7.13641 16.6674 7.03699 16.6477 6.94423 16.6092C6.85146 16.5708 6.76718 16.5145 6.69618 16.4435C6.62518 16.3725 6.56886 16.2882 6.53044 16.1955C6.49202 16.1027 6.47224 16.0033 6.47224 15.9029Z" fill="white"/>
            </g>
        </g>

        <defs>
            <filter id="filter0_dii_882_10145" x="4.30162" y="0.921973" width="15.4368" height="19.3561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="1.2" dy="0.6"/>
                <feGaussianBlur stdDeviation="0.6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_882_10145"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_882_10145" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-0.36" dy="-0.36"/>
                <feGaussianBlur stdDeviation="0.36"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_882_10145"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="0.3" dy="0.3"/>
                <feGaussianBlur stdDeviation="0.6"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="effect2_innerShadow_882_10145" result="effect3_innerShadow_882_10145"/>
            </filter>
        </defs>
    </svg>
{/if}
</div>

<style>
    .download-icon {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background: none;
        border: none;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
    }
    svg {
        flex-shrink: 0;
    }
</style>