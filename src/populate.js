import check from './images';
import likes from './likes';
import sendLike from './sendLike';
import populate from './populate';
import call from './getData';
import reservationsPopup from './reservationsPopup';
import displayToggle from './toggle';

export default async (arr) => {
  const toGet = [11, 12, 564, 98, 308, 190];                                // Array of crypto to get
  const title = document.getElementById('main-title');
  const parent = document.getElementById('main-section');
  parent.innerHTML = '';                                                    // Clear parent to prevent continuous appending
  let like_arr = await likes();                                             // Call for the involvment API (likes)
  toGet.forEach((element) => {
    const li = document.createElement('li');                                    
    li.classList.add('item');
    li.innerHTML = `<p>${arr[element].symbol}</p>`;                         // Get Symbol from the remote API data
    const img = document.createElement('img');
    const buttonRes = document.createElement('button');
    const buttonCom = document.createElement('button');
    const heart = document.createElement('aside');
    heart.innerHTML = '<i class="far fa-heart"></i>';
    heart.addEventListener('click', async() => {
      await sendLike(element);                                              // New like on click
      populate(await call());
    });

    like_arr.forEach(el => {
      if(el.item_id == element){                                   // Check if there is an element matching the one we're iterating from the array of crypto to get
        heart.innerHTML = '<i class="far fa-heart"></i>'+el.likes; // Heart icon and counter
      }
    });

    img.setAttribute('src', check(arr[element].symbol));
    buttonCom.addEventListener('click', () => {
      showCom(element);                                                      // Show comments
    });
    buttonCom.innerText = 'Comments';
    const popupWindow = document.getElementById('popup');
    popupWindow.style.display = 'none';
    buttonRes.addEventListener('click', () => {
      reservationsPopup(arr[element]);
      displayToggle(popupWindow);
    });
    buttonRes.innerText = 'Reservations';
    li.append(img);
    li.append(heart);
    li.append(buttonCom);
    li.append(buttonRes);
    parent.appendChild(li);
  });
  title.innerHTML='';
  title.innerHTML='Total coins:' + parent.childElementCount;                                     // Append number of elements displayed on the page
};