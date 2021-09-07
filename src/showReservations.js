import getReservations from './getReservations';

const showReservations = async (reserveCont, id) => {
  const reservations = await getReservations(id);
  const heading = document.createElement('h4');
  const list = document.createElement('ul');
  if (reservations) {
    reservations.forEach( reservation => {
      list.innerHTML += `<li>${reservation.date_start} - ${reservation.date_end} by ${reservation.username}</li>`;
    });
  };
  reserveCont.innerHTML += heading.outerHTML
  + list.outerHTML;
};

export default showReservations;