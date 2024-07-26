<script lang="ts">
	import type { Component, Snippet } from "svelte";

	interface ComponentDemoPageProps {
		name: string,
		oneline?: string,
		children: Snippet,
	}

	let { name, oneline, children }: ComponentDemoPageProps = $props();
</script>

<h1>{name}</h1>

{#if oneline}
	<p>{oneline}</p>
{/if}

<div class="prose">
	{@render children()}
</div>