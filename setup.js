import { execSync } from 'child_process';
import fse from 'fs-extra';
import select from '@inquirer/select';
import figlet from 'figlet';

console.clear();

const answer = await select({
  message: 'Select a UI library',
  choices: [
    {
      name: 'Mantine',
      value: 'mantine',
      description: 'Mantine is a MIT licensed open source react components and hooks library with focus on usability, accessibility and developer experience',
    },
    {
      name: 'Ant Design',
      value: 'antd',
      description: 'An enterprise-class UI design language and React UI library',
    },
    {
      name: 'Material UI',
      value: 'mui',
      description: 'Material UI is a set of React components that implement Google’s Material Design specification',
    },
    {
      name: 'React Bootstrap',
      value: 'bootstrap',
      description: 'React Bootstrap is a UI library that provides prebuilt, reusable React components',
    },
    {
      name: 'Chakra UI',
      value: 'chakra',
      description: 'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications',
    }
  ],
});

const baseDir = `./.templates`;
const srcDir = `./${baseDir}/${answer}`;
const destDir = `./src/components/${answer}`;

try {
  const found = require(answer);
  console.log('found', found);
} catch (e) {
  if (answer === 'mantine') {
    execSync(`npm i @mantine/core @mantine/hooks --save-dev`);
  } else if (answer === 'mui') {
    execSync(`npm i @mui/material @emotion/react @emotion/styled --save-dev`);
  } else if (answer === 'bootstrap') {
    execSync(`npm i react-bootstrap bootstrap --save-dev`);
  } else if (answer === 'chakra') {
    // execSync(`npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion --save-dev`);
    console.log('Chakra UI is not yet supported and will be added soon');
  } else {
    execSync(`npm i ${answer} --save-dev`);
  }
  fse.copySync(srcDir, destDir, { overwrite: true|false });
  console.log(`You selected ${answer} and was successfully installed`, '\n');
}

const deleteFiles = await select({
  message: 'Do you want to delete the setup files?',
  choices: [
    {
      name: 'Yes',
      value: 'yes',
      description: 'Delete the setup files',
    },
    {
      name: 'No',
      value: 'no',
      description: 'Keep the setup files',
    }
  ]
});

if (deleteFiles === 'yes') {
  fse.removeSync(baseDir);
  console.log('Setup files deleted', '\n');
} else {
  console.log('Setup files kept', '\n');
}

console.log('Thanks for using');

figlet("Componentize", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
