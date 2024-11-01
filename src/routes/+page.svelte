<script lang="ts">
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

<p><a href="https://shoelace.style/">Shoelace</a> + <a href="https://svelte.dev/">Svelte</a> + an odd touch.</p>
