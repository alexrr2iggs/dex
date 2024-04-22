#!/usr/bin/env -S deno run --allow-read --allow-write

import { getTagVersion } from './utils.ts';

console.log('\n\nmaking docs...\n');
const docTemplate = Deno.readTextFileSync('README.template.md');
const version = getTagVersion();

const doc = docTemplate
    .replaceAll('${{version}}', version);


Deno.writeTextFileSync('README.md', doc);

console.log('\ndocs done');
