/* eslint no-console: 1 */

import { describe, test, expect } from "vitest";

import { debounce, throttle, throttleAndDebounce, wait } from '../src/timing';

const fn = (calls) => (value) => {
  calls.push(value);
};

describe('Timing utilities', () => {
  test('wait()', async () => {
    const time = 100;
    const t0 = performance.now();

    await wait(time);

    const dT = performance.now() - t0;

    expect(dT >= time).toBe(true);
  });

  describe('debounce()', () => {
    test('debounces function calls', async () => {
      const calls = [];
      const debounceTime = 100;
      const debouncedFn = debounce(fn(calls), debounceTime);

      expect(calls.length).toBe(0);

      debouncedFn(0);
      debouncedFn(1);
      debouncedFn(2);
      debouncedFn(3);
      debouncedFn(4);

      expect(calls.length).toBe(0);

      await wait(debounceTime + 20);

      expect(calls.length).toBe(1);
      expect(calls[0]).toBe(4);
    });

    test('cancel()', async () => {
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

      expect(calls.length).toBe(0);
    });

    test('now()', async () => {
      const calls = [];
      const debounceTime = 100;
      const debouncedFn = debounce(fn(calls), debounceTime);

      debouncedFn.now();

      expect(calls.length).toBe(1);
    });
  });

  describe('throttle()', () => {
    test('throttles function calls', async () => {
      const calls = [];
      const waitTime = 100;
      const throttledFn = throttle(fn(calls), waitTime);

      expect(calls.length).toBe(0);

      throttledFn(0);
      throttledFn(1);
      throttledFn(2);
      throttledFn(3);
      throttledFn(4);

      expect(calls.length).toBe(1);
      expect(calls[0]).toBe(0);

      await wait(waitTime + 20);

      throttledFn(5);
      throttledFn(6);
      throttledFn(7);
      throttledFn(8);
      throttledFn(9);

      expect(calls.length).toBe(2);
      expect(calls[1]).toBe(5);
    });

    test('reset()', async () => {
      const calls = [];
      const waitTime = 100;
      const throttledFn = throttle(fn(calls), waitTime);

      throttledFn(0);
      throttledFn(1);
      throttledFn(2);
      throttledFn(3);
      throttledFn.reset();
      throttledFn(4);

      expect(calls.length).toBe(2);
    });

    test('now()', async () => {
      const calls = [];
      const debounceTime = 100;
      const throttledFn = throttle(fn(calls), debounceTime);

      throttledFn(0);
      throttledFn(1);
      throttledFn(2);
      throttledFn(3);
      throttledFn.now(4);

      expect(calls.length).toBe(2);
    });
  });

  describe('throttleAndDebounce()', () => {
    test('throttles and debounces function calls', async () => {
      const calls = [];
      const delay = 100;
      const throttledAndDebouncedFn = throttleAndDebounce(fn(calls), delay);

      expect(calls.length).toBe(0);

      throttledAndDebouncedFn(0);
      throttledAndDebouncedFn(1);
      throttledAndDebouncedFn(2);
      throttledAndDebouncedFn(3);
      throttledAndDebouncedFn(4);

      expect(calls.length).toBe(1);
      expect(calls[0]).toBe(0);

      await wait(delay + 20);

      expect(calls.length).toBe(2);
      expect(calls[1]).toBe(4);
    });

    test('with separate throttle and debounce times', async () => {
      const calls = [];
      const throttleTime = 50;
      const debounceTime = throttleTime * 2;
      const throttledAndDebouncedFn = throttleAndDebounce(
        fn(calls),
        throttleTime,
        debounceTime
      );

      expect(calls.length).toBe(0);

      throttledAndDebouncedFn(0);
      throttledAndDebouncedFn(1);
      throttledAndDebouncedFn(2);
      throttledAndDebouncedFn(3);
      throttledAndDebouncedFn(4);

      await wait(throttleTime + 20);

      expect(calls.length).toBe(1);

      await wait(debounceTime - throttleTime);

      expect(calls.length).toBe(2);
    });

    test('reset()', async () => {
      const calls = [];
      const delay = 100;
      const throttledAndDebouncedFn = throttleAndDebounce(fn(calls), delay);

      throttledAndDebouncedFn(0);
      throttledAndDebouncedFn(1);
      throttledAndDebouncedFn(2);
      throttledAndDebouncedFn(3);
      throttledAndDebouncedFn.reset();
      throttledAndDebouncedFn(4);

      expect(calls.length).toBe(2);
    });

    test('cancel()', async () => {
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

      expect(calls.length).toBe(1);
    });

    test('now()', async () => {
      const calls = [];
      const delay = 100;
      const throttledAndDebouncedFn = throttleAndDebounce(fn(calls), delay);

      throttledAndDebouncedFn(0);
      throttledAndDebouncedFn(1);
      throttledAndDebouncedFn(2);
      throttledAndDebouncedFn(3);
      throttledAndDebouncedFn.now(4);

      expect(calls.length).toBe(2);

      await wait(delay + 20);

      expect(calls[2]).toBe(3);
    });
  });
});
