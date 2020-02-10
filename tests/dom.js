/* eslint no-console: 1 */

import '@babel/polyfill';
import { test } from 'zora';

import { removeAllChildren } from '../src/dom';

test('removeAllChildren()', t => {
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
