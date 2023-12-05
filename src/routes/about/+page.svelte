<script>
	// Liberías, imágenes, y cosas necesarías del framework
	import {complex, tan, sqrt, multiply, divide, add} from "mathjs";
	import {onMount} from "svelte";
	import LinBif from '$lib/images/LinBifi.png';
	import PlacPara from '$lib/images/PlacPara.png';
	import CableCoa from '$lib/images/CableCoa.png';
	onMount(() => {
		let script = document.createElement('script');
		script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
		document.head.append(script);
		script = document.createElement('script');
		script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjs/7.5.1/math.min.js";
		document.head.append(script);
	})

	// Dibuja el diagrama eléctrico en un "pizarrón"
	function DrawDiagElec() {
		document.querySelector('canvas').style.opacity = '100%';
		let cvs = document.getElementById('DiagElec')
		let ctx = cvs.getContext('2d')
		ctx.beginPath()
		ctx.moveTo(50,50)
		ctx.lineTo(95,50)
		ctx.lineTo(112,30)
		ctx.lineTo(128,70)
		ctx.lineTo(145,50)

		ctx.lineTo(215,50)
		ctx.arc(235,50,20,Math.PI,0,false)
		ctx.arc(275,50,20,Math.PI,0,false)
		ctx.arc(315,50,20,Math.PI,0,false)
		ctx.arc(355,50,20,Math.PI,0,false)
		ctx.lineTo(425,50)

		ctx.lineTo(425,100)
		ctx.moveTo(425,200)
		ctx.lineTo(425,250)
		ctx.lineTo(50,250)
		ctx.moveTo(190,50)
		ctx.lineTo(190,140)
		ctx.moveTo(190,160)
		ctx.lineTo(190,250)
		ctx.strokeRect(395,100,60,100)

		ctx.moveTo(160,140)
		ctx.lineTo(220,140)
		ctx.moveTo(160,160)
		ctx.lineTo(220,160)
		ctx.closePath()
		ctx.stroke()

		// Funcionalidad para la cual no tuvimos suficiente tiempo. Esta parte del código pintaría cuadros alrededor de los componenetes del circuito y detectaría cuando pasas el mouse sobre alguno de ellos
		// Con eso podriamos resaltar los valores de esos componentes en la tabla o hacer un pop up que los muestre
/*
		let rects = [
			{x: 80, y: 20, w: 80, h: 60, comp: 'R'},
			{x: 200, y: 20, w: 190, h: 40, comp: 'L'},
			{x: 145, y: 120, w: 90, h: 60, comp: 'C'},
			{x: 385, y: 90, w: 80, h: 120, comp: 'G'}
		], i = 0, r;

		while(r = rects[i++]) {
			ctx.beginPath()
			ctx.rect(r.x, r.y, r.w, r.h);
			ctx.fillStyle = "rgba(255, 85, 112, .3)";
			ctx.fill()
			ctx.closePath()
		}
		cvs.onmousemove = function(e) {

			// important: correct mouse position:
			let rect = this.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top,
					i = 0, r;


			document.querySelector('canvas').style.cursor = 'default';
			while(r = rects[i++]) {
				if (ctx.isPointInPath(x, y)) {
					document.querySelector('canvas').style.cursor ='pointer'
					conc = r
				} else {
					document.querySelector('canvas').style.cursor = 'default';
					conc = undefined
				}
*/


				/*
				// add a single rect to path:
				ctx.beginPath();
				ctx.rect(r.x, r.y, r.w, r.h);

				// check if we hover it, fill red, if not fill it blue
				if (ctx.isPointInPath(x, y)) {
					ctx.fillStyle = "rgba(255, 85, 112, .3)"
				} else {
					ctx.fillStyle = "rgba(255, 85, 112, 0)";
					ctx.clearRect(r.x, r.y, r.w, r.h); // for demo
					switch (r.comp) {
						case 'R':
							ctx.beginPath()
							ctx.moveTo(50,50)
							ctx.lineTo(95,50)
							ctx.lineTo(112,30)
							ctx.lineTo(128,70)
							ctx.lineTo(145,50)
							ctx.closePath()
					}
				}
				ctx.fill();
DEJAR QUE LOS COMPONENTES RESALTEN PARA EL FINAL

			}
			conc = undefined

		};
*/
	}
	// Declaración de variables, arrays y una "pequeña base de datos" de los conductores, dieléctricos y líneas de transmisión
	let frecuencias = [], sigmads = [], ds = []

	let linstrans = [
		{
			id: 1,
			nombre: `Par Bifiliar`
		},
			// No encontramos fórmulas para par trenzado
		/*{
			id: 2,
			nombre: `Par Trenzado`
		},*/
		{
			id: 3,
			nombre: `Cable Coaxial`
		},
		{
			id: 4,
			nombre: `Placas Paralelas`
		}
	]

	let dielectricos = [
		{
			nombre: `Polietileno`,
			Er: 2.26,
			tand: 0.2e-3

		},
		{
			nombre: `Mica`,
			Er: 5.4,
			tand: 0.6e-3

		},
		{
			nombre: `Papel`,
			Er: 3,
			tand: 8e-3

		},
		{
			nombre: `Baquelita`,
			Er: 4.74,
			tand: 22e-3

		},
		{
			nombre: `Oxido de Aluminio`,
			Er: 8.8,
			tand: 100e-3

		},
		{
			nombre: `Personalizado`,
			Er: NaN,
			tand: NaN

		}
	]

	let conductores = [
		{
			nombre: `Cobre`,
			Mr: 0.99999,
			sig: 5.8e7
		},
		{
			nombre: `Oro`,
			Mr: 0.99996,
			sig: 4.1e7
		},
		{
			nombre: `Niquel`,
			Mr: 250,
			sig: 1.45e7
		},
		{
			nombre: `Personalizado`,
			Mr: NaN,
			sig: NaN
		}
	]

	let lts, mds, mcs, nf, a, b, c, d, mu, eps, sig_d;
	let R = [], L = [], G = [], C = [], z_0 = [], gamma = [], alfa = [], beta = [], v_p = [], t_d = [], z_icc = [], z_ica = [], z_i =[]


	const m0 = (4e-7)*Math.PI
	const e0 = 8.85e-12


</script>

<svelte:head>
	<title>Ingreso de datos</title>
	<meta name="descripcion" content="Ingreso de datos" />
</svelte:head>

<!--- Estructura del documento--->
<div class="text-column">
	<form on:submit|preventDefault={console.log("Lo evitaste, felicidades!")}>
		<div class = "rowy">
			<div class = "ltsDiv">
				<select
						bind:value={lts}

				><!---Aqui poner que cuando se eliga uno nuevo, todos los valores actuales se borre con on:change ---->
					<!--- Despliega opciones de lineas de transmision y despliega las variables correspodientes--->
					{#each linstrans as x}
						{#if x.id === 1}
							<option value={x} selected>
								{x.nombre}
							</option>
						{:else}
							<option value={x}>
								{x.nombre}
							</option>
						{/if}
					{/each}
				</select>
				{#if lts !== undefined}
					{#if lts.id === 1}
						<div>
							a:<input bind:value={a} type="number" step="any" min = "0.0000000001">
						</div>
						<div>
							d:<input bind:value={d} type="number" step="any" min = "0.0000000001">
						</div>
					{:else if lts.id === 3}
						<div>
							a:<input bind:value={a} type="number" step="any" min = "0.0000000001">
						</div>
						<div>
							b:<input bind:value={b} type="number" step="any" min = "0.0000000001">
						</div>
						<div>
							c:<input bind:value={c} type="number" step="any" min = "0.0000000001">
						</div>
					{:else if lts.id === 4}
						<div>
							a:<input bind:value={a} type="number" step="any" min = "0.0000000001">
						</div>
						<div>
							b:<input bind:value={b} type="number" step="any" min = "0.0000000001">
						</div>
					{/if}
				{/if}

			</div>
			<div class = "pictureDiv">
				<!--- Imagen de la linea de transmision--->
				<picture>
					{#if lts !== undefined}
						{#if lts.id === 1}
							<img src={LinBif} alt="Diagrama de {lts.nombre}">
						{:else if lts.id === 3}
							<img src={CableCoa} alt="Diagrama de {lts.nombre}">
						{:else if lts.id === 4}
							<img src={PlacPara} alt="Diagrama de {lts.nombre}">
						{/if}
					{/if}
				</picture>

			</div>
		</div>
		<div class = "rowy">
			<div class = "mcsDiv">
				<!--- Despliega los materiales conductores y muestra sus caracteristicas--->
				<h3>Material conductor:
					<select
							bind:value = {mcs}
					>
						{#each conductores as y}
							{#if y.nombre === 'Cobre'}
								<option value={y} selected>
									{y.nombre}
								</option>
							{:else}
								<option value={y}>
									{y.nombre}
								</option>
							{/if}
						{/each}
					</select>
				</h3>


				{#if mcs !== undefined}
					<p>
						μ_r =
						{#if mcs.nombre === `Personalizado`}
							<input bind:value = {mcs.Mr}  type="number">
						{:else}
							{mcs.Mr}
						{/if}
					</p>
					<p>
						σ =
						{#if mcs.nombre === `Personalizado`}
							<input bind:value = {mcs.sig} type="number">
						{:else}
							{mcs.sig}
						{/if}
					</p>
				{/if}

			</div>
			<div class="mdsDiv">
				<!--- Despliega los materiales dielectricos y muestra sus caracteristicas--->
				<h3>Material dielectrico:
					<select
							bind:value = {mds}
					>
						{#each dielectricos as z}
							{#if z.nombre === 'Polietileno'}
								<option value={z} selected>
									{z.nombre}
								</option>
							{:else}
								<option value={z}>
									{z.nombre}
								</option>
							{/if}

						{/each}
					</select>
				</h3>

				{#if mds !== undefined}
					<p>
						ε_r =
						{#if mds.nombre === `Personalizado`}
							<input bind:value = {mds.Er} type="number">
						{:else}
							{mds.Er}
						{/if}
					</p>
					<p>
						tan(δ) =
						{#if mds.nombre === `Personalizado`}
							<input bind:value = {mds.tand} type="number">
						{:else}
							{mds.tand}
						{/if}
					</p>
				{/if}
			</div>
		</div>
		<div class = "rowy">
			<canvas id="DiagElec" height = 300 width = 500></canvas>
			<!--- Primera tabla de resultados --->
			<table id = "RCLG">
				<tr class="tableHeader">
					<th>Frecuencia [Hz]</th>
					<th> R [Ω/M]</th>
					<th> L [H/n]</th>
					<th> C [F/m]</th>
					<th> G [S/m]</th>
				</tr>
				{#each frecuencias as frecuencia, i}
					<tr>
						<td>{frecuencia.toExponential(2)}</td>
						<td> {R[i].toExponential(2)}</td>
						<td> {L[i].toExponential(2)}</td>
						<td> {C[i].toExponential(2)}</td>
						<td> {G[i].toExponential(2)}</td>
					</tr>
				{/each}
			</table>

		</div>
		<div class = "tableRestDiv">
			<!--table id ="resus">
                <tr>
                    <th>f [Hz]</th>
                    No nos dio tiempo, pero para hacer que al pasar el mouse por cada componente, la tabla te despliegue los valores
                    {#if conc !== undefined}
                        <th> {conc.comp} [
                            {#if conc.comp === 'G'}
                                S/m
                            {:else if conc.comp === 'L'}
                                H/m
                            {:else if conc.comp === 'C'}
                                F/m
                            {:else if conc.comp === 'R'}
                                Ω/M
                            {/if}
                            ]
                        </th>
                    {:else}
                        <th>Componente</th>
                    {/if}

                    <th> R [Ω/M]</th>
                    <th> L [H/n]</th>
                    <th> C [F/m]</th>
                    <th> G [S/m]</th>
                </tr>
                {#each frecuencias as frecuencia, i}
                    <tr>
                        <td>{frecuencia.toExponential(2)}</td>
                        <td> {R[i]}</td>
                        <td> {L[i]}</td>
                        <td> {C[i]}</td>
                        <td> {G[i]}</td>
                    </tr>
                {/each}
            </table--->
			<table id = "restTable">
				<tr>
					<th>Frecuencia [Hz]</th>
					<th>l [m]</th>
					<th>\(\sigma_d\) [S/m]</th>
					<th>\(z_0\) [Ω]</th>
					<th>γ</th>
					<th>α</th>
					<th>β</th>
					<th>\(v_p\) </th>
					<th>\(t_d\)</th>
					<th>z_icc [Ω]</th>
					<th>z_ica [Ω]</th>
					<th>\(z_i\) [Ω]</th>
				</tr>
				{#each frecuencias as frecuencia, i}
					<tr>
						<td>{frecuencia.toExponential(2)}</td>
						<td>{ds[i].toExponential(2)}</td>
						<td>{sigmads[i].toExponential(2)}</td>
						<td>{`${z_0[i].re.toExponential(2)} + ${z_0[i].im.toExponential(2)}j`} </td>
						<td>{`${gamma[i].re.toExponential(2)} + ${gamma[i].im.toExponential(2)}j`}</td>
						<td>{alfa[i].toExponential(2)}</td>
						<td>{beta[i].toExponential(2)}</td>
						<td>{v_p[i].toExponential(2)} </td>
						<td>{t_d[i].toExponential(2)}</td>
						<td>{`${z_icc[i].re.toExponential(2)} + ${z_icc[i].im.toExponential(2)}j`}</td>
						<td>{`${z_ica[i].re.toExponential(2)} + ${z_ica[i].im.toExponential(2)}j`}</td>
						<td>{`${z_i[i].re.toExponential(2)} + ${z_i[i].im.toExponential(2)}j`}</td>
					</tr>
				{/each}
			</table>
		</div>
		<!--- Todos los calculos se realizan aqui (en el HTML, por que no?)--->
		{#if a !== undefined && (((b !== undefined ) || (d !== undefined) || (b !== undefined && c !== undefined)))}
			<div class = "botonesFrec">
				<input bind:value = {nf} type = 'number' >
				<button on:click|preventDefault = {() => {
						DrawDiagElec()
						mu = m0 * mcs.Mr
						eps = e0 * mds.Er
						frecuencias = [...frecuencias,nf]
						ds = [...ds, Math.sqrt(2/(nf*2*Math.PI*m0*mcs.Mr*mcs.sig))]
						sigmads = [...sigmads, Math.PI*2*nf*eps*mds.tand]
						nf = ''
							switch (lts.id) {
								case 1:
									L = [...L, ds[frecuencias.length - 1] >= a ? mu/Math.PI * (1/4 + Math.acosh(d/(2*a))) : mu/Math.PI * Math.log(d/a)]
									R = [...R,ds[frecuencias.length - 1] >= a ? 2/(mcs.sig*Math.PI*a^2) : 1 / (Math.PI*a*ds[frecuencias.length - 1]*mcs.sig)]
									C = [...C,ds[frecuencias.length - 1] >= a ? (Math.PI*eps)/Math.acosh(d/(2*a)) : (Math.PI * eps) / Math.log(d/a)]
									G = [...G, sigmads[frecuencias.length - 1]*Math.PI/Math.acosh(d/(2*a))]
									break;

								case 3:
									L = [...L, ds[frecuencias.length - 1] >= a ? mu/(2*Math.PI) * (Math.log(b/a) + 1/4 + ((1/(4*(c^2-b^2)))*(b^2-(3*c^2)+((4*c^4)*Math.log(c/b)/(c^2-b^2))))) : mu/Math.PI * Math.log(b/a)]
									R.push(ds[frecuencias.length - 1] >= a ? 2*((1/a^2)+1/(c^2-b^2))/(mcs.sig*Math.PI) : ((1/a)+(1/b)) / (2*Math.PI*a*ds[frecuencias.length - 1]*mcs.sig))
									C.push((Math.PI * eps*2) / Math.log(b/a))
									G.push(2*sigmads[frecuencias.length - 1]*Math.PI/Math.log(b/a))
									break;
								case 4:
									L.push(mu*a/b)
									C.push(eps*b/a)
									R.push(2/(ds[frecuencias.length - 1])*b*mcs.sig)
									G.push(sigmads[frecuencias.length - 1]*b/a)
									break;
							}

							let z1 = complex(`${R[frecuencias.length - 1]} + ${2*frecuencias[frecuencias.length - 1]*Math.PI*L[frecuencias.length - 1]}i`)
							let z2 = complex(`${G[frecuencias.length - 1]} + ${2*frecuencias[frecuencias.length - 1]*Math.PI*C[frecuencias.length - 1]}i`)
							gamma.push(sqrt(multiply(z1,z2)))
							z_0.push(sqrt(divide(z1,z2)))
							alfa.push(gamma[frecuencias.length - 1].re)
							beta.push(gamma[frecuencias.length - 1].im)
							v_p.push(divide(2*frecuencias[frecuencias.length - 1]*Math.PI,beta[frecuencias.length - 1]))
							t_d.push(divide(ds[frecuencias.length - 1],v_p[frecuencias.length - 1]))
							z_icc.push(multiply(multiply(z_0[frecuencias.length - 1],tan(beta[frecuencias.length - 1]*ds[frecuencias.length - 1])),complex('i')))
							z_ica.push(multiply(divide(z_0[frecuencias.length - 1],-tan(beta[frecuencias.length - 1]*ds[frecuencias.length - 1])),complex('i')))
							let z_L = complex(`${R[frecuencias.length - 1]} + i${(2*Math.PI*frecuencias[frecuencias.length - 1]*L[frecuencias.length - 1])+(1/(2*Math.PI*frecuencias[frecuencias.length - 1]*C[frecuencias.length - 1]))}`)
							z_i.push(multiply(z_0[frecuencias.length - 1],divide(add(z_L,multiply(z_0[frecuencias.length - 1],tan(beta[frecuencias.length - 1]*ds[frecuencias.length - 1]),complex('i'))),add(z_0[frecuencias.length - 1],multiply(z_L,tan(beta[frecuencias.length - 1]*ds[frecuencias.length - 1]),complex('i'))))))


					}}>Agregar frecuencia</button>
				<button on:click|preventDefault = {() => {
					location.reload()
				}}>Resetear</button>

			</div>
		{:else}
			<input bind:value = {nf} type = 'number' disabled >
			<button disabled>Agregar frecuencia</button>
			<p class = "errorMsg">No puedes añadir frecuencias hasta que establezcas los valores de la línea de transmisión y estos sean positivos</p>
		{/if}
	</form>




</div>
<!--- Le da disenio a la pagina. Como vera, no somos los mejores diseniadores del mundo--->
<style>
	main {
		display: flex;
		flex-flow: column;
		justify-content: center;
	}
	h3 {
		text-align: center;
	}
	picture {
		display: flex;
		margin: 5%;
		justify-content: center;
	}
	picture > img {
		justify-self: center;
	}
	table {
		width: 60%;
		margin: 5%;
		font-family: Rockwell;
		border-collapse: collapse;
	}
	table td, table th {
		border: 1px solid #8A5767;
		height: 50px;
		text-align: center;
	}
	table tr:nth-child(even) {
		background-color: #f2f2f2;
	}
	table th {
		text-align: center;
		background-color: #501B21;
		color: white;
	}
	canvas {
		height: 300px;
		width: 500px;
		background-color: #FFFFD3;
		justify-self: center;
	}
	form {
		display: flex;
		justify-content: center;
		flex-flow: column;
	}

	.text-column {
		align-self: center;
		margin: 5%;
		width: 90%;
		display: flex;
		flex-flow: column;
		justify-content: center;
	}
	.rowy {
		display: flex;
		flex-flow: row;
		width: inherit;
	}
	.rowy > div {
		display: flex;
		flex-flow: column;
		justify-content: center;
	}
	.rowy > div > p {
		margin: 5px;
		font: 20px Bahnschrift;
		text-align: center;
	}
	.ltsDiv{
		width: 30%;
	}
	.ltsDiv > div {
		display: flex;
		justify-content: center;
	}
	.pictureDiv {
		width: 70%;
	}
	.mdsDiv, .mcsDiv {
		width: 50%;
	}
	.botonesFrec {
		display: flex;
		flex-flow: column;
		justify-content: center;
	}
	.tableRestDiv {
		display: flex;
		justify-content: center;
	}
	.tableHeader, .tableHeader > th{
		height: 10px;
	}
	.errorMsg {
		text-align: center;
	}
	#restTable {
		width: 100%;
	}
</style>