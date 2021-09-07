import images from './images'
const reservationsPopup =  (object) => {
  const popupWindow = document.getElementById('popup');
  popupWindow.className = "popup";
  const reservation = document.createElement('div');
  reservation.className = 'reservation';
  const img = document.createElement('img');
  const name = document.createElement('h3');
  img.setAttribute('src', images(object));
  name.innerText = object.symbol;
  const stats = document.createElement('div');
  stats.className = 'stats';
  const lastPrice = document.createElement('p');
  const openPrice = document.createElement('p');
  const highPrice = document.createElement('p');
  const lowPrice = document.createElement('p');
  lastPrice.innerText = `Last price: ${object.lastPrice}`;
  openPrice.innerText = `Open price: ${object.openPrice}`;
  highPrice.innerText = `High price: ${object.highPrice}`;
  lowPrice.innerText = `Low price: ${object.lastPrice}`;
  stats.innerHTML = lastPrice.outerHTML 
  + openPrice.outerHTML
  + highPrice.outerHTML
  + lowPrice.outerHTML;
  reservation.innerHTML = img.outerHTML
  + name.outerHTML
  + stats.outerHTML;  
  popupWindow.appendChild(reservation);  
}

export default reservationsPopup;