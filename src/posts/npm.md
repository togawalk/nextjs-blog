---
title: "npm"
subtitle: "npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well."
image: "/images/npm.jpeg"
---

## Using `npm init` to Initialize a Project

The `npm init` command is a step-by-step tool to scaffold out your project. It will prompt you for input for a few aspects of the project in the following order:

- The project's name,
- The project's initial version,
- The project's description,
- The project's entry point (meaning the project's main file),
- The project's test command (to trigger testing with something like [Standard](https://github.com/feross/standard))
- The project's git repository (where the project source can be found)
- The project's keywords (basically, tags related to the project)
- The project's license (this defaults to ISC - most open-source Node.js projects are MIT)

### Using `npm init --yes`/`npm init -y` to _Instantly_ Initialize a Project

If you want to get on to building your project, and don't want to spend the (albeit brief) time answering the prompts that come from `npm init`, you can use the `--yes` flag on the `npm init` command to automatically populate all options with the default `npm init` values.

## Install Modules with `npm install`/`npm i`

Install a standalone module into the current directory: `npm install <module>` or `npm i <module>`.
> Example:
> ```bash
> npm install express
> ```

In addition to triggering an install of a single module, you can actually trigger the installation of _all_ modules that are listed as `dependencies` and `devDependencies` in the `package.json` in the current directory. To do so, you'll simply need to run the command itself:
```bash
npm install
```
```bash
npm i
```


### Shorthands and Other CLI Niceties

The following shorthands are parsed on the command-line:

- `-a`: `--all`
- `--enjoy-by`: `--before`
- `-c`: `--call`
- `--desc`: `--description`
- `-f`: `--force`
- `-g`: `--global`
- `--iwr`: `--include-workspace-root`
- `-L`: `--location`
- `-d`: `--loglevel info`
- `-s`: `--loglevel silent`
- `--silent`: `--loglevel silent`
- `--ddd`: `--loglevel silly`
- `--dd`: `--loglevel verbose`
- `--verbose`: `--loglevel verbose`
- `-q`: `--loglevel warn`
- `--quiet`: `--loglevel warn`
- `-l`: `--long`
- `-m`: `--message`
- `--local`: `--no-global`
- `-n`: `--no-yes`
- `--no`: `--no-yes`
- `-p`: `--parseable`
- `--porcelain`: `--parseable`
- `-C`: `--prefix`
- `--readonly`: `--read-only`
- `--reg`: `--registry`
- `-S`: `--save`
- `-B`: `--save-bundle`
- `-D`: `--save-dev`
- `-E`: `--save-exact`
- `-O`: `--save-optional`
- `-P`: `--save-prod`
- `-?`: `--usage`
- `-h`: `--usage`
- `-H`: `--usage`
- `--help`: `--usage`
- `-v`: `--version`
- `-w`: `--workspace`
- `--ws`: `--workspaces`
- `-y`: `--yes`
