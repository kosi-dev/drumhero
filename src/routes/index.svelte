
<script lang="ts">
	import { onMount } from "svelte";

	let tracks: string[] = [
		"1010101010001010",
		"0000000010000000",
		"0010010000010101",
		"10001",
		"00001",
	];
	let bpm: number = 60;
	let bpb: number = 4;
	let interval: NodeJS.Timeout;
	let timer: number = 0;
	let audios: string[] = ["hit", "coin", "blop", "explode",  "powerup"];
	let playing: boolean = false;

	function addTrack() {
		tracks = [...tracks, ""];
	}

	function removeTrack(i: number) {
		tracks.splice(i, 1);
		tracks = tracks;
	}

	function togglePlaying() {
		playing = !playing;
		timer = 0;
	}

	function appendTimer() {
		if (!playing) {
			return;
		}

		var max = tracks.flatMap((track) => track.length).sort((a, b) => a - b)[tracks.length-1];
		if (max == 0) {
			return;
		}

		timer = (timer + 1) % max
		
		for (let i = 0; i < Math.min(tracks.length, audios.length); i++) {
			var track = tracks[i];
			if (timer > track.length) {
				continue;
			}
			if (track.charAt(timer) == '1') {
				var audio = new Audio(audios[i] + ".wav");
				audio.play();
			}
		}
	}

	function resetInterval() {
		clearInterval(interval);
		interval = setInterval(appendTimer, 60000/(bpm*bpb));
	}

	onMount(() => {
		resetInterval();
		return () => {
			clearInterval(interval);
		}
	})

</script>

<h1>Welcome to DrumHero!</h1>

<p>Time: {timer}</p>
<button on:click={togglePlaying}>{playing ? "Stop beat!" : "Play beat!"}</button>
<p>BPM:</p>
<input bind:value={bpm} on:change={resetInterval}>
<p>BPB:</p>
<input bind:value={bpb} on:change={resetInterval}>

<h2>Tracks</h2>

<!-- <button on:click={addTrack}>Add track!</button> -->

<ul>
	{#each audios as t, i}
		<li>
			<p>{i}:{t}</p>
			<input bind:value={tracks[i]}>
			<!-- <button on:click={() => removeTrack(i)}>X</button> -->
		</li>
	{/each}
</ul>
