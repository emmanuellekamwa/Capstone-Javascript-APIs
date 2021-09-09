import getReservations from './getReservations';

const showReservations = async (reserveCont, id) => {
  const reservations = await getReservations(id);
  const heading = document.createElement('h4');
  heading.innerHTML = `Reservations <span id='counter'>(${countReservations(reservations)})</span>`;
  const list = document.createElement('ul');
  list.id = 'reservationList';
  if (Array.isArray(reservations)) {
    reservations.forEach((reservation) => {
      list.innerHTML += `<li>${reservation.date_start} - ${reservation.date_end} by ${reservation.username}</li>`;
    });
  }
  reserveCont.innerHTML += heading.outerHTML
    + list.outerHTML;
  list.innerHTML = '';
};

export default showReservations;