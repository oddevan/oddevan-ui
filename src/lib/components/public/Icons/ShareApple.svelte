<script lang="ts">
	import type { IconProps } from "$lib/components/types.js";
	import BaseIcon from "./BaseIcon.svelte";

	let props: IconProps = $props();
</script>

<BaseIcon {...props}>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
		<path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
	</svg>	
	<!-- Icon from Heroicons (c) 2020 Refactoring UI Inc. used under license. https://github.com/tailwindlabs/heroicons/ -->
</BaseIcon>
