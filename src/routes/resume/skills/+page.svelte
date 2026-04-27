<script lang="ts">
    import type { SkillsetTemp } from '$lib/data';
    import type { AppPageCfgTemp } from '$lib/config';
    import { SkillsInfo } from '$lib/data';
    import { PageViewframe, SidebarMenu } from '$lib/ui';
    import { Section, PageHeader, InfoBlock, InfoClusterBlock, NestedInfoBlock, AsideBlock, TopicTag, Heading, BulletTxt } from '$lib/components';
    import { SKILLS_PAGE_CFG, SKILLS_TILE, setPage, AppConfig, NODEGRID_TILEPATH } from '$lib/config';

    let pageconf: AppPageCfgTemp = SKILLS_PAGE_CFG;

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
        background: url(${SKILLS_TILE}) 0px 0px / 4% auto repeat;
        backdrop-filter: blur(32.5px);
    `);
    let hdr_bg = $derived(`background: linear-gradient(180deg, #ffffff00 0%, #FFF 65%);`);
    let body_bg = $derived(`
        background:
            url(${NODEGRID_TILEPATH}) 0px 0px / 2% auto repeat,
            linear-gradient(180deg, #FFF 0%, #fffffff5 30%, #fffffff5 60%, #FFF 100%);
        background-blend-mode: plus-lighter, normal;
    `);

  //$ Skills Page variables $//
    let ss: SkillsetTemp[] = SkillsInfo.content;
</script>


<!--$ Page ViewFrame  -->
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
        <Section content={sec_content_iv} heading={sec_head_iv}
            showblockspan={true}
            accentcolor={pagecolor}
        />
        <Section content={sec_content_v} heading={sec_head_v}
            showblockspan={true}
            accentcolor={pagecolor}
        />
        <Section content={sec_content_vi} heading={sec_head_vi}
            showblockspan={true}
            accentcolor={pagecolor}
        />
        <Section content={sec_content_vii} heading={sec_head_vii}
            showblockspan={true}
            accentcolor={pagecolor}
        />
    </div>
{/snippet}


<!-- )) Sections (( -->
<!--$ Section 1 ------------------------------------------------------------------>
{#snippet sec_head_i()}
    <Heading htxt={ss[0].skillset_name} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

{#snippet sec_content_i()}
  {#each ss[0].subsets as sub}
    <InfoClusterBlock blocks={blocks} accentcolor={pagecolor} htxtbox={subhtxtbox} />

    {#snippet subhtxtbox()}
        <Heading htxt={sub.subsetname} lvl={"h2"}
            accentcolor={pagecolor}
            iconkey={sub.iconkey}
            showiconpane={true}
        />
    {/snippet}

    {#snippet blocks()}
      {#each sub.skills as skl}
        <NestedInfoBlock blocks={ssblocks} accentcolor={pagecolor} htxtbox={subskillhtxtbox} />

        {#snippet subskillhtxtbox()}
            <Heading htxt={skl.name} lvl={"h3"}
                accentcolor={pagecolor}
                iconkey={skl.iconkey}
                showiconpane={true}
            />
        {/snippet}
        
        {#snippet ssblocks()}
            <BulletTxt txt={skl.details} bullet={"deltaarrow"} bulletcolor={pagecolor} />
            
          {#if skl.topickeys.length > 0}
            <AsideBlock blocks={tags} labeltxt={"Referenced Technology"}
                accentcolor={pagecolor}
                labeliconkey={"info"} 
            />
          {/if}

            {#snippet tags()}
              {#each skl.topickeys as key}
                <TopicTag keyword={key} />
              {/each}
            {/snippet}
        {/snippet}
      {/each}
    {/snippet}
  {/each}
{/snippet}


<!--$ Section 2 ------------------------------------------------------------------>
{#snippet sec_head_ii()}
    <Heading htxt={ss[1].skillset_name} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

{#snippet sec_content_ii()}
    <InfoClusterBlock blocks={blocks} accentcolor={pagecolor} />

    {#snippet blocks()}
      {#each ss[1].skills as s}
        <NestedInfoBlock blocks={blocks} accentcolor={pagecolor} htxtbox={htxtbox} />

        {#snippet htxtbox()}
            <Heading htxt={s.name} lvl={"h3"}
                accentcolor={pagecolor}
                iconkey={s.iconkey}
                showiconpane={true}
            />
        {/snippet}
        
        {#snippet blocks()}
            <BulletTxt txt={s.details} bullet={"deltaarrow"} bulletcolor={pagecolor} />
            
          {#if s.topickeys.length > 0}
            <AsideBlock blocks={tags} labeltxt={"Referenced Technology"}
                accentcolor={pagecolor}
                labeliconkey={"info"} 
            />
          {/if}

            {#snippet tags()}
              {#each s.topickeys as key} <TopicTag keyword={key} /> {/each}
            {/snippet}
        {/snippet}
      {/each}
    {/snippet}
{/snippet}


<!--$ Section 3 ------------------------------------------------------------------>
{#snippet sec_head_iii()}
    <Heading htxt={ss[2].skillset_name} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

{#snippet sec_content_iii()}
    <InfoClusterBlock blocks={blocks} accentcolor={pagecolor} />

    {#snippet blocks()}
      {#each ss[2].skills as s}
        <NestedInfoBlock blocks={blocks} accentcolor={pagecolor} htxtbox={htxtbox} />

        {#snippet htxtbox()}
            <Heading htxt={s.name} lvl={"h3"}
                accentcolor={pagecolor}
                iconkey={s.iconkey}
                showiconpane={true}
            />
        {/snippet}
        
        {#snippet blocks()}
            <BulletTxt txt={s.details} bullet={"deltaarrow"} bulletcolor={pagecolor} />
            
          {#if s.topickeys.length > 0}
            <AsideBlock blocks={tags} labeltxt={"Referenced Technology"}
                accentcolor={pagecolor}
                labeliconkey={"info"} 
            />
          {/if}

            {#snippet tags()}
              {#each s.topickeys as key} <TopicTag keyword={key} /> {/each}
            {/snippet}
        {/snippet}
      {/each}
    {/snippet}
{/snippet}


<!--$ Section 4 ------------------------------------------------------------------>
{#snippet sec_head_iv()}
    <Heading htxt={ss[3].skillset_name} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

{#snippet sec_content_iv()}
    <InfoBlock blocks={blocks} accentcolor={pagecolor} />

    {#snippet blocks()}
      {#each ss[3].skills as s}
        <BulletTxt txt={s.details} bullet={"deltaarrow"} bulletcolor={pagecolor} />
        
          {#if s.topickeys.length > 0}
            <AsideBlock blocks={tags} labeltxt={"Referenced Technology"}
                accentcolor={pagecolor}
                labeliconkey={"info"} 
            />
          {/if}

        {#snippet tags()}
          {#each s.topickeys as key} <TopicTag keyword={key} /> {/each}
        {/snippet}
      {/each}
    {/snippet}
{/snippet}


<!--$ Section 5 ------------------------------------------------------------------>
{#snippet sec_head_v()}
    <Heading htxt={ss[4].skillset_name} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

{#snippet sec_content_v()}
    <InfoClusterBlock blocks={blocks} accentcolor={pagecolor} />

    {#snippet blocks()}
      {#each ss[4].skills as s}
        <NestedInfoBlock blocks={blocks} accentcolor={pagecolor} htxtbox={htxtbox} />

        {#snippet htxtbox()}
            <Heading htxt={s.name} lvl={"h3"}
                accentcolor={pagecolor}
                iconkey={s.iconkey}
                showiconpane={true}
            />
        {/snippet}

        {#snippet blocks()}
            <BulletTxt txt={s.details} bullet={"deltaarrow"} bulletcolor={pagecolor} />
            
          {#if s.topickeys.length > 0}
            <AsideBlock blocks={tags} labeltxt={"Referenced Technology"}
                accentcolor={pagecolor}
                labeliconkey={"info"} 
            />
          {/if}

            {#snippet tags()}
              {#each s.topickeys as key}<TopicTag keyword={key} />{/each}
            {/snippet}
        {/snippet}
      {/each}
    {/snippet}
{/snippet}


<!--$ Section 6 ------------------------------------------------------------------>
{#snippet sec_head_vi()}
    <Heading htxt={ss[5].skillset_name} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

{#snippet sec_content_vi()}
    <InfoClusterBlock blocks={blocks} accentcolor={pagecolor} />

    {#snippet blocks()}
      {#each ss[5].skills as s}
        <NestedInfoBlock blocks={blocks} accentcolor={pagecolor} htxtbox={htxtbox} />

        {#snippet htxtbox()}
            <Heading htxt={s.name} lvl={"h3"}
                accentcolor={pagecolor}
                iconkey={s.iconkey}
                showiconpane={true}
            />
        {/snippet}

        {#snippet blocks()}
            <BulletTxt txt={s.details} bullet={"deltaarrow"} bulletcolor={pagecolor} />

          {#if s.topickeys.length > 0}
            <AsideBlock blocks={tags} labeltxt={"Referenced Technology"}
                accentcolor={pagecolor}
                labeliconkey={"info"} 
            />
          {/if}

            {#snippet tags()}
              {#each s.topickeys as key}<TopicTag keyword={key} />{/each}
            {/snippet}
        {/snippet}
      {/each}
    {/snippet}
{/snippet}


<!--$ Section 7 ------------------------------------------------------------------>
{#snippet sec_head_vii()}
    <Heading htxt={ss[6].skillset_name} lvl={"h1"} accentcolor={pagecolor} />
{/snippet}

{#snippet sec_content_vii()}
  <InfoClusterBlock blocks={blocks} accentcolor={pagecolor} />

    {#snippet blocks()}
      {#each ss[6].skills as s}
        <NestedInfoBlock blocks={blocks} accentcolor={pagecolor} htxtbox={htxtbox} />

        {#snippet htxtbox()}
            <Heading htxt={s.name} lvl={"h3"}
                accentcolor={pagecolor}
                iconkey={s.iconkey}
                showiconpane={true}
            />
        {/snippet}

        {#snippet blocks()}
            <BulletTxt txt={s.details} bullet={"deltaarrow"} bulletcolor={pagecolor} />

          {#if s.topickeys.length > 0}
            <AsideBlock blocks={tags} labeltxt={"Referenced Technology"}
                accentcolor={pagecolor}
                labeliconkey={"info"} 
            />
          {/if}

            {#snippet tags()}
              {#each s.topickeys as key}<TopicTag keyword={key} />{/each}
            {/snippet}
        {/snippet}
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
        justify-content: center;
        flex: 1 0 0;
    }
</style>