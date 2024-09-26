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

///////////////////

interface BaseFormFieldTemplate {
	name: string,
	label: string,
	type: unknown,
	description?: string,
	required?: boolean,
}

export interface TextFormFieldTemplate extends BaseFormFieldTemplate {
	type: 'email' | 'text' | 'url' | 'phone' | 'password',
	minCharacters?: number,
	maxCharacters?: number,
	pattern?: RegExp
}

export interface MarkdownFormFieldTemplate extends BaseFormFieldTemplate {
	type: 'markdown',
	minCharacters?: number,
	maxCharacters?: number,
	previewCallback?: (input: string) => Promise<string>,
}

export interface StaticFormFieldTemplate extends BaseFormFieldTemplate {
	type: 'static',
	hidden?: boolean,
}

export interface DateTimeFormFieldTemplate extends BaseFormFieldTemplate {
	type: 'datetime',
	intervalInSeconds?: number,
	beforeOrAt?: Date,
	atOrAfter?: Date,
}

export type FormFieldTemplate =
	TextFormFieldTemplate |
	MarkdownFormFieldTemplate |
	StaticFormFieldTemplate |
	DateTimeFormFieldTemplate;

// Don't know if we need this? Are we making individual components for fields?
// export interface BaseFormFieldProps<T> extends BaseFormFieldTemplate {
// 	value?: T,
// }