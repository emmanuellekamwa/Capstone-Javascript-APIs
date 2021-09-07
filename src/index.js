/* eslint no-unused-vars:0 */
import _, { divide } from 'lodash';
import './style.css';
import add from './addcomment'


import call from './getData';
import populate from './populate';

const getArr = async () => {
  const arr = await call();
  // const BTC = arr[11];
  // const ETH = arr[12];
  // const DOGE = arr[564];
  // const BNB = arr[98];
  // const XRP = arr[308];
  // const LINK = arr[436];
  return arr;
};

document.addEventListener('DOMContentLoaded', async () => {
  populate(await getArr());
});

const userName = document.getElementById('name');
const userComment = document.getElementById('feedback');

document.addEventListener('click', async () => {
    const commentData = {
      user: userName.value,
      comment: userComment.value,
    };
    const commentAdded = await add(commentData);
    if (commentAdded) {
        populate(await getArr());
        console.log(commentData);
    }
  });
