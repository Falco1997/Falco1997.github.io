<script>
	import Header from './Header.svelte';
	import './styles.css';
	let board = Array(64).fill(null).map((_, index) => index % 2 === Math.floor(index / 8) % 2 ? 'light' : 'dark');
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Created by <a href="https://github.com/Falco1997">Falco1997</a> to learn SvelteKit</p>
	</footer>
</div>
  
<div class="chessboard">
	{#each board as cell, index (index)}
	  <div class="cell" class:light={cell === 'light'} class:dark={cell === 'dark'}>{index + 1}</div>
	{/each}
  </div>


<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.chessboard {
	  display: grid;
	  grid-template-columns: repeat(8, 1fr);
	  grid-template-rows: repeat(8, 1fr);
	  width: 400px;
	  height: 400px;
	}
  
	.cell {
	  width: 100%;
	  height: 100%;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
  
	.light {
	  background-color: #f0d9b5;
	}
  
	.dark {
	  background-color: #b58863;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
