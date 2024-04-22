import { CommandfailureErr } from '../errors/command_failure.ts';

/**
 * run a comand and return the stdout as a string.
 * @param cmd
 * @param args
 * @returns
 */
export function exeToBytes(cmd: string, ...args: string[]): Uint8Array {
  const command = new Deno.Command(cmd, { args });
  const cmdOut = command.outputSync();
  let stdErr: string;

  if (cmdOut.stderr.length) {
    Deno.stderr.writeSync(cmdOut.stderr);
    stdErr = new TextDecoder().decode(cmdOut.stderr);
  }

  if (cmdOut.code !== 0) {
    throw new CommandfailureErr({ cmd, args, exitCode: cmdOut.code, stdErr });
  }

  return cmdOut.stdout;
}

/**
 * run a comand and return the stdout as a string.
 * @param cmd
 * @param args
 * @returns
 */
export function exeToString(comand: string, ...args: string[]): string {
  const commandOut = exeToBytes(comand, ...args);
  return new TextDecoder().decode(commandOut);
}

/**
 * run a command and return the exit code.
 * stdOut and stdErr are printed to the console.
 * @param cmd
 * @param args
 * @returns
 */
export function exeToStdOut(comand: string, ...args: string[]): number {
  const command = new Deno.Command(comand, { args, stdout: 'inherit', stderr: 'inherit' });
  const cmdOut = command.outputSync();

  if (cmdOut.code !== 0) {
    throw new CommandfailureErr({ cmd: comand, args, exitCode: cmdOut.code });
  }

  return cmdOut.code;
}

export function exe(comand: string, ...args: string[]): Deno.ChildProcess {
  const command = new Deno.Command(comand, { args, stdout: 'piped', stderr: 'piped' });
  return command.spawn();
}

/**
 * run a command and return the exit code.
 * stdOut and stdErr are printed to the console.
 * @param cmd
 * @param args
 * @returns
 */
export function chain(commands: string[][]): Deno.ChildProcess {
  let lastChildProcess: Deno.ChildProcess;

  for (const command of commands) {
    const childProcess = exe(command[0], ...command.slice(1));
    if (lastChildProcess) {
      lastChildProcess.stdout.pipeTo(childProcess.stdin);
    }
    lastChildProcess = childProcess;
  }

  return lastChildProcess;
}
