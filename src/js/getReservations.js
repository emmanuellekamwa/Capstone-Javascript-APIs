const getReservations = async (itemId) => {
  const request = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kILi6A14lgBXPIsGn5MP/reservations?item_id=${itemId}`);
  const result = await request.json();
  return result;
};

export default getReservations;