import check from './images';
import likes from './likes';
import sendLike from './sendLike';
import reservationsPopup from './reservationsPopup';
import displayToggle from './toggle';
import displayComment from './comment';
import displayForm from './commentDetails';
import add from './addcomment';

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
    const submitBtn = document.getElementById('submit-btn');
    const userName = document.getElementById('name');
    const userMessage = document.getElementById('feedback');

    commentPopUp.style.display = 'none';
    buttonCom.addEventListener('click', (e) => {
      e.preventDefault();
      displayComment(arr[element], element);
      displayForm();
      displayToggle(commentPopUp);
      submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const commentData = {
          user: userName.value,
          score: userMessage.value,
        };
        const commentAdded = await add(commentData);
        if (commentAdded) {
          // console.log('saved');
        }
      });
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