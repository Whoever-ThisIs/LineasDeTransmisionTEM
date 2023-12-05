import { c as create_ssr_component } from "../../chunks/ssr.js";
const Counter_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-xsjtd0{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}h1.svelte-xsjtd0{font-family:haettenschweiler;font-size:7em;color:#652831;margin-top:0;margin-bottom:0;width:100%}h2.svelte-xsjtd0{text-align:center;font-family:Bahnschrift;font-size:1.5em}.welcome.svelte-xsjtd0{display:block;position:absolute;width:100%;height:10%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ayoopv_START -->${$$result.title = `<title>Inicio</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-ayoopv_END -->`, ""} <span class="welcome svelte-xsjtd0" data-svelte-h="svelte-nx4ety"><picture></picture></span> <section class="svelte-xsjtd0" data-svelte-h="svelte-10gm06f"><h1 id="titulo" class="svelte-xsjtd0">Proyecto Final<br>Teoria Electromagnetica</h1> <h2 class="svelte-xsjtd0">319098415 | Escalante Urrea Roberto<br>
		319174339 | López Contreras Abraham Emilio<br>
		319208852 | Meza Villanueva Guillermo<br>
		319511077 | Rojas Troncoso Marcelo<br></h2> </section>`;
});
export {
  Page as default
};
