<script lang="ts">
	import AppTabs from "$lib/components/public/AppTabs.svelte";
	import CopyBlock from "$lib/components/public/CopyBlock.svelte";
	import type { Menu, LinkMenuItem, ActionMenuItem, FormFieldTemplate } from "$lib/components/types.js";
  import * as Icons from "$lib/components/public/Icons/index.js";
	import Form from "$lib/components/protected/Form.svelte";
  
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
  const tabMenu: Menu<LinkMenuItem|ActionMenuItem> = {
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
			{ type: 'action', action: () => { console.log('Action!') }, icon: Icons.Smolblog, label: 'About Smolblog' },
      'separator',
			{ type: 'action', action: () => { console.log('Action!') }, icon: Icons.Alert, label: 'Log Out' },
		]
	};
</script>

<style>
  .sbdemo {
    margin: 1em;
    border: .5em solid var(--on-canvas);

    --canvas-light: white;
    --canvas-dark: #1c1d22;

    --action-light: #597656;
    --action-dark: #9bd397;

    --border-light: #e7e5e4;
    --border-dark: #514a48;

    background-color: var(--canvas);
  }
</style>

<div class="make-container sbdemo recolor">
  <AppTabs {tabs} action={tabAction} menu={tabMenu} global>
    <CopyBlock>
      We have copied yet again!
    </CopyBlock>
  </AppTabs>
</div>