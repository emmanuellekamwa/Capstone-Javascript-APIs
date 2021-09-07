const getReservations = async (item_id) => {
  const request = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pXlrPxLwgnIhKy0gtUs5/reservations?item_id=${item_id}`);
  const result = await request.json();
  return result;
};

export default getReservations;