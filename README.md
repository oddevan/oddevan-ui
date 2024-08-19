# oddEvan UI

Because [shadcn said to make my own](https://shadcn-svelte.com/). So I did.

Real talk: I love the way shadcn UI looks. I love what the shadcn-svelte people are doing and the projects they're building on top of. I want to start adopting Melt UI and Formsnap.

But I'm kinda all-done with Tailwind. I appreciate it for what it is and the problems that it solves, but Svelte's built-in scoped styles really does what I'm looking for, and I find `margin-block-end: 1em` more readable than `mb-4`.

So this is the worst of all possible worlds: Tailwind and shadcn components hiding behind some ham-fisted Svelte 5 with custom CSS. But the idea is to get really opinionated with the component APIs so that eventually I can remove Tailwind from the shadcn components. Or just use the [Bits UI](https://www.bits-ui.com/) primitives. Or just use the [Melt UI](https://melt-ui.com) builders.

Anyway, this is more of an experiment than anything else. No idea if this will actually be useful to anyone, including myself. Use at your own (very substantial!) risk.

## To install

As much as I'd love to say "just add the dependency and go", it's currently a little more involved:

### Create a new SvelteKit app using Typescript and Svelte 5

Open a command prompt and run the following command, replacing `myapp` with the folder your app should be created in.

    npm create svelte@latest myapp

Be sure to select both the Typescript and Svelte 5 options when they are presented.

### Install Tailwind

Navigate into the project and add Tailwind:

    cd myapp
    npx svelte-add@latest tailwindcss

### Add oddEvan UI

~~Add the oddEvan UI package:~~ (not on NPM yet!)

    npm add @oddevan/ui

Replace the `app.css` file created by Tailwind with this:

```css
@import '@oddevan/ui/oddevan.css';
```

Once that is complete, replace `tailwind.config.ts` with this:

```typescript
import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/@oddevan/ui/dist/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	plugins: [],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
};

export default config;

```

## License

Copyright 2024 Evan Hildreth

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this project except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
