<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import type { Menu } from "../types.js";
	import Button from "./Button.svelte";
	import Content from "./Icons/Content.svelte";

	interface DropdownMenuProps {
		hideLabel?: boolean
		menu: Menu
	}

	let { hideLabel = false, menu }: DropdownMenuProps = $props();
</script>

<style>
	:global(div[data-menu-item]) {
		gap: .5em
	}
</style>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[builder]}>
			{#if menu.icon}
				{@const alt = hideLabel ? menu.label : undefined}
				<svelte:component this={menu.icon} {alt} />
			{/if}
			{#if !hideLabel || !menu.icon}
				{menu.label}
			{/if}
		</Button>
  </DropdownMenu.Trigger>
	<DropdownMenu.Content class="menuPopup">
		{#each menu.items as item}
			{#if item === 'separator'}
				<DropdownMenu.Separator />
			{:else if !!item.items}
				<DropdownMenu.Item>
					<span>Submenu</span>
				</DropdownMenu.Item>
			{:else}
				<DropdownMenu.Item>
						{#if item.icon}
							<svelte:component this={item.icon} />
						{/if}
						<span>{item.label}</span>
						{#if item.shortcut}
							<DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
						{/if}
				</DropdownMenu.Item>
			{/if}
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>