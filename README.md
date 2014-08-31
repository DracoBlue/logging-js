# logging.js

Easy lib to trace function calls and write log messages into the `console` object. Requires require.js.

Latest Release: [![GitHub version](https://badge.fury.io/gh/DracoBlue%2Flogging-js.png)](https://github.com/DracoBlue/logging-js/releases)

logging.js is copyright 2014 by DracoBlue <http://dracoblue.net>

## Installation

Copy the `logging.js` into your project or require it with bower:

``` console
$ bower install logging.js
```

## Usage

This is a simple example, how `logging.js` works.

``` javascript
var Example = function() {
    logging.applyLogging(this, 'Example', ['hideMe']);
};

Example.prototype.callOne = function() {
};

Example.prototype.callTwo = function() {
    this.logDebug('Hai!');
    this.logError('Oh noes!');
};

Example.prototype.hideMe = function() {
};

var example = new Example();
example.callOne(); // => TRACE [Example] callOne
example.hideMe(); // nothing happens
example.callTwo(); // => TRACE [Example] callTwo
                   // => DEBUG [Example] Hai!
                   // => ERROR [Example] Oh noes!
```

## Changelog

* 1.0.0 (2014/08/31)
  - initial release

## License

logging.js is licensed under the terms of MIT.