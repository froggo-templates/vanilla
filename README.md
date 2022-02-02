# Vanilla

This project was created using the [Vanilla](https://github.com/froggo-templates/vanilla) froggo template.

## Scripts

+ `dev`: Starts the `dev` server on `localhost:8888`.
+ `start`: Alias for `dev`.
+ `build`: Builds the website for production.

## Project Structure

### Tree Diagram

```
project/
├─ src/
│  ├─ _partials/
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
├─ package.json
├─ README.md
└─ rollup.config.js
```

### Key item(s)

+ `src/_partials/`: HTML/Nunjucks snippets to be used via `{% include "name.njk" %}`.
+ `src/public/`: Files placed in here will be served at `website.com/file`.
+ `.eleventy.js`: Used for configuring the 11ty dev server/build process.
+ `rollup.config.js`: Used for configuring JS/SCSS bundling.
