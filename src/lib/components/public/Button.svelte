<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import '@shoelace-style/shoelace/dist/components/button/button.js';

	interface ButtonProps {
		primary?: boolean;
		destructive?: boolean;
		disabled?: boolean;
		noborder?: boolean;
		icon?: Component;
		children: Snippet;
	}

	let {
		primary = false,
		destructive = false,
		disabled = false,
		noborder = false,
		icon: Icon,
		children,
		...restProps
	}: ButtonProps = $props();

	let variant: 'danger'|'default'|'default'|'text' =
		destructive ? 'danger' : primary ? 'default' : noborder ? 'text' : 'default';
</script>

<sl-button {variant} {disabled} {...restProps}>
	{#if Icon}<span slot="prefix"><Icon /></span>{/if}
	{@render children()}
</sl-button>