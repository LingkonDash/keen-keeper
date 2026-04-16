export const getData = async () => {

  const res = await fetch('https://keen-keeper-a07.vercel.app/friends.json')
  // const res = await fetch('http://localhost:3000/friends.json')
  const data = await res.json();

  return data;

};
