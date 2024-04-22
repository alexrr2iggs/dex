
import { assertEquals } from 'std/assert/assert_equals.ts';
import { describe, it } from 'std/testing/bdd.ts';
import { parseCommand } from 'utils/command_parser.ts';






describe('Command parser', () => {

    // /**
    //  * parse the comand and the arguments.
    //  * example:
    //  * ```ts
    //  * const { cmd, args } = parseComand('deno run -A ./src/sced.ts -h');
    //  * // cmd = 'deno'
    //  * // args = ['run', '-A', './src/sced.ts', '-h']
    //  * ```
    //  * @param command 
    //  * @returns 
    //  */
    // export function parseCommand(command: string): Command {
    //     const comandTokens = command.split(/\s+/g);
    //     const cmd = comandTokens.shift();

    //     if (!cmd) {
    //         throw new MalformedComand('malformed comand: ' + command);
    //     }

    //     return { cmd, args: comandTokens };
    // }

    describe('exeToBytes', () => {
        it('it should parse the command', () => {
            const strCommand = `printf hello`;
            const command = parseCommand(strCommand);

            assertEquals(command, { cmd: 'printf', args: ['hello'] })
        });
    });
});




