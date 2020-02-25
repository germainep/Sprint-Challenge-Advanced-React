import React from 'react';
import './App.css';
import useFetchData from './hooks/useFetchData';

import Players from './components/Players'

function App() {
  const {res, setRes} = useFetchData('http://localhost:5000/api/players')
  return (
    <div className="App">
      <Players playerData={res}/>
    </div>
  );
}

export default App;
