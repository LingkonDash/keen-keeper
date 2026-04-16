'use client'

import { StateContext } from "@/components/globalState/GlobalProvider";
import { useContext } from "react";

const usePieData = () => {
  
  const [localData, setLocalData] = useContext(StateContext);


  const data = { call: 0, text: 0, video:0 }
  
  localData.forEach(element => {
    if(element.type === 'Call') data.call = ++data.call
    else if(element.type === 'Text') data.text = ++data.text
    else if(element.type === 'Video') data.video = ++data.video
  });
  
  return [
    { name: 'Call', value: data.call, fill: '#244D3F' },
    { name: 'Text', value: data.text, fill: '#7E35E1' },
    { name: 'Video', value: data.video, fill: '#37A163' },
  ];
};

export default usePieData;