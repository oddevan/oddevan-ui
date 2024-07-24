<script lang="ts">
	import ComponentDemo from './ComponentDemo.svelte';
	import Button from '$lib/components/public/Button.svelte';

</script>

<h1>Component Demo Component</h1>

<p>So now let's try a demo...</p>

<ComponentDemo>
	<Button primary action={() => console.log('Button!')}>Button</Button>

<pre>
	Code...
</pre>
</ComponentDemo>
