/* eslint-disable no-console */
const { execSync } = require('child_process');

execSync('rm -rf dist');

execSync('rollup -c', (err, stderr) => {
  if (err) {
    console.log(stderr);
  }
});

execSync('node ./scripts/addPackageJson.js');
