#!/usr/bin/env node

import * as fs from 'node:fs'
import * as path from 'node:path'

import { parseArgs } from 'node:util'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import ejs from 'ejs'

import prompts from 'prompts'
import { red, green, bold } from 'kolorist'

import renderTemplate from './utils/renderTemplate.js'
import { postOrderDirectoryTraverse, preOrderDirectoryTraverse } from './utils/directoryTraverse.js'
import getCommand from './utils/getCommand.js'

function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName)
}

function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-')
}

function canSkipEmptying(dir) {
  if (!fs.existsSync(dir)) {
    return true
  }

  const files = fs.readdirSync(dir)
  if (files.length === 0) {
    return true
  }
  if (files.length === 1 && files[0] === '.git') {
    return true
  }

  return false
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return
  }

  postOrderDirectoryTraverse(
    dir,
    (dir) => fs.rmdirSync(dir),
    (file) => fs.unlinkSync(file)
  )
}

async function init() {
  console.log()
  console.log(
    bold('Sonnet JS: A frontend framework')
  )
  console.log()

  const cwd = process.cwd()
  // possible options:
  // --default
  // --typescript / --ts
  // --sonnet-ssr / --ssr
  // --sonnet-router / --router

  const args = process.argv.slice(2)

  // alias is not supported by parseArgs
  const options = {
    typescript: { type: 'boolean' },
    ts: { type: 'boolean' },
    'sonnet-router': { type: 'boolean' },
    router: { type: 'boolean' },
    'sonnet-ssr': { type: 'boolean' },
    ssr: { type: 'boolean' }
  }

  const { values: argv, positionals } = parseArgs({
    args,
    options,
    strict: false
  })

  // if any of the feature flags is set, we would skip the feature prompts
  const isFeatureFlagsUsed =
    typeof (
      argv.default ??
      (argv.ts || argv.typescript) ??
      (argv.router || argv['sonnet-router']) ??
      (argv.ssr || argv['sonnet-ssr']) 
    ) === 'boolean'

  let targetDir = positionals[0]
  const defaultProjectName = !targetDir ? 'sonnet-project' : targetDir

  const forceOverwrite = argv.force

  const language = {
    "projectName": {
      "message": "Project name:"
    },
    "shouldOverwrite": {
      "dirForPrompts": {
        "current": "Current directory",
        "target": "Target directory"
      },
      "message": "is not empty. Remove existing files and continue?"
    },
    "packageName": {
      "message": "Package name:",
      "invalidMessage": "Invalid package.json name"
    },
    "needsRouter": {
      "message": "Install Sonnet Router?"
    },
    "needsTypeScript": {
      "message": "Add TypeScript?"
    },
    "errors": {
      "operationCancelled": "Operation cancelled"
    },
    "defaultToggleOptions": {
      "active": "Yes",
      "inactive": "No"
    },
    "infos": {
      "done": "Done. Now run:"
    }
  }
  /**
   * @type {Record<string, { projectName?: string; shouldOverwrite?: boolean; packageName?: string; needsTypeScript?: boolean; needsJsx?: boolean; needsRouter?: boolean; needsPinia?: boolean; needsVitest?: boolean; needsE2eTesting?: false | 'cypress' | 'nightwatch' | 'playwright'; needsEslint?: boolean; needsPrettier?: boolean; needsDevTools?: boolean}>}
   */
  let result = {}

  try {
    // Prompts:
    // - Project name:
    //   - whether to overwrite the existing directory or not?
    //   - enter a valid package name for package.json
    // - Project language: JavaScript / TypeScript
    // - Install Sonnet Router for SPA development?
    // - Install Sonnet SSR for development?
    result = await prompts(
      [
        {
          name: 'projectName',
          type: targetDir ? null : 'text',
          message: language.projectName.message,
          initial: defaultProjectName,
          onState: (state) => (targetDir = String(state.value).trim() || defaultProjectName)
        },
        {
          name: 'shouldOverwrite',
          type: () => (canSkipEmptying(targetDir) || forceOverwrite ? null : 'toggle'),
          message: () => {
            const dirForPrompt =
              targetDir === '.'
                ? language.shouldOverwrite.dirForPrompts.current
                : `${language.shouldOverwrite.dirForPrompts.target} "${targetDir}"`

            return `${dirForPrompt} ${language.shouldOverwrite.message}`
          },
          initial: true,
          active: language.defaultToggleOptions.active,
          inactive: language.defaultToggleOptions.inactive
        },
        {
          name: 'overwriteChecker',
          type: (prev, values) => {
            if (values.shouldOverwrite === false) {
              throw new Error(red('✖') + ` ${language.errors.operationCancelled}`)
            }
            return null
          }
        },
        {
          name: 'packageName',
          type: () => (isValidPackageName(targetDir) ? null : 'text'),
          message: language.packageName.message,
          initial: () => toValidPackageName(targetDir),
          validate: (dir) => isValidPackageName(dir) || language.packageName.invalidMessage
        },
        {
          name: 'selectTemplate',
          type: (prev, values) => {
            return 'select';
          },
          message: 'Select a template',
          choices: [
            { title: 'Default', value: 'default' },
            { title: 'SSR', value: 'ssr' },
          ],
          initial: 0,
        },
        {
          name: 'needsRouter',
          type: () => (isFeatureFlagsUsed ? null : 'toggle'),
          message: language.needsRouter.message,
          initial: false,
          active: language.defaultToggleOptions.active,
          inactive: language.defaultToggleOptions.inactive
        },
        {
          name: 'needsTypeScript',
          type: () => (isFeatureFlagsUsed ? null : 'toggle'),
          message: language.needsTypeScript.message,
          initial: false,
          active: language.defaultToggleOptions.active,
          inactive: language.defaultToggleOptions.inactive
        },
      ],
      {
        onCancel: () => {
          throw new Error(red('✖') + ` ${language.errors.operationCancelled}`)
        }
      }
    )
  } catch (cancelled) {
    console.log(cancelled.message)
    process.exit(1)
  }

  // `initial` won't take effect if the prompt type is null
  // so we still have to assign the default values here
  const {
    projectName,
    packageName = projectName ?? defaultProjectName,
    shouldOverwrite = argv.force,
    needsTypeScript = argv.ts || argv.typescript,
  } = result

  const root = path.join(cwd, targetDir)

  if (fs.existsSync(root) && shouldOverwrite) {
    emptyDir(root)
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root)
  }

  const pkg = { name: packageName, version: '0.0.0' }
  fs.writeFileSync(path.resolve(root, 'package.json'), JSON.stringify(pkg, null, 2))

  const templateRoot = path.resolve(__dirname, 'template')

  /**
   * @type Array<(dataStore: Record<string, any>) => Promise<void>>
   */
  const callbacks = []
  const render = function render(templateName) {
    const templateDir = path.resolve(templateRoot, templateName)
    renderTemplate(templateDir, root, callbacks)
  }
  // Render base template
  render('base')

  // Render code template.
  let codeTemplate = '';
  switch (result.selectTemplate) {
    case 'ssr':
      codeTemplate = 'ssr';
      break;
    case 'default':
      codeTemplate = 'default';
      break;
    default:
      codeTemplate = 'default'
      break;
  }

  if (result.needsRouter) {
    codeTemplate += 'router';
  }

  if (needsTypeScript) {
    codeTemplate += '-ts';
  }

  render(`code/${codeTemplate}`)

  // An external data store for callbacks to share data
  const dataStore = {}
  // Process callbacks
  for (const cb of callbacks) {
    await cb(dataStore)
  }

  // EJS template rendering
  preOrderDirectoryTraverse(
    root,
    () => {},
    (filepath) => {
      if (filepath.endsWith('.ejs')) {
        const template = fs.readFileSync(filepath, 'utf-8')
        const dest = filepath.replace(/\.ejs$/, '')
        const content = ejs.render(template, dataStore[dest])

        fs.writeFileSync(dest, content)
        fs.unlinkSync(filepath)
      }
    }
  )

  // Instructions:
  // Supported package managers: pnpm > yarn > bun > npm
  const userAgent = process.env.npm_config_user_agent ?? ''
  const packageManager = /pnpm/.test(userAgent)
    ? 'pnpm'
    : /yarn/.test(userAgent)
      ? 'yarn'
      : /bun/.test(userAgent)
        ? 'bun'
        : 'npm'

  console.log(`\n${language.infos.done}\n`)
  if (root !== cwd) {
    const cdProjectName = path.relative(cwd, root)
    console.log(
      `  ${bold(green(`cd ${cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName}`))}`
    )
  }
  console.log(`  ${bold(green(getCommand(packageManager, 'install')))}`)
  console.log(`  ${bold(green(getCommand(packageManager, 'dev')))}`)
  console.log()
}

init().catch((e) => {
  console.error(e)
})