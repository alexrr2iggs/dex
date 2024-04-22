import { MalformedComand } from 'errors/malformed_comand.ts';
import { Command } from '../types/comand.ts';

/**
 * parse the comand and the arguments.
 * example:
 * ```ts
 * const { cmd, args } = parseComand('deno run -A ./src/sced.ts -h');
 * // cmd = 'deno'
 * // args = ['run', '-A', './src/sced.ts', '-h']
 * ```
 * @param command
 * @returns
 */
export function parseCommand(command: string): Command {
  const comandTokens = command.split(/\s+/g);
  const cmd = comandTokens.shift();

  if (!cmd) {
    throw new MalformedComand('malformed comand: ' + command);
  }

  return { cmd, args: comandTokens };
}
