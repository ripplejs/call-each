
# call-each

[![Build Status](https://travis-ci.org/ripplejs/call-each.png?branch=master)](https://travis-ci.org/ripplejs/call-each)

  Returns a function that will call each function in an array.

## Installation

  Install with [component(1)](http://component.io):

    $ component install ripplejs/call-each

## API

```js
vr each = require('call-each');

function callback() {
  console.log('foo');
}

var run = each([callback, callback, callback]);

run(); // foo foo foo
```

or in a more real-world example, you might want a series
of functions called when an object changes.

```js
model.change(run);
```

You can also set the context:

```js
var run = each([callback, callback], model);
```

Each function will be called in that context.

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.