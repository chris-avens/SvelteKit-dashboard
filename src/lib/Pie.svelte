<script>
	import { onMount } from 'svelte';
	import * as echarts from 'echarts';

	export let pieOptions = {}; // Chart options passed from parent
	let chartEl; // Chart DOM reference
	let chartInstance; // ECharts instance

	// Initialize the chart after the DOM element is rendered
	onMount(() => {
		if (chartEl) {
			chartInstance = echarts.init(chartEl, 'customTheme');
			chartInstance.setOption(pieOptions);

			// Add resize handling if needed
			window.addEventListener('resize', () => {
				chartInstance.resize();
			});
		}

		return () => {
			if (chartInstance) {
				chartInstance.dispose();
			}
		};
	});
</script>

<!-- Chart container -->
<div bind:this={chartEl} class="chart-container"></div>

<style>
	.chart-container {
		width: 100%;
		height: 300px; /* Customize height as needed */
		/* margin: 0; */
		background-color: var(--card-color);
		padding: 0;
		margin: 0;
		border-radius: 6px;
	}
</style>
