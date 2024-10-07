<script>
	let isOpen = false;

	export let triggerEl = undefined;
	export let style = '';
	export let placement = '';

	placement = '';

	const togglePopover = () => {
		isOpen = !isOpen;
	};

	const handleClose = () => {
		isOpen = false;
	};

	function clickOutside(node) {
		const handleClick = (e) => {
			if (!node.contains(e.target) && !e.target.closest('.trigger-container')) {
				handleClose();
			}
		};

		document.addEventListener('click', handleClick);

		return {
			destroy() {
				document.removeEventListener('click', handleClick);
			}
		};
	}
</script>

<div class="popover-container">
	<button type="button" class="trigger-container" on:click={togglePopover}>
		{#if triggerEl}
			<slot name="trigger">
				{@html triggerEl}
			</slot>
		{:else}
			<div>Toggle Popover</div>
		{/if}
	</button>

	{#if isOpen}
		<div class="popover-content" use:clickOutside on:close={handleClose} {style}>
			<slot></slot>
		</div>
	{/if}
</div>

<style>
	.popover-container {
		position: relative;
		display: inline-block;
		margin: 2px;
	}

	.trigger-container {
		display: inline-block;
		padding: unset;
	}

	.popover-content {
		position: absolute;
		margin: 4px 0px;
		top: 100%;
		background-color: var(--background-color);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		border: 1px solid var(--popover-border-color);
		padding: 1px;
		z-index: 100;
		border-radius: var(--border-radius);
		white-space: nowrap;
	}
</style>
