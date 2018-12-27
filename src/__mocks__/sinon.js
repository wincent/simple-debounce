/**
 * Copyright 2015-present Greg Hurrell. All rights reserved.
 * Licensed under the terms of the MIT license.
 */

'use strict';

var sinon = require('sinon');

var sandbox;

beforeEach(function() {
  sandbox = sinon.sandbox.create();
});

afterEach(function() {
  sandbox.restore();
});

global.sinon = {
  spy: function spy() {
    return sinon.spy.apply(this, arguments);
  },

  stub: function stub() {
    return sandbox.stub.apply(this, arguments);
  },

  useFakeTimers: function useFakeTimers() {
    return sinon.useFakeTimers.apply(this, arguments);
  }
};
