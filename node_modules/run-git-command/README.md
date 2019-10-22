# _run-git-command_ &nbsp; [![npm version](https://badge.fury.io/js/run-git-command.svg)](https://badge.fury.io/js/run-git-command)

A light weight promise wrapper for running git commands in any node.js application.

# Dependencies 🤝
Having [git](https://git-scm.com/downloads) installed on your system.

# Installation ⬇
To install the stable version you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com/en/): 

```shell
$ npm install run-git-command
```

```shell
$ yarn install run-git-command  
```

# Usage
`execGitCmd` takes two parameters:
1. Array of git command arguments (e.g ["merge", "--abort"] -> 'git merge --abort') 
2. [Executor options]() (optional)
```javascript
import {execGitCmd} from "run-git-command";

/** You can read more about this in the project's wiki **/
const execOptions = {
    execOptions: {}, // Options passed to the child_process spawn executor
    logProcess: false, // By default a console log is being printed
    customMsg: `run-git-command` // A custom msg to be printed to the console
};

/** Simple usage **/
execGitCmd(['pull'], execOptions)
    .then((result) => "Command ran successfully")
    .catch((error) => "Command execution failed");
    
/** Since the executor returns a promise they can be chained **/
execGitCmd(['pull'], execOptions)
    .then(() => execGitCmd(['push']))
    .then((result) => "Both commands ran successfully")
    .catch((error) => "Command execution failed");

```
# License

MIT


