import type { LayoutLoad } from "./$types.js";
import { componentPages } from "./componentPageUtils.js";

export const load: LayoutLoad = () => {
	const componentPageList: Record<string, { title: string, subtitle?: string }> = {};
	Object.keys(componentPages).forEach((key) => {
		const mdComponent = componentPages[key];
		componentPageList[key] = {
			title: mdComponent.metadata.name ?? 'Unknown Component',
			subtitle: mdComponent.metadata.oneline ?? undefined,
		};
	});

	return { componentPageList };
}