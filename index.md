---
layout: home

hero:
  name: Tako
  text: CLI framework
  tagline: Node.js, Deno, and Bun
  image:
    src: https://avatars.githubusercontent.com/u/243801156
    alt: logo
  actions:
    - theme: brand
      text: README.md
      link: https://github.com/takojs/tako/blob/main/README.md
    - theme: alt
      text: motivation.md
      link: https://github.com/takojs/tako/blob/main/motivation.md
    - theme: alt
      text: Roadmap
      link: https://github.com/takojs/tako/issues/1

features:
  - icon: 🌐
    title: Cross-runtime
    details: Works seamlessly with Node.js, Deno, and Bun.
  - icon: 🔒
    title: Type-safe by Design
    details: Built with TypeScript for excellent type inference and a great developer experience.
  - icon: 🆘
    title: Automatic Help Generation
    details: Creates beautiful and informative help messages from your code.
  - icon: 🔗
    title: Middleware Support
    details: Chain command handlers to create clean, modular logic.
  - icon: ✨
    title: Simple & Elegant API
    details: A minimal API that is easy to learn and a pleasure to use.
  - icon: 🪶
    title: Lightweight
    details: Tiny and with zero dependencies.
---

::: code-group

```bash [npm]
npm install @takojs/tako
```

```bash [yarn]
yarn add @takojs/tako
```

```bash [pnpm]
pnpm add @takojs/tako
```

```bash [deno]
deno add jsr:@takojs/tako
```

```bash [bun]
bun add @takojs/tako
```

:::

::: code-group

```javascript [main.mjs]
import { Tako } from "@takojs/tako";

const tako = new Tako();

await tako.cli({}, (c) => c.print({ message: crypto.randomUUID() }));
```

```typescript [main.mts]
import { Tako } from "@takojs/tako";

const tako = new Tako();

await tako.cli({}, (c) => c.print({ message: crypto.randomUUID() }));
```

```typescript [main.ts]
import { Tako } from "jsr:@takojs/tako";

const tako = new Tako();

await tako.cli({}, (c) => c.print({ message: crypto.randomUUID() }));
```

:::
