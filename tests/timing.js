/* eslint no-console: 1 */

import '@babel/polyfill';
import { test } from 'zora';

import { debounce, throttle, throttleAndDebounce, wait } from '../src/timing';

const fn = calls => value => {
  calls.push(value);
};

test('wait()', async t => {
  const time = 100;
  const t0 = performance.now();

  await wait(time);

  const dT = performance.now() - t0;

  t.ok(dT >= time, `Execution should have waited at least ${time} msec`);
});

test('debounce()', async t => {
  const calls = [];
  const debounceTime = 100;
  const debouncedFn = debounce(fn(calls), debounceTime);

  t.equal(calls.length, 0, 'There should have been no function calls yet');

  debouncedFn(0);
  debouncedFn(1);
  debouncedFn(2);
  debouncedFn(3);
  debouncedFn(4);

  t.equal(
    calls.length,
    0,
    'There should have still been no function calls yet'
  );

  await wait(debounceTime + 20);

  t.equal(calls.length, 1, 'There should have been one function call');
  t.equal(
    calls[0],
    4,
    'The function call should have received the latest argument'
  );
});

test('debounce().cancel()', async t => {
  const calls = [];
  const debounceTime = 100;
  const debouncedFn = debounce(fn(calls), debounceTime);

  debouncedFn(0);
  debouncedFn(1);
  debouncedFn(2);
  debouncedFn(3);
  debouncedFn(4);
  debouncedFn.cancel();

  await wait(debounceTime + 20);

  t.equal(calls.length, 0, 'There should have been *no* function call');
});

test('debounce().now()', async t => {
  const calls = [];
  const debounceTime = 100;
  const debouncedFn = debounce(fn(calls), debounceTime);

  debouncedFn.now();

  t.equal(calls.length, 1, 'There should have been *one* function call');
});

test('throttle()', async t => {
  const calls = [];
  const waitTime = 100;
  const throttledFn = throttle(fn(calls), waitTime);

  t.equal(calls.length, 0, 'There should have been no function calls yet');

  throttledFn(0);
  throttledFn(1);
  throttledFn(2);
  throttledFn(3);
  throttledFn(4);

  t.equal(calls.length, 1, 'There should have been one function call');
  t.equal(
    calls[0],
    0,
    'The first function call should have received the 1st argument'
  );

  await wait(waitTime + 20);

  throttledFn(5);
  throttledFn(6);
  throttledFn(7);
  throttledFn(8);
  throttledFn(9);

  t.equal(calls.length, 2, 'There should have been two function calls');
  t.equal(
    calls[1],
    5,
    'The second function call should have received the 6th argument'
  );
});

test('throttle().reset()', async t => {
  const calls = [];
  const waitTime = 100;
  const throttledFn = throttle(fn(calls), waitTime);

  throttledFn(0);
  throttledFn(1);
  throttledFn(2);
  throttledFn(3);
  throttledFn.reset();
  throttledFn(4);

  t.equal(calls.length, 2, 'There should have been *two* function calls');
});

test('throttle().now()', async t => {
  const calls = [];
  const debounceTime = 100;
  const throttledFn = throttle(fn(calls), debounceTime);

  throttledFn(0);
  throttledFn(1);
  throttledFn(2);
  throttledFn(3);
  throttledFn.now(4);

  t.equal(calls.length, 2, 'There should have been *two* function calls');
});

test('throttleAndDebounce()', async t => {
  const calls = [];
  const delay = 100;
  const throttledAndDebouncedFn = throttleAndDebounce(fn(calls), delay);

  t.equal(calls.length, 0, 'There should have been no function calls yet');

  throttledAndDebouncedFn(0);
  throttledAndDebouncedFn(1);
  throttledAndDebouncedFn(2);
  throttledAndDebouncedFn(3);
  throttledAndDebouncedFn(4);

  t.equal(calls.length, 1, 'There should have been one function call');
  t.equal(
    calls[0],
    0,
    'The first function call should have received the 1st argument'
  );

  await wait(delay + 20);

  t.equal(calls.length, 2, 'There should have been two function calls');
  t.equal(
    calls[1],
    4,
    'The second function call should have received the 5th argument'
  );
});

test('throttleAndDebounce()', async t => {
  const calls = [];
  const throttleTime = 50;
  const debounceTime = throttleTime * 2;
  const throttledAndDebouncedFn = throttleAndDebounce(
    fn(calls),
    throttleTime,
    debounceTime
  );

  t.equal(calls.length, 0, 'There should have been no function calls yet');

  throttledAndDebouncedFn(0);
  throttledAndDebouncedFn(1);
  throttledAndDebouncedFn(2);
  throttledAndDebouncedFn(3);
  throttledAndDebouncedFn(4);

  await wait(throttleTime + 20);

  t.equal(
    calls.length,
    1,
    'The debounced call should have not been triggered yet'
  );

  await wait(debounceTime - throttleTime);

  t.equal(
    calls.length,
    2,
    `The debounced call should have been triggered after ${debounceTime} msec`
  );
});

test('throttleAndDebounce().reset()', async t => {
  const calls = [];
  const delay = 100;
  const throttledAndDebouncedFn = throttleAndDebounce(fn(calls), delay);

  throttledAndDebouncedFn(0);
  throttledAndDebouncedFn(1);
  throttledAndDebouncedFn(2);
  throttledAndDebouncedFn(3);
  throttledAndDebouncedFn.reset();
  throttledAndDebouncedFn(4);

  t.equal(calls.length, 2, 'There should have been *two* function calls');
});

test('throttleAndDebounce().cancel()', async t => {
  const calls = [];
  const delay = 100;
  const throttledAndDebouncedFn = throttleAndDebounce(fn(calls), delay);

  throttledAndDebouncedFn(0);
  throttledAndDebouncedFn(1);
  throttledAndDebouncedFn(2);
  throttledAndDebouncedFn(3);
  throttledAndDebouncedFn(4);
  throttledAndDebouncedFn.cancel();

  await wait(delay + 20);

  t.equal(calls.length, 1, 'There should have been only one function call');
});

test('throttleAndDebounce().now()', async t => {
  const calls = [];
  const delay = 100;
  const throttledAndDebouncedFn = throttleAndDebounce(fn(calls), delay);

  throttledAndDebouncedFn(0);
  throttledAndDebouncedFn(1);
  throttledAndDebouncedFn(2);
  throttledAndDebouncedFn(3);
  throttledAndDebouncedFn.now(4);

  t.equal(calls.length, 2, 'There should have been *two* function calls');

  await wait(delay + 20);

  t.equal(
    calls[2],
    3,
    'The third function call should have received the 4th argument'
  );
});
