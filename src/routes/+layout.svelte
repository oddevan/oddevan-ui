<script lang="ts">
	import AppTabs from "$lib/components/public/AppTabs.svelte";
	import { Alert, Home, Smolblog, Code } from "$lib/components/public/Icons/index.js";

	// import "./docs.css";
	import "$lib/oddevan.css";
	import "./prism-a11y-dark.css";
	import SiteLogo from "./SiteLogo.svelte";

	import '@shoelace-style/shoelace/dist/themes/light.css';
	import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
	import type { LinkMenuItem } from "$lib/index.js";

	$effect(() => {
		setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/');
	});

	let { children } = $props();

	const tabs: LinkMenuItem[] = [
		{ type: 'link', href: '/', icon: Home, label: 'Home' },
		{ type: 'link', href: '/components', icon: Code, label: 'Components' },
		{ type: 'link', href: '/icons', icon: Alert, label: 'Icons' },
		{ type: 'link', href: '/scratch', icon: Smolblog, label: 'Dashboard Demo' }
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

<div class="make-container">
	<AppTabs {tabs} global>
		<SiteLogo/>
		{@render children()}
	</AppTabs>
</div>