<script lang="ts">
  import { resetMode, setMode } from "mode-watcher";
	import DropdownMenu from "./DropdownMenu.svelte";
	import type { Menu } from "../types.js";
	import { Lightbulb } from "./Icons/index.js";

  const menu: Menu = {
    icon: Lightbulb,
    label: "Change color mode",
    items: [
      { label: 'System', action: () => resetMode() },
      { label: 'Always Light', action: () => setMode("light") },
      { label: 'Always Dark', action: () => setMode("dark") },
    ]
  };
</script>

<DropdownMenu {menu} hideLabel />