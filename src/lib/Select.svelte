<script>
	import { createEventDispatcher } from 'svelte';
	import Popover from './Popover.svelte';

	export let value = undefined;
	export let placeholder = 'Select an option';
	export let disabled = false;
	export let options = [];

	const dispatch = createEventDispatcher();

	function handleSelect(option) {
		value = option.value;
		dispatch('change', { value: option.value });
	}

	$: selectedOption = options.find((opt) => opt.value === value);

	// Create trigger element for Popover
	$: triggerEl = `
        <div class="select-trigger ${disabled ? 'disabled' : ''}">
            <span class="select-value">
                ${selectedOption ? selectedOption.label : `<span class="placeholder">${placeholder}</span>`}
            </span>
            <span class="select-caret">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                </svg>
            </span>
        </div>
    `;
</script>

<div class="select-container">
	<Popover {triggerEl}>
		<div class="select-content">
			{#each options as option}
				<button
					class="select-item"
					class:selected={value === option.value}
					on:click={() => handleSelect(option)}
					role="option"
					aria-selected={value === option.value}
				>
					{option.label}
					{#if value === option.value}
						<span class="check-mark">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<polyline points="20 6 9 17 4 12" />
							</svg>
						</span>
					{/if}
				</button>
			{/each}
		</div>
	</Popover>
</div>

<style>
	/* .select-container {
		position: relative;
		width: 100%;
	} */

	/* Override Popover trigger styles */
	:global(.select-trigger) {
		display: flex;
		height: 2.5rem;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		border-radius: var(--border-radius);
		/* border: 1px solid var(--border-color, #e2e8f0); */
		background-color: var(--card-color, white);
		padding: 0 0.75rem;
		/* font-size: 0.875rem;
		line-height: 1.25rem;
		gap: 0.5rem; */
	}

	:global(.select-trigger:hover) {
		background-color: var(--hover-background, #f1f5f9);
	}

	:global(.select-value) {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	:global(.placeholder) {
		color: var(--muted-foreground, #64748b);
	}

	:global(.select-caret svg) {
		height: 1rem;
		width: 1rem;
		transition: transform 0.2s ease;
	}

	/* Note: Since we can't track the Popover's open state, we remove the rotation animation */

	.select-content {
		min-width: var(--select-content-width, 8rem);
		padding: 0.25rem;
	}

	.select-item {
		position: relative;
		display: flex;
		width: 100%;
		cursor: pointer;
		align-items: center;
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		background: none;
		border: none;
		color: #fafafa;
		text-align: left;
		border-radius: var(--border-radius, 0.375rem);
	}

	.select-item:hover {
		background-color: var(--hover-background, #f1f5f9);
	}

	.select-item.selected {
		background-color: var(--selected-background, #e2e8f0);
		color: var(--selected-foreground, inherit);
	}

	.check-mark {
		position: absolute;
		right: 0.75rem;
		display: flex;
		align-items: center;
	}

	.check-mark svg {
		height: 1rem;
		width: 1rem;
	}

	:global(.select-trigger.disabled) {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
