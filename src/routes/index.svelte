<script>
	import StatsText from '../components/StatsText.svelte';
	import Timer from '../components/Timer.svelte';
	let percentage;
</script>

<svelte:head>
	<title>Timer</title>
</svelte:head>
<div class="flex flex-col items-center text-gray-200 w-full min-h-screen mx-auto">
	<div class="w-full grid grid-cols-3 px-2 py-2 mx-auto">
		<StatsText props={{ statName: 'elapsed time', statContent: '00:10:54', position: 'start' }} />
		<StatsText props={{ statName: 'laps', statContent: '3/6', position: 'center' }} />
		<StatsText props={{ statName: 'time left', statContent: '00:10:54', position: 'end' }} />
	</div>
	<div class="w-full mx-auto ">
		<p class="text-center text-sm text-gray-400 uppercase">next up</p>
		<p class="text-center text-xl text-red-500">Sentadillas con salto</p>
	</div>
	<div class="w-full mx-auto mt-6">
		<Timer {percentage} />
	</div>
	<input type="range" bind:value={percentage} />
</div>
