<script lang="ts">
  import { resetMode, setMode, mode } from "mode-watcher";
	import type { ActionMenuItem, Menu } from "../types.js";
	import { Lightbulb } from "./Icons/index.js";

  import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
  import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
  import '@shoelace-style/shoelace/dist/components/divider/divider.js';

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

  let dropdownElement: HTMLElement;
  let icon: 'sun'|'moon'|'circle-half' = $derived($mode == 'dark' ? 'moon' : ($mode == 'light' ? 'sun' : 'circle-half'));

  $effect(() => {
    dropdownElement.addEventListener('sl-select', event => {
      const selectedItem = event.detail.item;
      switch (selectedItem.value) {
        case 'light':
          setMode('light');
          break;
        case 'dark':
          setMode('dark');
          break;
        default:
          resetMode();
          break;
      }
    });
  });
</script>

<style>
  sl-icon-button {
    color: var(--action);
  }
</style>

<sl-dropdown bind:this={dropdownElement} hoist>
  <sl-icon-button slot="trigger" label="Color mode" name={icon}></sl-icon-button>
  <sl-menu>
    <sl-menu-item value="light">Always Light</sl-menu-item>
    <sl-menu-item value="dark">Always Dark</sl-menu-item>
    <sl-divider></sl-divider>
    <sl-menu-item value="system">System</sl-menu-item>
  </sl-menu>
</sl-dropdown>