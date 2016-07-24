# PyGre.io - Website

This repository holds the source code for http://pygre.io.

## Tech Stack

Built with:

* Angular2 with TypeScript
* Sass with SCSS syntax
* Gulp.js for housekeeping

## Workflow

### Installation

1. Clone the repository:
```
$ git clone https://github.com/PyGre/website.git website
$ cd website
```
2. Install dependencies:
```
$ (sudo) npm install -g typescript gulp
$ npm install
```

### Development

I use Visual Studio Code, with build tasks wired to gulp.

Gulp handles:
* Transpiling SCSS into minified / source mapped CSS
* Transpiling TypeScript into ES5 JavaScript for maximum compatibility. Useful
mostly when building from CLI, as VSCode has TypeScript transpilation built-in.
* Building the whole thing, validating and pushing to the production repository.

### Production

The generated HTML/CSS/JS code is hosted on GitHub pages. Not on the `gh-pages`
branch of this repository, but to the `master` branch of [PyGre/pygre.github.io](https://github.com/PyGre/pygre.github.io),
and accessible at http://pygre.io
