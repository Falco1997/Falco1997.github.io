<script>
	export let size = 'small';
	export let shadow = false;
	export let bgColor = 'inherit';
	export let textColor = 'inherit';
	//export let disabled = true;
	console.log($$restProps);
	let isLeftHovered;
</script>

<button
	on:click
	style:--buttonBgColor={bgColor}
	style:--buttonTextColor={textColor}
	class:size-sm={size === 'small'}
	class:size-md={size === 'medium'}
	class:size-lg={size === 'large'}
	class:has-left={$$slots.leftContent}
	class:shadow
	{...$$restProps}
>
	{#if $$slots.leftContent}
		<div
			class="left-content"
			on:mouseenter={() => (isLeftHovered = true)}
			on:mouseenter={() => console.log('mouseentered')}
			on:mouseleave={() => (isLeftHovered = false)}
			on:mouseleave={() => console.log('mouseleave')}
			role="none"
		>
			<slot name="leftContent" {isLeftHovered} />
		</div>
	{/if}

	<slot>Fallback Search</slot>
</button>

<style lang="scss">
	button {
		display: flex;
		align-items: center;
		border: none;
		background-color: var(--buttonBgColor);
		color: var(--buttonTextColor);
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		.left-content {
			margin-right: 10px;
		}
		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
		&:hover {
			background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
		}
		&.size-sm {
			padding: 15px 20px;
			font-size: 16px;
		}
		&.size-md {
			padding: 25px 30px;
			font-size: 24px;
		}
		&.size-lg {
			padding: 35px 40px;
			font-size: 32px;
		}
		&.shadow {
			box-shadow: 0 0 10px rgba(1, 1, 1, 0.3);
		}
	}
</style>
