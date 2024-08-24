<script lang="ts">
	import type { MenuItemIcon } from "../types.js";

	interface MenuIconProps {
		item: MenuItemIcon,
		size?: string,
		alt?: string,
	}

	let { item, size = '1em', alt }: MenuIconProps = $props();

	let imgAtts: { alt?: string, 'aria-hidden'?: boolean, style: string } = {
		style: `--icon-size: ${size}`,
	};
	if (alt) {
		imgAtts.alt = alt;
	} else {
		imgAtts['aria-hidden'] = true;
	}
</script>

<style>
	img {
		max-width: var(--icon-size, 1em);
		max-height: var(--icon-size, 1em);
	}
</style>

{#if typeof item === 'string'}
	<img src={item} {...imgAtts}>
{:else}
	{@const IconComponent = item}
	<IconComponent {size} {alt} />
{/if}

