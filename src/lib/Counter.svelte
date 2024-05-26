<script>
	export let initialCount;
	export let maxCount;
	let count = 0;

	$: string = `You have clicked ${count} times.`;
	$: if (count > 5) {
		console.log(`Count is ${count}`);
	}

	function incrementCount() {
		if (count == maxCount) return;
		count++;
		//string = `You have clicked ${count.toString()} times.`;
	}
</script>

<button on:click={incrementCount}>Clicks {count}</button>
<h3>{string}</h3>

<style>
	button {
		padding: 15px 20px;
	}
</style>
