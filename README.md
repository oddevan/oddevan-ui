# oddEvan UI

Because [shadcn said to make my own](https://shadcn-svelte.com/). So I did.

Real talk: I love the way shadcn UI looks. I love what the shadcn-svelte people are doing and the projects they're building on top of. I want to start adopting Melt UI and Formsnap.

But I'm kinda all-done with Tailwind. I appreciate it for what it is and the problems that it solves, but Svelte's built-in scoped styles really does what I'm looking for, and I find `margin-block-end: 1em` more readable than `mb-4`.

So this is the worst of all possible worlds: Tailwind and shadcn components hiding behind some ham-fisted Svelte 5 with custom CSS. But the idea is to get really opinionated with the component APIs so that eventually I can replace the shadcn components with just... components.

Anyway, this is more of an experiment than anything else. Use at your own (very substantial!) risk.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
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