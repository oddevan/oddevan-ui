<script lang="ts">
	import Button from "$lib/components/public/Button.svelte";
	import ButtonBar from "$lib/components/public/ButtonBar.svelte"
	import ListItem from "$lib/components/public/ListItem.svelte"
	import ModeSwitcher from "$lib/components/public/ModeSwitcher.svelte";
	import DropdownMenu from "$lib/components/public/DropdownMenu.svelte";
	import * as Icons from "$lib/components/public/Icons";
	import AppTabs from "$lib/components/public/AppTabs.svelte";
	import type { AppTabActionItem, AppTabLinkItem, Menu } from "$lib/components/types.js";
	import Card from "$lib/components/public/Card.svelte";
	import Sheet from "$lib/components/public/Sheet.svelte";

	const tabAction: AppTabActionItem = {
		action: () => { console.log('AppTabActionItem'); },
		icon: Icons.Plus,
		label: 'New thing'
	};

	const tabLinks: AppTabLinkItem[] = [
		{ href: '#', icon: Icons.Status, label: 'Status' },
		{ href: '#', icon: Icons.Reader, label: 'Reader' },
		{ href: '#', icon: Icons.Upload, label: 'Upload' },
	];

	const demoMenu: Menu = {
		icon: Icons.Menu,
		label: 'DemoMenu',
		items: [
			{ href: '#', icon: Icons.Status, label: 'Status' },
			{ href: '#', icon: Icons.Reader, label: 'Reader', shortcut: '⇧⌘P' },
			{ href: '#', icon: Icons.Upload, label: 'Upload' },
			{ action: () => { console.log('Menu Item')}, icon: Icons.Alert, label: 'Alert' },
		]
	};

	let openSheet = false;
</script>

<h1>oddEvan UI</h1>

<p>Because <a href="https://shadcn-svelte.com/">shadcn-svelte</a> said to make my own system.</p>

<ModeSwitcher/>