export interface Commandfailure {
    cmd: string;
    args?: string[];
    exitCode: number;
    stdErr?: string;
}

export class CommandfailureErr extends Error {
    cmd: string;
    args: string[];
    exitCode: number;
    StdErr: string;

    constructor(commandfailure: Commandfailure) {
        let message = `"${commandfailure.cmd} ${commandfailure.args?.join(' ')}" command failed, with exit code ${commandfailure.exitCode}`;

        if (commandfailure.stdErr) {
            message += '\nstdErr:\t' + commandfailure.stdErr;
        }

        super(message);
        this.cmd = commandfailure.cmd;
        this.args = commandfailure.args || [];
        this.exitCode = commandfailure.exitCode;
        this.StdErr = commandfailure.stdErr || '';
    }
}