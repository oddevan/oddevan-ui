import type { Component } from "svelte"

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

export interface AppTabAvatarItem {
	href: string
	label: string
	src: string
};

export interface AppTabLinkItem {
	href: string
	label: string
	icon: Component
}

export interface AppTabActionItem {
	action: () => void
	label: string
	icon: Component
}

export interface MenuItem {
	icon?: Component
	label: string
	shortcut?: string
	href?: string
	action?: () => void
}

export type MenuEntry = MenuItem | 'separator' // | Menu

export interface Menu {
	icon?: Component
	label: string
	items: MenuEntry[]
}