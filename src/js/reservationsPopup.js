import images from './images';

const reservationsPopup = async (object) => {
  const coinDetails = document.getElementById('coin-details');
  const img = document.createElement('img');
  img.setAttribute('src', images(object.symbol));
  const name = document.createElement('h3');
  name.innerText = object.symbol;
  const close = document.createElement('i');
  close.className = 'far fa-times-circle';
  close.setAttribute('id', 'close');
  const stats = document.createElement('div');
  stats.className = 'stats';
  const lastPrice = document.createElement('p');
  const openPrice = document.createElement('p');
  const highPrice = document.createElement('p');
  const lowPrice = document.createElement('p');
  lastPrice.innerText = `Last price: ${parseFloat(object.lastPrice).toFixed(3)}`;
  openPrice.innerText = `Open price: ${parseFloat(object.openPrice).toFixed(3)}`;
  highPrice.innerText = `High price: ${parseFloat(object.highPrice).toFixed(3)}`;
  lowPrice.innerText = `Low price: ${parseFloat(object.lastPrice).toFixed(3)}`;
  stats.innerHTML = lastPrice.outerHTML
  + openPrice.outerHTML
  + highPrice.outerHTML
  + lowPrice.outerHTML;
  coinDetails.innerHTML = img.outerHTML
  + close.outerHTML
  + name.outerHTML
  + stats.outerHTML;
};

export default reservationsPopup;
