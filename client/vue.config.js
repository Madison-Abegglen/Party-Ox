module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    name: 'Party Ox',
    themeColor: '#66fcf1',
    workboxOptions: {
      swSrc: 'public/sw.js',
      swDest: 'sw.js',
      globPatterns: [
        /*eslint no-useless-escape: "off"*/
        '**\/*.{js,css,html,png}',
      ]
    }
  },

  lintOnSave: false
}