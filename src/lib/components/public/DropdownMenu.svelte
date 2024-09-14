<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import type { Snippet } from "svelte";
	import type { Menu, MenuItem } from "../types.js";
	import Button from "../ui/button/button.svelte";
	import MenuIcon from "../protected/MenuIcon.svelte";

	interface DropdownMenuProps {
		hideLabel?: boolean
		menu: Menu
		trigger?: Snippet<[any]>
	}

	let { hideLabel = false, menu, trigger }: DropdownMenuProps = $props();
</script>

<style>
	div :global(div.menuPopup [data-menu-item]) {
		gap: .5em
	}
</style>

{#snippet displayItems(items: (MenuItem | 'separator')[])}
	{#each items as item}
	{#if item === 'separator'}
		<DropdownMenu.Separator />
	{:else if item.type === 'menu'}
		<DropdownMenu.Sub>
			<DropdownMenu.SubTrigger>
				{#if item.icon}
					<MenuIcon item={item.icon} />
				{/if}
				<span>{item.label}</span>
			</DropdownMenu.SubTrigger>
			<DropdownMenu.SubContent>
				{@render displayItems(item.items)}
			</DropdownMenu.SubContent>
		</DropdownMenu.Sub>
	{:else}
		{@const itemProps = item.type == 'action' ? { onclick: item.action } : { href: item.href }}
		<DropdownMenu.Item {...itemProps}>
			{#if item.icon}
				<MenuIcon item={item.icon} />
			{/if}
			<span>{item.label}</span>
			{#if item.shortcut}
				<DropdownMenu.Shortcut>{item.shortcut}</DropdownMenu.Shortcut>
			{/if}
		</DropdownMenu.Item>
	{/if}
	{/each}
{/snippet}

<div>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			{#if trigger}
				{@render trigger(builder)}
			{:else}
				<Button builders={[builder]}>
					{#if menu.icon}
						{@const alt = hideLabel ? menu.label : undefined}
						{@const size = hideLabel ? '1.5em' : undefined}
						<MenuIcon item={menu.icon} {alt} {size} />
					{/if}
					{#if !hideLabel || !menu.icon}
						{menu.label}
					{/if}
				</Button>
			{/if}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="menuPopup">
			{@render displayItems(menu.items)}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>