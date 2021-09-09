/**
 * @jest-environment jsdom
 */
/* eslint no-unused-vars: 0 */

import call from './getData';
import populate from './populate';

global.fetch = jest.fn(() => Promise.resolve({ // API result mock
  json: () => Promise.resolve(
    [
      {
        symbol: 1,
        id: 101,
      },
      {
        symbol: 2,
        id: 102,

      },
      {
        symbol: 3,
        id: 103,
      },
    ],
  ),
}));

describe('Edit/Checkbox/Swap/Clear', () => {
  test('Check number of elements from function return', async () => {
    const toGet = [0, 1];
    document.body.innerHTML = '<h1 id="main-title">Sample title to be replaced</h1><ul id="main-section"</ul><section id="popup"></section>';
    const data = await call();
    const items = await populate(data, toGet);
    expect(items).toBe(2);
  });

  test('Check number of elements from DOM manipulation count', async () => {
    const toGet = [0, 1];
    document.body.innerHTML = '<h1 id="main-title">Sample title to be replaced</h1><ul id="main-section"</ul><section id="popup"></section>';
    const data = await call();
    const items = await populate(data, toGet);
    const title = document.getElementById('main-title').innerHTML;
    expect(title).toBe('Total coins:2');
  });
});
