<script lang="ts">
	import AppTabs from "$lib/components/public/AppTabs.svelte";
	import CopyBlock from "$lib/components/public/CopyBlock.svelte";
	import type { Menu, LinkMenuItem, ActionMenuItem } from "$lib/components/types.js";
  import * as Icons from "$lib/components/public/Icons";
  
  const tabs: LinkMenuItem[] = [
    { type: 'link', href: "#", icon: Icons.Reader, label: "Dashboard" },
    { type: 'link', href: "#", icon: Icons.Content, label: "Content" },
    { type: 'link', href: "#", icon: Icons.Notifications, label: "Notifications" },
  ];
  const tabAction: ActionMenuItem = {
    type: 'action',
		action: () => { console.log('AppTabActionItem'); },
		icon: Icons.Plus,
		label: 'New Content'
	};
  const tabMenu: Menu<LinkMenuItem> = {
    type: 'menu',
		icon: Icons.Site,
		label: 'Blog Name',
		items: [
			{ type: 'link', href: '#', icon: Icons.Site, label: 'Alternative Blog One' },
			{ type: 'link', href: '#', icon: Icons.Site, label: 'Alternative Blog Two' },
			{ type: 'link', href: '#', icon: Icons.Site, label: 'Alternative Blog Three' },
			{ type: 'link', href: '#', icon: Icons.Site, label: 'Alternative Blog Four' },
      'separator',
			{ type: 'link', href: '#', icon: Icons.User, label: 'My Account' },
			{ type: 'link', href: '#', icon: Icons.User, label: 'Security' },
			{ type: 'link', href: '#', icon: Icons.Share, label: 'Connections' },
      'separator',
			{ type: 'link', href: '#', icon: Icons.Lightbulb, label: 'Theme' },
			{ type: 'link', href: '#', icon: Icons.Smolblog, label: 'About Smolblog' },
      'separator',
			{ type: 'link', href: '#', icon: Icons.Alert, label: 'Log Out' },
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
  <AppTabs {tabs} action={tabAction} global>
    <CopyBlock>
      We have copied yet again!
    </CopyBlock>
  </AppTabs>
</div>