<picture><source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/17180392/207114528-fccf0ae7-e1ed-482a-8c19-c805a9a3b5f2.svg"><source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/17180392/207114528-fccf0ae7-e1ed-482a-8c19-c805a9a3b5f2.svg"><img src="https://user-images.githubusercontent.com/17180392/207114528-fccf0ae7-e1ed-482a-8c19-c805a9a3b5f2.svg" height=32></picture><picture><source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/11247099/112722104-819b8a80-8f42-11eb-82f5-dfc2dd5d8a77.png"><source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/11247099/112722104-819b8a80-8f42-11eb-82f5-dfc2dd5d8a77.png"><img src="https://user-images.githubusercontent.com/11247099/112722104-819b8a80-8f42-11eb-82f5-dfc2dd5d8a77.png" height=32 align=center></picture> **Table of Contents**

# Node.js + TypeScript Starter

## Key Features

- <picture><source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/17180392/211619716-8630ae1a-e5ea-424f-87a6-f3188edae821.svg"><source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/17180392/211619716-8630ae1a-e5ea-424f-87a6-f3188edae821.svg"><img src="https://user-images.githubusercontent.com/17180392/211619716-8630ae1a-e5ea-424f-87a6-f3188edae821.svg" height=19.2 align=center></picture> [TypeScript](https://www.typescriptlang.org/) support
- :tornado: Blazing fast bundling with [esbuild](https://esbuild.github.io/)
- :zap: Crazy fast linting and formatting with [Rome](https://rome.tools/)
- :cyclone: Live Reload
- :mag: Debugging
- :sparkles: ES Modules

## Prerequisites

- Node.js `>=18.11.0` (for the [watch mode](https://nodejs.org/en/blog/release/v18.11.0/))
  - **[pnpm (recommended)](https://pnpm.io/cli/env)**
  - [Volta](https://docs.volta.sh/guide/getting-started)
  - [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
  - [Official installer](https://nodejs.org/en/download/)
  - System package manager
  - [From source](https://github.com/nodejs/node/blob/main/BUILDING.md)

## Getting Started

1.  **[Use this template](https://github.com/dayblox/node-ts/generate)**

2.  **Clone** the repository

3.  **Install** dependencies

    ```sh
    pnpm i
    ```

4.  Create environment file **`env.ts`** at the root

    ```ts
    process.env = {
      ...process.env,
      PORT: "80",
    };
    ```

## Usage

1.  **Development** mode (**debug**)

    ```sh
    pnpm dev
    ```

2.  **Production** build

    ```sh
    pnpm build && pnpm start
    ```
