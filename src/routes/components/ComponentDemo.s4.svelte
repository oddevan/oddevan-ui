<script lang="ts">
	import type { SvelteComponent } from "svelte";

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
	}

	interface DemoProps {
		name: string,
		type: 'string'|'number',
		default?: string|number,
	};
	interface StaticProps {
		name: string,
		value: any,
	};

	export let name: string;
	export let oneline: string|undefined = undefined;
	export let demoProps: DemoProps[] = [];
	export let staticProps: StaticProps[] = [];
	export let hasChildren: boolean = false;

	let initialProps: Record<string, any> = {};
	staticProps.forEach((prop) => {
		initialProps[prop.name] = prop.value;
	});
	demoProps.forEach((prop) => {
		initialProps[prop.name] = prop.default ?? prop.type == 'string' ? 'Odd' : 42;
	})

	let currentDemoProps = initialProps;

	$: console.log({ name, oneline, demoProps, staticProps, hasChildren });
</script>

<h1>{name}</h1>

{#if oneline}
	<p>{oneline}</p>
{/if}

<!-- {#if hasChildren}
<svelte:component this={component} {...currentDemoProps}>
	Something
</svelte:component>
{:else}
<svelte:component this={component} {...currentDemoProps} />
{/if} -->

<slot/>