export default async () => {
  const form = document.getElementById('form-container');
  const txt = `<div>
        <form>
          <div class="form-floating ">
            <input
              type="text"
              class="form-control "
              id="name"
              placeholder="name"
            />
            <label for="name">Your name</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control "
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
  form.innerHTML = txt;
};
