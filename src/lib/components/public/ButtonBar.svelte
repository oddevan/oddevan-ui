<script lang="ts">
	import type { Snippet } from "svelte";

	interface ButtonBarProps {
		leading?: Snippet
		children: Snippet
	}

	let { leading, children }: ButtonBarProps = $props();
</script>

<style>
	.buttonbar {
		display: flex;
		flex-direction: row-reverse;
		gap: .5em;
		justify-content: space-between;
		padding: .5em;
		margin: .5em;
		/* border: 1px solid hsl(var(--border));
		border-radius: var(--radius); */
		width: 100%;
	}

	.leading, .main {
		display: flex;
		gap: .5em;
		flex-direction: row-reverse;
	}
</style>

<div class="buttonbar">
	<span class="main">
		{@render children()}
	</span>
	{#if leading}
	<span class="leading">
		{@render leading()}
	</span>
	{/if}
</div>