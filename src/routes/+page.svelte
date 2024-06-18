<script lang="ts">
	import Button from "$lib/components/public/Button.svelte";
	import ButtonBar from "$lib/components/public/ButtonBar.svelte"
	import ModeSwitcher from "$lib/components/public/ModeSwitcher.svelte";
	import * as Icons from "$lib/components/public/Icons";
	import AppTabs, { type AppTabActionItem, type AppTabLinkItem } from "$lib/components/public/AppTabs.svelte";

	const tabAction: AppTabActionItem = {
		action: () => { console.log('AppTabActionItem'); },
		icon: Icons.Plus,
		label: 'New thing'
	};

	const tabLinks: [AppTabLinkItem] = [
		{ href: '#', icon: Icons.Status, label: 'Status' },
		{ href: '#', icon: Icons.Reader, label: 'Reader' },
		{ href: '#', icon: Icons.Upload, label: 'Upload' },
		{ href: '#', icon: Icons.Alert, label: 'Alert' },
	]
</script>

<style>
	h1 {
		font-size: 3rem;
		font-weight: bold;
	}

	h2 {
		font-size: 2rem;
		font-weight: bold;
	}

	h1, h2, p {
		margin-block-end: 1em;
	}
</style>

<h1>oddEvan UI</h1>

<p>Because <a href="https://shadcn-svelte.com/">shadcn-svelte</a> said to make my own system.</p>

<ModeSwitcher/>

<h2>Button</h2>

<p>Do a thing!</p>

<div>
	<Button>Default</Button>
	<Button primary>Primary</Button>
	<Button destructive>Destructive</Button>
</div>

<div>
	<Button disabled>Default (Disabled)</Button>
	<Button disabled primary>Primary (Disabled)</Button>
	<Button disabled destructive>Destructive (Disabled)</Button>
</div>

<h2>ButtonBar</h2>

<p>For a row of buttons (like the end of a form)</p>

<ButtonBar>
	<Button primary>OK</Button>
</ButtonBar>

<ButtonBar>
	{#snippet leading()}
		<Button>Cancel</Button>
	{/snippet}
	<Button>Save</Button>
	<Button destructive>Discard</Button>
</ButtonBar>

<h2>AppTabs</h2>

<AppTabs action={tabAction} tabs={tabLinks} />