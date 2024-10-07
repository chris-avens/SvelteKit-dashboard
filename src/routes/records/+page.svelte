<script>
	import Popover from '../../lib/Popover.svelte';
	const pages = [
		{
			title: 'PAGE 1',
			route: 'page-1',
			src: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'PAGE 2',
			route: 'page-2',
			src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'PAGE 3',
			route: 'page-3',
			src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'PAGE 4',
			route: 'page-4',
			src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'PAGE 5',
			route: 'page-5',
			src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'PAGE 6',
			route: 'page-6',
			src: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'PAGE 7',
			route: 'page-7',
			src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			title: 'PAGE 8',
			route: 'page-8',
			src: 'https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		}
	];
</script>

<h1>Records</h1>
<div class="card-holder">
	{#each pages as page}
		<a href="records/{page.route}">
			<div class="card">
				<img src={page.src} alt="just nature" />
				<div class="card-body">
					<div class="card-text-head">
						{page.title}
					</div>
					<div>some text to describe {page.title.toLowerCase()}</div>
				</div>
			</div>
		</a>
	{/each}
</div>

<style>
	.card-holder {
		padding: var(--region-padding);
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 10px;
	}

	.card {
		height: 300px;
		background-color: var(--card-color);
		/* border-radius: var(--border-radius); */
		border-radius: 20px;
	}

	.card-body {
		padding: var(--region-padding);
	}
	.card-text-head {
		font-size: xx-large;
	}

	/* .card:hover {
		opacity: 80%;
		cursor: pointer;
	} */

	.card-holder a {
		text-decoration: none;
		color: inherit;
	}

	.card-holder img {
		width: 100%;
		object-fit: cover;
		height: 200px;
		border-radius: 20px 20px 0 0;
		/* overflow: hidden; */
		/* clip: rect(10px, 50px, 145px, 10px);
		background-position: center 32.5%;
		background-repeat: no-repeat;
		background-size: cover; */
	}
</style>
