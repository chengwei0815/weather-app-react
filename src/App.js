import React, { useState } from "react";
import InputField from './components/InputField';

function App() {
  const [city, setCity] = useState('');

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleCityClick(city) {
    console.log(`You selected ${city}`);
  }

  const cities = [
    { name: 'Boston', state: 'MA', country: 'US ' },
    { name: 'San Francisco', state: 'CA', country: 'US ' }
  ];

  return (
    <div>
      <h1>Weather</h1>
      <InputField label="City: " value={city} onChange={handleCityChange} />
      <ul>
        {cities.map((city) => (
          <div key={city.name}>
            <span>{city.name}, </span>
            <span>{city.state}, </span>
            <span>{city.country}</span>
            <button onClick={() => handleCityClick(city.name)}>Display Weather</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
