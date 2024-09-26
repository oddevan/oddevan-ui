<script lang="ts">
	import { serialize } from '@shoelace-style/shoelace/dist/utilities/form.js';
	import '@shoelace-style/shoelace/dist/components/input/input.js';
	import type { FormFieldTemplate } from '../types.js';
	import MarkdownField from './MarkdownField.svelte';
	import Button from '../public/Button.svelte';
	import ButtonBar from '../public/ButtonBar.svelte';
	import Card from '../public/Card.svelte';

	interface FormProps {
		template: FormFieldTemplate[],
		action: (data: Record<string, unknown>) => Promise<void>,
	}

	let { template, action }: FormProps = $props();

	let formElement: HTMLFormElement|undefined;
	let busy = $state(false);
	let error: string|false = $state(false);

	$effect(() => {
		if (!formElement) return;

		const listener = async (event: SubmitEvent) => {
			if (formElement) {
				event.preventDefault();
				error = false;
				busy = true;
				await action(serialize(formElement)).
					catch((exp) => {
						if (typeof exp === 'string') {
							error = exp;
						} else {
							throw exp;
						}
					});
				busy = false;
			}
		}

		formElement.addEventListener('submit', listener);
		return () => formElement?.removeEventListener('submit', listener);
	});
</script>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	@container (min-width: 30rem) {
		form :global(sl-input), form :global(sl-textarea) {
			:global(&::part(form-control)) {
				display: grid;
				grid: auto / 10em 1fr;
				gap: .25em 1em;
				align-items: center;
			}

			:global(&::part(form-control-label)) {
				text-align: right;
			}

			:global(&::part(form-control-help-text)) {
				grid-column-start: 2;
			}
		}
	}
</style>

<Card>
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
				password-toggle={type == 'password' ? true : undefined}
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
	<ButtonBar>
		<Button primary disabled={busy}>Submit</Button>
	</ButtonBar>
</form>
</Card>