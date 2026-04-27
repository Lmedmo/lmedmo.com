<script lang="ts">
    let {
        color,
        width = 2,
        toppad = 2,
        botpad = 2,
        leftpad = 10,
        rightpad = 10,
        translucent = false,
        showfx = true
        //style = "solid",
    }: {
        color: string,
        width: 1 | 2 | 3,
        toppad?: number,
        botpad?: number,
        leftpad?: number,
        rightpad?: number,
        translucent?: boolean,
        showfx?: boolean
        //style: "solid" | "dashed" | "dotted",
    } = $props();

    let boxstyle = $derived(`padding: ${toppad}px ${rightpad}px ${botpad}px ${leftpad}px;`);

    let accentfill = $derived(`
        background: 
            linear-gradient(0deg, #ffffff26 0%, #ffffff26 100%), 
            ${color}40;
        background-blend-mode: multiply, multiply;
    `);

    let translucentfill = "background: #404040A6; background-blend-mode: color-burn;";

    let divfx = `
        box-shadow: 
            0.5px 0.2px 1.2px 0 rgba(255, 255, 255, 0.50) inset,
            -0.6px -0.5px 1.25px 0 rgba(48, 48, 48, 0.20) inset,
            1.5px 1.5px 5px 0 rgba(48, 48, 48, 0.15);
        backdrop-filter: blur(75px);
    `;

    let divstyle = $derived.by(() => {
        let s = `width: ${width}px; border-radius: 2px;`;

        if (translucent) {
            s += translucentfill;
        } else {
            s += accentfill;
        }

        if (showfx) {
            s += divfx;
        }

        return s
    });
</script>


<div class="vertical-divider" style={boxstyle}>
    <div class="divider" style={divstyle}></div>
</div>


<style>
    .vertical-divider {
        /* background-color: blue; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }
    .divider {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
    }
</style>