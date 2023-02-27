/* eslint-disable no-console */
import { execSync } from 'child_process';

execSync('yarn build');

try {
  execSync('npm publish', { cwd: './dist' });
} catch (error) {
  console.log(error);
}
