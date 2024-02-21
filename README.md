# Developing GetsYouJob frontend app

This documentation covers most of the parts required to get started on the development of GetsYouJob.

# Setting Up Development

## Engines

1. Node Js (v18 and above)
2. pnpm (v7 and above) or npm or yarn

Note: If you want to use yarn or npm, enable them by specifying the versions in "engines" of `package.json` file.

## Formatting

1. Prettier
   For prettier, edit your settings on your editor to format the document using `.prettierrc` before saving.

2. Eslint
   For setting and editing eslint rules, update eslintrc.json file.

## Git hooks

### Husky

1.  Pre-commit hook : Before committing,

```sh
npx lint-staged
```

is run to check type errors, lint and format the documents.It uses the scripts: npm run lint and npm run format of package.json file.

2. Commit message hook : This hook is for making commit message of dev team uniform. Check out `commitlint.config.js` file for commit message rules.

   #### example

   for things that affects whole build of project, like adding new package:

   ```sh
   git commit -m "build: added react-icons"
   ```

   while adding a new feature:

   ```sh
   git commit -m "feat: implemented profile edit form"
   ```

3. Pre-push hook : Before pushing,

```sh
pnpm build
```

is run to check if build is successful so that no broken code is pushed i.e. if build is unsuccessful code is not pushed.

## Development Guidelines

### CSS and UI

1. tailwindcss

### Other Packages

1. react-icons : for icons(icons from figma design if necessary)
2. clsx and tailwind-merge : forms cn util for conditionally merging classnames together

#### Forms

1. Form library: [react-hook-form](https://react-hook-form.com/)
2. Validation: [zod](https://zod.dev/)

ch page inside Pages directory.

### Installing packages

1. Install your package :

```sh
pnpm add package_name
```

2. Install your package as dev-dependency:

```sh
pnpm add -D package_name
```

## Running the project in local server

1. Clone the project.

```sh
git clone <project-url>
```

2.(OPTIONAL if you want to run main branch): Switch to the required git branch.

```sh
git switch <branch-name>
```

3. Install the dependencies.

```sh
pnpm install
```

1. Run the project locally.

```sh
pnpm dev
```
