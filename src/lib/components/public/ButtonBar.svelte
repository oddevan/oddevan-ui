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
		gap: var(--spacing);
		justify-content: space-between;
		width: 100%;
	}

	.leading, .main {
		display: flex;
		gap: var(--spacing);
		flex-direction: row;
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