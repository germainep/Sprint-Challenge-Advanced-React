//import liraries
import React, { useState, useEffect } from 'react';

// create a component
const useFetchData = (url) => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    fetch(url)
     .then(res => res.json())
     .then(data => setRes({data: data}))
  })
 return {res};
};


//make this component available to the app
export default useFetchData;
