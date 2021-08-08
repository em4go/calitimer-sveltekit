<script>
	let svgHeight = 280;
	export let percentage = 75;
	export let colors = { c1: '#344568', c2: '#83D9C1', c3: '#D84F50' };
	$: radius = svgHeight / 2 - 20;
	$: radiusInner = radius - 20;
	$: circunference = radius * Math.PI * 2;
	$: circunferenceInner = radiusInner * Math.PI * 2;
	$: dashoffset = circunference - (circunference * percentage) / 100;
	$: dashoffsetInner = circunferenceInner - (circunferenceInner * percentage) / 100;
	$: textWidth = Math.sqrt(2 * Math.pow(radiusInner, 2)) - 10;
</script>

<div class="timer relative w-10/12 mx-auto flex items-center justify-center">
	<div
		bind:clientWidth={svgHeight}
		class="svg-wrapper w-full mx-auto flex items-center justify-center -rotate-90"
	>
		<svg class="svg w-full h-auto" style="--height: {svgHeight}px">
			<circle
				class="circle circle-1"
				inner
				cx={svgHeight / 2}
				cy={svgHeight / 2}
				r={radius}
				style="--color: {colors.c1}"
			/>
			<circle
				class="circle circle-2"
				cx={svgHeight / 2}
				cy={svgHeight / 2}
				r={radius}
				style="--percentage: {percentage}; --color: {colors.c2}; --circunference: {circunference}; --dashoffset: {dashoffset}"
			/>
			<circle
				class="circle circle-3"
				cx={svgHeight / 2}
				cy={svgHeight / 2}
				r={radiusInner}
				style="--percentage: {percentage /
					2}; --color: {colors.c3}; --circunference: {circunferenceInner}; --dashoffset: {dashoffsetInner}"
			/>
		</svg>
	</div>
	<div
		class="text-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col"
		style="--width: {textWidth}px"
	>
		<div class="w-full h-3/4 flex items-center justify-center">
			<p class="text-2xl xs:text-3xl font-roboto text-center">Sentadillas con salto</p>
		</div>
		<div class="w-full h-1/4 flex justify-around items-end">
			<p class="text-3xl xxs:text-4xl font-teko">x10</p>
			<p class="text-3xl xxs:text-4xl font-teko">00:19</p>
		</div>
	</div>
</div>

<style>
	.svg-wrapper {
		min-width: 250px;
		min-height: 250px;
		max-width: 400px;
		max-height: 400px;
	}
	.svg {
		/* 		transform: rotate(180deg); */
		height: var(--height);
		max-width: 400px;
		max-height: 400px;
	}
	.circle {
		fill: none;
		stroke: #191919;
		stroke-width: 10;
		stroke-linecap: round;
	}
	.circle-1 {
		stroke: var(--color);
	}
	.circle-2 {
		stroke-dashoffset: var(--dashoffset);
		stroke-dasharray: var(--circunference);
		/* 		stroke-dashoffset: var(--circunference); */
		stroke: var(--color);
	}
	.circle-3 {
		stroke-width: 13;
		stroke-dashoffset: var(--dashoffset);
		stroke-dasharray: var(--circunference);
		/* 		stroke-dashoffset: var(--circunference); */
		stroke: var(--color);
	}
	.text-container {
		width: var(--width);
		height: var(--width);
	}
</style>
