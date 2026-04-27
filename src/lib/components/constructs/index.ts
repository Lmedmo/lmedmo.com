// Structures: Can assemble...
//   - 2 or more 'Blocks/Collections' inside of a self-declared 'Box'
//     '-> ex. InfoBlock = 'Heading({lvl})' + 'BlockPane'||'NestedBlockPane'||'ClusterPane';
//   - A 'Block' or 'Collection' within a 'Box (boxblock)';
//     '-> ex. DashLnBoxInfoBlock = 'DashLnBox { 'BlockPane'||'NestedBlockPane'||'ClusterPane' }';

export { default as AsideBlock } from './asideblock.svelte';
export { default as NestedInfoBlock } from './nestedinfoblock.svelte';
export { default as InfoBlock } from './infoblock.svelte';
export { default as InfoClusterBlock } from './infoclusterblock.svelte';
export { default as DashLnBxInfoBlock } from './dashlineboxinfoblock.svelte';
export { default as Section } from './section.svelte';


export * from './canvasnav';
