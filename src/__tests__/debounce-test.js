/**
 * Copyright 2015-present Greg Hurrell. All rights reserved.
 * Licensed under the terms of the MIT license.
 */

'use strict';

const debounce = require('../debounce');

describe('debounce()', () => {
  let clock;
  let spy;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
    spy = sinon.spy();
  });

  afterEach(() => {
    clock.restore();
  });

  it('does nothing when the debounced function is not called', () => {
    debounce(spy, 100);
    clock.tick(1000);
    expect(spy.called).toBe(false);
  });

  it('calls the debounced function after an interval', () => {
    const debounced = debounce(spy, 100);
    debounced();
    clock.tick(50);
    expect(spy.called).toBe(false);
    clock.tick(50);
    expect(spy.called).toBe(true);
  });

  it('uses the last-passed arguments when debouncing multiple calls', () => {
    const debounced = debounce(spy, 100);
    debounced(1);
    debounced(2);
    clock.tick(50);
    expect(spy.called).toBe(false);
    clock.tick(50);
    expect(spy.args.length).toBe(1);
    expect(spy.args[0][0]).toBe(2);
  });

  it('uses the last-employed context when debouncing multiple calls', () => {
    let context;
    const debounced = debounce(function() {
      context = this;
    }, 100);
    const context1 = {};
    const context2 = {};
    debounced.call(context1);
    debounced.call(context2);
    clock.tick(1000);
    expect(context).toBe(context2);
  });
});
