<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		primary?: boolean;
		destructive?: boolean;
		disabled?: boolean;
		noborder?: boolean;
		action?: (e?: Event) => void;
		children: Snippet;
	}

	let {
		primary = false,
		destructive = false,
		disabled = false,
		noborder = false,
		action = () => {},
		children,
		...restProps
	}: ButtonProps = $props();

	let variant: 'destructive'|'default'|'outline'|'ghost' =
		destructive ? 'destructive' : primary ? 'default' : noborder ? 'ghost' : 'outline';
</script>

<style>
	span :global(button[data-button-root]) {
		gap: .5em;
	}
</style>

<span>
	<Button {variant} {disabled} {...restProps} on:click={action} on:keydown={action}>
		{@render children()}
	</Button>
</span>