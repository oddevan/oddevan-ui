<script lang="ts">
	import type { IconProps } from "$lib/components/types.js";
	import type { Snippet } from "svelte";

	interface BaseIconProps extends IconProps {
		children: Snippet;
	}

	let { alt, size, children }: BaseIconProps = $props();

	let spanProps: Record<string, string> = {};
	if (alt) {
		spanProps['aria-label'] = alt;
	} else {
		spanProps['aria-hidden'] = 'true';
	}
	if (size) {
		spanProps['style'] = `--icon-size: ${size}`;
	}
</script>

<style>
	span {
		display: block;
		width: var(--icon-size, 1em);
		height: var(--icon-size, 1em);

		& :global(svg) {
			width: 100%;
			height: 100%;
		}
	}
</style>

<span {...spanProps}>
	{@render children()}
</span>