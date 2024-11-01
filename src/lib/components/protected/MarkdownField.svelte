<script lang="ts">
	import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
	import type { MarkdownFormFieldTemplate } from '../types.js';
	import { Markdown } from '../public/Icons/index.js';

	interface MarkdownFieldProps extends MarkdownFormFieldTemplate {
		value?: string;
	}

	let { name, label, description, required, minCharacters, maxCharacters, ...restProps }: MarkdownFieldProps = $props();
</script>

<style>
	div.about-md {
		display: flex;
		justify-content: space-between;
	}

	sl-textarea::part(textarea) {
		background-color: var(--canvas);
		color: var(--on-canvas);
	}
</style>

<sl-textarea
	{name}
	{label}
	placeholder={description}
	{required}
	minlength={minCharacters}
	maxlength={maxCharacters}
	resize="auto"
>
	<div class="about-md" slot="help-text">
		<span>
			<i>_italic_</i>{" "}
			<b>**bold**</b>{" "}
			[<u>link</u>](//site/)
		</span>
		<Markdown size="1.5em" />
	</div>
</sl-textarea>