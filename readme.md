# generator-jneidel

> Opinionated collection of boilerplates


[![Travis Build Status](https://img.shields.io/travis/jneidel/generator-jneidel.svg?style=flat-square)](https://travis-ci.org/jneidel/generator-jneidel)
[![Licence MIT](https://img.shields.io/badge/licence-MIT-green.svg?style=flat-square)](https://github.com/jneidel/generator-jneidel/blob/master/licence)
[![Npm Downloads](https://img.shields.io/npm/dt/generator-jneidel.svg?style=flat-square)](https://www.npmjs.com/package/generator-jneidel)

Boilerplates for creating a:

- node module
- chrome extension
- node webapp

## Install

Boilerplates can be installed manually or using [Yeoman](https://github.com/yeoman/yo) (recommended) as a scaffolding tool.

<div align="center">
  <br>
  <img src="https://i.imgur.com/8UpFnXZ.png" alt="Usage: yo jneidel">
</div>

### Install manually

**node module:**

```
$ curl -fsSL https://github.com/jneidel/generator-jneidel/archive/master.tar.gz | tar -xz --strip-components=4 generator-jneidel-master/generators/app/templates
```

**chrome extension:**

```
$ curl -fsSL https://github.com/jneidel/generator-jneidel/archive/master.tar.gz | tar -xz --strip-components=4 generator-jneidel-master/generators/chrome/templates
```

**webapp:**

```
$ curl -fsSL https://github.com/jneidel/generator-jneidel/archive/master.tar.gz | tar -xz --strip-components=4 generator-jneidel-master/generators/web/templates
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

## Assumptions

These boilerplates assume, that you're using:

- MIT licence
- Mocha (as testing framework)
- Travis (as CI)
- Webpack (as build system)
- NPM (as package manager)
- Github (as your git-repository)

## Test

```
$ npm run test
```

## Attribution

Inspired by [sindresorhus/node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) and [sindresorhus/generator-nm](https://github.com/sindresorhus/generator-nm).

## License

MIT © [Jonathan Neidel](https://jneidel.com)
