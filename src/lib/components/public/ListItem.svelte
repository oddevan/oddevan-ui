<script lang="ts">
	import type { Snippet } from "svelte";
	import type { ActionMenuItem, Menu } from "../types.js";
	import DropdownMenu from "./DropdownMenu.svelte";

	interface ListItemProps {
		icon?: Snippet
		title: string
		subtitle?: string
		actions?: Menu<ActionMenuItem>
	}

	let { icon, title, subtitle, actions }: ListItemProps = $props();
</script>

<style>
	.listitem {
		display: flex;
		flex-direction: row;
		gap: .5em;
		padding: .75em 1em;
		align-items: center;

		.titlebox {
			flex-grow: 1;
			display: flex;
			flex-direction: column;

			.subtitle {
				font-size: .7em;
				color: var(--on-canvas-muted);
			}
		}

		.actionbox :global(button) {
			border: 0;
		}
	}
</style>

<div class="listitem">
	{#if icon}
		<span class="icon">
			{@render icon()}
		</span>
	{/if}
	<span class="titlebox">
		<span class="title">{title}</span>
		{#if subtitle}<span class="subtitle">{subtitle}</span>{/if}
	</span>
	{#if actions}
	<span class="actionbox">
		<DropdownMenu menu={actions} hideLabel />
	</span>
	{/if}
</div>