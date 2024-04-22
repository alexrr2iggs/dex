#!/usr/bin/env -S deno run -A

import { $$ } from 'shed/sced.ts';
import * as denoConf from '../deno.json' with { type: 'json' };

const version = denoConf.default.version;
const tagName = `v${version}`;
console.log(`Publishing version `, version);

$$`deno fmt`
$$`deno lint`
$$`deno test -A`
//  const gitStatus = $s`git status`

// if (!gitStatus.includes('Your branch is up to date') || !gitStatus.includes('nothing to commit')) {
//     $$`git status`

//     console.log('\nPlease commit your changes before publishing');

//     Deno.exit(1);
// }


$$`git tag -a ${tagName}  -m v${tagName}`;
$$`git push origin ${tagName}`;