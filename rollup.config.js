import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

import sass from 'rollup-plugin-sass'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

const __DEV__ = !!process.env.ROLLUP_WATCH

module.exports = {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    sass({
      output: 'dist/assets/app.css',
      options: {
        outputStyle: __DEV__ ? 'expanded' : 'compressed'
      },
      processor: (css) =>
        postcss([autoprefixer({ grid: 'autoplace' })])
          .process(css, { from: undefined })
          .then((result) => result.css)
    }),
    json(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              browsers: ['last 2 versions', 'ie >= 11']
            }
          }
        ]
      ]
    }),
    terser()
  ]
}
