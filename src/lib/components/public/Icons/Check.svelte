<script lang="ts">
	import type { IconProps } from "$lib/components/types.js";
	import BaseIcon from "./BaseIcon.svelte";

	let props: IconProps = $props();
</script>

<BaseIcon {...props}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
		<path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
	</svg>
<!-- Icon from Heroicons (c) 2020 Refactoring UI Inc. used under license. https://github.com/tailwindlabs/heroicons/ -->
</BaseIcon>