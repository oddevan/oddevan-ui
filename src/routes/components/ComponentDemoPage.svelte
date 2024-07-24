<script lang="ts">
	import type { Component, Snippet } from "svelte";

	interface ComponentDemoProps {
		name: string,
		oneline?: string,
		children: Snippet,
	}

	let { name, oneline, children }: ComponentDemoProps = $props();
</script>

<h1>{name}</h1>

{#if oneline}
	<p>{oneline}</p>
{/if}

{@render children()}