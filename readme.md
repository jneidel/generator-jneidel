# generator-jneidel

> Opinionated collection of boilerplates

[![Travis Build Status](https://img.shields.io/travis/jneidel/generator-jneidel.svg?style=flat-square)](https://travis-ci.org/jneidel/generator-jneidel)
[![License MIT](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](https://github.com/jneidel/generator-jneidel/blob/master/license)
[![Npm Downloads](https://img.shields.io/npm/dw/generator-jneidel.svg?style=flat-square)](https://www.npmjs.com/package/generator-jneidel)

Boilerplates available for creating:

- node module
- chrome extension
- node webapp
- cli module
- static site

## Install

Boilerplates can be installed manually or using [Yeoman](https://github.com/yeoman/yo) (recommended) as a scaffolding tool.

<div align="center">
  <br>
  <img src="https://i.imgur.com/8UpFnXZ.png" alt="Usage: yo jneidel">
</div>

### Install manually

```zsh
# node module
$ curl -fsSL https://github.com/jneidel/generator-jneidel/archive/master.tar.gz | tar -xz --strip-components=4 generator-jneidel-master/generators/app/templates

# To download a different boilerplate replace 'app' in the command above, with one of these:
# [ chrome, cli, static, web, web-lite ]
```

### Install using Yeoman

[![Npm Version](https://img.shields.io/npm/v/generator-jneidel.svg?style=flat-square)](https://www.npmjs.com/package/generator-jneidel)

```
$ npm install -g generator-jneidel yo
```

## Usage

With [yo](https://www.npmjs.com/package/yo):

**node module:**

```
$ yo jneidel
```

**chrome extension:**

```
$ yo jneidel:chrome
```

**webapp:**

```
$ yo jneidel:web
```

**cli:**

```
$ yo jneidel:cli
```

**static website:**

```
$ yo jneidel:static
```

**webapp (lite):**

```
$ yo jneidel:web-lite
```

## Assumptions

These boilerplates assume, that you're using:

- MIT license
- Ava (testing framework)
- Travis (CI)
- Webpack (build system)
- Scss (CSS)
- Pug (HTML)
- NPM (package manager)
- GitHub (git hosting)

## Test

```
$ npm run test
```

## Attribution

Inspired by [sindresorhus/node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) and [sindresorhus/generator-nm](https://github.com/sindresorhus/generator-nm).

## License

MIT © [Jonathan Neidel](https://jneidel.com)

