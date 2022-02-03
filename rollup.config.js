import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from 'rollup-plugin-replace'

const ie11Plugins = [
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage',
          corejs: 3,
          targets: {
            browsers: ['last 2 versions', 'ie >= 11']
          }
        }
      ]
    ]
  }),
  nodeResolve(),
  commonjs()
]

module.exports = {
  input: 'src/main.js',
  output: { file: 'dist/bundle.js', format: 'cjs' },
  plugins: [
    json(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    // ...ie11Plugins /* uncomment to support IE11 */,
    terser()
  ]
}
