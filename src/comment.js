import images from './images';
import commentFiles from './getcomments';

export default async (object, id) => {
  const ul = document.createElement('ul');
  /* eslint no-unused-vars:0 */
  ul.id = 'commentlist';
  const commentData = await commentFiles(id);
  console.log(commentData)
 if (Array.isArray(commentData)){
   commentData.forEach((comment) => {
      const li = document.createElement('li');
      li.innerHTML = ` ${comment.username} : ${comment.comment}`;
      ul.appendChild(li);
    });
  }
  // display the coin details
  const coinDetails = document.getElementById('coin-details');
  const img = document.createElement('img');
  const name = document.createElement('h3');
  img.setAttribute('src', images(object.symbol));
  name.innerText = object.symbol;

  const display = `<div class='stats'>  
       <p>Last price: ${object.lastPrice}</p>
       <p>Open price: ${object.openPrice}</p>
       <p>High price: ${object.highPrice}</p>
       <p>Low price: ${object.lastPrice}</p>
      </div>`;
  coinDetails.innerHTML = img.outerHTML
   + name.outerHTML
   + display
   + ul.outerHTML;
};
