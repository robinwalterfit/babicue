/**
 * Lint commit messages to prevent bad commits.
 *
 * @author Robin Walter <hello@robinwalter.me>
 * @copyright Copyright (c) 2023 Robin Walter. All rights reserved.
 * @file This file is used to setup commitlint.
 * @license SPDX-License-Identifier: GPL-2.0-or-later
 * @see {@link https://commitlint.js.org/#/reference-configuration}
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
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
      ]
    ]
  }
}
