# simple-debounce

 Simple debounce implementation that fires on the trailing edge only. If a call comes in when a pending call is yet to be finalized, it replaces the pending call.

## Install

```sh
$ npm install --save simple-debounce
```

## Usage

```js
import debounce from 'simple-debounce';
import expensiveFunction from './expensiveFunction';

const debouncedFunction = debounce(expensiveFunction, 1000);
```

## Links

- Source: [github.com/wincent/simple-debounce](https://github.com/wincent/simple-debounce)
- Package: [www.npmjs.com/package/simple-debounce](https://www.npmjs.com/package/simple-debounce)

## License

### The MIT License (MIT)

Copyright (c) 2015-present Greg Hurrell

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
