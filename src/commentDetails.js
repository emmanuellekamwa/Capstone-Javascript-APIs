export default async () => {
  const form = document.getElementById('form-container');
  const txt = `<div>
        <form class="com-form">
          <div class="form-floating ">
            <input
              type="text"
              class="form-control "
              id="name"
              placeholder="Username"
            />
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control "
              id="feedback"
              placeholder="Comment"
            />
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
