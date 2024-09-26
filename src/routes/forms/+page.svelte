<script lang="ts">
	import Form from "$lib/components/protected/Form.svelte";
	import type { FormFieldTemplate } from "$lib/index.js";

  const formTemplate: FormFieldTemplate[] = [
    { type: 'text', name: 'text', label: 'Title', required: true },
    { type: 'email', name: 'email', label: 'Email', required: true },
    { type: 'url', name: 'url', label: 'Homepage' },
    { type: 'phone', name: 'phone', label: 'Phone' },
    { type: 'password', name: 'password', label: 'Passsword' },
		{ type: 'datetime', name: 'pubdate', label: 'Published at', beforeOrAt: new Date()},
    { type: 'markdown', name: 'body', label: 'Body', description: 'What\'s going on?' },
  ];

  const formAction = (data: unknown) => {
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    return delay(5000).then(() => console.log(data));
  }
</script>

<div>
	<Form template={formTemplate} action={formAction} />
</div>
