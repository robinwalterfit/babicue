/**
 * Lint staged files to prevent committing bad code.
 *
 * @author Robin Walter <hello@robinwalter.me>
 * @copyright Copyright (c) 2023 Robin Walter. All rights reserved.
 * @file This file is used to setup lint-staged.
 * @license SPDX-License-Identifier: GPL-2.0-or-later
 * @see {@link https://github.com/okonet/lint-staged/blob/master/README.md#configuration}
 */

const fs = require('fs')
const mm = require('micromatch')
const { quote } = require('shell-quote')

const isWin = process.platform === 'win32'

const ignore = fs.readFileSync('.eslintignore', 'utf-8')
const ignoreLines = ignore.match(/[^\r?\n]+/g)

module.exports = {
  '**/*.{cjs,js,mjs,ts}': (allFilenames) => {
    const filenames = mm.not(allFilenames, ignoreLines, {
      basename: true
    })
    const escapedFileNames = filenames
      .map((filename) => `"${isWin ? filename : escape([filename])}"`)
      .join(' ')
    return [
      `eslint --config ./.eslintrc --ext cjs,js,mjs,ts --max-warnings=0 ${escapedFileNames}`,
      `git add ${escapedFileNames}`
    ]
  },
  '**/*.php': (filenames) => {
    const escapedFileNames = filenames
      .map((filename) => `"${isWin ? filename : escape([filename])}"`)
      .join(' ')
    return [
      `eslint --config ./.eslintrc --ext php --max-warnings=0 ${escapedFileNames}`,
      `git add ${escapedFileNames}`
    ]
  }
}

function escape (str) {
  const escaped = quote(str)
  return escaped.replace(/\\@/g, '@')
}
