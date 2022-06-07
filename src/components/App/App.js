import React, { useState, useEffect } from 'react';
import './App.css';
import Tabs from '../Tabs/Tabs'



function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://beamtech.github.io/boxing-kata-js/perks.json')
        .then((response) => response.json())
        .then((result) =>{ setData(result); console.log(result)})
        .catch((error) => console.log('An error occurred', error));
    };

    fetchData();
  }, []);

  return (
    <div className="App">  
      <h1 className='appTitle'>
        Shipping
      </h1>
      <Tabs data={data} />
    </div>
  );
}

export default App;
