const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/scythe-microapp/runtime.js',
    './dist/scythe-microapp/polyfills.js',
    './dist/scythe-microapp/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/scythe-microapp.js');
})()
