<script lang="ts">
	import type { IconProps } from "$lib/components/types.js";
	import BaseIcon from "./BaseIcon.svelte";

	let props: IconProps = $props();
</script>

<BaseIcon {...props}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
		<path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
	</svg>
	<!-- Icon from Heroicons (c) 2020 Refactoring UI Inc. used under license. https://github.com/tailwindlabs/heroicons/ -->
</BaseIcon>
