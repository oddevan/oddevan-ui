<script lang="ts">
	import chroma from 'chroma-js';
	import { APCAcontrast, sRGBtoY } from 'apca-w3';
	import Card from '$lib/components/public/Card.svelte';
	import Switch from '$lib/components/public/Switch.svelte';
	import Button from '$lib/components/public/Button.svelte';

	let spectrumValues = $state([
		0.20,
		0.28,
		0.36,
		0.44,
		0.52,
		0.60,
		0.68,
		0.76,
		0.84,
		0.92,
		1,
	]);
	let foregroundColor = $state('#000000');
	let backgroundColor = $state('#ffffff');

	function contrast(text: chroma.Color, back: chroma.Color): string {
		let level = APCAcontrast( sRGBtoY( text.rgb() ), sRGBtoY( back.rgb() ) );
		if (typeof level === 'string') {
			level = Number(level);
		}
		
		return Math.abs(level).toFixed(0);
	}

	const addPaletteColor = () => {
		const val = Math.floor(Math.random() * 16777215);
		seeds.push(chroma(val).hex());
	};

	let addDarkMode = $state(false);

	// let seed = $state('#336699');
	// let seedChroma = $derived(chroma(seed));
	// let spectrum = $derived(spectrumValues.map(lum => seedChroma.set('oklch.l', lum)))

	let seeds = $state(['#336699', '#9cb398']);

	interface PaletteColor {
		chroma: chroma.Color,
		shades: chroma.Color[],
	};

	let palette = $derived<PaletteColor[]>(seeds.map(seed => {
		const seedChroma = chroma(seed);
		return {
			chroma: seedChroma,
			shades: spectrumValues.map(lum => seedChroma.set('oklch.l', lum))
		};
	}));
</script>

<style>
	div.color-grid {
		display: grid;
		grid-auto-flow: column;
		grid-template-rows: repeat(12, 3em);
		gap: .5em;

		& > span {
			display: flex;
			flex-direction: row;
			font-weight: bold;
			overflow: hidden;
			border: 1px solid var(--swatch);
			
			& > span.value {
				text-align: center;
				padding-block: .66em;
				width: 100%;
			}

			& > span:not(.value) {
				display: block;
				text-align: center;
				padding-block: .66em;
				width: 50%;

				&.back {
					background-color: var(--swatch);
					color: var(--foreground);
				}

				&.fore {
					background-color: var(--background);
					color: var(--swatch);
				}
			}
		}
	}
</style>

<h1>Palette Maker</h1>

<p>
	Use this to make a color palette for anything and test it against
	<a href="https://readtech.org/ARC/tests/visual-readability-contrast/?tn=intro#">visual readability constrast</a>.
</p>

<Card title="Palette Options">
	<Button action={addPaletteColor} primary>Add Color</Button>
	<Button action={() => {seeds.pop()}} destructive>Remove Color</Button>
	<label for="foreground-picker">
		Foreground color:
		<input type="color" bind:value={foregroundColor}>
	</label>
	<label for="foreground-picker">
		Background color:
		<input type="color" bind:value={backgroundColor}>
	</label>
</Card>

<h2>Spectrum</h2>

<div class="color-grid" style={`--foreground: ${foregroundColor}; --background: ${backgroundColor}`}>
	<span><span class="value">Luminance</span></span>
	{#each spectrumValues as lum, index}
	<span>
		<span class="value"><input type="number" bind:value={spectrumValues[index]} step="0.1"></span>
	</span>
	{/each}
	{#each palette as colorGroup, index}
	<span><span class="value"><input type="color" bind:value={seeds[index]}></span></span>
		{#each colorGroup.shades as color}
		<span style={`--swatch: ${color.hex()}`}>
			<span class="back">
				{contrast(chroma(foregroundColor), color)}
			</span>
			<span class="fore">
				{contrast(color, chroma(backgroundColor))}
			</span>
		</span>
		{/each}
	{/each}
</div>

<hr>

