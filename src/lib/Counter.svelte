<script>
	export let initialCount;
	//export let maxCount;
	export let maxCount = undefined;
	let count = 0;

	console.log($$props, $$restProps);

	$: string = `You have clicked ${count} times.`;
	$: if (count > 5) {
		console.log(`Count is ${count}`);
	}

	function incrementCount() {
		console.log(count == maxCount);
		if (count == maxCount) return;
		count++;
	}

	function resetCount() {
		count = initialCount;
	}
</script>

<button on:click={incrementCount}>Clicks {count}</button>
<button on:click={resetCount}>Reset</button>
<h3>{string}</h3>

<style>
	button {
		padding: 15px 20px;
	}
</style>
