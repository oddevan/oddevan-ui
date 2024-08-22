<script lang="ts">
	import type { Snippet } from "svelte";
	import type { AppTabActionItem, AppTabLinkItem, Menu } from "../types.js";
	import DropdownMenu from "./DropdownMenu.svelte";
	import { Button as BitsButton } from "bits-ui";

	interface AppTabsProps {
		tabs: AppTabLinkItem[]
		action?: AppTabActionItem,
		menu?: Menu,
		children: Snippet
	}

	let { tabs, action, menu, children }: AppTabsProps = $props();

	let buttonStyle = `--action-button-position: ${Math.trunc((tabs.length + (menu ? 1 : 0)) / 2) + 1}`;
</script>

<style>
	div.apptabshell {
		container-type: inline-size;
		contain: paint;
		display: flex;
		flex-direction: column-reverse;
		height: 100vh;
		padding-block-end: 0.5rem;
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
			padding-block-end: 0;
			display: grid;
			grid-template-columns: 3.5rem auto;
			gap: 1rem;

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

<div class="apptabshell">
	<div class="apptabtabs">
		<nav class="apptabs">
			{#each tabs as {label, icon, href}}
				<a {href}>
					<span class="icon">
						<icon size="1.5em" />
					</span>
					<span class="label">
						{label}
					</span>
				</a>
			{/each}
			{#if action}
				<button class="action" onclick={action.action} style={buttonStyle}>
					<span class="icon">
						<action.icon size="1.5em" />
					</span>
					<span class="label">
						{action.label}
					</span>
				</button>
			{/if}
			{#if menu}
				<span class="apptabmenu">
					<DropdownMenu {menu}>
						{#snippet trigger(builder)}
							<BitsButton.Root builders={[builder]} class="apptabmenutrigger">
								<span class="icon">
									<menu.icon size="1.5em" />
								</span>
								<span class="label">
									{menu.label}
								</span>
							</BitsButton.Root>
						{/snippet}
					</DropdownMenu>
				</span>
			{/if}
		</nav>
	</div>

	<div class="apptabcontent">
		{@render children()}
	</div>
</div>