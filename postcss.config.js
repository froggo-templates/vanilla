module.exports = {
  plugins: [
    require('autoprefixer')({ grid: 'autoplace' }),
    require('postcss-minify')
  ]
}