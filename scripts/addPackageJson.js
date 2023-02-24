/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

fs.readFile('package.json', 'utf8', (readErr, data) => {
  if (readErr) {
    console.log(readErr);
  }

  const packageJson = JSON.parse(data);

  const fieldsToDelete = ['scripts', 'devDependencies'];

  fieldsToDelete.forEach((field) => delete packageJson[field]);

  fs.writeFile(path.join(__dirname, '/../dist/package.json'), JSON.stringify(packageJson), (writeErr) => {
    if (writeErr) {
      console.log(writeErr);
    }
  });
});
