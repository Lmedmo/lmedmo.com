<script lang="ts">
    import type { BasicInfoObj } from "$lib/data";
    import type { AppPageCfgTemp } from '$lib/config';
    import { setPage, AppConfig, HOME_PAGE_CFG, DUOLEAF_TILEPATH, NODEGRID_TILEPATH, LMEDMO_HDR_PIXELTXT } from '$lib/config';
    import { Section, CodeEditor, DashLnBxInfoBlock, PageHeader, CanvasNav, IconLinkButton, DashLineBoxHeading, DetailBlock } from '$lib/components';
    import { PageViewframe } from '$lib/ui';
    import { BasicInfo } from '$lib/data';

    let pageconf: AppPageCfgTemp = HOME_PAGE_CFG;

    setPage(pageconf);

    let pagecolor = pageconf.colors.main;
    let framecolor = pageconf.colors.frameStroke;

    let info: BasicInfoObj = BasicInfo;
    let resume_pgs: AppPageCfgTemp[] = AppConfig.pages.filter(p => p.parent === 1);

  //~ Layer/Component Background Styles ~//
    let framebgstyle = $derived(`
        box-shadow: 6px 6px 20px 0 rgba(77, 77, 77, 0.20) inset, -6px -6px 20px 0 #204d0066 inset;
        background: 
            linear-gradient(108deg, #ddff99a6 0%, #49b000a6 50%, #ddff99a6 100%),
            url(${DUOLEAF_TILEPATH}) 0px 0px / 120% auto repeat;
    `);
    let canvasbgstyle = $derived(`
        background: url(${NODEGRID_TILEPATH}) 0px 0px / 1% auto repeat;
        background-blend-mode: overlay;
        backdrop-filter: blur(32.5px);
    `);
    let hdr_bg = $derived(`
        background: linear-gradient(179deg, #ffffff0d 0.64%, #ffffffd9 59.87%, #ffffffe6 99.36%);
    `);
    let body_bg = $derived(`
        background: 
            linear-gradient(180deg, #ffffffe6 0%, #ffffffcc 10%, #ffffffe6 40%, #ffffffe6 70%, #FFF 90%);
    `);

  //~ Section Background Styles ~//
    // let sec_bg_i = $derived(`
    //     background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
    // `);
    // let sec_bg_ii = $derived(`
    //     background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.75) 26.66%, rgba(255, 255, 255, 0.40) 59.89%, rgba(255, 255, 255, 0.65) 90%, #FFF 100%), 
    //     url(${HEXSEMI_A_BLK_TILEPATH}) 0px 0px / 1% auto repeat, #F4F4F4;            
    // `);
</script>


<!--$ Page Formatter  -->
<PageViewframe {framecolor} {framebgstyle} {canvasbgstyle}
    sidebarSide={"none"}
    canvas={content}
/>

<!--$ Canvas contents -->
{#snippet content()}
    <PageHeader 
        hdrtxt={"Developed by"}
        pos={"center"}
        hasImg={true}
        ord={"txt:*"} 
        imgpath={LMEDMO_HDR_PIXELTXT}
        imgtype={"textimg"} 
        boxBgfill={hdr_bg}
    />
    
    <div class="bodyBox" style={body_bg}>
        <Section content={sec_content_i} heading={sec_head_i}
            showblockspan={false}
            accentcolor={pagecolor}
        />
        <Section content={sec_content_ii} heading={sec_head_ii}
            showblockspan={false}
            accentcolor={pagecolor}
        />
    </div>
{/snippet}

<!--$ Section contents -->
<!--> Section 1 ---------------------------------->
{#snippet sec_head_i()}
    <DashLineBoxHeading htxt={"Overview"} accentcolor={pagecolor} />
{/snippet}

<!--~ s1 content ( mocktexteditorblock ) -->
{#snippet sec_content_i()}
    <CodeEditor {info}/>
{/snippet}


<!--> Section 2 ---------------------------------->
{#snippet sec_head_ii()}
    <DashLineBoxHeading htxt={"Explore"} accentcolor={pagecolor} />
{/snippet}

<!--~ s2 content ( canvasnav & dashln ) -->
{#snippet sec_content_ii()}
  <!--& CanvasNavBlock  -->
    <CanvasNav iconnavbuttons={links} />
    
    {#snippet links()}
        {#each resume_pgs as p}
            <IconLinkButton 
                url={p.url} 
                labeltxt={p.name}
                accentcolor={p.colors.main} 
                icon={p.icons.headericon} 
            />
        {/each}
    {/snippet}

  <!--& DashLnBx-TxtBlocBxCard -->
    <DashLnBxInfoBlock content={blocks} htxt={"Curriculum Vitae:"} />

    {#snippet blocks()}
        <DetailBlock labeltxt={"Definition"} valuetxt={`
                Refers to a detailed professional document that extensively summarizes a person's career, qualifications, and education, including  publications and other information. A CV may also include professional references, as well as coursework, fieldwork, hobbies and interests relevant to your profession.
            `}
            accentcolor={pagecolor}
            showeolchar={true}
        />
        <DetailBlock labeltxt={"Origin"} valuetxt={`Latin, meaning 'course of life'`}
            accentcolor={pagecolor}
            showeolchar={true}
        />

        <DetailBlock labeltxt={"Pronounciation"} valuetxt={`'cur·​ric·​u·​lum vi·​tae'`}
            accentcolor={pagecolor}
            showeolchar={true}
        />

        <DetailBlock labeltxt={"Abbreviation(s)"} valuetxt={`'C.V.' or 'CV'`}
            accentcolor={pagecolor}
            showeolchar={true}
        />
    {/snippet}
{/snippet}


<style>
    .bodyBox {
        display: flex;
        min-width: 364px;
        padding-bottom: 40px;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
        color: #ffffffcc;
        text-shadow: 1px 1px 2px #00000040;
        background-color: #000000b3;
    }
</style>