<script lang="ts">
	import '@shoelace-style/shoelace/dist/components/copy-button/copy-button.js';
	import type { Snippet } from 'svelte';

	interface CopyBlockProps {
		children: Snippet,
	}

	let { children }: CopyBlockProps = $props();

	let divId = crypto.randomUUID();
</script>

<style>
	.copyBlock {
		position: relative;
	}

	.copyBlock .copyBlockButton {
		position: absolute;
		top: 1px;
		right: 1px;
		font-size: 1rem;
		border-radius: var(--radius);
	}

	.copyBlockTarget {
		border: 1px solid hsl(var(--border));
		border-radius: var(--radius);
	}
</style>

<div class="copyBlock">
	<sl-copy-button class="copyBlockButton" from={divId}></sl-copy-button>

	<div class="copyBlockTarget" id={divId}>
		{@render children()}
	</div>
</div>

