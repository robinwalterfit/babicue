/**
 * Customize PostCSS configuration.
 *
 * @author Robin Walter <hello@robinwalter.me>
 * @copyright Copyright (c) 2023 Robin Walter. All rights reserved.
 * @file This file is used to setup postcss.
 * @license SPDX-License-Identifier: GPL-2.0-or-later
 * @see {@link https://github.com/postcss/postcss#usage}
 */

/* eslint-env node */
module.exports = {
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss')
  ]
}
