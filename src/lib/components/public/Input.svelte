<script lang="ts">
  import { Input } from "$lib/components/ui/input/index.js";

	interface InputProps {
		label: string,
		value: any,
		[x: string]: any,
	}

	let { label, value = $bindable(), ...restProps }: InputProps = $props();
</script>

<Input {value} placeholder={label} {...restProps} />
