<script>
	/* 	import Timer from '../components/Timer.svelte'; */
</script>

<div class="w-full bg-darkblue">
	<slot />
</div>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style>
	@tailwind base;
	@tailwind components;
	.bg-darkblue {
		background-color: #1f293e;
	}
	@tailwind utilities;
</style>
