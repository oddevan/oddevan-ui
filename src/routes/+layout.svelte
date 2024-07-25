<script lang="ts">
	import AppTabs from "$lib/components/public/AppTabs.svelte";
	import { ModeWatcher } from "mode-watcher";
	import type { AppTabLinkItem } from "$lib/components/types.js";
	import { Alert, Home, Smolblog } from "$lib/components/public/Icons/index.js";

	import "$lib/oddevan.css";
	import "./prism-a11y-dark.css";
	import SiteLogo from "./SiteLogo.svelte";

	let { children } = $props();

	const tabs: AppTabLinkItem[] = [
		{ href: '/', icon: Home, label: 'Home' },
		{ href: '/icons', icon: Alert, label: 'Icons' },
		{ href: '/scratch', icon: Smolblog, label: 'Dashboard Demo' }
	];
</script>

<style>
	div :global(h1) {
		font-size: 3rem;
		font-weight: bold;
	}

	div :global(h2) {
		font-size: 2rem;
		font-weight: bold;
	}

	div :global(h1), div :global(h2), div :global(p) {
		margin-block-end: 1em;
	}
</style>

<ModeWatcher />

<div class="make-container">
	<AppTabs {tabs}>
		<SiteLogo/>
		{@render children()}
	</AppTabs>
</div>