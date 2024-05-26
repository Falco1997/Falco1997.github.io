<script>
	export let size = 'small';
	export let shadow = false;
</script>

<button
	class:size-sm={size === 'small'}
	class:size-md={size === 'medium'}
	class:size-lg={size === 'large'}><slot>Fallback Search</slot></button
>

<style lang="scss">
	button {
		border: none;
		background-color: orange;
		color: black;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
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
	}
</style>
