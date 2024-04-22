
import { assertEquals } from 'std/assert/assert_equals.ts';
import { describe, it } from 'std/testing/bdd.ts';
import { parseTemplate } from 'utils/template.ts';






describe('template', () => {

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

    describe('parse template', () => {
        it('without expression', () => {
            const parsed = parseTemplate`test`;
            assertEquals(parsed, 'test');
        });

        it('without template', () => {
            const parsed = parseTemplate`${'test'}`;
            assertEquals(parsed, 'test');
        });

        it('with expression after', () => {
            const parsed = parseTemplate`test ${'after'}`;
            assertEquals(parsed, 'test after');
        });

        it('with expression before', () => {
            const parsed = parseTemplate`${'before'} test`;
            assertEquals(parsed, 'before test');
        });

        it('template between expression ', () => {
            const parsed = parseTemplate`${'before'} test ${'after'}`;
            assertEquals(parsed, 'before test after');
        });

        it('expression between template', () => {
            const parsed = parseTemplate`before ${'test'} after`;
            assertEquals(parsed, 'before test after');
        });

        it('multiple expressions', () => {
            const parsed = parseTemplate`before ${'test'} ${'after'}`;
            assertEquals(parsed, 'before test after');
        });

        it('only expressions', () => {
            const parsed = parseTemplate`${'before'} ${'test'} ${'after'}`;
            assertEquals(parsed, 'before test after');
        });

    });
});




