
import { assertEquals } from 'https://deno.land/std@0.223.0/assert/assert_equals.ts';
import { describe, it } from 'https://deno.land/std@0.223.0/testing/bdd.ts';
import { parseTemplate } from '../../src/utils/template.ts';





describe('template', () => {

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




