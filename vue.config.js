module.exports = {
  pwa: {
    name: 'Star Wars - Planets Quiz',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      importScripts: ['/precache-sw.js'],
      skipWaiting: true
    }
  }
}
