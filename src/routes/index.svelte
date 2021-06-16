
<script lang="ts">
	import { onMount } from "svelte";

	let tracks: string[] = [""];
	let bpm: number = 60;
	let bpb: number = 1;
	let interval: NodeJS.Timeout;
	let timer: number = 0

	function addTrack() {
		tracks = [...tracks, ""]
	}

	function removeTrack(i: number) {
		tracks.splice(i, 1);
		tracks = tracks;
	}

	function resetTimer() {
		timer = 0;
	}

	function appendTimer() {
		var max = tracks.flatMap((track) => track.length).sort()[tracks.length-1]
		if (max == 0) {
			return
		}
		timer = (timer + 1) % max
		var audio = new Audio('click.wav');
		tracks.forEach((track) => {
			if (track.charAt(timer) == '1') {
				audio.play()
			}
		})
	}

	function resetInterval() {
		clearInterval(interval)
		interval = setInterval(appendTimer, 60000/(bpm*bpb));
	}

	onMount(() => {
		resetInterval()
		return () => {
			clearInterval(interval)
		}
	})

</script>

<h1>Welcome to DrumHero!</h1>

<p>Time: {timer}</p>
<button on:click={resetTimer}>Reset timer</button>
<p>BPM:</p>
<input bind:value={bpm} on:change={resetInterval}>
<p>BPB:</p>
<input bind:value={bpb} on:change={resetInterval}>

<h2>Tracks</h2>

<button on:click={addTrack}>Add track!</button>

<ul>
	{#each tracks as t, i}
		<li>
			<p>{i}:{t}</p>
			<input bind:value={tracks[i]}>
			<button on:click={() => removeTrack(i)}>X</button>
		</li>
	{/each}
</ul>
