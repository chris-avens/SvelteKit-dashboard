<script>
	import { onMount } from 'svelte';

	export let startDate = null;
	export let endDate = null;

	let startYear = new Date().getFullYear();
	let endYear = new Date().getFullYear();
	let startMonth = new Date().getMonth();
	let endMonth = new Date().getMonth();

	// Arrays for dropdowns
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	// Generate array of years (current year ± 10 years)
	$: years = Array.from({ length: 21 }, (_, i) => new Date().getFullYear() - 10 + i);

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	function getDaysInMonth(month, year) {
		const firstDay = new Date(year, month, 1).getDay();
		const daysInMonth = new Date(year, month + 1, 0).getDate();
		const daysArray = [];

		for (let i = 0; i < firstDay; i++) {
			daysArray.push(null);
		}

		for (let day = 1; day <= daysInMonth; day++) {
			daysArray.push(new Date(year, month, day));
		}

		const weeks = [];
		let week = [];

		daysArray.forEach((day) => {
			week.push(day);
			if (week.length === 7) {
				weeks.push(week);
				week = [];
			}
		});

		if (week.length > 0) {
			while (week.length < 7) {
				week.push(null);
			}
			weeks.push(week);
		}

		return weeks;
	}

	function isSameDay(date1, date2) {
		if (!date1 || !date2) return false;
		return (
			date1.getFullYear() === date2.getFullYear() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getDate() === date2.getDate()
		);
	}

	$: isDateInRange = (date) => {
		if (!date || !startDate || !endDate) return false;

		const normalizedDate = date.getTime();
		const normalizedStart = startDate.getTime();
		const normalizedEnd = endDate.getTime();

		return normalizedDate >= normalizedStart && normalizedDate <= normalizedEnd;
	};

	function selectDate(date, type) {
		if (!date) return;

		if (type === 'start') {
			if (endDate && date > endDate) {
				startDate = endDate;
				endDate = date;
			} else {
				startDate = date;
			}
		} else {
			if (startDate && date < startDate) {
				endDate = startDate;
				startDate = date;
			} else {
				endDate = date;
			}
		}
	}

	function handlePrevMonth(type) {
		if (type === 'start') {
			if (startMonth === 0) {
				startMonth = 11;
				startYear--;
			} else {
				startMonth--;
			}
		} else {
			if (endMonth === 0) {
				endMonth = 11;
				endYear--;
			} else {
				endMonth--;
			}
		}
	}

	function handleNextMonth(type) {
		if (type === 'start') {
			if (startMonth === 11) {
				startMonth = 0;
				startYear++;
			} else {
				startMonth++;
			}
		} else {
			if (endMonth === 11) {
				endMonth = 0;
				endYear++;
			} else {
				endMonth++;
			}
		}
	}

	function handleMonthSelect(event, type) {
		const selectedMonth = months.indexOf(event.target.value);
		if (type === 'start') {
			startMonth = selectedMonth;
		} else {
			endMonth = selectedMonth;
		}
	}

	function handleYearSelect(event, type) {
		const selectedYear = parseInt(event.target.value);
		if (type === 'start') {
			startYear = selectedYear;
		} else {
			endYear = selectedYear;
		}
	}

	$: startWeeks = getDaysInMonth(startMonth, startYear);
	$: endWeeks = getDaysInMonth(endMonth, endYear);
</script>

<!-- Start Calendar -->
<div class="calendar" id="start-calendar">
	<div class="calendar-header">
		<button on:click={() => handlePrevMonth('start')} class="btn-move">
			<svg viewBox="0 -960 960 960">
				<path
					d="m372.67-480 308 308q12.33 12.33 12.16 30-.16 17.67-12.5 30.67-13 13-30.66 13-17.67 0-30.67-13L297-433q-10-10-14.67-22.33-4.66-12.34-4.66-24.67 0-12.33 4.66-24.67Q287-517 297-527l322.67-322.67q13-13 30.5-12.5t30.5 13.5q12.33 13 12.66 30.34.34 17.33-12.66 30.33l-308 308Z"
				/>
			</svg>
		</button>
		<div>
			<select value={months[startMonth]} on:change={(e) => handleMonthSelect(e, 'start')}>
				{#each months as month}
					<option value={month}>{month}</option>
				{/each}
			</select>
			<select value={startYear} on:change={(e) => handleYearSelect(e, 'start')}>
				{#each years as year}
					<option value={year}>{year}</option>
				{/each}
			</select>
		</div>
		<button on:click={() => handleNextMonth('start')} class="btn-move">
			<svg viewBox="0 -960 960 960">
				<path
					d="m587-481.33-308-308q-12.33-12.34-12.17-30.17.17-17.83 12.5-30.83 13-13 30.84-13 17.83 0 30.83 13l321.67 322q10 10 14.66 22.33 4.67 12.33 4.67 24.67 0 12.33-4.67 24.66-4.66 12.34-14.66 22.34L340-111.67q-13 13-30.33 12.5-17.34-.5-30.34-13.5-12.33-13-12.66-30.5-.34-17.5 12.66-30.5L587-481.33Z"
				/>
			</svg>
		</button>
	</div>
	<table>
		<thead>
			<tr>
				{#each daysOfWeek as day}
					<th>{day}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each startWeeks as week}
				<tr>
					{#each week as date}
						<td
							on:click={() => date && selectDate(date, 'start')}
							class:selected={isSameDay(date, startDate)}
							class:range={isDateInRange(date)}
						>
							{date ? date.getDate() : ''}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<!-- End Calendar -->
<div class="calendar" id="end-calendar">
	<div class="calendar-header">
		<button on:click={() => handlePrevMonth('end')} class="btn-move">
			<svg viewBox="0 -960 960 960">
				<path
					d="m372.67-480 308 308q12.33 12.33 12.16 30-.16 17.67-12.5 30.67-13 13-30.66 13-17.67 0-30.67-13L297-433q-10-10-14.67-22.33-4.66-12.34-4.66-24.67 0-12.33 4.66-24.67Q287-517 297-527l322.67-322.67q13-13 30.5-12.5t30.5 13.5q12.33 13 12.66 30.34.34 17.33-12.66 30.33l-308 308Z"
				/>
			</svg>
		</button>
		<div>
			<select value={months[endMonth]} on:change={(e) => handleMonthSelect(e, 'end')}>
				{#each months as month}
					<option value={month}>{month}</option>
				{/each}
			</select>
			<select value={endYear} on:change={(e) => handleYearSelect(e, 'end')}>
				{#each years as year}
					<option value={year}>{year}</option>
				{/each}
			</select>
		</div>
		<button on:click={() => handleNextMonth('end')} class="btn-move">
			<svg viewBox="0 -960 960 960">
				<path
					d="m587-481.33-308-308q-12.33-12.34-12.17-30.17.17-17.83 12.5-30.83 13-13 30.84-13 17.83 0 30.83 13l321.67 322q10 10 14.66 22.33 4.67 12.33 4.67 24.67 0 12.33-4.67 24.66-4.66 12.34-14.66 22.34L340-111.67q-13 13-30.33 12.5-17.34-.5-30.34-13.5-12.33-13-12.66-30.5-.34-17.5 12.66-30.5L587-481.33Z"
				/>
			</svg>
		</button>
	</div>
	<table>
		<thead>
			<tr>
				{#each daysOfWeek as day}
					<th>{day}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each endWeeks as week}
				<tr>
					{#each week as date}
						<td
							on:click={() => date && selectDate(date, 'end')}
							class:selected={isSameDay(date, endDate)}
							class:range={isDateInRange(date)}
						>
							{date ? date.getDate() : ''}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.calendar {
		display: inline-block;
		padding: 8px;
	}

	.calendar th,
	.calendar td {
		padding: 4px;
		text-align: center;
	}

	.calendar .selected {
		color: white;
	}

	.calendar .range {
		background-color: #a5d6a7;
	}

	.calendar .calendar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 4px;
	}

	.btn-move {
		padding: 8px;
	}

	.btn-move svg {
		height: 1em;
	}
</style>
