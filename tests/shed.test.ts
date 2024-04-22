import { assertEquals } from 'std/assert/mod.ts';

import { $$, $b, $s } from 'shed/sced.ts';
import { describe, it } from 'std/testing/bdd.ts';






describe('Command Execution', () => {

    describe('exeToBytes', () => {
        it('should return the output of a command as a byte array', () => {

            const output = $b`printf hello`;
            const expected = new TextEncoder().encode('hello');
            assertEquals(output, expected);
        });
    });


    describe('exeToString', () => {
        it('should return the output of a command as a string', () => {

            const output = $s`printf hello`
            assertEquals(output, 'hello');
        });
    });

    describe('exeToStdOut', () => {
        it(`should pipe the comand's stdout to deno's stdout`, () => {
            const exitCode = $$`echo hello`;
            assertEquals(exitCode, 0);
        });
    });

});


