import { useEffect, useState } from "react";


const useFetchData = () => {

  const [loadingState, setLoadingSate] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch('/friends.json')
      .then(res => res.json())
      .then(data => {
        setData(data);

        setLoadingSate(false);
      })
  },[])


  return [loadingState, data]
};

export default useFetchData;