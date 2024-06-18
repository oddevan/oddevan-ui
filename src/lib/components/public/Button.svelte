<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		primary?: boolean;
		destructive?: boolean;
		disabled?: boolean;
		// action?: (e?: Event) => void;
		children: Snippet;
	}

	let { primary = false, destructive = false, disabled = false, children, ...restProps }: ButtonProps = $props();

	let variant: 'destructive'|'default'|'outline' = destructive ? 'destructive' : primary ? 'default' : 'outline';
</script>

<Button {variant} {disabled} {...restProps}>
	{@render children()}
</Button>