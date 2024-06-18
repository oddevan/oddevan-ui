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
		children: Snippet
	}

	let { tabs, action, children } = $props();
</script>

<style>
	div.apptabshell {
		container-type: inline-size;
		display: relative;
		contain: paint;
		padding-bottom: 4rem;
	}

	nav.apptabs {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-top: 1px solid hsl(var(--border));
		position: absolute;
		bottom: 0rem;

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
			border-radius: var(--radius);

			&:hover {
				background: hsl(var(--action-hsl) / 90%);
			}
		}
	}

	.label {
		display: none;
	}

	@container (min-width: 45rem) {
		div.apptabshell {
			padding-bottom: 0;
			padding-inline-start: 16rem;
		}

		nav.apptabs {
			width: 15rem;
			float: inline-start;
			border-top: none;
			border-inline-end: 1px solid hsl(var(--border));
			flex-direction: column;
			justify-content: flex-start;
			position: sticky;
			top: 0;
		}

		a, button {
			flex-direction: row;
			align-content: center;
		}

		.icon {
			margin-inline-end: 1em;
		}

		.label {
			display: block;
		}
	}
</style>

<div class="apptabshell">
	<nav class="apptabs">
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

	<div class="apptabcontent">
		{@render children()}
	</div>
</div>