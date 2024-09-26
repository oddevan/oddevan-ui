<script lang="ts">
  // import { resetMode, setMode } from "mode-watcher";
	import DropdownMenu from "./DropdownMenu.svelte";
	import type { ActionMenuItem, Menu } from "../types.js";
	import { Lightbulb } from "./Icons/index.js";

  const menu: Menu<ActionMenuItem> = {
    type: 'menu',
    icon: Lightbulb,
    label: "Change color mode",
    items: [
      { type: 'action', label: 'System', action: () => console.log('action') }, // resetMode() },
      { type: 'action', label: 'Always Light', action: () => console.log('action') }, // setMode("light") },
      { type: 'action', label: 'Always Dark', action: () => console.log('action') }, // setMode("dark") },
    ]
  };
</script>

<DropdownMenu {menu} hideLabel />