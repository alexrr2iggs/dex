# sced - Synchronous Command Execution in Deno

## Table of Contents

- [Introduction](#Introduction)
- [Features](#features)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)

## Introduction

sced is a streamlined package for the Deno runtime that provides a simple and
efficient way to synchronously execute shell commands and retrieve the output
directly as a string. This package is ideal for developers who need to execute
shell commands within their Deno applications with ease and simplicity.

## Features

- **Synchronous Execution**: sced executes commands synchronously and returns
  the standard output directly.
- **Simple Syntax**: Using tagged template literals makes the command syntax
  clear and easy to read.
- **Integration with Deno**: Designed specifically for the Deno runtime,
  ensuring compatibility and performance.
- **No dependecies**: sced is dependent on the Deno runtime only.

## Usage

sced is incredibly straightforward to use. To execute a command, simply use the
`$` function with a tagged template literal containing your command. The output
will be returned as a string.

## Examples

### Listing Files in a Directory

```typescript
const files = $`ls -l`;
console.log(files);
```

### Checking Network Configuration

```typescript
const networkConfig = $`ifconfig`;
console.log(networkConfig);
```

## Troubleshooting

For issues related to sced:

- Ensure Deno has the necessary permissions to execute shell commands.
- Verify that commands are correctly formatted as tagged template literals.
- Check Deno's compatibility with your operating system and command syntax.

## Contributors

Contributions to the sced project are welcome. Please refer to the project's
GitHub repository for guidelines on how to contribute.
