<script lang="ts">
	import type { Component, Snippet } from "svelte";

	interface ComponentDemoProps {
		name: string,
		oneline?: string,
		demoProps?: {
			name: string,
			type: 'string'|'number',
			default?: string|number,
		}[],
		staticProps?: {
			name: string,
			value: any,
		}[],
		hasChildren?: boolean,
		component: Component,
		children: Snippet,
	}

	let { name, oneline, demoProps = [], staticProps = [], hasChildren, component, children }: ComponentDemoProps = $props();
	let initialProps: Record<string, any> = {};
	staticProps.forEach((prop) => {
		initialProps[prop.name] = prop.value;
	});
	demoProps.forEach((prop) => {
		initialProps[prop.name] = prop.default ?? prop.type == 'string' ? 'Odd' : 42;
	})

	let currentDemoProps = $state(initialProps);
</script>

<h1>{name}</h1>

{#if oneline}
	<p>{oneline}</p>
{/if}

{#if hasChildren}
<svelte:component this={component} {...currentDemoProps}>
	Something
</svelte:component>
{:else}
<svelte:component this={component} {...currentDemoProps} />
{/if}

{@render children()}