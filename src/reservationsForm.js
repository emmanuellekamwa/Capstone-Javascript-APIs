import setAttributes from './setAttributes';

const reservationsForm = (id, reserveContainer) => {
  reserveContainer.className = 'formContainer';

  const formHeading = document.createElement('h3');
  formHeading.innerText = 'Reservation form';
  const form = document.createElement('form');
  const nameInput = document.createElement('input');
  setAttributes(nameInput, {
    placeholder: 'Your name',
    id: 'name',
  });
  const startInput = document.createElement('input');
  setAttributes(startInput, {
    placeholder: 'Start date',
    id: 'start',
    type: 'date',
  });
  const endInput = document.createElement('input');
  setAttributes(endInput, {
    placeholder: 'End date',
    id: 'end',
    type: 'date',
  });
  const reserveBtn = document.createElement('button');
  reserveBtn.innerText = 'Reserve';
  setAttributes(reserveBtn, {
    id: 'reserve',
    type: 'button',
  });

  form.innerHTML = nameInput.outerHTML
  + startInput.outerHTML
  + endInput.outerHTML
  + reserveBtn.outerHTML;
  reserveContainer.innerHTML += formHeading.outerHTML
  + form.outerHTML;
};

export default reservationsForm;