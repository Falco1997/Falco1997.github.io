<script>
	import { onMount } from 'svelte';

	let letters = [];
	let activeKeys = {};
	let score = 0;
	let gameInterval;

	const generateLetter = () => {
		const letter = String.fromCharCode(65 + Math.floor(Math.random() * 4)); // A, B, C, D
		const position = {
			letter,
			x: Math.random() * 100,
			y: 0
		};
		letters = [...letters, position];
	};

	const updateLetters = () => {
		letters = letters
			.map((letter) => ({
				...letter,
				y: letter.y + 1
			}))
			.filter((letter) => letter.y < 100);

		letters.forEach((letter) => {
			if (activeKeys[letter.letter] && letter.y > 90 && letter.y < 100) {
				score += 1;
				letters = letters.filter((l) => l !== letter);
			}
		});
	};

	const handleKeydown = (event) => {
		activeKeys[event.key.toUpperCase()] = true;
	};

	const handleKeyup = (event) => {
		activeKeys[event.key.toUpperCase()] = false;
	};

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		window.addEventListener('keyup', handleKeyup);

		gameInterval = setInterval(() => {
			generateLetter();
			updateLetters();
		}, 100);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
			window.removeEventListener('keyup', handleKeyup);
			clearInterval(gameInterval);
		};
	});
</script>

<div class="game-container">
	{#each letters as { letter, x, y }}
		<div class="letter" style="left: {x}%; top: {y}%">{letter}</div>
	{/each}
	<div class="score">Score: {score}</div>
</div>

<style>
	.game-container {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}

	.letter {
		position: absolute;
		font-size: 2rem;
		font-weight: bold;
		transform: translate(-50%, -50%);
	}

	.score {
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 1.5rem;
	}
</style>
