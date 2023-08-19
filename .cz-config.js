/**
 * Customize commitizen based on conventional commits.
 *
 * @author Robin Walter <hello@robinwalter.me>
 * @copyright Copyright (c) 2023 Robin Walter. All rights reserved.
 * @file This file is used to setup cz-customizable.
 * @license SPDX-License-Identifier: GPL-2.0-or-later
 * @see {@link https://github.com/leoforfree/cz-customizable}
 */

module.exports = {
  allowBreakingChanges: ['feat', 'fix'],
  allowCustomScopes: false,
  footerPrefix: 'ISSUE-ID:',
  // override the messages, defaults are as follows
  messages: {
    body: 'Provide a LONGER description of the change (optional, may include YouTrack commands). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
    footer: 'List any issues related to this change (optional). E.g.: WP01-1:\n',
    scope: '\nDenote the SCOPE of this change (optional):',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    type: "Select the type of change that you're committing:"
  },
  scopes: [
    '',
    'blocks',
    'dependencies',
    'design',
    'editor',
    'git',
    'github',
    'github-actions',
    'js/ts',
    'linter',
    'php',
    'README',
    'tailwindcss',
    'tests'
  ],
  subjectLimit: 100,
  types: [
    { value: 'feat', name: 'feat:     🧪 A new feature' },
    { value: 'fix', name: 'fix:      🔧 A bug fix' },
    { value: 'docs', name: 'docs:     📝 Documentation only changes' },
    {
      value: 'style',
      name: 'style:    💅🏼 Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: 'refactor',
      name: 'refactor: 💻 A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: 'perf',
      name: 'perf:     🏎️ A code change that improves performance'
    },
    { value: 'test', name: 'test:     👨🏼‍🔬 Adding missing tests or correcting existing tests' },
    {
      value: 'build',
      name: 'build:    👨🏼‍🔧 Changes that affect the build system or external dependencies (example scopes: devcontainer, docker, pnpm)'
    },
    {
      value: 'ci',
      name: 'ci:       🤖 Changes to our CI configuration files and scripts (example scopes: github-actions, jenkins)'
    },
    {
      value: 'chore',
      name: 'chore:    ⚙️ Changes to the build process or auxiliary tools and libraries such as documentation generation'
    },
    { value: 'revert', name: 'revert:   ⏮️ Reverts a previous commit' },
    { value: 'WIP', name: 'WIP:      🚧 Work in progress' }
  ]
}
