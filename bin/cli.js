#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */

const readline = require("readline");
const fs = require('fs');
const boxen = require('boxen');

const { execSync } = require('child_process');

let PROJECT_NAME = '';
let PROJECT_DESCRIPTION = 'My awesome React App';
let APP_NAME = '';

const END_MSG = `Your project was successfully generated. 🎉
Thanks for using REACT-STARTER-PACK`;

const BOXEN_CONFIG = {
  padding: 2,
  margin: { top: 2, bottom: 3 },
  borderColor: 'yellow',
  align: 'center', 
  borderStyle: 'round',
  title: 'REACT-STARTER-PACK by "@susegroj"',
  titleAlignment: 'center',
};


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to executed '${command}'`,  error);
    return false;
  }

  return true;
};

const changeAppNames =  () => {

  console.log(`\n 🗂 Preparing the files...`);

  const PACKAGE_JSON = `${PROJECT_NAME}/package.json`;
  const EN_LABELS = `${PROJECT_NAME}/src/assets/i18n/en.json`;
  const ESP_LABELS = `${PROJECT_NAME}/src/assets/i18n/esp.json`;
  const MANIFEST = `${PROJECT_NAME}/public/manifest.json`;
  
  /* == JSON == */
  const pack = fs.readFileSync(PACKAGE_JSON, 'utf-8');
  const packJson = JSON.parse(pack);

  packJson.name = PROJECT_NAME;
  packJson.description = PROJECT_DESCRIPTION;
  packJson.version = '0.0.1';
  packJson.repository = {};
  packJson.author = {};
  packJson.homepage = '';
  packJson.contributors = [
    { "name":"Jorge Macías Morales","email":"jor_ge_711@hotmail.com","url":"https://github.com/susegroj" },
  ];
  delete packJson.bin;

  fs.writeFileSync(PACKAGE_JSON, JSON.stringify(packJson), 'utf-8');  

  /* == LANGUAGES == */
  const enLng = fs.readFileSync(EN_LABELS, 'utf-8');
  const espLng = fs.readFileSync(ESP_LABELS, 'utf-8');

  const enLngJson = JSON.parse(enLng);
  const espLngJson = JSON.parse(espLng);

  enLngJson.app.name = APP_NAME;
  espLngJson.app.name = APP_NAME;

  fs.writeFileSync(EN_LABELS, JSON.stringify(enLngJson), 'utf-8');
  fs.writeFileSync(ESP_LABELS, JSON.stringify(espLngJson), 'utf-8'); 

  /* == MANIFEST PWA == */
  const manifest = fs.readFileSync(MANIFEST, 'utf-8');
  const manifestJson = JSON.parse(manifest);

  manifestJson.short_name = APP_NAME;
  manifestJson.name = APP_NAME;

  fs.writeFileSync(MANIFEST, JSON.stringify(manifestJson), 'utf-8'); 
  
  console.log(`\n 🗂 Files prepared 🎉`);
};

const cloneRepository =  () => {
  const gitCommand = `git clone --depth 1 git@github.com:susegroj/react-starter-pack.git ${PROJECT_NAME}`;

    console.log(`\n ⌛️ Cloning the repository ${PROJECT_NAME}...\n`);

    const checkedOut =  runCommand(gitCommand);

    if (!checkedOut) {
      console.log('\n ❌ Failed to clone the repository 🥺 \n');
      process.exit(-1);
    }

    console.log('\n ✅ Cloned the repository 🎉');
    return true;
};

const createReadme =  () => {

  console.log(`\n 📝 Settings things to create README...\n`);

  const createReadMeCommand = `cd ${PROJECT_NAME} && rm README.md && npx readme-md-generator -p bin/template.md`;

  const createdReadMe =  runCommand(createReadMeCommand);

  if(!createdReadMe) {
    console.log('\n ❌ Failed to create README.md 🥺 \n');
    process.exit(-1);
  }
  return true;
};

const installDependencies =  () => {
  console.log(`\n 🚧 Installing dependencies...\n`);

  const installDependenciesCommand = `cd ${PROJECT_NAME} && yarn install`;
  const installDeps =  runCommand(installDependenciesCommand);

  if (!installDeps) {
    console.log('\n ❌ Failed to install dependencies 🥺');
    process.exit(-1);
  }

  console.log(`\n ✅ Successfully cloned and installed ${PROJECT_NAME} 🤓`);

};

const removeBinFolder = () => {
  console.log(`\n 🗂 Preparing last details...\n`);

  const removeCommand = `cd ${PROJECT_NAME} && rm -rf bin/`;
  const removed = runCommand(removeCommand);

  if (!removed) {
    console.log('\n ❌ Failed to set last details 🥺 \n');
    process.exit(-1);
  }
  return true;
};

const showEndMessage = () => process.stdout.write(boxen(END_MSG, BOXEN_CONFIG));

const initializeProject = () => {
  try {
    rl.question('-> 📝 Project name (e.i my-project): ', (projectName) => {
      if(!projectName) {
        console.log('-> 🚫 Project name is required');
        return initializeProject();
      }
      PROJECT_NAME = projectName;

      rl.question(`-> 📝 Project description (default: ${PROJECT_DESCRIPTION}): `,  (projectDescription = PROJECT_DESCRIPTION) => {
        PROJECT_DESCRIPTION = projectDescription || PROJECT_DESCRIPTION;

        rl.question(`-> 📝 App name (default: ${PROJECT_NAME}): `,  (appName = PROJECT_NAME) => {
          APP_NAME = appName || PROJECT_NAME;
          
            cloneRepository();
            changeAppNames();
            createReadme();
            installDependencies();
            removeBinFolder();
            showEndMessage();
    
            process.exit(0);
        });

      });

      return true;
    });
  } catch (error) {
    console.error(error);
    return false;
  }
  return true;
};

rl.on("close", () => {
  const cleanExitCommand = `rm -rf ${PROJECT_NAME}`;
  
  const cleaned = runCommand(cleanExitCommand);

  console.log("\n 🧹 Cleaning installation before exit...");

    if(!cleaned) {
      console.log('\n ❌ Failed to clean the installation 🥺 \n');
      process.exit(-1);
    }

    console.log('\n 🤟 See you next time... \n'); 
    process.exit(-1);
});


// Run the app
initializeProject();