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

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border: 1px solid hsl(var(--border));

		a, button {
			display: flex;
			padding: 1em;
		}

		a {
			display: flex;
			padding: 1em;
	
			&:hover {
				background: hsl(var(--accent));
			}
		}

		button {
			margin: .5em;
			padding: .5em;
			background: hsl(var(--action-hsl));
			color: hsl(var(--primary-foreground));

			&:hover {
				background: hsl(var(--action-hsl) / 90%);
			}
		}
	}

	/* .icon {
		font-size: 1.5rem;
	} */

	.label {
		display: none;
	}
</style>

<nav>
	{#each tabs as {label, icon, href}, index}
		{#if index == (tabs.length / 2)}
			<button onclick={action.action}>
				<span class="icon">
					<svelte:component this={action.icon} />
				</span>
				<span class="label">
					{action.label}
				</span>
			</button>
		{/if}
		<a {href}>
			<span class="icon">
				<svelte:component this={icon} />
			</span>
			<span class="label">
				{label}
			</span>
		</a>
	{/each}
</nav>
