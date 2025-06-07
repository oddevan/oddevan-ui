<script lang="ts">
	import Switch from '$lib/components/public/Switch.svelte';

	const requiredVars = [
		'body',
		'on-body',
		'accent',
		'danger',
		'shaded',
		'shaded-accent',
		'shaded-danger',
		'border',
		'border-accent',
		'border-danger',
		'canvas',
		'on-canvas',
		'on-canvas-accent',
	]

	let varState: Record<string, string> = $state({

		'body-light': '#ffffff',
		'on-body-light': '#000000',
		'accent-light': '#008cb4',
		'danger-light': '#b51a00',
		'shaded-light': '#d6d6d6',
		'shaded-accent-light': '#94e3fe',
		'shaded-danger-light': '#ffb5af',
		'border-light': '#7a7a7a',
		'border-accent-light': '#53d5fd',
		'border-danger-light': '#ff8c82',
		'canvas-light': '#006d8f',
		'on-canvas-light': '#ebebeb',
		'on-canvas-accent-light': '#fffb00',
		'body-dark': '#000000',
		'on-body-dark': '#ffffff',
		'accent-dark': '#00a3d7',
		'danger-dark': '#ff4013',
		'shaded-dark': '#444444',
		'shaded-accent-dark': '#004d65',
		'shaded-danger-dark': '#831100',
		'border-dark': '#aaaaaa',
		'border-accent-dark': '#008cb4',
		'border-danger-dark': '#e32400',
		'canvas-dark': '#006d8f',
		'on-canvas-dark': '#ebebeb',
		'on-canvas-accent-dark': '#fffb00',
	});
	let isDual = $state(true);
	let showDarkMode = $state(false);

	let liveCss = $derived(Object.keys(varState).reduce((carry, key) => `${carry} --${key}: ${varState[key]};`, ''));
</script>

<style>
	.palette {
		--body-light: #ffffff;
		--on-body-light: #000000;
		--accent-light: #008cb4;
		--danger-light: #b51a00;
		--shaded-light: #d6d6d6;
		--shaded-accent-light: #94e3fe;
		--shaded-danger-light: #ffb5af;
		--border-light: #7a7a7a;
		--border-accent-light: #53d5fd;
		--border-danger-light: #ff8c82;
		--canvas-light: #006d8f;
		--on-canvas-light: #ebebeb;
		--on-canvas-accent-light: #fffb00;
		--body-dark: #000000;
		--on-body-dark: #ffffff;
		--accent-dark: #00a3d7;
		--danger-dark: #ff4013;
		--shaded-dark: #444444;
		--shaded-accent-dark: #004d65;
		--shaded-danger-dark: #831100;
		--border-dark: #aaaaaa;
		--border-accent-dark: #008cb4;
		--border-danger-dark: #e32400;
		--canvas-dark: #006d8f;
		--on-canvas-dark: #ebebeb;
		--on-canvas-accent-dark: #fffb00;

		display: flex;
		flex-direction: row;
	}

	.palette-single {
		display: grid;
		grid-template-columns: auto min-content;

		&.light {
			color-scheme: light;
		}

		&.dark {
			color-scheme: dark;
		}
	}

	.palette-demo {
		--body: light-dark(var(--body-light), var(--body-dark));
		--on-body: light-dark(var(--on-body-light), var(--on-body-dark));
		--accent: light-dark(var(--accent-light), var(--accent-dark));
		--danger: light-dark(var(--danger-light), var(--danger-dark));
		--shaded: light-dark(var(--shaded-light), var(--shaded-dark));
		--shaded-accent: light-dark(var(--shaded-accent-light), var(--shaded-accent-dark));
		--shaded-danger: light-dark(var(--shaded-danger-light), var(--shaded-danger-dark));
		--border: light-dark(var(--border-light), var(--border-dark));
		--border-accent: light-dark(var(--border-accent-light), var(--border-accent-dark));
		--border-danger: light-dark(var(--border-danger-light), var(--border-danger-dark));
		--canvas: light-dark(var(--canvas-light), var(--canvas-dark));
		--on-canvas: light-dark(var(--on-canvas-light), var(--on-canvas-dark));
		--on-canvas-accent: light-dark(var(--on-canvas-accent-light), var(--on-canvas-accent-dark));

		color-scheme: light;

		background: var(--body);
		color: var(--on-body);

		a {
			color: var(--accent);

			&:hover {
				text-decoration: none;
			}
		}

		.text.accent {
			color: var(--accent);
		}
		.text.danger {
			color: var(--danger);
		}

		.card {
			border: 1px solid var(--border);
			background: var(--shaded);
			border-radius: var(--radius, 0.5em);

			&.accent {
				border-color: var(--border-accent);
				background: var(--shaded-accent);
			}
			&.danger {
				border-color: var(--border-danger);
				background: var(--shaded-danger);
			}
		}

		.canvas {
			background: var(--canvas);
			color: var(--on-canvas);
			padding: 1em;

			a {
				color: var(--on-canvas-accent);
			}
		}
	}
</style>

{#snippet colorGrid(suffix?: string)}
	{#each requiredVars as baseName}
		{@const varName = `${baseName}${suffix ?? ''}`}
		<label for={`color-field-${varName}`}>--{varName}</label>
		<input type="color" id={`color-field-${varName}`} bind:value={varState[varName]}>
	{/each}
{/snippet}

<h2>Color palette</h2>

<p>
	<!-- <Switch bind:on={isDual} label="Use light/dark modes" /> -->
	<Switch bind:on={showDarkMode} label="Show dark mode" />
</p>

<div class="palette" style={liveCss}>
{#if isDual}
	<div class="palette-single light">
		{@render colorGrid('-light')}
	</div>
	<div class="palette-single dark">
		{@render colorGrid('-dark')}
	</div>
{:else}
	<div class="palette-single">
		{@render colorGrid()}
	</div>
{/if}
	<div class="palette-demo" style={`color-scheme: ${showDarkMode ? 'dark' : 'light'}`}>
		<h3>Palette Demo</h3>
		<p>This is inline text with a <a href="#top">link</a> added to it.</p>
		<p class="text accent">This is accent text.</p>
		<p class="text danger">This is danger text.</p>
		<div class="card">
			<h4>Neutral card</h4>
			<p>And some text to go with it.</p>
		</div>
		<div class="card accent">
			<h4>Accent card</h4>
			<p class="text accent">And some text to go with it.</p>
		</div>
		<div class="card danger">
			<h4>Danger card</h4>
			<p class="text danger">And some text to go with it.</p>
		</div>
		<div class="canvas">
			<h4>Canvas</h4>
			<p>Canvas takes things into a bold color scheme with its own text and <a href="#top">link</a> colors.</p>
		</div>
	</div>
</div>

<div class="theme-code">
	<pre><code>:root {'{'}
{#each Object.keys(varState) as varName}	--{varName}: {varState[varName]};
{/each}
{'}'}</code></pre>
</div>