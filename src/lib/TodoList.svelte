<script>
	export let todos = [];
</script>

Todo List
<ul>
	{#each todos as { id, title }, index (id)}
		{@const number = index + 1}
		<li>{number}: {title}</li>
	{/each}
</ul>

<style>
</style>
