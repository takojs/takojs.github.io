import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Tako",
  description: "Tako - a CLI framework that works on any JavaScript runtime",
  themeConfig: {
    socialLinks: [
      { icon: "jsr", link: "https://jsr.io/@takojs/tako" },
      { icon: "npm", link: "https://www.npmjs.com/package/@takojs/tako" },
      { icon: "github", link: "https://github.com/takojs/tako" },
    ],
    footer: {
      message: "This project is licensed under the MIT License.",
      copyright: "Copyright © 2025 Takuro Kitahara and Tako contributors",
    },
  },
});
