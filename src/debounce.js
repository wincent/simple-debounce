/**
 * Copyright 2015-present Greg Hurrell. All rights reserved.
 * Licensed under the terms of the MIT license.
 *
 * @flow strict
 */

'use strict';

/**
 * Debounce implementation that fires on the trailing edge only. If a call comes
 * in when a pending call is yet to be finalized, it replaces the pending call.
 */
function debounce(
  fn/*: (...Iterable<mixed>) => mixed */,
  interval/*: number */
) {
  var timeout = null;
  return function() {
    var args = arguments;
    var context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      fn.apply(context, args);
    }, interval);
  };
}

module.exports = debounce;
