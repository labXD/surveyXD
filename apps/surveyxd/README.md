# SurveyXD

## Getting Started

### Prerequisites

- Ensure you have planetscale cli installed
  - you will need to labxd planetscale account to access the database
- Use `nvm` to ensure you have the correct `node.js` runtime
- Enable corepack by running `corepack enable`

### Working with gustXD

We build our UI components in `gustXD` and link them to this project while
developing. You will need to link both projects locally.

- In the terminal, go to gustxd (project level, not root level)
  - `pnpm link --global`
    - this will create a symlink to gustXD in the global pnpm `node_modules`
      folder
- Go to surveyxd (project level, not root level or it will install the package
  at the root level)
  - `pnpm link --global @labxd/gustxd`
    - this will symlink to gustXD in the local `node_modules` folder

### Run development server

```bash
pnpm run dev
```

### Modules

We develop mostly in `modules`. All modules are located in
[`apps/surveyxd/src/modules`](modules.md)
