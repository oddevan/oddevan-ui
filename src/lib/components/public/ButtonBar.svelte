<script lang="ts">
	interface ButtonBarProps {
		leading?: Snippet
		children: Snippet
	}

	let { leading, children }: ButtonBarProps = $props();
</script>

<style>

</style>

<div class="buttonbar">
	{#if leading}
	<span>
		{@render leading()}
	</span>
	{/if}
	<span>
		{@render children()}
	</span>
</div>