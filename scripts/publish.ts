#!/usr/bin/env -S deno run -A

import { $$, $s } from 'shed/sced.ts';
$$`deno fmt`
$$`deno lint`
$$`deno test`
const gitStatus = $s`git status`

if (gitStatus.includes('nothing to commit')) {
    console.log('No changes to commit')
    Deno.exit(0)
}


