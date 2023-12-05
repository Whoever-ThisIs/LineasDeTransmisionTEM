import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.d2ae0380.js","_app/immutable/chunks/scheduler.1671e808.js","_app/immutable/chunks/index.dfaa7074.js"];
export const stylesheets = ["_app/immutable/assets/3.5cc5e970.css"];
export const fonts = [];
