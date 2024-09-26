<script lang="ts">
	import '@shoelace-style/shoelace/dist/components/card/card.js';
	import type { Snippet } from "svelte";

	interface CardProps {
		title?: string
		headerTag?: string
		children: Snippet
		footer?: Snippet
	}

	let { title, headerTag = 'h3', children, footer }: CardProps = $props();
</script>

<sl-card>
	{#if title}
		<svelte:element this={headerTag} class="cardHeader" slot="header">{ title }</svelte:element>
	{/if}
	{@render children()}
	{#if footer}
		<div slot="footer">
			{@render footer()}
		</div>
	{/if}
</sl-card>