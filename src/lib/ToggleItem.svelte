<script>
	let isVisible = false;

	const toggleItem = () => {
		isVisible = !isVisible;
	};
</script>

<button class="toggle-item" on:click={toggleItem} data-status={isVisible}>
	<div>
		<svg viewBox="0 -960 960 960">
			<path
				d="m379.33-339.33 355-355q10.19-10 23.76-10 13.58 0 23.58 10.03 10 10.04 10 23.83 0 13.8-10 23.8l-379 379.34q-10 10-23.34 10-13.33 0-23.33-10L177.33-446q-10-10.04-9.5-23.86.5-13.81 10.54-23.81 10.03-10 23.83-10 13.8 0 23.8 10l153.33 154.34Z"
			></path>
		</svg>
	</div>
	<slot></slot>
</button>

<style>
	.toggle-item {
		display: grid;
		grid-template-columns: 24px 1fr;
		padding: var(--text-padding);
		text-align: left;
		width: 100%;
		background-color: transparent;
		color: #fafafa;
		fill: #fafafa;
		vertical-align: middle;
	}

	.toggle-item svg {
		height: 1em;
	}
</style>
