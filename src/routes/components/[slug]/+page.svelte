<script lang="ts">
	let { data }: {data: PageData} = $props();
</script>

<svelte:component this={data.pageComponent}/>