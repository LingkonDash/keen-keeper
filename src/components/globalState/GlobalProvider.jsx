'use client';

import { createContext, useEffect, useState } from 'react';

export const StateContext = createContext();

export default function GlobalProvider({ children }) {

  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('timeline');
    if (data !== null) {
      setLocalData(JSON.parse(data));
    }
  }, [])


  return (
    <StateContext.Provider value={[localData, setLocalData]}>
      {children}
    </StateContext.Provider>
  );
}
