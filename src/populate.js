import check from './images';
import reservationsPopup from './reservationsPopup';
import displayToggle from './toggle';
import displayComment from './comment'

export default (arr) => {
  const toGet = [11, 12, 564, 98, 308, 190];
  const parent = document.getElementById('main-section');
  parent.innerHTML = '';
  toGet.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `${arr[element].symbol}`;
    const img = document.createElement('img');
    img.setAttribute('src', check(arr[element].symbol));
    const buttonRes = document.createElement('button');
    const buttonCom = document.createElement('button');
    const section = document.getElementById('comment')
    section.style.display = 'none';
    buttonCom.addEventListener('click', () => {
        displayComment(arr[element]);
        displayToggle(section);
    })
    buttonCom.className = 'submit-btn';
    buttonCom.innerText = 'Comments';
    const popupWindow = document.getElementById('popup');
    popupWindow.style.display = 'none';
    buttonRes.addEventListener('click', () => {
      reservationsPopup(arr[element]);
      displayToggle(popupWindow);
    });
    buttonRes.innerText = 'Reservations';
    li.append(img);
    li.append(buttonCom);
    li.append(buttonRes);
    parent.appendChild(li);
  });
};