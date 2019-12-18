//  The code file that contains your action code. The application specified with the using syntax will execute this file.

const core = require('@actions/core');

async function run() {
  try { 
      
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()


const myInput = core.getInput('inputName', { required: true });

core.setOutput('outputKey', 'outputVal');