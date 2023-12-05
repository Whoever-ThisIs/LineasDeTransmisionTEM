import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const logo = "/_app/immutable/assets/maracuya.b2d6e4eb.png";
const fi = "/_app/immutable/assets/fi.df9f70ae.png";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-14cmu88.svelte-14cmu88{display:flex;justify-content:space-between}.corner.svelte-14cmu88.svelte-14cmu88{width:4em;height:5em}.corner.svelte-14cmu88 a.svelte-14cmu88{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-14cmu88 img.svelte-14cmu88{width:4em;height:4em;object-fit:contain}nav.svelte-14cmu88.svelte-14cmu88{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-14cmu88.svelte-14cmu88{width:2em;height:3em;display:block}path.svelte-14cmu88.svelte-14cmu88{fill:var(--background)}ul.svelte-14cmu88.svelte-14cmu88{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-14cmu88.svelte-14cmu88{position:relative;height:100%}li[aria-current='page'].svelte-14cmu88.svelte-14cmu88::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-14cmu88 a.svelte-14cmu88{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-14cmu88.svelte-14cmu88:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-14cmu88"><div class="corner svelte-14cmu88" data-svelte-h="svelte-jaa1hr"><a href="/" class="svelte-14cmu88"><img${add_attribute("src", logo, 0)} alt="SvelteKit" class="svelte-14cmu88"></a></div> <nav class="svelte-14cmu88"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-14cmu88"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-14cmu88"></path></svg> <ul class="svelte-14cmu88"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-14cmu88"><a href="/" class="svelte-14cmu88" data-svelte-h="svelte-1vkqsk0">Inicio</a></li> <li${add_attribute("aria-current", $page.url.pathname === "/about" ? "page" : void 0, 0)} class="svelte-14cmu88"><a href="/about" class="svelte-14cmu88" data-svelte-h="svelte-fcfqi9">Ingreso de datos</a></li></ul> <svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-14cmu88"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-14cmu88"></path></svg></nav> <div class="corner svelte-14cmu88" data-svelte-h="svelte-yyf65p"><a href="https://github.com/sveltejs/kit" class="svelte-14cmu88"><img${add_attribute("src", fi, 0)} alt="Escudo de la Facultad de Ingenieria" class="svelte-14cmu88"></a></div> </header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-8o1gnw{display:flex;flex-direction:column;min-height:100vh}main.svelte-8o1gnw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-8o1gnw{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-8o1gnw{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-8o1gnw">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-8o1gnw">${slots.default ? slots.default({}) : ``}</main> <footer class="svelte-8o1gnw" data-svelte-h="svelte-ib1ycp"><p>El suicidio nunca habia estado tan cerca</p></footer> </div>`;
});
export {
  Layout as default
};
