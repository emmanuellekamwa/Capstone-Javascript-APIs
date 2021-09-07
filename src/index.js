/* eslint no-unused-vars:0 */
import _ from 'lodash';
import './style.css';
import reservationsPopup from './reservationsPopup';
import displayToggle from './toggle';
import call from './getData';
import populate from './populate';

const popupWindow = document.getElementById('popup');
button.onclick = () => {
  reservationsPopup(object);
  displayToggle(popupWindow);
}

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

