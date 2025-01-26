<script lang="ts">

	let { on = $bindable(false), onSwitch = () => {}, label}:
		{ on?: boolean, onSwitch?: (on: boolean) => void, label: string} = $props();

	function toggle() {
		on = !on;
		onSwitch(on);
	}
</script>

<style>
	button {
		background: transparent;
		border: 0;
		cursor: pointer;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--spacing);
	}

	div.toggle {
		width: 2.6em;
		height: 1.5em;
		background-color: var(--shaded);
		border: .05em solid var(--border);
		border-radius: var(--switch-radius, .8em);
		transition: all .2s ease-in-out;
		position: relative;

		> div {
			position: absolute;
			inset-block-start: .225em;
			inset-inline-start: .3em;
			width: 1em;
			height: 1em;
			background-color: var(--on-canvas);
			transition: all .2s ease-in-out;
			border-radius: var(--switch-radius, .8em);
			background-size: 80%;
			background-position: center;
			background-repeat: no-repeat;
			/* background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" /></svg>'); */
		}
	}

	button[aria-pressed=true] div.toggle {
		background-color: var(--action);
		& > div {
			background-color: var(--on-action);
			inset-inline-start: 1.25em;
			/* background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" /></svg>'); */
		}
	}
</style>

<button aria-pressed={on} onclick={toggle}>
	<div class="toggle" aria-hidden="true">
		<div>
		</div>
	</div>
	<span class="label">
		{label}
	</span>
</button>
