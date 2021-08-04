<script>
	import { onMount } from 'svelte';

	let svgHeight;
	let svgWidth;
	let circle;
	$: radius = svgWidth / 2;
	$: circunference = radius * Math.PI * 2;
	$: strokeWidth = 10;
	$: console.log(circunference);
</script>

<div
	class="w-full h-full timer-container"
	bind:clientHeight={svgHeight}
	bind:clientWidth={svgWidth}
>
	<svg class="progress w-full h-full ">
		<circle
			bind:this={circle}
			class="progress-circle"
			cx={radius}
			cy={radius}
			stroke="red"
			r={radius - strokeWidth}
			fill="#222"
			stroke-width={strokeWidth}
			style="--circunference: {circunference}"
		/>
		<text
			class="loading"
			fill="white"
			x={svgWidth / 2}
			y={svgHeight / 2}
			alignment-baseline="middle"
			text-anchor="middle">Sentadilla con salto</text
		>
	</svg>
</div>

<style>
	.progress-circle {
		transform: rotate(-90deg);
		stroke-dasharray: var(--circunference);
		stroke-dashoffset: 1000;
	}
</style>
