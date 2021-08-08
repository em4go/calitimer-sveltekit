<script>
	import Exercise from '../components/Exercise.svelte';
	let exercises = [
		{
			color: '#83D9C1',
			isGroup: false
		},
		{
			color: '#D84F50',
			isGroup: false
		},
		{
			color: '#1DC984',
			isGroup: true
		}
	];
</script>

<div class="flex flex-col text-gray-200 w-full min-h-screen mx-auto">
	<div class="w-full mt-3 px-3 flex flex-col ">
		<div class="w-full grid grid-cols-2">
			<div class="flex items-center justify-start">
				<img src="../static/arrow.svg" alt="go back arrow" class="w-5" />
			</div>
			<div class="flex justify-end items-center"><p class="text-sm uppercase">save</p></div>
		</div>
		<div class="w-full flex items-center justify-center py-2">
			<input
				type="text"
				placeholder="Workout Title"
				class="border-b border-red-500 outline-none bg-transparent text-center font-semibold"
			/>
		</div>
	</div>
	<div class="w-full flex items-center justify-center flex-col my-4">
		<p class="text-xs uppercase text-gray-400">duration</p>
		<p class="font-teko text-3xl">00:00:30</p>
	</div>
	<div class="w-full border-b border-red-500 flex justify-center px-4">
		<input
			type="text"
			placeholder="Enter description"
			class="outline-none bg-transparent text-center w-full"
		/>
	</div>
	<p class="text-md my-4">Exercises</p>
	{#each exercises as e}
		<Exercise bgColor={e.color} isGroup={e.isGroup} />
	{/each}
</div>
