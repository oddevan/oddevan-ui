<script>
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
</script>

<style>
	div.total {
		margin: 1rem;
	}
</style>

<div class="total">
	<ModeWatcher />
	<slot></slot>
</div>