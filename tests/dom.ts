/* eslint no-console: 1 */

import { describe, test, expect } from "vitest";

import {
  createHtmlByTemplate,
  removeAllChildren,
  removeLastChild,
} from '../src/dom';

describe('DOM utilities', () => {
  test('createHtmlByTemplate()', () => {
    const template = '<p>Hi my name is <strong>Test</strong>!</p>';

    const p = createHtmlByTemplate(template);

    const tmp = document.createElement('div');
    tmp.appendChild(p);

    expect(tmp.innerHTML).toBe(template);
    expect(p.tagName).toBe('P');
  });

  test('removeAllChildren()', () => {
    const rootEl = document.createElement('div');

    rootEl.appendChild(document.createElement('div'));
    rootEl.appendChild(document.createElement('div'));
    rootEl.appendChild(
      document.createElement('div').appendChild(document.createElement('div'))
    );

    expect(rootEl.children.length).toBe(3);

    removeAllChildren(rootEl);

    expect(rootEl.children.length).toBe(0);
  });

  test('removeLastChild()', () => {
    const rootEl = document.createElement('div');

    rootEl.appendChild(document.createElement('div'));
    rootEl.appendChild(document.createElement('div'));

    expect(rootEl.children.length).toBe(2);

    removeLastChild(rootEl);

    expect(rootEl.children.length).toBe(1);

    removeLastChild(rootEl);

    expect(rootEl.children.length).toBe(0);
  });
});
