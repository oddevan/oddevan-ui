<script lang="ts">
	import { ClipboardCopy, Check } from '$lib/components/public/Icons';
	import Button from '$lib/components/public/Button.svelte';

	interface CopyBlockProps {
		children: Snippet,
	}

	let { children }: CopyBlockProps = $props();

	let copied = $state(false);
	let copyTarget: HTMLDivElement;

	const engage = async () => {
		try {
			await navigator.clipboard.writeText(copyTarget.textContent);
			copied = true;
		} catch (error) {
			console.error(error.message);
		}
	};
</script>

<style>
	.copyBlock {
		position: relative;
	}

	.copyBlock :global(.copyBlockButton) {
		position: absolute;
		top: 0;
		right: 0;
		padding: .5em;
		height: auto;
		font-size: 1rem;
	}

	.copyBlockTarget {
		border: 1px solid hsl(var(--border));
		border-radius: var(--radius);
	}
</style>

<div class="copyBlock">
	<Button action={engage} class="copyBlockButton">
		{#if copied}
			<Check />
		{:else}
			<ClipboardCopy />
		{/if}
	</Button>

	<div class="copyBlockTarget" bind:this={copyTarget}>
		{@render children()}
	</div>
</div>

