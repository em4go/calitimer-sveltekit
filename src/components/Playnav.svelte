<script>
	export let timeRunning = false;
	$: playButton = !timeRunning ? '../static/play-button.svg' : '../static/pause-button.svg';
</script>

<div class="w-full flex items center justify-center pt-5 fixed bottom-0 pb-5">
	<img src={playButton} alt="Play Button" class="w-14 cursor-pointer active:scale-90" on:click />
</div>
