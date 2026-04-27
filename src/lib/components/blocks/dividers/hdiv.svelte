<script lang="ts">
    let {
        height = 2,
        vertpad = 10,
        horzpad = 2,
        color,
        //style = "solid",
        translucent = false,
        showfx = true
    }: {
        height: 1 | 2 | 3,
        vertpad?: number,
        horzpad?: number,
        color: string,
        //style: "solid" | "dashed" | "dotted",
        translucent?: boolean,
        showfx?: boolean
    } = $props();

    let boxstyle = $derived(`padding: ${vertpad}px ${horzpad}px;`);

    let accentfill = $derived(`
        background: 
            linear-gradient(0deg, #ffffff26 0%, #ffffff26 100%), 
            ${color}40;
        background-blend-mode: multiply, multiply;
    `);

    let translucentfill = "background: #404040A6; background-blend-mode: color-burn;";

    let divfx = `
        box-shadow: 
            0.5px 0.5px 1.2px 0 rgba(255, 255, 255, 0.35) inset,
            -0.6px -0.5px 1px 0 rgba(48, 48, 48, 0.20) inset,
            1px 1.8px 5px 0 rgba(48, 48, 48, 0.15);
        backdrop-filter: blur(75px);
    `;

    let divstyle = $derived.by(() => {
        let s = `height: ${height}px; border-radius: 2px;`;

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


<div class="horizontal-divider" style={boxstyle}>
    <div class="divider" style={divstyle}></div>
</div>


<style>
    .horizontal-divider {
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }
    .divider {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
    }
</style>