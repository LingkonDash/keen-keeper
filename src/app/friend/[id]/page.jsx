import React from 'react';

const FriendDetails = async ({ params }) => {

  const {id} = await params;

  const res = await fetch('http://localhost:3000/friends.json')
  const data = await res.json();

  const item = data.find(obj => obj.id === parseInt(id))
  

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <h1>id {id}, and {item.name}</h1>
    </div>
  );
};

export default FriendDetails