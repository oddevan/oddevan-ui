<script lang="ts">
  import { Input } from "$lib/components/ui/input/index.js";

	interface InputProps {
		name: string,
		label: string,
		value: any,
		type?: 'text' | 'email' | 'password' | 'time',
	}

	let { name, label, value = $bindable(), type = 'text' }: InputProps = $props();
</script>

<Input {name} {value} {type} placeholder={label} />
