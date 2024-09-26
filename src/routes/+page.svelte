<script lang="ts">
	import ModeSwitcher from "$lib/components/public/ModeSwitcher.svelte";
	import * as Icons from "$lib/components/public/Icons/index.js";
	import type { ActionMenuItem, LinkMenuItem, Menu } from "$lib/components/types.js";

	const demoMenu: Menu<LinkMenuItem|ActionMenuItem> = {
		type: 'menu',
		icon: Icons.Menu,
		label: 'DemoMenu',
		items: [
			{ type: 'link', href: '#', icon: Icons.Status, label: 'Status' },
			{ type: 'link', href: '#', icon: Icons.Reader, label: 'Reader' },
			{ type: 'link', href: '#', icon: Icons.Upload, label: 'Upload' },
			{ type: 'action', action: () => { console.log('Menu Item')}, icon: Icons.Alert, label: 'Alert' },
		]
	};
</script>

<h1>oddEvan UI</h1>

<p>Because <a href="https://shadcn-svelte.com/">shadcn-svelte</a> said to make my own system.</p>

<ModeSwitcher/>