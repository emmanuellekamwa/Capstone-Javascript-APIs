import images from './images';
import commentFiles from './getcomments';
import displayToggle from './toggle';
import counter from './commentCounter';

export default async (object, id) => {
  const ul = document.createElement('ul');
  /* eslint no-unused-vars:0 */
  ul.id = 'commentlist';
  const commentData = await commentFiles(id);
  const commentCount = counter(commentData);
  const commentTitle = document.createElement('h4');
  commentTitle.innerHTML = `Comments (<span id='commentsCounter'>${commentCount}</span>)`;
  if (Array.isArray(commentData)) {
    commentData.forEach((comment) => {
      const li = document.createElement('li');
      li.innerHTML = `${comment.creation_date} - ${comment.username} : ${comment.comment}<hr>`;
      ul.appendChild(li);
    });
  }
  // display the coin details
  const close = document.createElement('i');
  close.className = 'far fa-times-circle';
  close.setAttribute('id', 'close');
  const coinDetails = document.getElementById('coin-details');
  const img = document.createElement('img');
  const name = document.createElement('h3');
  img.setAttribute('src', images(object.symbol));
  name.innerText = object.symbol;

  const display = `<div class='stats'>  
       <p>Last price: ${parseFloat(object.lastPrice).toFixed(3)}</p>
       <p>Open price: ${parseFloat(object.openPrice).toFixed(3)}</p>
       <p>High price: ${parseFloat(object.highPrice).toFixed(3)}</p>
       <p>Low price: ${parseFloat(object.lastPrice).toFixed(3)}</p>
      </div>`;
  coinDetails.innerHTML = img.outerHTML
   + close.outerHTML
   + name.outerHTML
   + display
   + commentTitle.outerHTML
   + ul.outerHTML;
  const popupWindow = document.getElementById('popup');
  const closePopup = document.getElementById('close');
  closePopup.addEventListener('click', () => {
    displayToggle(popupWindow);
  });
};
