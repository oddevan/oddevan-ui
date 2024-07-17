<script lang="ts">
	import AppTabs from "$lib/components/public/AppTabs.svelte";
	import type { AppTabLinkItem, Menu } from "$lib/components/types.js";
  import * as Icons from "$lib/components/public/Icons";
  
  const tabs: AppTabLinkItem[] = [
    { href: "#", icon: Icons.Reader, label: "Dashboard" },
    { href: "#", icon: Icons.Content, label: "Content" },
    { href: "#", icon: Icons.Notifications, label: "Notifications" },
  ];
  const tabAction: AppTabActionItem = {
		action: () => { console.log('AppTabActionItem'); },
		icon: Icons.Plus,
		label: 'New Content'
	};
  const tabMenu: Menu = {
		icon: Icons.Site,
		label: 'Blog Name',
		items: [
			{ href: '#', icon: Icons.Site, label: 'Alternative Blog One' },
			{ href: '#', icon: Icons.Site, label: 'Alternative Blog Two' },
			{ href: '#', icon: Icons.Site, label: 'Alternative Blog Three' },
			{ href: '#', icon: Icons.Site, label: 'Alternative Blog Four' },
      'separator',
			{ href: '#', icon: Icons.User, label: 'My Account' },
			{ href: '#', icon: Icons.User, label: 'Security' },
			{ href: '#', icon: Icons.Share, label: 'Connections' },
      'separator',
			{ href: '#', icon: Icons.Lightbulb, label: 'Theme' },
			{ action: () => { console.log('Menu Item')}, icon: Icons.Smolblog, label: 'About Smolblog' },
      'separator',
			{ action: () => { console.log('Menu Item')}, icon: Icons.Alert, label: 'Log Out' },
		]
	};
</script>

<style>
  .sbdemo {
    margin: 1em;
    border: .5em solid hsl(var(--foreground));

    --canvas-light-hsl: 0 0% 100%;
    --canvas-dark-hsl: 230 10% 12%;

    --action-light-hsl: 114 16% 40%;
    --action-dark-hsl: 116 40% 71%;

    --border-light-hsl: 20 5.9% 90%;
    --border-dark-hsl: 12 6.5% 30%;
  }
</style>

<div class="make-container sbdemo recolor">
  <AppTabs {tabs} action={tabAction} menu={tabMenu}>
    This is the main stop.
  </AppTabs>
</div>