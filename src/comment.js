import images from './images';
import commentFiles from './getcomments';

export default async (object, id) => {
  // const ul = document.createElement('ul');
  /* eslint no-unused-vars:0 */
  const commentData = commentFiles(id);

  // if (commentData.length){
  //  commentData.forEach((comment) => {
  //     const li = document.createElement('li');
  //     const text = `
  //       <div ">
  //         ${comment.user} : ${comment.comment}
  //       </div>
  //     </div>`;
  //     li.innerHTML = text;
  //     ul.appendChild(li);
  //   });
  // }
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
   + display;
};
