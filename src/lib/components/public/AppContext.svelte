<script lang="ts">
	import type { AppTabLinkItem } from './AppTabs.svelte';
	import type { Snippet } from 'svelte';
	import Avatar from './Avatar.svelte';

	export interface AppTabAvatarItem {
		href: string
		label: string
		src: string
	};

	interface AppContextProps {
		brand: AppTabLinkItem
		tabs: AppTabAvatarItem[]
		user: AppTabAvatarItem
		children: Snippet
	}

	let { brand, tabs, user, children }: AppContextProps = $props();
</script>

<style>

</style>

<div>
	<div class="appcontexttabs">
		<a class="brand" href={brand.href}>
			<span class="icon">
				<svelte:component this={brand.icon} />
			</span>
			<span class="label">
				{brand.label}
			</span>
		</a>
		{#each tabs as {label, src, href}}
			<a class="tab" {href}>
				<Avatar {src} alt={label}>AB</Avatar>
			</a>
		{/each}
		<a class="user" href={user.href}>
			<Avatar src={user.src} alt={user.label}>AB</Avatar>
		</a>
	</div>
	<div class="appcontextcontent">
		{@render children()}
	</div>
</div>