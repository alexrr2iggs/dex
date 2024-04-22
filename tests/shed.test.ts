
import { assertEquals } from 'https://deno.land/std@0.223.0/assert/assert_equals.ts';
import { describe, it } from 'https://deno.land/std@0.223.0/testing/bdd.ts';
import { $$, $b, $s } from '../src/sced.ts';



describe('Command Execution', () => {

    describe('exeToBytes', () => {
        it('should return the output of a command as a byte array', () => {

            const output = $b`printf hello`;
            const expected = new TextEncoder().encode('hello');
            assertEquals(output, expected);
        });

        it('should return the output of a template command as a byte array', () => {

            const value = 'hello';
            const output = $b`printf ${value}`;
            const expected = new TextEncoder().encode(value);

            assertEquals(output, expected);
        });
    });


    describe('exeToString', () => {
        it('should return the output of a command as a string', () => {

            const output = $s`printf hello`
            assertEquals(output, 'hello');
        });

        it('should return the output of a template command as a string', () => {

            const value = 'hello';
            const output = $s`printf ${value}`;
            assertEquals(output, value);
        });
    });


    describe('exeToStdOut', () => {
        it(`should pipe the comand's stdout to deno's stdout`, () => {
            const exitCode = $$`echo hello`;
            assertEquals(exitCode, 0);
        });

        it(`should pipe the templates comand's stdout to deno's stdout`, () => {
            const value = 'hello';
            const exitCode = $$`echo ${value}`;
            assertEquals(exitCode, 0);
        });
    });

});


