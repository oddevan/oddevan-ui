// Largely reverse-engineered from the shadcn-svelte components page
// https://github.com/huntabyte/shadcn-svelte/blob/main/sites/docs/src/routes/(app)/docs/%5B...slug%5D/%2Bpage.ts

import { error } from '@sveltejs/kit';
import { componentPages } from '../componentPageUtils.js';
import type { EntryGenerator, PageLoad } from './$types.js';

export const load: PageLoad = ({ params }) => {
	const { slug } = params;
	if (!componentPages[slug]) {
		console.log(componentPages);
		error(404);
	}
	return { pageComponent: componentPages[slug].default };
}

export const entries: EntryGenerator = () => {
	return Object.keys(componentPages).map((slug) => ({ slug }))
};
