<script lang="ts">
	import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
	import type { Snippet } from "svelte";

	interface AvatarProps {
		src?: string,
		alt: string,
		children?: Snippet,
	}

	let {src, alt, children}: AvatarProps = $props();

	let imgAtts: { alt?: string, 'aria-hidden'?: string } = {};
	if (src && !alt) {
		imgAtts.alt = alt;
	} else {
		imgAtts['aria-hidden'] = 'true';
	}
</script>

<sl-avatar image={src} label={alt}>
	{#if children}
	<span slot="icon">{@render children()}</span>
	{/if}
</sl-avatar>