<script lang="ts">

	let { on = $bindable(false), onSwitch = () => {}, label}:
		{ on: boolean, onSwitch: (on: boolean) => void, label: string} = $props();

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
		display: flex;
		flex-direction: row;
		justify-content: start;
		width: 2.5em;
		padding: .25em;
		background-color: var(--shaded);
		border: 1px solid var(--border);

		> div {
			position: relative;
			width: 1em;
			height: 1em;
			background-color: var(--on-canvas);

			> span {
				width: .9em;
				height: .1em;
				position: absolute;
				top: .45em;
				left: .05em;
				background-color: var(--canvas);

				&:first-child {
					transform: rotate(45deg);
				}
				&:last-child {
					transform: rotate(-45deg);
				}
			}
		}
	}

	button[aria-pressed=true] div.toggle {
		justify-content: end;

		& > div {
			background-color: var(--action);

			> span {
				&:first-child {
					transform: rotate(45deg);
					width: .4em;
					top: .7em;
				}
				&:last-child {
					transform: rotate(-60deg);
					left: .15em;
				}
			}
		}
	}
</style>

<button aria-pressed={on} onclick={toggle}>
	<div class="toggle" aria-hidden="true">
		<div>
			<span></span>
			<span></span>
		</div>
	</div>
	<span class="label">
		{label}
	</span>
</button>
