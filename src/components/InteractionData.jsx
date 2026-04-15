'use client'

import React, { useContext } from 'react';
import { StateContext } from './globalState/GlobalProvider';

const InteractionData = () => {

  const [localData] = useContext(StateContext);

  return (
    <div className='text-center p-8 bg-white rounded-lg shadow-sm'>
      <h3 className='font-semibold text-3xl text-secondary-bg'>{localData.length}</h3>
      <p className='text-secondary-text'>Interactions This Month</p>
    </div>
  );
};

export default InteractionData;