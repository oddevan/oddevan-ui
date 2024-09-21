<script lang="ts">
	import ListItem from '$lib/components/public/ListItem.svelte';
	import type { PageData } from './$types.js';

	let { data }: {data: PageData} = $props();
</script>

<h1>Components</h1>

<p>It would be kinda hard to have a component library without components, right?</p>

<ul>
	{#each Object.keys(data.componentPageList) as slug}
	{@const pageMeta = data.componentPageList[slug]}
	<li><a href={`/components/${slug}`}>
		<ListItem {...pageMeta} />
	</a></li>
	{/each}
</ul>