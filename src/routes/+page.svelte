<script>
	import welcome from '$lib/images/portada.png';
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Proyecto Final TEM Lineas de transmision" />
</svelte:head>

<span class="welcome">
	<picture>
		<!--img src={welcome_fallback} alt="Welcome" / --->
	</picture>
</span>

<section>
	<h1 id = "titulo">

		Proyecto Final<br />Teoria Electromagnetica
	</h1>

	<h2>
		319098415 | Escalante Urrea Roberto<br />
		319174339 | López Contreras Abraham Emilio<br />
		319208852 | Meza Villanueva Guillermo<br />
		319511077 | Rojas Troncoso Marcelo<br />
	</h2>



</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		font-family: haettenschweiler;
		font-size: 7em;
		color: #652831;
		margin-top: 0;
		margin-bottom: 0;
		width: 100%;
	}

	h2 {
		text-align: center;
		font-family: Bahnschrift;
		font-size: 1.5em;
	}

	.welcome {
		display: block;
		position: absolute;
		width: 100%;
		height: 10%;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	#titulo {
	}
</style>
