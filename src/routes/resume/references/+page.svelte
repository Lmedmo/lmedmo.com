<script lang="ts">
    import type { ReferenceInfoTemp } from '$lib/data';
    import type { AppPageCfgTemp } from '$lib/config';
    import { PageViewframe, SidebarMenu } from '$lib/ui';
    import { Section, PageHeader, Heading, InfoBlock, KVP, Quote, EmailBasic } from '$lib/components';
    import { REFERENCES_PAGE_CFG, REFS_TILE, setPage, AppConfig, NODEGRID_TILEPATH } from '$lib/config';
    import { RefsInfo } from '$lib/data';

    let pageconf: AppPageCfgTemp = REFERENCES_PAGE_CFG;

    setPage(pageconf);

  //~ UI init variables ~//
    let pagecolor = pageconf.colors.main;
    let framecolor = pageconf.colors.frameStroke;
    let pageshadcolor = pageconf.colors.frameShad;
    let pagegradLight = pageconf.colors.frameGradL;
    let pagegradDark = pageconf.colors.frameGradD;

    let icons = pageconf.icons;
    let headericon = icons.headericon;
    let reficon = icons.titlebaricon;
    let resumepages = AppConfig.pages.filter(p => p.parent === 1);

  //~ Layer/Component Background Styles ~//
    let framebgstyle = $derived(`
        box-shadow: 6px 6px 20px 0 rgba(77, 77, 77, 0.20) inset, -6px -6px 20px 0 ${pageshadcolor}66 inset;
        background: 
            linear-gradient(180deg, rgba(255, 255, 255, 0.00) 80%, #FFF 98%),
            linear-gradient(97deg, ${pagegradDark} 2.36%, ${pagegradLight} 84.47%);
    `);
    let canvasbgstyle = $derived(`
        background: url(${REFS_TILE}) 0px 0px / 4% auto repeat;
        backdrop-filter: blur(32.5px);
    `);
    let hdr_bg = $derived(`
        background: linear-gradient(180deg, #ffffff00 0%, #FFF 65%);
    `);
    let body_bg = $derived(`
        background:
            url(${NODEGRID_TILEPATH}) 0px 0px / 2% auto repeat,
            linear-gradient(180deg, #FFF 0%, #fffffff5 30%, #fffffff5 60%, #FFF 100%);
        background-blend-mode: plus-lighter, normal;
    `);

  //$ References Page variables $//
    let refs: ReferenceInfoTemp[] = RefsInfo.content;

    let ref_a = refs[0];
    let ref_b = refs[1];
    let ref_c = refs[2];
</script>


<!--$ Page Formatter  -->
<PageViewframe canvas={content} sidebarMenu={sidebar}
    {framecolor}
    {framebgstyle}
    {canvasbgstyle}
    sidebarSide={"left"}
/>

<!-- ~ Sidebar -->
{#snippet sidebar()}
    <SidebarMenu options={resumepages} selected={pageconf} />
{/snippet}

<!-- >> Canvas Contents << -->
{#snippet content()}
    <PageHeader hdrtxt={pageconf.name} 
        pos={"left"} 
        ord={"*:txt"} 
        hasImg={true} 
        imgpath={headericon.src} 
        imgtype={"icon"} 
        boxBgfill={hdr_bg}
    />

    <div class="bodyBox" style={body_bg}>
        <Section content={sec_content_i} heading={sec_head_i}
            showblockspan={true}
            accentcolor={pagecolor}
        />
        <Section content={sec_content_ii} heading={sec_head_ii}
            showblockspan={true}
            accentcolor={pagecolor}
        />
        <Section content={sec_content_iii} heading={sec_head_iii}
            showblockspan={true}
            accentcolor={pagecolor}
        />
    </div>
{/snippet}

<!-- )) Sections (( -->
<!--$ Section 1 ------------------------------------------------------->
{#snippet sec_head_i()}
    <Heading htxt={ref_a.first_name + " " + ref_a.last_name} lvl={"alt_h1"}
        accentcolor={pagecolor}
        iconkey={reficon.key}
        showiconpane={false}
        sepchar={"arrowcap"}
        buttons={hbtns}
    />
    {#snippet hbtns()}
        <EmailBasic color={pagecolor} />
    {/snippet}
{/snippet}

{#snippet sec_content_i()}
    <InfoBlock 
        blocks={blocks}
        accentcolor={pagecolor}
    />

    {#snippet blocks()}
        <KVP keytxt={"Relation: "} valuetxt={ref_a.relation} accentcolor={pagecolor} />
        <KVP keytxt={"Occupation: "} valuetxt={ref_a.occupation} accentcolor={pagecolor} />
        <KVP keytxt={"Recommendation:"} valuetxt={""} accentcolor={pagecolor} />
        <Quote quotxt={ref_a.quote} color={pagecolor} />
    {/snippet}
{/snippet}


<!--$ Section 2 ------------------------------------------------------->
{#snippet sec_head_ii()}
    <Heading htxt={ref_b.first_name + " " + ref_b.last_name} lvl={"alt_h1"}
        accentcolor={pagecolor}
        iconkey={reficon.key}
        showiconpane={false}
        sepchar={"arrowcap"}
        buttons={hbtns}
    />
    {#snippet hbtns()}
        <EmailBasic color={pagecolor} />
    {/snippet}
{/snippet}

{#snippet sec_content_ii()}
    <InfoBlock 
        blocks={blocks}
        accentcolor={pagecolor}
    />

    {#snippet blocks()}
        <KVP keytxt={"Relation: "} valuetxt={ref_b.relation} accentcolor={pagecolor} />
        <KVP keytxt={"Occupation: "} valuetxt={ref_b.occupation} accentcolor={pagecolor} />
        <KVP keytxt={"Recommendation:"} valuetxt={""} accentcolor={pagecolor} />
        <Quote quotxt={ref_b.quote} color={pagecolor} />
    {/snippet}
{/snippet}


<!--$ Section 3 ------------------------------------------------------->
{#snippet sec_head_iii()}
    <Heading htxt={ref_c.first_name + " " + ref_c.last_name} lvl={"alt_h1"}
        accentcolor={pagecolor}
        iconkey={reficon.key}
        showiconpane={false}
        sepchar={"arrowcap"}
        buttons={hbtns}
    />
    {#snippet hbtns()}
        <EmailBasic color={pagecolor} />
    {/snippet}
{/snippet}

{#snippet sec_content_iii()}
    <InfoBlock 
        blocks={blocks}
        accentcolor={pagecolor}
    />

    {#snippet blocks()}
        <KVP keytxt={"Relation: "} valuetxt={ref_c.relation} accentcolor={pagecolor} />
        <KVP keytxt={"Occupation: "} valuetxt={ref_c.occupation} accentcolor={pagecolor} />
        <KVP keytxt={"Recommendation:"} valuetxt={""} accentcolor={pagecolor} />
        <Quote quotxt={ref_c.quote} color={pagecolor} />
    {/snippet}
{/snippet}


<style>
    .bodyBox {
        display: flex;
        min-width: 372px;
        padding-bottom: 40px;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
        flex: 1 0 0;
    }
</style>