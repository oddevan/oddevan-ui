<script lang="ts">
	import type { Snippet } from "svelte";
	import hljs from 'highlight.js/lib/core';
	import svelte from 'highlight.js/lib/languages/svelte';
	import 'highlight.js/styles/github.css';
	
	hljs.registerLanguage('svelte', svelte);

	interface ComponentDemoProps {
		children: Snippet
	}

	let { children }: ComponentDemoProps = $props();
</script>

<style>
	.demo {
		border: 1px solid hsl(var(--border));
		border-radius: var(--radius);
	}
</style>

<div class="demo">
	{@render children()}
</div>
