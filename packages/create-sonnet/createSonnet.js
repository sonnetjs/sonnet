import * as fs from 'fs';
import * as path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import * as readline from 'readline';

const createSonnet = async () => {
  let appName = process.argv[2];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  if (!appName) {
    await new Promise((resolve) => {
      rl.question('What is the name of your app? ', (answer) => {
        appName = answer;
        resolve();
      });
    });
  }

  if (!appName) {
    console.error('Please provide an app name.');
    rl.close();
    return;
  }

  console.log('Creating a new Sonnet app...');

  const examplePath = path.resolve(__dirname, 'templates/basic');

  const targetPath = path.resolve(process.cwd(), appName);

  fs.mkdirSync(targetPath);

  const copy = (src, dest) => {
    const entries = fs.readdirSync(src);

    for (const entry of entries) {
      const srcPath = path.join(src, entry);
      const destPath = path.join(dest, entry);

      if (fs.lstatSync(srcPath).isDirectory()) {
        fs.mkdirSync(destPath);
        copy(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };

  copy(examplePath, targetPath);

  console.log(`Created a new Sonnet app at ${targetPath}`);

  console.log('To get started, run the following commands:');

  console.log('');

  if (appName !== '.') {
    console.log('cd', appName);
  }
  console.log('npm install');
  console.log('npm run dev');

  console.log('');

  console.log('Done!');
  rl.close();
};

export { createSonnet };
