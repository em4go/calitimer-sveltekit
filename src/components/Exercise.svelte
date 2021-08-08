<script>
	export let isGroup = true;
	export let bgColor = '#D84F50';
</script>

<div
	class="w-full h-12 px-4 flex flex-row items-center "
	class:group={isGroup}
	style="--bgColor: {bgColor}"
>
	<div class="w-full flex items-center">
		{#if !isGroup}
			<div class="circle w-8 h-8 rounded-full mr-4" style="--bgColor: {bgColor}" />
		{/if}
		<p class="text-md">Interval 1</p>
	</div>
	<p class="text-gray-300">00:30</p>
	<div class="w-6 ml-4 opacity-75"><img src="../static/vertical-move-white.svg" alt="" /></div>
</div>

<style>
	.group {
		background-color: var(--bgColor);
	}
	.circle {
		background-color: var(--bgColor);
	}
</style>
