<script>
	import Select from '../../../lib/Select.svelte';
	import { generateData, formatOptions } from '../../../lib/utils';

	let selectedValue = undefined;
	const options = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'orange', label: 'Orange' }
	];

	const data = generateData(10);
	let productSelectedValue = undefined;
	const productOptions = formatOptions(['productA', 'productB', 'productC']);
	let nameSelectedValue = undefined;
	const nameOptions = formatOptions(data.map((row) => `${row.firstName} ${row.lastName}`));
</script>

<div class="form-container">
	<h1>Form 1</h1>
	<div class="form-input">
		<div>Fruit</div>
		<Select
			bind:value={selectedValue}
			{options}
			placeholder="Select a fruit"
			on:select={(event) => console.log('Selected:', event.detail)}
		/>
		<div>Product</div>
		<Select
			bind:value={productSelectedValue}
			options={productOptions}
			placeholder="Select a product"
			on:select={(event) => console.log('Selected:', event.detail)}
		/>
		<div>Name</div>
		<Select
			bind:value={nameSelectedValue}
			options={nameOptions}
			placeholder="Select a name"
			on:select={(event) => console.log('Selected:', event.detail)}
		/>
		<div>Date</div>
		<input type="date" name="form-1-date" id="form-1-date" placeholder="Select date" />
		<div>Quantity</div>
		<input type="number" name="form-1-qty" id="form-1-qty" />
	</div>
</div>

<style>
	.form-container {
		padding: var(--region-padding);
		gap: 10px;
		display: grid;
		justify-content: center;
	}

	.form-input {
		display: grid;
		grid-template-columns: 100px 1fr;
		align-items: center;
		font-size: x-large;
		gap: 30px;
		padding: 50px;
		/* width: 50%; */
		border: 2px solid var(--border-color);
		border-radius: 10px;
	}
</style>
