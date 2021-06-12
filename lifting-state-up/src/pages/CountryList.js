import React, { useState, useEffect } from "react";
import axios from "axios";
const CountryList = (props) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);
  return countries
    .filter((country) =>
      country.name.toLowerCase().includes(props.search.toLowerCase())
    )
    .map((country) => {
      return (
        <div key={country.name} className="country">
          <div>
            <img src={country.flag} alt={country.name} />
          </div>
          <div>
            <h3>{country.name}</h3>
            <p>{country.capital}</p>
          </div>
        </div>
      );
    });
};

export default CountryList;
