<script lang="ts">
	import { MediaQuery } from 'runed';
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
	import type { Snippet } from "svelte";

	interface SheetProps {
		open?: boolean
		title?: string
		subtitle?: string
		children: Snippet
		footer?: Snippet
	}
 
  let { open = $bindable(false), title, subtitle, children, footer }: SheetProps = $props();
  const query = new MediaQuery("(min-width: 768px)");
</script>
 
{#if typeof window !== 'undefined' && query.matches}
  <Dialog.Root bind:open>
    <Dialog.Content class="max-w-md">
			{#if title || subtitle }
				<Dialog.Header>
					{#if title}<Dialog.Title>{ title }</Dialog.Title>{/if}
					{#if subtitle}<Dialog.Description>{ subtitle }</Dialog.Description>{/if}
				</Dialog.Header>
			{/if}
			{@render children()}
			{#if footer}
				<Dialog.Footer>
					{@render footer()}
				</Dialog.Footer>
			{/if}
    </Dialog.Content>
  </Dialog.Root>
{:else}
  <Drawer.Root bind:open>
    <Drawer.Content>
			{#if title || subtitle }
				<Drawer.Header>
					{#if title}<Drawer.Title>{ title }</Drawer.Title>{/if}
					{#if subtitle}<Drawer.Description>{ subtitle }</Drawer.Description>{/if}
				</Drawer.Header>
			{/if}
			{@render children()}
			{#if footer}
				<Drawer.Footer>
					{@render footer()}
				</Drawer.Footer>
			{/if}
    </Drawer.Content>
  </Drawer.Root>
{/if}