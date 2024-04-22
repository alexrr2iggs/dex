#!/usr/bin/env -S deno run -A

import * as denoConf from '../deno.json' with { type: 'json' };
import { $$, $s } from '../src/sced.ts';

const version = denoConf.default.version;
const tagName = `v${version}`;
console.log(`\n\npublishing version `, version, '\n');

console.log('formatting...')
$$`deno fmt`

console.log('linting...')
$$`deno lint`

console.log('testing...')
$$`deno test -A`


const gitStatus = $s`git status`
if (!gitStatus.includes('Your branch is up to date') || !gitStatus.includes('nothing to commit')) {
    $$`git status`

    console.log('\nPlease commit your changes before publishing');

    Deno.exit(1);
}


$$`deno task mkreadme`;
console.log('exitcode', $$`git commit -a -m "mkreadme"`);
$$`git push`;

$$`git tag -a ${tagName}  -m ${tagName}`;
$$`git push origin ${tagName}`;
console.log(`\n\nversion ${version} successfully published`);
