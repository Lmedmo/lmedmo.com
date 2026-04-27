<script lang="ts">
    import type { ProjectInfoTemp } from '$lib/data';
    import type { AppPageCfgTemp } from '$lib/config';
    import { PageViewframe, SidebarMenu } from '$lib/ui';
    import { PageHeader, Section, Heading, InfoBlock, KVP, AsideBlock, TopicTag } from '$lib/components';
    import { PROJECTS_PAGE_CFG, PROJX_TILE, setPage, AppConfig, NODEGRID_TILEPATH } from '$lib/config';
    import { ProjInfo } from '$lib/data';

    let pageconf: AppPageCfgTemp = PROJECTS_PAGE_CFG;

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
        background: url(${PROJX_TILE}) 0px 0px / 4% auto repeat;
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

  //$ Projects Page variables $//
    let prjx: ProjectInfoTemp[] = ProjInfo.content;

    let codeprjx = prjx.filter(p => p.category === "code");
    let sysprjx = prjx.filter(p => p.category === "systems");
</script>


<!--$ Page Formatter  -->
<PageViewframe {framecolor} {framebgstyle} {canvasbgstyle}
    sidebarSide={"left"}
    sidebarMenu={sidebar}
    canvas={content}
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
    </div>
{/snippet}


<!-- )) Sections (( -->
<!--$ Section 1 ------------------------------------------------------->
{#snippet sec_head_i()}
    <Heading htxt={"Software Development"} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

{#snippet sec_content_i()}
  {#each codeprjx as codeprj}
    <InfoBlock blocks={blocks} accentcolor={pagecolor} htxtbox={htxtbox} />

    {#snippet htxtbox()}
        <Heading htxt={codeprj.title} lvl={"h2"}
            accentcolor={pagecolor}
            iconkey={codeprj.iconkey}
            showiconpane={true}
        />
    {/snippet}

    {#snippet blocks()}
        <KVP keytxt={"Description"} valuetxt={codeprj.description} accentcolor={pagecolor}
            sepchar={"-->"}
        />
        <AsideBlock blocks={tags} labeltxt={"Technologies/Stack"}
            accentcolor={pagecolor}
            labeliconkey={"info"} 
        />

        {#snippet tags()}
          {#each codeprj.topickeys as key}
            <TopicTag keyword={key} />
          {/each}
        {/snippet}
    {/snippet}
  {/each} 
{/snippet}


<!--$ Section 2 ------------------------------------------------------->
{#snippet sec_head_ii()}
    <Heading htxt={"Systems, Networking, & Services"} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

{#snippet sec_content_ii()}
  {#each sysprjx as sysprj}
    <InfoBlock blocks={blocks} accentcolor={pagecolor} htxtbox={htxtbox} />

    {#snippet htxtbox()}
        <Heading htxt={sysprj.title} lvl={"h2"}
            accentcolor={pagecolor}
            iconkey={sysprj.iconkey}
            showiconpane={true}
        />
    {/snippet}

    {#snippet blocks()}
        <KVP keytxt={"Description"} valuetxt={sysprj.description} accentcolor={pagecolor}
            sepchar={"-->"}
        />
        <AsideBlock blocks={tags} labeltxt={"Technologies/Stack"}
            accentcolor={pagecolor}
            labeliconkey={"info"} 
        />

        {#snippet tags()}
          {#each sysprj.topickeys as key}
            <TopicTag keyword={key} />
          {/each}
        {/snippet}
    {/snippet}
  {/each} 
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