#!/usr/bin/env -S deno run --allow-env --allow-read --allow-run
import {
    Confirm,
    Input,
} from 'https://deno.land/x/cliffy@v1.0.0-rc.4/prompt/mod.ts';

import chalk from 'npm:chalk';
import { simpleGit, SimpleGit } from 'npm:simple-git';


const git: SimpleGit = simpleGit();
const not_added = (await git.status()).not_added;


if (not_added.length) {
    console.log(`\n\n\nthe following files are not added:\n${chalk.gray(not_added.join('\n'))}\n\n`);

    for (const untrackedFile of not_added) {
        const message = chalk.green('add ') + chalk.gray(untrackedFile)
        const shouldAdd = await Confirm.prompt({ message, default: false });
        if (shouldAdd) git.add(untrackedFile);
    }
}


// const modified = (await git.status()).modified;

// if (modified.length) {
//     console.log(`\n\n\nthe following files are modified:\n${chalk.yellow(modified.join('\n'))}\n\n`);

//     for (const modifiedFile of modified) {
//         const message = chalk.green('commit ') + chalk.gray(modifiedFile)
//         const shouldAdd = await Confirm.prompt({ message, default: false });
//         if (shouldAdd) git.commit(await Input.prompt({ message: chalk.gray('commit message'), default: modifiedFile }), modifiedFile);
//     }
// }

const staged = (await git.status()).staged;

if (staged.length) {
    console.log(`\n\n\nthe following files are staged:\n${chalk.yellow(staged.join('\n'))}\n\n`);

    for (const modifiedFile of staged) {
        const message = chalk.green('commit ') + chalk.gray(modifiedFile)
        const shouldAdd = await Confirm.prompt({ message, default: false });
        if (shouldAdd) git.commit(await Input.prompt({ message: chalk.gray('commit message'), default: modifiedFile }), modifiedFile);
    }
}









