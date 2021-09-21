#! usr/bin/env node

const { execSync } = require('child_process');


const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to executed ${command}`,  error);
    return false;
  }

  return true;
};

const repoName = process.args[2];
const gitCommand = `git clone --depth 1 git@github.com:susegroj/react-starter-pack.git ${repoName}`;

const installDepsCommand = `cd ${repoName} && yarn install`;

console.log(`⏱ Cloning the repository ${repoName}...`);

const checkedOut = runCommand(gitCommand);

if (!checkedOut) {
  console.log('✖ Failed to clone the repository 🥺');
  process.exit(-1);
}

console.log('✔ Cloned the repository 🎉');
console.log(`🚧 Installing dependencies for ${repoName}`);

const installDeps = runCommand(installDepsCommand);

if (!installDeps) {
  console.log('✖ Failed to install dependencies 🥺');
  process.exit(-1);
}

console.log(`✅ Successfully cloned and installed ${repoName} 🤓`);

console.log(`cd ${repoName} && yarn development`);

console.log('🚀 Done! 🚀');