import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const data = fs.readFileSync('package.json', 'utf8');
const packageJson = JSON.parse(data);
const fieldsToDelete = ['type', 'scripts', 'dependencies', 'devDependencies'];

fieldsToDelete.forEach((field) => delete packageJson[field]);

const pathToSave = path.join(_dirname, '..', 'dist', 'package.json');

fs.writeFileSync(pathToSave, JSON.stringify(packageJson));
