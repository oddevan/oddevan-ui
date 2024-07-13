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
		{ href: '#', icon: Icons.Alert, label: 'Alert' },
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

<h2>Button</h2>

<p>Do a thing!</p>

<div>
	<Button>Default</Button>
	<Button primary>Primary</Button>
	<Button destructive>Destructive</Button>
	<Button noborder>No Border</Button>
</div>

<div>
	<Button disabled>Default (Disabled)</Button>
	<Button disabled primary>Primary (Disabled)</Button>
	<Button disabled destructive>Destructive (Disabled)</Button>
	<Button disabled noborder>No Border (Disabled)</Button>
</div>

<h2>ButtonBar</h2>

<p>For a row of buttons (like the end of a form)</p>

<div class="max-w-lg">
<ButtonBar>
	<Button primary>OK</Button>
</ButtonBar>

<ButtonBar>
	<Button destructive>Discard</Button>
	<Button>Save</Button>
	{#snippet leading()}
		<Button>Cancel</Button>
	{/snippet}
</ButtonBar>
</div>

<h2>AppTabs</h2>

<div class="max-w-sm border make-container">
	<AppTabs action={tabAction} tabs={tabLinks}>
		<h4>Headline</h4>

		<p>This is normal text in the app.</p>
	</AppTabs>
</div>

<div class="max-w-screen-md border make-container">
	<AppTabs action={tabAction} tabs={tabLinks}>
		<h4>Headline</h4>

		<p>This is normal text in the app.</p>
	</AppTabs>
</div>

<div class="max-w-screen-lg border make-container">
	<AppTabs action={tabAction} tabs={tabLinks}>
		<h4>Headline</h4>
		
		<p>This is normal text in the app.</p>
	</AppTabs>
</div>

<h2>ListItem</h2>

<div class="max-w-sm border">
	<ListItem title="A Thing" actions={demoMenu}>
		{#snippet icon()}<Icons.Tumblr size="2em" />{/snippet}
	</ListItem>
	<ListItem title="Another Thing" subtitle="Different from the first thing">
		{#snippet icon()}<Icons.Microblog size="2em" />{/snippet}
	</ListItem>
	<ListItem title="A secret third thing" subtitle="Yet another thing" actions={demoMenu}>
		{#snippet icon()}<Icons.Microblog size="2em" />{/snippet}
	</ListItem>
</div>

<h2>Dropdown Menu</h2>

<DropdownMenu menu={demoMenu} />

<h2>Card</h2>

<div class="max-w-sm">	
	<Card title="Channels">
		<ListItem title="plotholefragments" subtitle="plotholefragments.tumblr.com" actions={demoMenu}>
			{#snippet icon()}<Icons.Tumblr size="2em" />{/snippet}
		</ListItem>
		<ListItem title="oddevan" subtitle="oddevan.com" actions={demoMenu}>
			{#snippet icon()}<Icons.Microblog size="2em" />{/snippet}
		</ListItem>
		{#snippet footer()}
			<ButtonBar>
				<Button primary>
					<Icons.Plus size="1.5em" />
					Add Channel
				</Button>
			</ButtonBar>
		{/snippet}
	</Card>
</div>

<h2>Sheet</h2>

<p>This is more analogous to the SwiftUI Sheet than the Shadcn Sheet. It uses Drawer for mobile views and Dialog for
	desktop views.</p>

<Button primary action={ () => openSheet = !openSheet }>Manage Channels</Button>

<Sheet bind:open={openSheet} title="Manage Channels">
	<ListItem title="plotholefragments" subtitle="plotholefragments.tumblr.com" actions={demoMenu}>
		{#snippet icon()}<Icons.Tumblr size="2em" />{/snippet}
	</ListItem>
	<ListItem title="oddevan" subtitle="oddevan.com" actions={demoMenu}>
		{#snippet icon()}<Icons.Microblog size="2em" />{/snippet}
	</ListItem>
	{#snippet footer()}
		<ButtonBar>
			<Button primary>
				<Icons.Plus size="1.5em" />
				Add Channel
			</Button>
		</ButtonBar>
	{/snippet}
</Sheet>