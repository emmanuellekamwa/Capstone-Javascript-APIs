export default async (id) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kILi6A14lgBXPIsGn5MP/likes/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};