<script lang="ts">
  import { resetMode, setMode } from "mode-watcher";
	import DropdownMenu from "./DropdownMenu.svelte";
	import type { ActionMenuItem, Menu } from "../types.js";
	import { Lightbulb } from "./Icons/index.js";

  const menu: Menu<ActionMenuItem> = {
    type: 'menu',
    icon: Lightbulb,
    label: "Change color mode",
    items: [
      { type: 'action', label: 'System', action: () => resetMode() },
      { type: 'action', label: 'Always Light', action: () => setMode("light") },
      { type: 'action', label: 'Always Dark', action: () => setMode("dark") },
    ]
  };
</script>

<DropdownMenu {menu} hideLabel />