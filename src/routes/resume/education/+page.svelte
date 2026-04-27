<script lang="ts">
    import type { AppPageCfgTemp } from '$lib/config';
    import type { EducationInfoTemp } from '$lib/data';
    import { PageViewframe, SidebarMenu } from '$lib/ui';
    import { setPage, AppConfig, EDUCATION_PAGE_CFG, EDUCATION_TILE, NODEGRID_TILEPATH } from '$lib/config';
    import { Section, PageHeader, Heading, InfoBlock, KVP, NestedKVP } from '$lib/components';
    import { EduInfo, DEFAULT_EDUINFO } from '$lib/data';

    let pageconf: AppPageCfgTemp = EDUCATION_PAGE_CFG;
    
    setPage(pageconf);
    
  //~ UI init variables ~//
    let pagecolor = pageconf.colors.main;
    let framecolor = pageconf.colors.frameStroke;
    let pageshadcolor = pageconf.colors.frameShad;
    let pagegradLight = pageconf.colors.frameGradL;
    let pagegradDark = pageconf.colors.frameGradD;

    let icons = pageconf.icons;
    let headericon = icons.headericon;
    let resumepages = AppConfig.pages.filter(p => p.parent === 1);

  //~ Layer/Component Background Styles ~//
    let framebgstyle = $derived(`
        box-shadow: 6px 6px 20px 0 rgba(77, 77, 77, 0.20) inset, -6px -6px 20px 0 ${pageshadcolor}66 inset;
        background: 
            linear-gradient(180deg, rgba(255, 255, 255, 0.00) 80%, #FFF 98%),
            linear-gradient(97deg, ${pagegradDark} 2.36%, ${pagegradLight} 84.47%);
    `);
    let canvasbgstyle = $derived(`
        background: url(${EDUCATION_TILE}) 0px 0px / 4% auto repeat;
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
    
  //$ Education Page variables $//
    let schools: EducationInfoTemp[] = EduInfo.content;

    let findhs = schools.find(sch => sch.level === "High School");
    let findps = schools.find(sch => sch.level === "Post-Secondary");

    let hs = findhs ? findhs : DEFAULT_EDUINFO;
    let ps = findps ? findps : DEFAULT_EDUINFO;

    let hsloc = hs ? `${hs.location.city}, ${hs.location.state}` : "";
    let psloc = ps ? `${ps.location.city}, ${ps.location.state}` : "";
</script>


<!--$ Page formatters -->
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

<!--$ Canvas contents -->
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
    </div>
{/snippet}


<!-- )) Sections (( -->
<!--$ Section 1 ------------------------------------------------------->
{#snippet sec_head_i()}
    <Heading htxt={hs.level} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

{#snippet sec_content_i()}
    <InfoBlock blocks={hsblocks} accentcolor={pagecolor} htxtbox={htxtbox_hs} />

    {#snippet htxtbox_hs()}
        <Heading htxt={hs.school_name} lvl={"h2"}
            accentcolor={pagecolor}
            iconkey={hs.iconkey}
            showiconpane={true}
        />
    {/snippet}

    {#snippet hsblocks()}
        <KVP keytxt={"Location: "} valuetxt={hsloc}
            accentcolor={pagecolor}
        />
    
        <KVP keytxt={"Graduation (date): "} valuetxt={hs.graduated}
            accentcolor={pagecolor}
        />

        <KVP keytxt={`Received ${hs.credential_type} (date): `} valuetxt={hs.credential_received_date}
            accentcolor={pagecolor}
        />

        <KVP keytxt={"Cumulative Grade (GPA): "} valuetxt={`${hs.grade}`}
            accentcolor={pagecolor}
        />
    {/snippet}
{/snippet}

<!--$ Section 2 ------------------------------------------------------->
{#snippet sec_head_ii()}
      <Heading htxt={ps.level} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

<!--~ s2 content ( InfoBlock ~~ Post-Secondary ) -->
{#snippet sec_content_ii()}
    <InfoBlock blocks={psblocks} accentcolor={pagecolor} htxtbox={htxtbox_ps} />

    {#snippet htxtbox_ps()}
        <Heading htxt={ps.school_name} lvl={"h2"}
            accentcolor={pagecolor}
            iconkey={ps.iconkey}
            showiconpane={true}
        />
    {/snippet}

    {#snippet psblocks()}
        <KVP keytxt={"Location: "} valuetxt={psloc}
            accentcolor={pagecolor}
        />

        <KVP keytxt={"Degree: "} valuetxt={ps.credential}
            accentcolor={pagecolor}
        />

        <NestedKVP sublvl={1} keytxt={"Major: "} valuetxt={`${ps.major}`} accentcolor={pagecolor} />
        <NestedKVP sublvl={1} keytxt={"Specialization: "} valuetxt={`${ps.specialization}`} accentcolor={pagecolor} />

        <KVP keytxt={"Graduation (date): "} valuetxt={ps.graduated}
            accentcolor={pagecolor}
        />

        <KVP keytxt={`Received ${ps.credential_type}: `} valuetxt={ps.credential_received_date}
            accentcolor={pagecolor}
        />

        <KVP keytxt={"Cumulative Grade (GPA): "} valuetxt={`${ps.grade}`}
            accentcolor={pagecolor}
        />
    {/snippet}
{/snippet}


<style>
    .bodyBox {
        /* background-color: darkgray; */
        display: flex;
        min-width: 378px;
        padding-bottom: 40px;
        flex-direction: column;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;
    }
</style>