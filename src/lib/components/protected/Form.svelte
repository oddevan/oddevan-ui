<script lang="ts">
	import { serialize } from '@shoelace-style/shoelace/dist/utilities/form.js';
	import '@shoelace-style/shoelace/dist/components/input/input.js';
	import type { FormFieldTemplate } from '../types.js';
	import MarkdownField from './MarkdownField.svelte';

	interface FormProps {
		template: FormFieldTemplate[],
		action: (data: Record<string, unknown>) => Promise<void>,
	}

	let { template, action }: FormProps = $props();

	let formElement: HTMLFormElement|undefined;
	let busy = $state(false);

	$effect(() => {
		if (!formElement) return;

		const listener = async (event: FormDataEvent) => {
			if (formElement) {
				event.preventDefault();
				busy = true;
				await action(serialize(formElement));
				busy = false;
			}
		}

		formElement.addEventListener('formdata', listener);
		return () => formElement?.removeEventListener('formdata', listener);
	});
</script>

<style>

</style>

<form bind:this={formElement}>
	{#each template as field}
		{#if
			field.type == 'text' ||
			field.type == 'email' ||
			field.type == 'url' ||
			field.type == 'phone' ||
			field.type == 'password'
		}
			{@const { name, label, type, description, required, minCharacters, maxCharacters, pattern } = field}
			<sl-input
				type={type == 'phone' ? 'tel' : type}
				{name}
				{label}
				help-text={description}
				{required}
				{pattern}
				minlength={minCharacters}
				maxlength={maxCharacters}
				password-toggle="true"
			></sl-input>
		{:else if field.type == 'datetime'}
			{@const { name, label, description, required, intervalInSeconds, beforeOrAt, atOrAfter } = field}
			<sl-input
				type="datetime-local"
				{name}
				{label}
				help-text={description}
				{required}
				min={beforeOrAt}
				max={atOrAfter}
				step={intervalInSeconds}
			></sl-input>
		{:else if field.type == 'markdown'}
			<MarkdownField {...field} />
		{/if}
	{/each}
</form>