<script lang="ts">
	import type { Snippet } from 'svelte';
	import '@shoelace-style/shoelace/dist/components/button/button.js';

	interface ButtonProps {
		primary?: boolean;
		destructive?: boolean;
		disabled?: boolean;
		noborder?: boolean;
		children: Snippet;
	}

	let {
		primary = false,
		destructive = false,
		disabled = false,
		noborder = false,
		children,
		...restProps
	}: ButtonProps = $props();

	let variant: 'danger'|'default'|'default'|'text' =
		destructive ? 'danger' : primary ? 'default' : noborder ? 'text' : 'default';
</script>

<style>
	span :global(button[data-button-root]) {
		gap: .5em;
	}
</style>

<span>
	<sl-button {variant} {disabled} {...restProps}>
		{@render children()}
	</sl-button>
</span>