import { assertEquals } from 'std/assert/mod.ts';

import { describe, it } from 'std/testing/bdd.ts';
import { exeToBytes, exeToStdOut, exeToString } from 'utils/command_execution.ts';






describe('Command Execution', () => {

    describe('exeToBytes', () => {
        it('should return the output of a command as a byte array', () => {
            const printVal = 'hello';
            const output = exeToBytes('printf', printVal);
            const expected = new TextEncoder().encode(printVal);
            assertEquals(output, expected);
        });
    });


    describe('exeToString', () => {
        it('should return the output of a command as a string', () => {
            const printVal = 'hello';
            const output = exeToString('printf', 'hello');
            assertEquals(output, printVal);
        });
    });

    describe('exeToStdOut', () => {
        it(`should pipe the comand's stdout to deno's stdout`, () => {
            const exitCode = exeToStdOut('echo', 'hello');
            assertEquals(exitCode, 0);
        });
    });

});


