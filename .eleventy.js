/* 11ty Configuration */

module.exports = function (config) {
  // reload on file changes
  config.addWatchTarget('./src')

  // copy assets into dist/assets/, except json files
  config.addPassthroughCopy('src/assets/**/*.!(json)')

  // copy public assets into dist/
  config.addPassthroughCopy({ 'src/public/!(*.gitkeep)': '.' })

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_partials'
    }
  }
}
