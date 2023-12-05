import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{text-align:center}picture.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{display:flex;margin:5%;justify-content:center}picture.svelte-9sbqem>img.svelte-9sbqem.svelte-9sbqem{justify-self:center}table.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{width:60%;margin:5%;font-family:Rockwell;border-collapse:collapse}table.svelte-9sbqem td.svelte-9sbqem.svelte-9sbqem,table.svelte-9sbqem th.svelte-9sbqem.svelte-9sbqem{border:1px solid #8A5767;height:50px;text-align:center}table.svelte-9sbqem tr.svelte-9sbqem.svelte-9sbqem:nth-child(even){background-color:#f2f2f2}table.svelte-9sbqem th.svelte-9sbqem.svelte-9sbqem{text-align:center;background-color:#501B21;color:white}canvas.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{height:300px;width:500px;background-color:#FFFFD3;justify-self:center}form.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{display:flex;justify-content:center;flex-flow:column}.text-column.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{align-self:center;margin:5%;width:90%;display:flex;flex-flow:column;justify-content:center}.rowy.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{display:flex;flex-flow:row;width:inherit}.rowy.svelte-9sbqem>div.svelte-9sbqem.svelte-9sbqem{display:flex;flex-flow:column;justify-content:center}.rowy.svelte-9sbqem>div.svelte-9sbqem>p.svelte-9sbqem{margin:5px;font:20px Bahnschrift;text-align:center}.ltsDiv.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{width:30%}.ltsDiv.svelte-9sbqem>div.svelte-9sbqem.svelte-9sbqem{display:flex;justify-content:center}.pictureDiv.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{width:70%}.mdsDiv.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem,.mcsDiv.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{width:50%}.botonesFrec.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{display:flex;flex-flow:column;justify-content:center}.tableRestDiv.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{display:flex;justify-content:center}.tableHeader.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem,.tableHeader.svelte-9sbqem>th.svelte-9sbqem.svelte-9sbqem{height:10px}.errorMsg.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{text-align:center}#restTable.svelte-9sbqem.svelte-9sbqem.svelte-9sbqem{width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let frecuencias = [], sigmads = [], ds = [];
  let linstrans = [
    { id: 1, nombre: `Par Bifiliar` },
    // No encontramos fórmulas para par trenzado
    /*{
    	id: 2,
    	nombre: `Par Trenzado`
    },*/
    { id: 3, nombre: `Cable Coaxial` },
    { id: 4, nombre: `Placas Paralelas` }
  ];
  let dielectricos = [
    {
      nombre: `Polietileno`,
      Er: 2.26,
      tand: 2e-4
    },
    { nombre: `Mica`, Er: 5.4, tand: 6e-4 },
    { nombre: `Papel`, Er: 3, tand: 8e-3 },
    {
      nombre: `Baquelita`,
      Er: 4.74,
      tand: 0.022
    },
    {
      nombre: `Oxido de Aluminio`,
      Er: 8.8,
      tand: 0.1
    },
    {
      nombre: `Personalizado`,
      Er: NaN,
      tand: NaN
    }
  ];
  let conductores = [
    { nombre: `Cobre`, Mr: 0.99999, sig: 58e6 },
    { nombre: `Oro`, Mr: 0.99996, sig: 41e6 },
    { nombre: `Niquel`, Mr: 250, sig: 145e5 },
    {
      nombre: `Personalizado`,
      Mr: NaN,
      sig: NaN
    }
  ];
  let nf;
  let R = [], L = [], G = [], C = [], z_0 = [], gamma = [], alfa = [], beta = [], v_p = [], t_d = [], z_icc = [], z_ica = [], z_i = [];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-pt68zi_START -->${$$result.title = `<title>Ingreso de datos</title>`, ""}<meta name="descripcion" content="Ingreso de datos"><!-- HEAD_svelte-pt68zi_END -->`, ""}  <div class="text-column svelte-9sbqem"><form class="svelte-9sbqem"><div class="rowy svelte-9sbqem"><div class="ltsDiv svelte-9sbqem"><select>${each(linstrans, (x) => {
    return `${x.id === 1 ? `<option${add_attribute("value", x, 0)} selected>${escape(x.nombre)} </option>` : `<option${add_attribute("value", x, 0)}>${escape(x.nombre)} </option>`}`;
  })}</select> ${``}</div> <div class="pictureDiv svelte-9sbqem"> <picture class="svelte-9sbqem">${``}</picture></div></div> <div class="rowy svelte-9sbqem"><div class="mcsDiv svelte-9sbqem"> <h3 class="svelte-9sbqem">Material conductor:
					<select>${each(conductores, (y) => {
    return `${y.nombre === "Cobre" ? `<option${add_attribute("value", y, 0)} selected>${escape(y.nombre)} </option>` : `<option${add_attribute("value", y, 0)}>${escape(y.nombre)} </option>`}`;
  })}</select></h3> ${``}</div> <div class="mdsDiv svelte-9sbqem"> <h3 class="svelte-9sbqem">Material dielectrico:
					<select>${each(dielectricos, (z) => {
    return `${z.nombre === "Polietileno" ? `<option${add_attribute("value", z, 0)} selected>${escape(z.nombre)} </option>` : `<option${add_attribute("value", z, 0)}>${escape(z.nombre)} </option>`}`;
  })}</select></h3> ${``}</div></div> <div class="rowy svelte-9sbqem"><canvas id="DiagElec" height="300" width="500" class="svelte-9sbqem"></canvas>  <table id="RCLG" class="svelte-9sbqem"><tr class="tableHeader svelte-9sbqem" data-svelte-h="svelte-2wggju"><th class="svelte-9sbqem">Frecuencia [Hz]</th> <th class="svelte-9sbqem">R [Ω/M]</th> <th class="svelte-9sbqem">L [H/n]</th> <th class="svelte-9sbqem">C [F/m]</th> <th class="svelte-9sbqem">G [S/m]</th></tr> ${each(frecuencias, (frecuencia, i) => {
    return `<tr class="svelte-9sbqem"><td class="svelte-9sbqem">${escape(frecuencia.toExponential(2))}</td> <td class="svelte-9sbqem">${escape(R[i].toExponential(2))}</td> <td class="svelte-9sbqem">${escape(L[i].toExponential(2))}</td> <td class="svelte-9sbqem">${escape(C[i].toExponential(2))}</td> <td class="svelte-9sbqem">${escape(G[i].toExponential(2))}</td> </tr>`;
  })}</table></div> <div class="tableRestDiv svelte-9sbqem"> <table id="restTable" class="svelte-9sbqem"><tr class="svelte-9sbqem" data-svelte-h="svelte-7j4w4d"><th class="svelte-9sbqem">Frecuencia [Hz]</th> <th class="svelte-9sbqem">l [m]</th> <th class="svelte-9sbqem">\\(\\sigma_d\\) [S/m]</th> <th class="svelte-9sbqem">\\(z_0\\) [Ω]</th> <th class="svelte-9sbqem">γ</th> <th class="svelte-9sbqem">α</th> <th class="svelte-9sbqem">β</th> <th class="svelte-9sbqem">\\(v_p\\)</th> <th class="svelte-9sbqem">\\(t_d\\)</th> <th class="svelte-9sbqem">z_icc [Ω]</th> <th class="svelte-9sbqem">z_ica [Ω]</th> <th class="svelte-9sbqem">\\(z_i\\) [Ω]</th></tr> ${each(frecuencias, (frecuencia, i) => {
    return `<tr class="svelte-9sbqem"><td class="svelte-9sbqem">${escape(frecuencia.toExponential(2))}</td> <td class="svelte-9sbqem">${escape(ds[i].toExponential(2))}</td> <td class="svelte-9sbqem">${escape(sigmads[i].toExponential(2))}</td> <td class="svelte-9sbqem">${escape(`${z_0[i].re.toExponential(2)} + ${z_0[i].im.toExponential(2)}j`)}</td> <td class="svelte-9sbqem">${escape(`${gamma[i].re.toExponential(2)} + ${gamma[i].im.toExponential(2)}j`)}</td> <td class="svelte-9sbqem">${escape(alfa[i].toExponential(2))}</td> <td class="svelte-9sbqem">${escape(beta[i].toExponential(2))}</td> <td class="svelte-9sbqem">${escape(v_p[i].toExponential(2))}</td> <td class="svelte-9sbqem">${escape(t_d[i].toExponential(2))}</td> <td class="svelte-9sbqem">${escape(`${z_icc[i].re.toExponential(2)} + ${z_icc[i].im.toExponential(2)}j`)}</td> <td class="svelte-9sbqem">${escape(`${z_ica[i].re.toExponential(2)} + ${z_ica[i].im.toExponential(2)}j`)}</td> <td class="svelte-9sbqem">${escape(`${z_i[i].re.toExponential(2)} + ${z_i[i].im.toExponential(2)}j`)}</td> </tr>`;
  })}</table></div>  ${`<input type="number" disabled${add_attribute("value", nf, 0)}> <button disabled data-svelte-h="svelte-1crvl7q">Agregar frecuencia</button> <p class="errorMsg svelte-9sbqem" data-svelte-h="svelte-11xoir7">No puedes añadir frecuencias hasta que establezcas los valores de la línea de transmisión y estos sean positivos</p>`}</form></div> `;
});
export {
  Page as default
};
