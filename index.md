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

```bash
npm install @takojs/tako
```

```typescript
import { Tako } from "@takojs/tako";

const tako = new Tako();

tako.cli({}, (c) => c.print({ message: crypto.randomUUID() }));
```
