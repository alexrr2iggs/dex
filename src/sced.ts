import { exeToBytes, exeToStdOut, exeToString } from 'utils/command_execution.ts';
import { parseCommand } from 'utils/command_parser.ts';
import { TemplateExpression } from 'types/template.ts';
import { parseTemplate } from 'utils/template.ts';


/**
 * execute a command and return the stdout as a string.
 * @param command
 * @returns
 */
export function $s(command: TemplateStringsArray, ...expressions: TemplateExpression[]): string {
  const strCommand = parseTemplate(command, ...expressions);
  const { cmd, args } = parseCommand(strCommand);
  return exeToString(cmd, ...args);
}

/**
 * execute a command and return the exit code.
 * stdOut and stdErr are printed to the console.
 * @param command
 * @returns
 */
export function $$(command: TemplateStringsArray, ...expressions: TemplateExpression[]): number {
  const strCommand = parseTemplate(command, ...expressions);
  const { cmd, args } = parseCommand(strCommand);

  return exeToStdOut(cmd, ...args);
}

/**
 * execute a command and return the stdout as a byte array.
 * @param command
 * @returns
 */
export function $b(command: TemplateStringsArray, ...expressions: TemplateExpression[]): Uint8Array {
  const strCommand = parseTemplate(command, ...expressions);
  const { cmd, args } = parseCommand(strCommand);

  return exeToBytes(cmd, ...args);
}
