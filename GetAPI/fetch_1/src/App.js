import React, { useEffect, useState } from 'react'
import './styles/App.min.css'
import loading from './assets/img/loading.gif'
function App() {
  const [countries, setCountries] = useState([]);
  const [inputs, setInputs] = useState("");
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(res => setCountries(res))
  }, [])


  return (
    <div className="App">

      <input
        name="name"
        placeholder="Search Country"
        value={inputs.name}
        onChange={e => setInputs(e.target.value)}
      />
      <div className="Countries">{countries.map(country => {
        if (country.name === inputs) {
          return (
            <div key={Date.now}>
              <h1>{country.name}</h1>
              <img src={
                country.flag ? country.flag : loading
              }
              ></img>
              <h2>Capital: {country.capital}</h2>
              <h2>Borders: {country.borders + ""} </h2>
            </div>
          )
        }
      }
      )}</div>
    </div >
  );
}

export default App;
