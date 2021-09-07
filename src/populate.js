import check from './images';
import likes from './likes';
import sendLike from './sendLike';
import reservationsPopup from './reservationsPopup';
import displayToggle from './toggle';

export default async (arr) => {
  const toGet = [11, 12, 564, 98, 308, 190]; // Array of crypto to get
  const title = document.getElementById('main-title');
  const parent = document.getElementById('main-section');
  parent.innerHTML = ''; // Clear parent to prevent continuous appending
  const likeArr = await likes(); // Call for the involvment API (likes)
  toGet.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `<p class="coin-title">${arr[element].symbol}</p>`; // Get Symbol from the remote API data
    const img = document.createElement('img');
    const buttonRes = document.createElement('button');
    const buttonCom = document.createElement('button');
    const heart = document.createElement('aside');
    heart.id = element;
    heart.innerHTML = '<i class="far fa-heart"></i>';
    heart.addEventListener('click', async(e) => {
      const hrt = document.createElement('article');
      hrt.innerHTML = '<i class="fas fa-heart">';
      hrt.id = 'little-heart';
      hrt.style.left = `${e.clientX-3}px`;
      hrt.style.top = `${e.clientY-5}px`;
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
    heart.addEventListener('mouseover',() => {
      const toEdit = document.getElementById(element);
      const num = toEdit.innerHTML.replace(/^\D+/g, '');
      toEdit.innerHTML = `<i class="fas fa-heart"></i>${num}`;
    });
    heart.addEventListener('mouseleave',() => {
      const toEdit = document.getElementById(element);
      const num = toEdit.innerHTML.replace(/^\D+/g, '');
      toEdit.innerHTML = `<i class="far fa-heart"></i>${num}`;
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
    buttonRes.addEventListener('click', () => {
      reservationsPopup(arr[element], element);
      displayToggle(popupWindow);
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