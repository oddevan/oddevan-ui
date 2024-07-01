<script lang="ts">
	import type { Snippet } from "svelte";
	import type { AppTabActionItem, AppTabLinkItem } from "../types.js";

	interface AppTabsProps {
		tabs: [AppTabLinkItem]
		action?: AppTabActionItem
		children: Snippet
	}

	let { tabs, action, children }: AppTabsProps = $props();

	let buttonStyle = `--action-button-position: ${(tabs.length / 2) + 1}`;
</script>

<style>
	div.apptabshell {
		container-type: inline-size;
		display: relative;
		contain: paint;
		padding-bottom: 4rem;
	}

	nav.apptabs {
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
		border-top: 1px solid hsl(var(--border));
		width: 100%;
		position: absolute;
		bottom: 0;

		a {
			display: flex;
			padding: 1em;
	
			&:hover {
				background: hsl(var(--accent));
			}
		}

		button {
			display: flex;
			grid-column: var(--action-button-position);
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
			display: grid;
			grid-template-columns: 15rem auto;
			gap: 1rem;
		}

		nav.apptabs {
			border-top: none;
			border-inline-end: 1px solid hsl(var(--border));
			grid-auto-flow: row;
			grid-template-columns: 1fr;
			justify-content: flex-start;
			position: sticky;
			top: 0;

			button {
				grid-column: 1;
			}
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
		{#each tabs as {label, icon, href}}
			<a {href}>
				<span class="icon">
					<svelte:component this={icon} size="1.5em" />
				</span>
				<span class="label">
					{label}
				</span>
			</a>
		{/each}
		{#if action}
			<button onclick={action.action} style={buttonStyle}>
				<span class="icon">
					<svelte:component this={action.icon} size="1.5em" />
				</span>
				<span class="label">
					{action.label}
				</span>
			</button>
		{/if}
	</nav>

	<div class="apptabcontent">
		{@render children()}
	</div>
</div>