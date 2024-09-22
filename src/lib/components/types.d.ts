import type { Component, Snippet } from "svelte"

// https://stackoverflow.com/a/49725198
/**
 * Use:
 * 
 * interface BaseInterface {
 * 	 always: string,
 *   maybeOne?: string,
 *   maybeTwo?: string
 * }
 * 
 * // Will require 'always' and either 'maybeOne' or 'maybeTwo'
 * type PublicInterface = RequireAtLeastOne<BaseInterface, 'maybeOne' | 'maybeTwo'>
 */
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>> 
    & {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
    }[Keys]

export interface IconProps {
	alt?: string,
	size?: string,
};

export type MenuItemIcon = Component<IconProps> | string;
interface BaseMenuItem {
	icon?: MenuItemIcon,
	label: string,
	enabled?: boolean,
}

export interface LinkMenuItem extends BaseMenuItem {
	type: 'link',
	href: string,
}

export interface ActionMenuItem extends BaseMenuItem {
	type: 'action',
	action: () => void,
}

export interface Menu<T> extends BaseMenuItem {
	type: 'menu',
	items: MenuItem<T>[],
}

export type MenuItem<T> = T | Menu<T> | 'separator';