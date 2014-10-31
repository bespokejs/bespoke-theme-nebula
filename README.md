[![Build Status](http://img.shields.io/travis/markdalgleish/bespoke-theme-nebula/master.svg?style=flat)](https://travis-ci.org/markdalgleish/bespoke-theme-nebula)

# bespoke-theme-nebula

A theme for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js) &mdash; [View demo](http://markdalgleish.github.io/bespoke-theme-nebula)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/markdalgleish/bespoke-theme-nebula/master/dist/bespoke-theme-nebula.min.js
[max]: https://raw.github.com/markdalgleish/bespoke-theme-nebula/master/dist/bespoke-theme-nebula.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  nebula = require('bespoke-theme-nebula');

bespoke.from('#presentation', [
  nebula()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.nebula()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-nebula
```

### Bower

```bash
$ bower install bespoke-theme-nebula
```

## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
