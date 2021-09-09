import counter from './commentCounter';

const data = [
  {
    username: 'faith',
    comment: 'am buying this coin',
  },
  {
    username: 'Dan',
    comment: 'Woow I think the price is going to keep rising ',
  },
  {
    name: 'Eddie',
    comment: 'am cashing out',
  },
  {
    name: 'Phil',
    comment: 'wooow so expensive',
  },
  {
    name: 'Dee',
    comment: 'am going to buy',
  },
];
const empty = [];
describe('Message counter', () => {
  it('counts the number of comments', () => {
    expect(counter(data)).toBe(5);
  });
  it('counts the number of comments', () => {
    expect(counter(empty)).toBe(0);
  });
});
