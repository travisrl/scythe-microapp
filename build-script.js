const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/iframe-microapp/runtime.js',
    './dist/iframe-microapp/polyfills.js',
    './dist/iframe-microapp/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/iframe-microapp.js');
})()
