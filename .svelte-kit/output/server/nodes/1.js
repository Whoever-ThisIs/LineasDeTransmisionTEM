

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.300f3b64.js","_app/immutable/chunks/scheduler.1671e808.js","_app/immutable/chunks/index.dfaa7074.js","_app/immutable/chunks/stores.baacd636.js","_app/immutable/chunks/singletons.471161ef.js"];
export const stylesheets = [];
export const fonts = [];
