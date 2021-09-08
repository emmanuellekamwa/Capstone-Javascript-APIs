/* eslint  no-use-before-define: 0 */
import { set } from 'lodash'; /* eslint-disable-line */
import check from './images';
import likes from './likes';
import sendLike from './sendLike';
import reservationsPopup from './reservationsPopup';
import displayToggle from './toggle';
import displayComment from './comment';
import displayForm from './commentDetails';
import add from './addcomment';
import showReservations from './showReservations';
import reservationsForm from './reservationsForm';
import addReservation from './addReservation';

export default async (arr) => {
  const toGet = [11, 12, 564, 98, 308, 190]; // Array of crypto to get
  const title = document.getElementById('main-title');
  const parent = document.getElementById('main-section');
  parent.innerHTML = ''; // Clear parent to prevent continuous appending
  const likeArr = await likes(); // Call for the involvment API (likes)
  toGet.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `<p>${arr[element].symbol}</p>`; // Get Symbol from the remote API data
    const img = document.createElement('img');
    const buttonRes = document.createElement('button');
    const buttonCom = document.createElement('button');
    const commentPopUp = document.getElementById('popup');

    commentPopUp.style.display = 'none';
    buttonCom.addEventListener('click', async () => {
      coinDetails.innerHTML = '';
      formContainer.innerHTML = '';
      displayComment(arr[element], element);
      displayForm();
      displayToggle(commentPopUp);
      const submitBtn = document.getElementById('submit-btn');
      setTimeout(() => {
        submitBtn.addEventListener('click', async (e) => {
          e.preventDefault();
          const commentData = {
            item_id: element,
            username: userName.value,
            comment: userMessage.value,
          };
          await add(commentData);
          const ul = document.getElementById('commentlist');
          const li = document.createElement('li');
          li.innerText = `${commentData.username} : ${commentData.comment}`;
          ul.appendChild(li);
          userName.value = '';
          userMessage.value = '';
        });
      }, 100);

      const userName = document.getElementById('name');
      const userMessage = document.getElementById('feedback');
    });
    buttonCom.className = 'btn';

    const heart = document.createElement('aside');
    heart.id = element;
    heart.innerHTML = '<i class="far fa-heart"></i>';
    heart.addEventListener('click', async () => {
      await sendLike(element); // New like on click
      const toEdit = document.getElementById(element);
      const num = toEdit.innerHTML.replace(/^\D+/g, '');
      toEdit.innerHTML = `<i class="far fa-heart"></i>${Number(num) + 1}`;
    });

    likeArr.forEach((el) => {
      if (el.item_id === element) { // Check if there is an element matching
        heart.innerHTML = `<i class="far fa-heart"></i>${el.likes}`; // Heart icon and counter
      }
    });

    img.setAttribute('src', check(arr[element].symbol));
    buttonCom.addEventListener('click', () => {
      // showCom(element); // Show comments
    });
    buttonCom.innerText = 'Comments';
    const popupWindow = document.getElementById('popup');
    popupWindow.style.display = 'none';
    const coinDetails = document.getElementById('coin-details');
    const formContainer = document.getElementById('form-container');
    buttonRes.addEventListener('click', async () => {
      coinDetails.innerHTML = '';
      formContainer.innerHTML = '';
      reservationsPopup(arr[element], element);
      await showReservations(coinDetails, element);
      reservationsForm(element, formContainer);
      const closePopup = document.getElementById('close');
      closePopup.addEventListener('click', () => {
        displayToggle(popupWindow);
      });
      displayToggle(popupWindow);
      const nameInput = document.getElementById('name');
      const startInput = document.getElementById('start');
      const endInput = document.getElementById('end');
      const reserve = document.getElementById('reserve');

      reserve.onclick = async () => {
        await addReservation(element, nameInput.value, startInput.value, endInput.value);
        const restList = document.getElementById('reservationList');
        const newItem = document.createElement('li');
        const counter = document.getElementById('counter');
        counter.innerText = Number(counter.textContent) + 1;
        newItem.innerHTML = `<li>${startInput.value} - ${endInput.value} by ${nameInput.value}</li>`;
        restList.appendChild(newItem);
      };
    });
    buttonRes.innerText = 'Reservations';
    li.append(img);
    li.append(heart);
    li.append(buttonCom);
    li.append(buttonRes);
    parent.appendChild(li);
  });
  title.innerHTML = '';
  title.innerHTML = `Total coins:${parent.childElementCount}`; // Append number of elements displayed on the page
};