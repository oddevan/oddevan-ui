<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import type { Snippet } from "svelte";
	import type { Menu } from "../types.js";
	import Button from "./Button.svelte";

	interface DropdownMenuProps {
		hideLabel?: boolean
		menu: Menu
		trigger?: Snippet<[any]>
	}

	let { hideLabel = false, menu, trigger }: DropdownMenuProps = $props();
</script>

<style>
	:global(div.menuPopup [data-menu-item]) {
		gap: .5em
	}
</style>

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
						<svelte:component this={menu.icon} {alt} {size} />
					{/if}
					{#if !hideLabel || !menu.icon}
						{menu.label}
					{/if}
				</Button>
			{/if}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="menuPopup">
			{#each menu.items as item}
				{#if item === 'separator'}
					<DropdownMenu.Separator />
				{:else}
					{@const itemProps = item.action ? { onclick: item.action } : { href: item.href }}
					<DropdownMenu.Item {...itemProps}>
						{#if item.icon}
							<svelte:component this={item.icon} />
						{/if}
						<span>{item.label}</span>
						{#if item.shortcut}
							<DropdownMenu.Shortcut>{item.shortcut}</DropdownMenu.Shortcut>
						{/if}
					</DropdownMenu.Item>
				{/if}
			{/each}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>