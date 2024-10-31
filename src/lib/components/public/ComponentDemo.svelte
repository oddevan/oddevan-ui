<script lang="ts">
	import type { Snippet } from "svelte";
	import CopyBlock from '$lib/components/public/CopyBlock.svelte';

	interface ComponentDemoProps {
		demo: Snippet,
		children: Snippet,
	}

	let { demo, children }: ComponentDemoProps = $props();
</script>

<style>
	.demo {
		border: 1px solid var(--border);
		border-radius: var(--radius);
	}

	.show {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2em;
	}

	.demo :global(pre) {
		margin: 0;
	}

	.demo :global(.copyBlockButton) {
		background: #2b2b2b;
		color: white;
		border-color: var(--border-dark);
	}
</style>

<div class="demo not-prose">
	<div class="show make-container">
		{@render demo()}
	</div>
	<CopyBlock>
		{@render children()}
	</CopyBlock>
</div>
