# oddEvan UI

Because [shadcn said to make my own](https://shadcn-svelte.com/). So I did.

Real talk: I love the way shadcn UI looks. I love what the shadcn-svelte people are doing and the projects they're building on top of. I want to start adopting Melt UI and Formsnap.

But I'm kinda all-done with Tailwind. I appreciate it for what it is and the problems that it solves, but Svelte's built-in scoped styles really does what I'm looking for, and I find `margin-block-end: 1em` more readable than `mb-4`.

So this is the worst of all possible worlds: Tailwind and shadcn components hiding behind some ham-fisted Svelte 5 with custom CSS. But the idea is to get really opinionated with the component APIs so that eventually I can remove Tailwind from the shadcn components. Or just use the [Bits UI](https://www.bits-ui.com/) primitives. Or just use the [Melt UI](https://melt-ui.com) builders.

Anyway, this is more of an experiment than anything else. No idea if this will actually be useful to anyone, including myself. Use at your own (very substantial!) risk.

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
