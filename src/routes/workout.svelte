<script>
	import Playnav from '../components/Playnav.svelte';
	import StatsText from '../components/StatsText.svelte';
	import Timer from '../components/Timer.svelte';
	let percentage;

	let startingTime = 12;
	let time = startingTime;
	$: [minutes, seconds] = calculateTime(time);
	$: timerText = minutes + ':' + seconds;
	let timeRunning = false;
	let timer = null;
	$: percentage = 100 - (time / startingTime) * 100;

	function handleTimer() {
		if (!timeRunning) {
			timeRunning = true;
			timer = setInterval(updateCountdown, 1000);
		} else {
			timeRunning = false;
			clearInterval(timer);
		}
	}
	function updateCountdown() {
		time--;
		if (time <= 0) {
			time = 0;
			clearInterval(timer);
			timeRunning = false;
		}
	}
	function calculateTime(time) {
		let minutes = Math.floor(time / 60);
		minutes = minutes < 10 ? '0' + minutes : minutes;
		let seconds = time % 60;
		seconds = seconds < 10 ? '0' + seconds : seconds;
		return [minutes, seconds];
	}
	function handleReset() {
		time = startingTime;
		timeRunning = false;
		clearInterval(timer);
	}
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
		<Timer {percentage} on:click={handleTimer} {timerText} />
	</div>

	<button on:click={handleReset}>reset</button>
	<Playnav on:click={handleTimer} {timeRunning} />
</div>
