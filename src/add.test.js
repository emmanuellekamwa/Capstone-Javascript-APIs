/**
 * @jest-environment jsdom
 */
/* eslint no-unused-vars: 0 */

import call from "./getData";
import populate from "./populate";
import check from './images';
import likes from './likes';
import sendLike from './sendLike';
import reservationsPopup from './reservationsPopup';
import displayToggle from './toggle';
import displayComment from './comment';
// import { toGet } from './toGet';

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve( 
            [
                {
                    symbol: 111111111111,
                    id: 101
                },
                {
                    symbol: 2222222222222,
                    id: 102
                
                },
                {
                    symbol: 3333333333333,
                    id: 103
                }
             ]
         ),
    })
);

it("Number of elements in homepage", async() => {
    const toGet = [0,1];
  document.body.innerHTML = '<h1 id="main-title">AAAAA</h1><ul id="main-section"</ul><section id="popup"></section>';
  const data = await call();
  const items = await populate(data,toGet);
  console.log(items);
  expect(items).toBe(2);
});
