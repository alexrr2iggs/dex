import { exeToBytes, exeToStdOut, exeToString } from 'utils/command_execution.ts';
import { parseCommand } from 'utils/command_parser.ts';

/**
 * execute a command and return the stdout as a string.
 * @param command
 * @returns
 */
export function $s(command: TemplateStringsArray): string {
  const { cmd, args } = parseCommand(command.raw[0]);
  return exeToString(cmd, ...args);
}

/**
 * execute a command and return the exit code.
 * stdOut and stdErr are printed to the console.
 * @param command
 * @returns
 */
export function $$(command: TemplateStringsArray): number {
  const { cmd, args } = parseCommand(command.raw[0]);
  return exeToStdOut(cmd, ...args);
}

/**
 * execute a command and return the stdout as a byte array.
 * @param command
 * @returns
 */
export function $b(command: TemplateStringsArray): Uint8Array {
  const { cmd, args } = parseCommand(command.raw[0]);
  return exeToBytes(cmd, ...args);
}
