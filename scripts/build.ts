import { execSync } from 'child_process';

execSync('rm -rf dist');

execSync('rollup -c');

execSync('ts-node-esm ./scripts/addPackageJson.ts');
