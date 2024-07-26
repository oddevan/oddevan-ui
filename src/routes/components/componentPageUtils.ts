import type { Component } from "svelte";

type MarkdownComponent = { default: Component, metadata: Record<string, string> };

export const componentPages =
	(() => {
		const glob: Record<string, MarkdownComponent> = import.meta.glob('/src/component_writeups/**/*.svx', { eager: true });
		const finalList: Record<string, MarkdownComponent> = {};
		Object.keys(glob).forEach((path) => {
			finalList[path.substring(24, path.length - 4)] = glob[path];
		});
		return finalList;
	})();