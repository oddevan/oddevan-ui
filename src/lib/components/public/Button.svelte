<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import '@shoelace-style/shoelace/dist/components/button/button.js';

	interface ButtonProps {
		primary?: boolean;
		destructive?: boolean;
		disabled?: boolean;
		noborder?: boolean;
		block?: boolean;
		icon?: Component;
		action?: () => void|Promise<void>;
		href?: string;
		children: Snippet;
	}

	let {
		primary = false,
		destructive = false,
		disabled = false,
		noborder = false,
		block = false,
		icon: Icon,
		action,
		href,
		children,
	}: ButtonProps = $props();

	let variant: 'danger'|'primary'|'default'|'text' =
		destructive ? 'danger' : primary ? 'primary' : noborder ? 'text' : 'default';
	
	let actionProp = href ? { href } : action ? { onclick: action } : { type: 'submit' };
</script>

<style>
	sl-button {
		border-radius: var(--radius--inner);

		&.primary::part(base) {
			background-color: var(--action);
			color: var(--on-action);
			border-color: var(--action);
		}

		&.primary:hover::part(base) {
			background-color: var(--action-hover);
		}

		&.text::part(base) {
			color: var(--action);
		}

		&.text:hover::part(base) {
			color: var(--action-hover);
		}

		&.block {
			display: block;
		}

		&::part(label) {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: var(--spacing);
		}
	}
</style>

<sl-button {variant} class={variant} class:block {disabled} {...actionProp}>
	{#if Icon}<span class="icon"><Icon /></span>{/if}
	<span class="label">{@render children()}</span>
</sl-button>