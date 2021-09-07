export const section = document.getElementById('comment');
const ul = document.createElement('ul');
let arr = [
  ['dan', 'good price'],
  ['john', 'hmmm l love this'],
];

export default async (arr) => {

  if (arr.length) {
    arr.forEach((comment) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      const text = `
          <div class="fw-bold text-start">
            ${comment[0]} : ${comment[1]}
          </div>
        </div>`;
      li.innerHTML = text;
      ul.appendChild(li);
    });
  }
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
              id="message"
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
  section.classList.add('comment');
  section.appendChild(ul);
  section.appendChild(div);
};
