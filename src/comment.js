import images from './images';
let arr = [
  ['dan', 'good price'],
  ['john', 'hmmm l love this'],
];

export default async (object) => {
  //display the coin details
  const section = document.getElementById('comment')
  const element = document.createElement('div')
  const img = document.createElement('img');
  const name = document.createElement('h3');
  img.setAttribute('src', images(object.symbol));
  name.innerText = object.symbol;

  const display = `<div class='stats'>  
       <p>Last price: ${object.lastPrice}</p>
       <p>Open price: ${object.openPrice}</p>
       <p>High price: ${object.highPrice}</p>
       <p>Low price: ${object.lastPrice}</p>
      </div>`
   element.innerHTML = img.outerHTML
   + name.outerHTML
   + display;
   element.className = 'imgpos';
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
            type="submit"
            id="submit-btn"
            class="btn">
            Submit
          </button>
        </form>
      </div>`;
  div.innerHTML = txt;
  section.appendChild(element);
   section.className = 'commentspage';
  section.appendChild(div);
};
