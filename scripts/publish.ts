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


/**
 * On branch main
Your branch is ahead of 'origin/main' by 3 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
 */