#!/usr/bin/env -S deno run -A

import { $$, $s } from 'shed/sced.ts';
$$`deno fmt`
$$`deno lint`
$$`deno test -A`
const gitStatus = $s`git status`

if (!gitStatus.includes('Your branch is up to date') || !gitStatus.includes('nothing to commit')) {
    $$`git status`

    console.log('\nPlease commit your changes before publishing');
    Deno.exit(1);
}
