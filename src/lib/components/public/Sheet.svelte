<script lang="ts">
	import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
	import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
	import { MediaQuery } from 'runed';
	import type { Snippet } from "svelte";
	import type { SlDialog, SlDrawer, SlRequestCloseEvent } from '@shoelace-style/shoelace';

	interface SheetProps {
		open?: boolean
		title: string
		children: Snippet
		footer?: Snippet
	}
 
  let { open = $bindable(false), title, children, footer }: SheetProps = $props();
  const query = new MediaQuery("(min-width: 768px)");

	let dialogElement: SlDialog | undefined = $state();
	let drawerElement: SlDrawer | undefined = $state();
	const syncClose = (event: SlRequestCloseEvent) => {
			event.preventDefault();
			open = false;
	}

	$effect(() => {
		if (open) {
			dialogElement?.show();
			drawerElement?.show();
		} else {
			dialogElement?.hide();
			drawerElement?.hide();
		}

		dialogElement?.addEventListener('sl-request-close', syncClose);
		drawerElement?.addEventListener('sl-request-close', syncClose);

		return () => {
			dialogElement?.removeEventListener('sl-request-close', syncClose);
			drawerElement?.removeEventListener('sl-request-close', syncClose);
		};
	});
</script>

<style>
	sl-dialog, sl-drawer {
		--sl-panel-background-color: var(--canvas);
		--sl-panel-border-color: var(--border);
	}
</style>
 
{#if typeof window !== 'undefined' && query.matches}
  <sl-dialog bind:this={dialogElement} label={title}>
		{@render children()}
		{#if footer}
			<div class="sheetFooter" slot="footer">
				{@render footer()}
			</div>
		{/if}
  </sl-dialog>
{:else}
  <sl-drawer bind:this={drawerElement} label={title} placement="bottom">
		{@render children()}
		{#if footer}
			<div class="sheetFooter" slot="footer">
				{@render footer()}
			</div>
		{/if}
  </sl-drawer>
{/if}