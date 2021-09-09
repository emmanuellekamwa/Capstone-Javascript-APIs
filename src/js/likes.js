export default async () => {
  const request = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kILi6A14lgBXPIsGn5MP/likes/');
  const result = await request.json();
  return result;
};