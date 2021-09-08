const addReservation = async (id, name, start, end) => {
  const data = {
    "item_id": id,
    "username": name,
    "date_start": start,
    "date_end": end
  }
   fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pXlrPxLwgnIhKy0gtUs5/reservations/`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (data),
  });
}

export default addReservation;