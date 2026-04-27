<script lang="ts">
    import type { CertificateInfoTemp } from '$lib/data';
    import type { AppPageCfgTemp } from '$lib/config';
    import { CERTIFICATIONS_PAGE_CFG, CERT_TILE, setPage, AppConfig, NODEGRID_TILEPATH } from '$lib/config';
    import { Section, PageHeader, Heading, InfoBlock, KVP } from '$lib/components';
    import { PageViewframe, SidebarMenu } from '$lib/ui';
    import { CertsInfo } from '$lib/data';

    let pageconf: AppPageCfgTemp = CERTIFICATIONS_PAGE_CFG;

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
    let framebg = $derived(`
        box-shadow: 6px 6px 20px 0 rgba(77, 77, 77, 0.20) inset, -6px -6px 20px 0 ${pageshadcolor}66 inset;
        background: 
            linear-gradient(180deg, rgba(255, 255, 255, 0.00) 80%, #FFF 98%),
            linear-gradient(97deg, ${pagegradDark} 2.36%, ${pagegradLight} 84.47%);
    `);
    let canvasbg = $derived(`
        background: url(${CERT_TILE}) 0px 0px / 4% auto repeat;
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

  //$ Certifications Page variables $//
    let certs: CertificateInfoTemp[] = CertsInfo.content;

    let crd_a: CertificateInfoTemp = certs[0];
    let crd_b: CertificateInfoTemp = certs[1];
    let crd_c: CertificateInfoTemp = certs[2];
    let crd_d: CertificateInfoTemp = certs[3];
</script>


<!--$ Page Formatter  -->
<PageViewframe 
    {framecolor}
    framebgstyle={framebg}
    canvasbgstyle={canvasbg}
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
        <Section content={sec_content_iii} heading={sec_head_iii}
            showblockspan={true}
            accentcolor={pagecolor}
        />
    </div>
{/snippet}


<!-- )) Sections (( -->
<!--$ Section 1 ------------------------------------------------------->
{#snippet sec_head_i()}
    <Heading htxt={"Industry Certifications"} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

{#snippet sec_content_i()}
    <InfoBlock 
        blocks={blocks_a}
        accentcolor={pagecolor}
        htxtbox={htxtbox_a} 
    />
    <InfoBlock 
        blocks={blocks_b}
        accentcolor={pagecolor}
        htxtbox={htxtbox_b} 
    />

    {#snippet htxtbox_a()}
        <Heading htxt={crd_a.name} lvl={"h2"}
            accentcolor={pagecolor}
            iconkey={crd_a.iconkey}
            showiconpane={true}
        />
    {/snippet}

    {#snippet blocks_a()}
      {#if (crd_a.special_attributes.length > 0)}
        {#each crd_a.special_attributes as sa}
            <KVP keytxt={sa.name} valuetxt={sa.value}
                accentcolor={pagecolor}
            />
        {/each}
      {/if}
        <KVP keytxt={"Description"} valuetxt={crd_a.description}
            accentcolor={pagecolor}
        />
    {/snippet}

    {#snippet htxtbox_b()}
        <Heading htxt={crd_b.name} lvl={"h2"}
            accentcolor={pagecolor}
            iconkey={crd_b.iconkey}
            showiconpane={true}
        />
    {/snippet}

    {#snippet blocks_b()}
      {#if (crd_b.special_attributes.length > 0)}
        {#each crd_b.special_attributes as sa}
            <KVP keytxt={sa.name} valuetxt={sa.value}
                accentcolor={pagecolor}
            />
        {/each}
      {/if}
        <KVP keytxt={"Description"} valuetxt={crd_b.description}
            accentcolor={pagecolor}
        />
    {/snippet}
{/snippet}


<!--$ Section 2 ------------------------------------------------------->
{#snippet sec_head_ii()}
    <Heading htxt={"Educational Certificates"} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

{#snippet sec_content_ii()}
    <InfoBlock 
        blocks={blocks}
        accentcolor={pagecolor}
        htxtbox={htxtbox} 
    />

    {#snippet htxtbox()}
        <Heading htxt={crd_d.name} lvl={"h2"}
            accentcolor={pagecolor}
            iconkey={crd_d.iconkey}
            showiconpane={true}
        />
    {/snippet}

    {#snippet blocks()}
      {#if (crd_d.special_attributes.length > 0)}
        {#each crd_d.special_attributes as sa}
            <KVP keytxt={sa.name} valuetxt={sa.value}
                accentcolor={pagecolor}
            />
        {/each}
      {/if}
        <KVP keytxt={"Description"} valuetxt={crd_d.description}
            accentcolor={pagecolor}
        />
    {/snippet}
{/snippet}


<!--$ Section 3 ------------------------------------------------------->
{#snippet sec_head_iii()}
    <Heading htxt={"Background Checks / Security Clearances"} lvl={"h1"} accentcolor={pagecolor} />
    <!-- <Txt txt={"Background Checks / Security Clearances"} txtstylecfg={sectionhtxtstyle} /> -->
{/snippet}

{#snippet sec_content_iii()}
    <InfoBlock 
        blocks={blocks}
        accentcolor={pagecolor}
        htxtbox={htxtbox} 
    />

    {#snippet htxtbox()}
        <Heading htxt={crd_c.name} lvl={"h2"}
            accentcolor={pagecolor}
            iconkey={crd_c.iconkey}
            showiconpane={true}
        />
    {/snippet}

    {#snippet blocks()}
      {#if (crd_c.special_attributes.length > 0)}
        {#each crd_c.special_attributes as sa}
            <KVP keytxt={sa.name} valuetxt={sa.value}
                accentcolor={pagecolor}
            />
        {/each}
      {/if}
        <KVP keytxt={"Description"} valuetxt={crd_c.description}
            accentcolor={pagecolor}
        />
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