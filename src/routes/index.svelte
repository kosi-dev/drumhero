
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

		var max = getMaxTrackLength();
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
	
	function getMaxTrackLength() {
		return tracks.flatMap((track) => track.length).sort((a, b) => a - b)[tracks.length-1]
	}
	function resetInterval() {
		clearInterval(interval);
		interval = setInterval(appendTimer, 60000/(bpm*bpb));
	}

	function displayTrack(track: string, timer: number) {
		var max = getMaxTrackLength();
		while (track.length < max) {
			track += "0";
		}
		var result = track.slice(timer, max)
		while (result.length < 32) {
			result += track;
		}
		while (result.includes("0")) {
			result = result.replace("0", "-")
		}
		if (result.charAt(0) == "1") {
			result = result.replace("1", "X")
		}
		return result.slice(0, 32);
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
			<p>{displayTrack(tracks[i], timer)}</p>
			<input bind:value={tracks[i]}>
			<!-- <button on:click={() => removeTrack(i)}>X</button> -->
		</li>
	{/each}
</ul>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
	h1, h2, p, button {
		font-family: 'Roboto Mono', monospace;
	}
</style>