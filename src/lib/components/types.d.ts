import type { Component } from "svelte"

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

export type MenuEntry = MenuItem | 'separator' | Menu

export interface Menu {
	icon?: Component
	label: string
	items: [MenuEntry]
}