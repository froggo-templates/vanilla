# Vanilla

This project was created using the [Vanilla](https://github.com/froggo-templates/vanilla) froggo template.

## Scripts

- `dev`: Starts the development server on `localhost:8888`.
- `start`: Alias for `dev`.
- `build`: Builds the website for production.
- `build:imt`: Builds the website for InsureMyTrip.

## Project Structure

### Tree Diagram

```
project/
├─ src/
│  ├─ assets/
│  ├─ js/
│  ├─ public/
│  ├─ scss/
│  ├─ index.html
│  └─ main.js
├─ .babelrc
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ build-imt.js
├─ package.json
├─ postcss.config.js
├─ README.md
└─ webpack.config.js
```

### Key item(s)

- `src/public/`: Files placed in here will be served at `website.com/file`.
- `.babelrc`: Used for configuring Webpack's [babel-loader](https://webpack.js.org/loaders/babel-loader/).
- `postcss.config.js`: Used for configuring [PostCSS](https://postcss.org/).
- `webpack.config.js`: Used for configuring the [Webpack](https://webpack.js.org/) bundler.
