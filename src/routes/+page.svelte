<script>
	import Echarts from '../lib/Echarts.svelte';
	import Pie from '../lib/Pie.svelte';
	import Popover from '../lib/Popover.svelte';
	import ToggleItem from '../lib/ToggleItem.svelte';
	import * as echarts from 'echarts';
	import CalendarRange from '../lib/CalendarRange.svelte';
	import { generateData } from '../lib/utils';

	echarts.registerTheme('customTheme', {
		color: ['#60432f', '#765337', '#8f633d', '#ad7c48', '#bb9054']
	});
	const barOptions = {
		title: {
			text: 'Sample ECharts Bar in SvelteKit',
			padding: 10
		},
		tooltip: {},
		grid: {
			height: '180px',
			top: '18%',
			right: '6%',
			left: '8%'
		},
		xAxis: {
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {},
		series: [
			{
				name: 'Sales',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20, 30],
				barWidth: '40%',
				itemStyle: {
					borderRadius: [4, 4, 0, 0]
				}
			}
		]
	};

	const pieOptions = {
		title: {
			text: 'Sample ECharts Donut in SvelteKit',
			padding: 10
		},
		tooltip: {},
		series: [
			{
				// name: 'Access From',
				type: 'pie',
				radius: ['35%', '65%'],
				avoidLabelOverlap: false,
				padAngle: 5,
				itemStyle: {
					borderRadius: 4
				},
				label: {
					color: '#181818'
				},
				bottom: -30,
				labelLine: {
					smooth: 0.25
				},
				data: [
					{ value: 1048, name: 'Search Engine' },
					{ value: 735, name: 'Direct' },
					{ value: 580, name: 'Email' },
					{ value: 484, name: 'Union Ads' },
					{ value: 300, name: 'Video Ads' }
				]
			}
		]
	};

	const table1Columns = ['ID', 'First Name', 'Last Name the last fr', 'A', 'B', 'C', 'Total Sales'];

	let date = new Date(),
		y = date.getFullYear(),
		m = date.getMonth();
	let startDate = new Date(y, m, 1);
	let endDate = new Date();
	// let lastDay = new Date(y, m + 1, 0);
</script>

<div class="grid-container">
	<div>
		<h1>HOME</h1>
		<div style="display: flex; justify-content: flex-end;">
			<Popover
				triggerEl="
                <p style='padding: 10px;'>
                    <svg viewBox='0 -960 960 960' style='height: 1em'>
                        <path d='M310.67-396q-17 0-28.5-11.5t-11.5-28.5q0-17 11.5-28.5t28.5-11.5q17 0 28.5 11.5t11.5 28.5q0 17-11.5 28.5t-28.5 11.5ZM482-396q-17 0-28.5-11.5T442-436q0-17 11.5-28.5T482-476q17 0 28.5 11.5T522-436q0 17-11.5 28.5T482-396Zm166.67 0q-17 0-28.5-11.5t-11.5-28.5q0-17 11.5-28.5t28.5-11.5q17 0 28.5 11.5t11.5 28.5q0 17-11.5 28.5t-28.5 11.5Zm-462 316q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66v-32q0-14.74 9.97-24.7Q263.27-880 278-880q15.02 0 25.17 9.97 10.16 9.96 10.16 24.7v32h333.34v-32q0-14.74 9.96-24.7 9.97-9.97 24.7-9.97 15.02 0 25.18 9.97 10.16 9.96 10.16 24.7v32h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80H186.67Zm0-66.67h586.66v-420H186.67v420Z'/>
                    </svg>
                    {startDate ? startDate.toDateString() : 'None'} - {endDate
					? endDate.toDateString()
					: 'None'}
                </p>"
				style="right: 0;"
			>
				<CalendarRange bind:startDate bind:endDate />
			</Popover>
		</div>
	</div>
	<div class="grid-container home-grid-1">
		<div class="grid-container">
			<div class="sales-per-category hover">
				<div>Total</div>
				<div class="text-3xl">1,234,567.89</div>
			</div>
			<div class="sales-per-category hover">
				<div>Main</div>
				<div class="text-3xl">123,456.78</div>
			</div>
			<div class="sales-per-category hover">
				<div>Others</div>
				<div class="text-3xl">12,345.67</div>
			</div>
		</div>
		<Echarts {barOptions} />
		<Pie {pieOptions} />
	</div>
	<div class="grid-container home-grid-2">
		<div>
			<div style="display: flex; justify-content: flex-end;">
				<Popover
					triggerEl="<p style='padding: 10px;'>
						<svg viewBox='0 0 12 12' style='height: 1em;'>
							<path d='M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z'/>
						</svg>
						Columns</p>"
					style="right: 0;"
				>
					{#each table1Columns as column}
						<ToggleItem>{column}</ToggleItem>
					{/each}
				</Popover>
			</div>
			<table>
				<thead>
					<tr>
						{#each table1Columns as column}
							<th>{column}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each generateData(20) as item}
						<tr>
							<td>{item.id}</td>
							<td>{item.firstName}</td>
							<td>{item.lastName}</td>
							<td class="text-end">{item.productA}</td>
							<td class="text-end">{item.productB}</td>
							<td class="text-end">{item.productC}</td>
							<td class="text-end">{item.productA + item.productB + item.productC}</td>
						</tr>
					{/each}
					<tr>
						<td colspan="4">Total</td>
						<td class="text-end">1230</td>
						<td class="text-end">450</td>
						<td class="text-end">123,450</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div>
			<div style="display: flex; justify-content: flex-end;">
				<Popover
					triggerEl="<p style='padding: 10px;'>
					<svg viewBox='0 0 12 12' style='height: 1em;'>
						<path d='M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z'/>
					</svg>
					Columns</p>"
					style="right: 0;"
				>
					{#each ['First Name', 'Last Name', 'Balance'] as column}
						<ToggleItem>{column}</ToggleItem>
					{/each}
				</Popover>
			</div>
			<table>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Balance</th>
					</tr>
				</thead>
				<tbody>
					{#each generateData(10) as item}
						<tr>
							<td>{item.firstName}</td>
							<td>{item.lastName}</td>
							<td class="text-end">{item.productA + item.productB + item.productC}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<style>
	.home-grid-1 {
		grid-template-columns: 1fr 1fr 1fr;
	}

	.home-grid-2 {
		grid-template-columns: 2fr 1fr;
	}

	.sales-per-category {
		font-size: 20px;
		display: flex;
		justify-content: space-between;
		background-color: var(--card-color);
		/* padding: var(--region-padding); */
		border-radius: var(--border-radius);
	}

	.sales-per-category {
		padding: var(--region-padding);
	}
</style>
