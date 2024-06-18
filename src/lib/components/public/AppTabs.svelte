<script lang="ts">
	export interface AppTabLinkItem {
		href: string
		label: string
		icon: SvelteComponent
	}

	export interface AppTabActionItem {
		action: () => void
		label: string
		icon: SvelteComponent
	}

	interface AppTabsProps {
		tabs: [AppTabLinkItem]
		action?: AppTabActionItem
	}

	let { tabs, action } = $props();
</script>

<nav>
	{#each tabs as {label, icon, href}}
		<a {href}>
			<span class="icon">
				<svelte:component this={icon} />
			</span>
			<span class="label">
				{label}
			</span>
		</a>
	{/each}

	<button onclick={action.action}>
		<span class="icon">
			<svelte:component this={action.icon} />
		</span>
		<span class="label">
			{action.label}
		</span>
	</button>
</nav>
