/* eslint-disable no-console */
import { execSync } from 'child_process';

execSync('ts-node-esm ./scripts/build.ts');

try {
  execSync('npm publish', { cwd: './dist' });
} catch (error) {
  console.log(error);
}
