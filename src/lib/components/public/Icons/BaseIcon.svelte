<script lang="ts">
	interface IconProps {
		alt?: string,
	};

	let { alt }: IconProps = $props();

	let spanProps: Record<string, string> = {};
	if (alt) {
		spanProps['aria-label'] = alt;
	} else {
		spanProps['aria-hidden'] = 'true';
	}
</script>

<style>
	span {
		display: block;
		width: 1.5em;
		height: 1.5em;

		& :global(svg) {
			width: 100%;
			height: 100%;
		}
	}
</style>

<span {...spanProps}>
	<slot />
</span>