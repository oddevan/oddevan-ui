<script lang="ts">
	interface TitleBarProps {
		leading?: Snippet,
		children: Snippet,
		ending?: Snippet,
	}

	let { leading, children, ending }: TitleBarProps = $props();
</script>

<style>
	header {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding-block: var(--spacing);
	}
</style>

<header>
	{#if leading}
	<div class="leading">{@render leading()}</div>
	{/if}
	<div class="title">{@render children()}</div>
	{#if ending}
	<div class="ending">{@render ending()}</div>
	{/if}
</header>