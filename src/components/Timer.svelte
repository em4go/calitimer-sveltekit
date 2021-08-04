<script>
	let svgHeight = 280;
	export let percentage = 75;
	export let color = '#D84F50';
	let radius = svgHeight / 2 - 20;
	let circunference = radius * Math.PI * 2;
	$: dashoffset = circunference - (circunference * percentage) / 100;
</script>

<div class="timer relative w-full mx-auto flex items-center justify-center">
	<svg class="svg" style="--height: {svgHeight}px">
		<circle class="circle circle-1" inner cx={svgHeight / 2} cy={svgHeight / 2} r={radius} />
		<circle
			class="circle circle-2"
			cx={svgHeight / 2}
			cy={svgHeight / 2}
			r={radius}
			style="--percentage: {percentage}; --color: {color}; --circunference: {circunference}; --dashoffset: {dashoffset}"
		/>
	</svg>
	<p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{percentage}%</p>
</div>

<style>
	.svg {
		transform: rotate(270deg);
		width: var(--height);
		height: var(--height);
	}
	.circle {
		fill: none;
		stroke: #191919;
		stroke-width: 10;
		stroke-linecap: round;
	}
	.circle-2 {
		stroke-dashoffset: var(--dashoffset);
		stroke-dasharray: var(--circunference);
		/* 		stroke-dashoffset: var(--circunference); */
		stroke: var(--color);
	}
</style>
