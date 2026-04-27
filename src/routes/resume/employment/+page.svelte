<script lang="ts">
    import type { EmployerTemp } from '$lib/data';
    import type { AppPageCfgTemp } from '$lib/config';
    import { PageViewframe, SidebarMenu } from '$lib/ui';
    import { Section, PageHeader, DualTierHeading, InfoBlock, KVP, NestedKVP } from '$lib/components';
    import { EMPLOYMENT_PAGE_CFG, CAREER_TILE, setPage, AppConfig, NODEGRID_TILEPATH } from '$lib/config';
    import { EmplInfo } from '$lib/data';

    let pageconf: AppPageCfgTemp = EMPLOYMENT_PAGE_CFG;

    setPage(pageconf);

  //~ UI init variables ~//
    let pagecolor = pageconf.colors.main;
    let textcolor = `hsl(from ${pagecolor} h calc(s - 25) calc(l - 12))`;
    let pagetxtcolor = pageconf.colors.txtcolor;
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
        background: url(${CAREER_TILE}) 0px 0px / 4% auto repeat;
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

  //$ Employment Page variables $//
    let jobs: EmployerTemp[] = EmplInfo.content;
    
    //~ statically assigned due to only 3 records
    let job_a = jobs[0];
    let job_b = jobs[1];
    let job_c = jobs[2];
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
        <Section content={sec_content_iii} heading={sec_head_iii}
            showblockspan={true}
            accentcolor={pagecolor}
        />
    </div>
{/snippet}

<!-- )) Sections (( -->
<!--$ Section 1 ------------------------------------------------------->
{#snippet sec_head_i()}
    <DualTierHeading mainhtxts={job_a.roles} subhtxt={job_a.name} accentcolor={pagecolor} iconkey={job_a.iconkey} />
{/snippet}

{#snippet sec_content_i()}
    <InfoBlock blocks={blocks} accentcolor={pagetxtcolor} />
    
    {#snippet blocks()}
        <KVP accentcolor={textcolor} keytxt={"Tenure:"} valuetxt={`
            ${job_a.tenure.start} - ${job_a.tenure.is_current ? "Current" : job_a.tenure.end}
        `} />
        <KVP accentcolor={textcolor} keytxt={"Location:"} valuetxt={job_a.location.city + ", " + job_a.location.state} />
        <KVP accentcolor={textcolor} keytxt={"Salary:"} valuetxt={job_a.salary} />
        <KVP accentcolor={textcolor} keytxt={"Duties:"} valuetxt={""} />
        {#each job_a.duties as duty}
            <NestedKVP sublvl={1} keytxt={duty.label} valuetxt={duty.description} accentcolor={textcolor} />
        {/each}
    {/snippet}
{/snippet}

<!--$ Section 2 ------------------------------------------------------->
{#snippet sec_head_ii()}
    <DualTierHeading mainhtxts={job_b.roles} subhtxt={job_b.name} accentcolor={pagecolor} iconkey={job_b.iconkey} />
{/snippet}

{#snippet sec_content_ii()}
    <InfoBlock blocks={blocks} accentcolor={pagetxtcolor} />

    {#snippet blocks()}
        <KVP accentcolor={textcolor} keytxt={"Tenure:"} valuetxt={`
            ${job_b.tenure.start} - ${job_b.tenure.is_current ? "Current" : job_b.tenure.end}
        `} />
        <KVP accentcolor={textcolor} keytxt={"Location:"} valuetxt={job_b.location.city + ", " + job_b.location.state} />
        <KVP accentcolor={textcolor} keytxt={"Salary:"} valuetxt={job_b.salary} />
        <KVP accentcolor={textcolor} keytxt={"Duties:"} valuetxt={""} />
        {#each job_b.duties as duty}
            <NestedKVP sublvl={1} keytxt={duty.label} valuetxt={duty.description} accentcolor={textcolor} />
        {/each}
    {/snippet}
{/snippet}

<!--$ Section 3 ------------------------------------------------------->
{#snippet sec_head_iii()}
    <DualTierHeading mainhtxts={job_c.roles} subhtxt={job_c.name} accentcolor={pagecolor} iconkey={job_c.iconkey} />
{/snippet}

{#snippet sec_content_iii()}
    <InfoBlock blocks={blocks} accentcolor={pagetxtcolor} />
    
    {#snippet blocks()}
        <KVP accentcolor={textcolor} keytxt={"Tenure:"} valuetxt={`
            ${job_c.tenure.start} - ${job_c.tenure.is_current ? "Current" : job_c.tenure.end}
        `} />
        <KVP accentcolor={textcolor} keytxt={"Location:"} valuetxt={job_c.location.city + ", " + job_c.location.state} />
        <KVP accentcolor={textcolor} keytxt={"Salary:"} valuetxt={job_c.salary} />
        <KVP accentcolor={textcolor} keytxt={"Duties:"} valuetxt={""} />
        {#each job_c.duties as duty}
            <NestedKVP sublvl={1} keytxt={duty.label} valuetxt={duty.description} accentcolor={textcolor} />
        {/each}
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