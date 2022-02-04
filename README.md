# Vanilla

This project was created using the [Vanilla](https://github.com/froggo-templates/vanilla) froggo template.

## Scripts

+ `dev`: Starts the `dev` server on `localhost:8888`.
+ `start`: Alias for `dev`.
+ `build`: Builds the website for production.
+ `build:imt`: Builds the website for InsureMyTrip.
+ `clean`: Removes the `dist/` directory.
+ `watch:*`: Compiles respective files to `dist/` upon file changes.
+ `build:*`: Compiles respective files to `dist/` and optimises for production.

## Project Structure

### Tree Diagram

```
project/
├─ src/
│  ├─ _partials/
│  ├─ _template-data/
│  ├─ assets/
│  ├─ js/
│  ├─ public/
│  ├─ scss/
│  ├─ index.html
│  └─ main.js
├─ .eleventy.js
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ build-imt.js
├─ package.json
├─ postcss.config.js
├─ README.md
└─ rollup.config.js
```

### Key item(s)

+ `src/_partials/`: Nunjucks snippets to be used via `{% include "name.njk" %}`.
+ `src/_template-data/`: JS(ON) which is globally available in Nunjucks templates.
+ `src/public/`: Files placed in here will be served at `website.com/file`.
+ `.eleventy.js`: Used for configuring the 11ty dev server/build process.
+ `built-imt.js`: Used to prepare `dist/` contents for InsureMyTrip.
+ `postcss.config.js`: Used for configuring [PostCSS](https://postcss.org/).
+ `rollup.config.js`: Used for configuring the [Rollup](https://rollupjs.org/guide/en/) bundler.
