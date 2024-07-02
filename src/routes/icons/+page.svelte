<script lang="ts">
	import * as Icons from '$lib/components/public/Icons';
</script>

<style>
	.logo-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
		gap: .5em;
	}

	.logo-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 4rem;
	}
</style>

<h1>Icons</h1>

<p>Assembled mostly from <a href="https://heroicons.com/solid">Heroicons</a> with brand support from
	<a href="https://github.com/FortAwesome/Font-Awesome">Font Awesome</a>.</p>

<div class="logo-grid">
	{#each Object.keys(Icons) as iconName }
		<span class="logo-item">
			<span><svelte:component this={Icons[iconName]} size="3em" /></span>
			<span>{iconName}</span>
		</span>
	{/each}
</div>