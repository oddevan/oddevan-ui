<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import '@shoelace-style/shoelace/dist/components/button/button.js';
	import type { IconProps } from '../types.js';

	interface ButtonProps {
		primary?: boolean;
		destructive?: boolean;
		disabled?: boolean;
		noborder?: boolean;
		block?: boolean;
		icon?: Component<IconProps>;
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

		&.default::part(base) {
			background-color: var(--canvas);
			color: var(--on-canvas);
			border-color: var(--on-canvas);
		}

		&.default:hover::part(base) {
			background-color: var(--shaded);
		}

		&.primary::part(base) {
			background-color: var(--action-light);
			color: var(--on-action-light);
			border-color: var(--action-light);
		}

		&.primary:hover::part(base) {
			background-color: var(--action-hover-light);
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
			line-height: normal;
		}
	}
</style>

<sl-button {variant} class={variant} class:block {disabled} {...actionProp}>
	{#if Icon}<Icon size="1.5em" />{/if}
	<span class="label">{@render children()}</span>
</sl-button>