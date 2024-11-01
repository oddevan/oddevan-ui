<script lang="ts">
	import AppTabs from "$lib/components/public/AppTabs.svelte";
	import TitleBar from "$lib/components/public/TitleBar.svelte";
	import ModeSwitcher from "$lib/components/public/ModeSwitcher.svelte";
	import { Alert, Edit, Home, Smolblog, Code } from "$lib/components/public/Icons/index.js";

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
		{ type: 'link', href: '/forms', icon: Edit, label: 'Form Builder' },
		{ type: 'link', href: '/icons', icon: Alert, label: 'Icons' },
		{ type: 'link', href: '/scratch', icon: Smolblog, label: 'Dashboard Demo' }
	];
</script>

<div class="make-container">
	<AppTabs {tabs} global>
		<!-- <div aria-hidden="true" style="padding-block-start: 5px;">&nbsp;</div> -->
		<TitleBar>
			<SiteLogo/>
			{#snippet ending()}
				<ModeSwitcher/>
			{/snippet}
		</TitleBar>
		{@render children()}
	</AppTabs>
</div>