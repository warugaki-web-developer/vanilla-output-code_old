const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite')

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: '.11ty-vite', // Default name of the temp folder

    // Options passed to the Eleventy Dev Server
    // e.g. domdiff, enabled, etc.
    // Added in Vite plugin v2.0.0-canary.2
    serverOptions: {},

    // Defaults are shown:
    viteOptions: {
      clearScreen: false, // https://ja.vitejs.dev/config/shared-options.html#clearscreen
      server: {
        mode: 'development',
        middlewareMode: true,
      },
      build: {
        mode: 'production',
      },
    },
  })

  return {
    templateFormats: ['njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    pathPrefix: './',
    dir: {
      input: 'src',
      output: 'build',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  }
}
