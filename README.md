# Node.js + TypeScript Starter

![](../../actions/workflows/ci.yml/badge.svg)

[![](https://railway.app/button.svg)](https://railway.app/template/8AWlL5?referralCode=bonus)

## Key Features

- [<img src="https://user-images.githubusercontent.com/17180392/211619716-8630ae1a-e5ea-424f-87a6-f3188edae821.svg" height=19.2 align=center /> TypeScript](https://www.typescriptlang.org/)
  - [Typed environment variables](dev.ts)
  - [TypeScript & JavaScript compatibility](https://www.typescriptlang.org/tsconfig#allowJs)
  - [ES Modules & CommonJS compatibility](https://esbuild.github.io/api/#format-commonjs)
- [<img src="https://user-images.githubusercontent.com/124377191/228204788-98a151c8-fc70-4dac-a966-4be6513aafc6.png" height=19.2 align=center /> Node.js](https://nodejs.org/)
  - [Live Reload](https://nodejs.org/en/blog/release/v18.11.0)
  - [Debugging](https://nodejs.org/en/docs/guides/debugging-getting-started)
- [<img src="https://user-images.githubusercontent.com/124377191/228203400-d65b9566-d92e-48b1-9b46-9aa95c05fb21.svg" height=19.2 align=center /> esbuild](https://esbuild.github.io/)
  - [Fast bundling](https://esbuild.github.io/faq/#benchmark-details)
  - [Fast transpiling](https://esbuild.github.io/faq/#benchmark-details)
- [<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/17180392/266780371-74b32ff7-5cc3-45e1-af80-923a05c9f87b.svg" height=19.2 align=center /> Biome](https://biomejs.dev/)
  - [Fast linting](https://github.com/biomejs/biome/tree/main/benchmark#linting)
  - [Fast formatting](https://github.com/biomejs/biome/tree/main/benchmark#formatter)
  - [Import sorting](https://biomejs.dev/analyzer/#imports-sorting)
- [<img src="https://user-images.githubusercontent.com/124377191/228447757-78408c15-e914-4fb3-9135-f1ff45ee3fce.svg" height=19.2 align=center /> GitHub](https://github.com)
  - [One click template](https://github.com/dayblox/node-ts/generate)
  - [Continuous Integration with dependency caching](.github/workflows/ci.yml)

## Prerequisites

- [<img src="https://user-images.githubusercontent.com/124377191/228203877-9975d517-140a-491d-80f5-9cca049143a6.svg" height=19.2 align=center /> pnpm](https://pnpm.io/installation) `>=7.27.0`
  - [Running multiple scripts in parallel](https://pnpm.io/cli/run#running-multiple-scripts)
  - [Automatic Node.js version management](https://pnpm.io/npmrc#use-node-version)

## Getting Started

1.  **[Deploy on Railway](https://railway.app/template/8AWlL5?referralCode=bonus)** or **[use this template](https://github.com/dayblox/node-ts/generate)**

2.  **Clone** the repository

3.  **Install** dependencies

    ```sh
    pnpm i
    ```

4.  Create environment file `env.ts` at the root

    ```ts
    export default {
      PORT: "3000",
    };
    ```

    #

    _Optionally_ typecheck environment with `zod`

    ```ts
    import { z } from "zod";

    z.object({
      PORT: z.coerce.number(),
      URL: z.string().url(),
      UUID: z.string().uuid(),
      EMAIL: z.string().email().optional(),
    }).parse(process.env);
    ```

## Usage

- **Development** mode (**debug**)

  ```sh
  pnpm dev
  ```

- **Production** build

  ```sh
  pnpm build && pnpm start
  ```
