/* eslint  no-use-before-define: 0 */
import { set } from "lodash"; /* eslint-disable-line */
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
import error from './error';

export default async (arr, toGet) => {
  const title = document.getElementById('main-title');
  const parent = document.getElementById('main-section');
  const commentPopUp = document.getElementById('popup');
  commentPopUp.style.display = 'block';
  parent.innerHTML = ''; // Clear parent to prevent continuous appending
  const likeArr = await likes(); // Call for the involvement API (likes)
  toGet.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `<p class="coin-title">${arr[element].symbol}</p>`; // Get Symbol from the remote API data
    const img = document.createElement('img');
    const buttonRes = document.createElement('button');
    const buttonCom = document.createElement('button');
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
          if (userName.value !== '' && userMessage.value !== '') {
            await add(commentData);
            const ul = document.getElementById('commentlist');
            const li = document.createElement('li');
            const hr = document.createElement('hr');
            const today = new Date().toISOString().slice(0, 10);
            li.innerText = `${today} - ${commentData.username} : ${commentData.comment}`;
            ul.appendChild(li);
            ul.append(hr);
            userName.value = '';
            userMessage.value = '';
            error('Comment added!', 'green');
          } else {
            error('Invalid input!', 'red');
          }
        });
      }, 100);
      const userName = document.getElementById('name');
      const userMessage = document.getElementById('feedback');
    });
    buttonCom.className = 'btn';

    const heart = document.createElement('aside');
    heart.id = element;
    heart.innerHTML = '<i class="far fa-heart"></i>';
    heart.addEventListener('click', async (e) => {
      const hrt = document.createElement('article');
      hrt.innerHTML = '<i class="fas fa-heart">';
      hrt.id = 'little-heart';
      hrt.style.left = `${e.clientX - 3}px`;
      hrt.style.top = `${e.clientY - 5}px`;
      setTimeout(() => {
        hrt.classList.add('fade');
      }, 400);
      setTimeout(() => {
        hrt.classList.add('left-1');
      }, 100);
      setTimeout(() => {
        hrt.classList.add('left-2');
      }, 400);
      document.body.appendChild(hrt);
      setTimeout(() => {
        document.body.removeChild(document.getElementById('little-heart'));
      }, 1500);
      await sendLike(element); // New like on click
      const toEdit = document.getElementById(element);
      const num = toEdit.innerHTML.replace(/^\D+/g, '');
      toEdit.innerHTML = `<i class="far fa-heart"></i>${Number(num) + 1}`;
    });
    heart.addEventListener('mouseover', () => {
      const toEdit = document.getElementById(element);
      const num = toEdit.innerHTML.replace(/^\D+/g, '');
      toEdit.innerHTML = `<i class="fas fa-heart"></i>${num}`;
    });
    heart.addEventListener('mouseleave', () => {
      const toEdit = document.getElementById(element);
      const num = toEdit.innerHTML.replace(/^\D+/g, '');
      toEdit.innerHTML = `<i class="far fa-heart"></i>${num}`;
    });

    likeArr.forEach((el) => {
      if (el.item_id === element) {
        // Check if there is an element matching
        heart.innerHTML = `<i class="far fa-heart"></i>${el.likes}`; // Heart icon and counter
      }
    });

    img.setAttribute('src', check(arr[element].symbol));
    buttonCom.innerText = 'Comments';
    const popupWindow = document.getElementById('popup');
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
        if (
          nameInput.value !== ''
          && startInput.value !== ''
          && endInput.value !== ''
        ) {
          await addReservation(
            element,
            nameInput.value,
            startInput.value,
            endInput.value,
          );
          const restList = document.getElementById('reservationList');
          const newItem = document.createElement('li');
          const counter = document.getElementById('counter');
          counter.innerText = Number(counter.textContent) + 1;
          newItem.innerHTML = `<li>${startInput.value} - ${endInput.value} by ${nameInput.value}</li><hr>`;
          restList.appendChild(newItem);
          error('Reservation added!', 'green');
        } else {
          error('Invalid input!', 'red');
        }
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
  const leng = toGet.length;
  return leng;
};
