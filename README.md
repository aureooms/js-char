[js-char](http://make-github-pseudonymous-again.github.io/js-char)
==

character code bricks for JavaScript

[![License](https://img.shields.io/github/license/aureooms/js-char.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-char/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-char.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-char)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-char.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-char)
[![Build Status](https://img.shields.io/travis/aureooms/js-char.svg?style=flat)](https://travis-ci.org/aureooms/js-char)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-char.svg?style=flat)](https://coveralls.io/r/aureooms/js-char)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-char.svg?style=flat)](https://david-dm.org/aureooms/js-char#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-char.svg?style=flat)](https://david-dm.org/aureooms/js-char#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-char.svg?style=flat)](https://codeclimate.com/github/aureooms/js-char)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-char.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-char)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-char.svg?style=flat)](https://github.com/aureooms/js-char/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-char.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-char)

## Installation

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let char = require( "@aureooms/js-char" ) ;
```

## Usage

```js
char.chr( 97 ) ; // "a"
char.ord( "\n" ) ; // 10

char.ord( "M" ) ; // 77
char.ord( "Μ" ) ; // 924

char.islower( "µ" ) ; // true
char.isupper( "À" ) ; // true

char.upper( "µ" ) ; // Μ
char.lower( "À" ) ; // à
```
