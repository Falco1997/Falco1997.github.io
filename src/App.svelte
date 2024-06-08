<script>
	import Button from './lib/Button.svelte';
	import TodoList from './lib/TodoList.svelte';
	import FaAccessibleIcon from 'svelte-icons/fa/FaAccessibleIcon.svelte';
	import FaAd from 'svelte-icons/fa/FaAd.svelte';
	import { v4 as uuid } from 'uuid';

	const todos = [
		{
			id: uuid(),
			title: 'Todo 1',
			completed: true
		},
		{
			id: uuid(),
			title: 'Todo 2',
			completed: false
		},
		{
			id: uuid(),
			title: 'Todo 3',
			completed: true
		}
	];
</script>

<Button
	on:click|once={(event) => {
		alert(true);
	}}
	size="small"
	shadow
	bgColor="orange"
	textColor="black"
	disabled
>
	<div let:isLeftHovered style:width="20px" slot="leftContent">
		{#if isLeftHovered}
			<FaAccessibleIcon />
		{:else}
			<FaAd />
		{/if}
	</div>
	Search
</Button>

<TodoList {todos} />

<style>
</style>
