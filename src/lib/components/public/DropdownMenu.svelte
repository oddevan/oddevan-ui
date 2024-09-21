<script lang="ts">
	import '@shoelace-style/shoelace/dist/components/button/button.js';
	import '@shoelace-style/shoelace/dist/components/divider/divider.js';
	import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
	import '@shoelace-style/shoelace/dist/components/menu/menu.js';
	import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
	import type { ActionMenuItem, Menu, MenuItem } from "../types.js";
	import MenuIcon from "../protected/MenuIcon.svelte";

	interface DropdownMenuProps {
		hideLabel?: boolean
		menu: Menu<ActionMenuItem>
	}

	let { hideLabel = false, menu }: DropdownMenuProps = $props();
</script>

{#snippet displayItems(items: MenuItem<ActionMenuItem>[])}
	<sl-menu>
	{#each items as item}
	{#if item === 'separator'}
		<sl-divider></sl-divider>
	{:else if item.type === 'menu'}
		<sl-menu-item>
			{#if item.icon}
				<span slot="prefix"><MenuIcon item={item.icon} /></span>
			{/if}
			{item.label}
			{@render displayItems(item.items)}
		</sl-menu-item>
	{:else if item.type == 'action'}
		<sl-menu-item onClick={item.action}>
			{#if item.icon}
				<span slot="prefix"><MenuIcon item={item.icon} /></span>
			{/if}
			<span>{item.label}</span>
		</sl-menu-item>
	{/if}
	{/each}
	</sl-menu>
{/snippet}

<sl-dropdown>
	{#if hideLabel && menu.icon}
		<sl-button slot="trigger" variant="text">
			<MenuIcon item={menu.icon} alt={menu.label} size="1.5em" />
		</sl-button>
	{:else}
		<sl-button slot="trigger" caret>
			{#if menu.icon}
			<span slot="prefix"><MenuIcon item={menu.icon} /></span>
			{/if}
			{menu.label}
		</sl-button>
	{/if}
	{@render displayItems(menu.items)}
</sl-dropdown>