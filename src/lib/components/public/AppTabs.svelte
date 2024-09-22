<script lang="ts">
	import type { Snippet } from "svelte";
	import type { ActionMenuItem, LinkMenuItem, Menu } from "../types.js";
	import DropdownMenu from "./DropdownMenu.svelte";
	import MenuIcon from "../protected/MenuIcon.svelte";
	import { Icons } from "$lib/index.js";

	interface AppTabsProps {
		tabs: LinkMenuItem[]
		action?: ActionMenuItem,
		menu?: Menu<ActionMenuItem>,
		global?: boolean,
		children: Snippet
	}

	let { tabs, action, menu, global = false, children }: AppTabsProps = $props();

	let buttonStyle = `--action-button-position: ${Math.trunc((tabs.length + (menu ? 1 : 0)) / 2) + 1}`;
</script>

<style>
	div.apptabshell {
		container-type: inline-size;
		contain: paint;
		display: flex;
		flex-direction: column-reverse;

		&.global {
			height: 100vh;
			padding-block-end: 0.5rem;
		}
	}

	div.apptabtabs {
		width: 100%;
		z-index: 1000;
	}

	div.apptabcontent {
		padding-block-end: 1rem;
		overflow-y: auto;
	}

	nav.apptabs {
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
		border-top: 1px solid hsl(var(--border));
		width: 100%;

		& a, & .apptabmenu :global(.apptabmenutrigger) {
			display: flex;
			padding: 1em;
	
			&:hover {
				background: hsl(var(--accent));
			}
		}

		& button.action {
			display: flex;
			grid-column: var(--action-button-position);
			margin: .5em;
			padding: .5em;
			background: var(--action);
			color: hsl(var(--primary-foreground));
			border-radius: var(--radius);

			&:hover {
				background: calc(var(--action) / 90%);
			}
		}
	}

	.label {
		display: none;
	}

	@container (min-width: 45rem) {
		div.apptabshell {
			display: grid;
			grid-template-columns: 3.5rem auto;
			gap: 1rem;

			&.global {
				padding-block-end: 0;
			}

			div.apptabtabs {
				border-inline-end: 1px solid hsl(var(--border));
			}

			nav.apptabs {
				border-top: none;
				grid-auto-flow: row;
				grid-template-columns: 1fr;
				height: min-content;
				justify-content: flex-start;
				position: sticky;
				top: 0;

				button.action {
					grid-column: 1;
				}
			}

			a, button, .apptabmenu :global(.apptabmenutrigger) {
				flex-direction: row;
				align-content: center;
				gap: 1rem;
			}
		}
	}

	@container (min-width: 60rem) {
		div.apptabshell {
			grid-template-columns: 15rem auto;
		}

		nav.apptabs {
			& :global(.apptabmenutrigger) {
				width: 100%;
			}

			& .label {
				display: block;
			}
		}
	}
</style>

<div class="apptabshell" class:global={global}>
	<div class="apptabtabs">
		<nav class="apptabs">
			{#each tabs as {label, icon, href}}
				<a {href}>
					<span class="icon">
						<MenuIcon item={icon ?? Icons.Plus} size="1.5em" />
					</span>
					<span class="label">
						{label}
					</span>
				</a>
			{/each}
			{#if action}
				<button class="action" onclick={action.action} style={buttonStyle}>
					<span class="icon">
						<MenuIcon item={action.icon ?? Icons.Plus} size="1.5em" />
					</span>
					<span class="label">
						{action.label}
					</span>
				</button>
			{/if}
			{#if menu}
				<span class="apptabmenu">
					<DropdownMenu {menu} hideLabel={false} />
				</span>
			{/if}
		</nav>
	</div>

	<div class="apptabcontent">
		{@render children()}
	</div>
</div>