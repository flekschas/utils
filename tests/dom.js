/* eslint no-console: 1 */

import { test } from 'zora';

import {
  createHtmlByTemplate,
  removeAllChildren,
  removeLastChild,
} from '../src/dom';

test('createHtmlByTemplate()', (t) => {
  const template = '<p>Hi my name is <strong>Test</strong>!</p>';

  const p = createHtmlByTemplate(template);

  const tmp = document.createElement('div');
  tmp.appendChild(p);

  t.equal(template, tmp.innerHTML, 'The template should math the inner HTML');
  t.equal(p.tagName, 'P', 'The root node should be a paragraph');
});

test('removeAllChildren()', (t) => {
  const rootEl = document.createElement('div');

  rootEl.appendChild(document.createElement('div'));
  rootEl.appendChild(document.createElement('div'));
  rootEl.appendChild(
    document.createElement('div').appendChild(document.createElement('div'))
  );

  t.equal(rootEl.children.length, 3, 'There should be 3 children');

  removeAllChildren(rootEl);

  t.equal(rootEl.children.length, 0, 'All children should be removed');
});

test('removeLastChild()', (t) => {
  const rootEl = document.createElement('div');

  rootEl.appendChild(document.createElement('div'));
  rootEl.appendChild(document.createElement('div'));

  t.equal(rootEl.children.length, 2, 'There should be two children');

  removeLastChild(rootEl);

  t.equal(rootEl.children.length, 1, 'One child should be left');

  removeLastChild(rootEl);

  t.equal(rootEl.children.length, 0, 'All children should be removed');
});
