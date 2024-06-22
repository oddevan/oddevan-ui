<script lang="ts">
	import Button from "$lib/components/public/Button.svelte";
	import Card from "$lib/components/public/Card.svelte"
	import { Textarea } from "$lib/components/ui/textarea/index.js";
</script>

<div class="max-w-xs">	
	<Card title="New Note">
		<Textarea placeholder="What's going on?" />
		{#snippet footer()}
			<div class="flex w-full justify-end">
				<Button primary>Post</Button>
			</div>
		{/snippet}
	</Card>
</div>