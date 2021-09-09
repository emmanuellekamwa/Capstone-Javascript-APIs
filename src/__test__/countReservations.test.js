import countReservations from '../js/countReservations';

describe('Reservations count', () => {
  it('retuns number of reservations', () => {
    const reservations = [
      {
        name: 'John',
        date_start: '2021/12/12',
        date_end: '2021/12/13',
      },
      {
        name: 'Emma',
        date_start: '2021/12/11',
        date_end: '2021/12/13',
      },
      {
        name: 'Stewart',
        date_start: '2021/12/08',
        date_end: '2021/12/09',
      },
    ];
    expect(countReservations(reservations)).toEqual(3);
  });
  it('returns 0 if there are no reservations', () => {
    const reservations = [];
    expect(countReservations(reservations)).toEqual(0);
  });
});