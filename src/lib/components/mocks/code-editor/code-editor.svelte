<script lang="ts">
    import { AppConfig, to_style } from '$lib/config';
    import type { TextBlockCfgTemp } from '$lib/config';
    import type { BasicInfoObj } from '$lib/data';
    import Bracket from './bracket.svelte';
    import Field from './field.svelte';
    import FiletabBar from './filetab-bar.svelte';
    import Pathbar from './pathbar.svelte';
    import Value from './value.svelte';

    let { info }: { info: BasicInfoObj } = $props();

    let pathdirs: string[] = ["lmedmo", "resume", "src", "lib", "data", "basic.json"];
    
    let fullname: string = $derived(`${info.first_name} ${info.last_name}`);
    
    let email: string = $derived(info.contact.email);
    
    let github: string = $derived(info.linked_accounts.find(acct => acct.description === "GitHub")?.username || "");


    let style = $derived(`max-width: ${AppConfig.contentmaxwidth}px;`);
    
    let bg: string = $derived(info.background);

    let lnumtxtstyle: string = $derived.by(() => {
        let cfg: TextBlockCfgTemp = {
            font: "Red-Hat-Mono",
            lvl: "reg",
            color: "#808080",
            fontstyle: "normal",
            letspace: -0.36,
            txtalign: "left",
            shdwstyle: "1px 1px 2px rgba(16, 16, 16, 0.20)",
            fxstyle: "font-variant-numeric: stacked-fractions; font-feature-settings: 'case' on, 'ss01' on;",
        }
        return to_style(cfg);
    });

    //let lnpadstyle: string = $derived(`padding-left: ${(indentLvl >= 1) ? indentLvl * 30 : 8}px;`);

    let calcpad = (indentLvl: number): string => {
        return `padding-left: ${(indentLvl >= 1) ? indentLvl * 30 : 8}px;`;
    }
</script>


<div class="code-editor" {style}>
    <div class="editorwindow">
        <FiletabBar />

        <div class="body">
            <Pathbar txtarr={pathdirs} />

            <div class="editor">
                <div class="line" id="ln_i">
                    <div class="lnum" style={lnumtxtstyle}>1</div>
                    <div class="lntxt" style={calcpad(0)}>
                        <Bracket type="open" indentLvl={0} />
                    </div> 
                </div>
                <div class="line" id="ln-ii">
                    <div class="lnum" style={lnumtxtstyle}>2</div>
                    <div class="lntxt" style={calcpad(1)}>
                        <Field txt={"fullname"} indentLvl={1} />
                        <Value txt={fullname} indentLvl={1} />,
                    </div>
                </div>

                {@render blankline(3)}

                <div class="line" id="ln-iv">
                    <div class="lnum" style={lnumtxtstyle}>4</div>
                    <div class="lntxt" style={calcpad(1)}>
                        <Field txt={"contact"} indentLvl={1} />
                        <Bracket type="open" indentLvl={1} />
                    </div>
                </div>
                <div class="line" id="ln-v">
                    <div class="lnum" style={lnumtxtstyle}>5</div>
                    <div class="lntxt" style={calcpad(2)}>
                        <Field txt={"email"} indentLvl={2} />
                        <Value txt={email} indentLvl={2} />,
                    </div>
                </div>
                <div class="line" id="ln-vi">
                    <div class="lnum" style={lnumtxtstyle}>6</div>
                    <div class="lntxt" style={calcpad(2)}>
                        <Field txt={"github"} indentLvl={2} />
                        <Value txt={github} indentLvl={2} />
                    </div>
                </div>
                <div class="line" id="ln-vii">
                    <div class="lnum" style={lnumtxtstyle}>7</div>
                    <div class="lntxt" style={calcpad(1)}>
                        <Bracket type="close" indentLvl={1} />
                    </div>
                </div>
                
                {@render blankline(8)}

                <div class="line" id="ln-ix">
                    <div class="lnum" style={lnumtxtstyle}>9</div>
                    <div class="lntxt" style={calcpad(1)}>
                        <Field txt={"background"} indentLvl={1} />
                        <Value txt={bg} indentLvl={1} />
                    </div>
                </div>
                <div class="line" id="ln-x">
                    <div class="lnum" style={lnumtxtstyle}>10</div>
                    <div class="lntxt" style={calcpad(0)}>
                        <Bracket type="close" indentLvl={0} />
                    </div>
                </div>

                {@render blankline(11)}
                {@render blankline(12)}
                {@render blankline(13)}
                {@render blankline(14)}
                {@render blankline(15)}

                <div class="editor-pane"></div>
            </div>
        </div>
    </div>
</div>

{#snippet blankline(num: number)}
    <div class="line">
        <div class="lnum" style={lnumtxtstyle}>{num}</div>
        <div class="lntxt" style={calcpad(0)}><!--BLANK--></div>
    </div>
{/snippet}


<style>
    .code-editor {
        display: flex;
        padding: 20px 15px 0 15px;
        justify-content: center;
        align-items: flex-start;
        align-self: stretch;
    }
    .editorwindow {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 0;
        border-radius: 25px 25px 0 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%);
        box-shadow: 
            2px 2px 5px 0 rgba(255, 255, 255, 0.35) inset, 
            -2px 1px 5px 0 rgba(255, 255, 255, 0.40) inset, 
            -10px -5px 20px 0 rgba(186, 255, 137, 0.05);
        mask-image: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 60%, transparent);
    }
    .body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        border-top: 1px solid #5C0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.01) 100%);
        backdrop-filter: blur(10px);
    }
    .editor {
        display: flex;
        padding: 0 10px 0 15px;
        flex-direction: column;
        align-items: flex-start;
        gap: 1px;
        align-self: stretch;
    }
    .line {
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        white-space: normal;
        gap: 12px;
        align-self: stretch;
        z-index: 1;
    }
    .editor-pane {
        position: absolute;
        left: 51px;
        top: 42px;
        bottom: 0px;
        right: 0px;
        z-index: 0;
        border-radius: 15px 0 0 0;
        corner-shape: squircle;
        border-top: 1px solid rgba(0, 0, 0, 0.10);
        border-left: 1px solid rgba(0, 0, 0, 0.10);
        background: #FFF;
        background-blend-mode: overlay;
    }
    .lnum {
        display: flex;
        min-width: 24px;
        min-height: 24px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }
    .lntxt {
        display: inline;
        min-height: 24px;
        padding-left: 8px;
        align-items: start;
        flex: 1 0 0;
    }
    #ln_i {
        padding-top: 10px;
    }
</style>