import images from './images';
import reservationsForm from './reservationsForm';
import showReservations from './showReservations';

const reservationsPopup = async (object, id) => {
  const popupWindow = document.getElementById('popup');
  popupWindow.className = 'popup';
  const reservation = document.createElement('div');
  reservation.className = 'reservation';
  reservation.setAttribute('id', 'reservation');
  const img = document.createElement('img');
  img.setAttribute('src', images(object.symbol));
  const name = document.createElement('h3');
  name.innerText = object.symbol;
  const close = document.createElement('button');
  const closeIcon = document.createElement('i');
  close.appendChild(closeIcon);
  closeIcon.className = 'far fa-times-circle';  
  close.setAttribute('id', 'close');
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
  + close.outerHTML
  + name.outerHTML
  + stats.outerHTML;
  showReservations(reservation, id);
  reservationsForm(id, reservation);
  popupWindow.appendChild(reservation);
  // const closePopup = document.getElementById('close');
  // console.log(closePopup);
  // closePopup.addEventListener('click', () => {
  //   console.log('test');
  //   })
  //   console.log(closePopup);
  const nameInput = document.getElementById('name');
  const startInput = document.getElementById('start');
  const endInput = document.getElementById('end');
  const reserve = document.getElementById('reserve');
  console.log(nameInput, startInput, endInput, reserve, id);

  reserve.onclick = async() => {
    console.log('reservation confirmed');
    await addReservation(id, nameInput.value, startInput.value, endInput.value);
  }

};

export default reservationsPopup;