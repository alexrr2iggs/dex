import { TemplateExpression } from 'types/template.ts';

export function parseTemplate(template: TemplateStringsArray, ...expressions: TemplateExpression[]): string {
    const merged = [];

    for (let i = 0; i < template.length; i++) {
        merged.push(template[i]);
        merged.push(expressions[i]);
    }

    return merged.join('');
}