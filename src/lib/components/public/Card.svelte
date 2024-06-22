<script lang="ts">
  import * as Card from "$lib/components/ui/card";
	import type { Snippet } from "svelte";

	interface CardProps {
		title?: string
		subtitle?: string
		children: Snippet
		footer?: Snippet
	}

	let { title, subtitle, children, footer }: CardProps = $props();
</script>

<Card.Root>
	{#if title || subtitle }
		<Card.Header>
			{#if title}<Card.Title>{ title }</Card.Title>{/if}
			{#if subtitle}<Card.Description>{ subtitle }</Card.Description>{/if}
		</Card.Header>
	{/if}
	<Card.Content>
		{@render children()}
	</Card.Content>
	{#if footer}
		<Card.Footer>
			{@render footer()}
		</Card.Footer>
	{/if}
</Card.Root>