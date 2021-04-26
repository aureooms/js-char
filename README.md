[js-char](http://make-github-pseudonymous-again.github.io/js-char)
==

character code bricks for JavaScript

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-char.svg?style=flat)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-char/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-char.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-char)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-char.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-char)
[![Build Status](https://img.shields.io/travis/make-github-pseudonymous-again/js-char.svg?style=flat)](https://travis-ci.org/make-github-pseudonymous-again/js-char)
[![Coverage Status](https://img.shields.io/coveralls/make-github-pseudonymous-again/js-char.svg?style=flat)](https://coveralls.io/r/make-github-pseudonymous-again/js-char)
[![Dependencies Status](https://img.shields.io/david/make-github-pseudonymous-again/js-char.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-char#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-char.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-char#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/make-github-pseudonymous-again/js-char.svg?style=flat)](https://codeclimate.com/github/make-github-pseudonymous-again/js-char)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-char.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-char)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-char.svg?style=flat)](https://github.com/make-github-pseudonymous-again/js-char/issues)
[![Inline docs](http://inch-ci.org/github/make-github-pseudonymous-again/js-char.svg?branch=master&style=shields)](http://inch-ci.org/github/make-github-pseudonymous-again/js-char)

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
