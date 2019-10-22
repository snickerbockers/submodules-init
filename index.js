const core = require('@actions/core');
const git = require("simple-git");

// most @actions toolkit packages have async methods
async function run() {
    try {
	console.log("checking out submodules...");
	await git().raw(['submodule', 'update', '--init', '--recursive']);
	console.log("done checking out submodules");
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
