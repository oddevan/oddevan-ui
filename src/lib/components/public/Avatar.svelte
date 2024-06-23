<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";

	interface AvatarProps {
		src?: string,
		alt?: string,
		children?: Snippet,
	}

	let {src, alt, children}: AvatarProps = $props();

	let imgAtts = {};
	if (src && !alt) {
		imgAtts.alt = alt;
	} else {
		imgAtts['aria-hidden'] = 'true';
	}
</script>
 
<Avatar.Root>
	{#if src}
		<Avatar.Image {src} {...imgAtts} />
	{/if}
	{#if children}
		<Avatar.Fallback>
			{@render children()}
		</Avatar.Fallback>
	{/if}
</Avatar.Root>