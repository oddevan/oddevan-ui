<script lang="ts">
	import '@shoelace-style/shoelace/dist/components/card/card.js';
	import type { Snippet } from "svelte";

	interface CardProps {
		title?: string
		headerTag?: string
		children: Snippet
		footer?: Snippet
	}

	let { title, headerTag = 'h2', children, footer }: CardProps = $props();
</script>

<style>
	sl-card {
		width: 100%;
		--border-color: var(--border);
		--border-radius: var(--radius);
		--padding: var(--spacing);
		
		&::part(base){
			background-color: var(--shaded);
		}

		&::part(header) {
			padding: var(--spacing);
		}
	}

	.cardHeader {
		margin: 0;
	}
</style>

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