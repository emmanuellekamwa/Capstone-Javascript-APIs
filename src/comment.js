import images from './images';
import commentFiles from './getcomments'
import sendComment from './sendComment';

export default async (object,id) => {
  const ul = document.createElement('ul');
  const commentData = commentFiles(id);

  if (commentData.length){
   commentData.forEach((comment) => {
      const li = document.createElement('li');
      const text = `
        <div ">
          ${comment.user} : ${comment.comment}
        </div>
      </div>`;
      li.innerHTML = text;
      ul.appendChild(li);
    });
  }
  // display the coin details
  const section = document.getElementById('popup');
  section.innerHTML = '';
  const element = document.createElement('div');
  const submitBtn = document.getElementById('submit-btn');
  const userName = document.getElementById('user');
   const userMessage = document.getElementById('feedback');
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
  element.innerHTML = img.outerHTML
   + name.outerHTML
   + display;
  //  display the comment form
  const div = document.createElement('div');
  const txt = `<div>
        <form>
          <div class="form-floating m-3">
            <input
              type="text"
              class="form-control m-2"
              id="name"
              placeholder="name"
            />
            <label for="name">Your name</label>
          </div>
          <div class="form-floating m-3">
            <input
              type="text"
              class="form-control m-2"
              id="feedback"
              placeholder="message"
            />
            <label for="message">Your message</label>
          </div>
          <button
            type="button"
            id="submit-btn">
            Add comment
          </button>
        </form>
      </div>`;
  div.innerHTML = txt;
  
  section.className = 'commentspage';
  section.appendChild(element);
  section.appendChild(ul);
  section.appendChild(div);
  sendComment(submitBtn,userName,userMessage);
};
