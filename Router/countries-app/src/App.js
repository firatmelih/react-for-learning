import React, { useEffect, useState } from "react";
import "./styles/App.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
function App() {
  const [countries, setCountries] = useState([]);
  const [inputs, setInputs] = useState("");
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>

      <div className="App">
        <input
          name="name"
          autocomplete="off"
          placeholder="Search Country"
          value={inputs.name}
          onChange={(e) => {
            setInputs(e.target.value);
          }}
        />


        <Route

          path="/"
          exact
          render={() =>
            countries.map((country) => {

              if (country.name.toUpperCase().includes(inputs.toUpperCase()) && inputs.length != 0) {
                return (
                  <Link to={`country/${country.alpha3Code}`}>
                    <ul >
                      <li>
                        <h2>{country.name}</h2>
                        <img src={country.flag}></img>
                      </li>
                    </ul>
                  </Link>
                );
              }
            })
          }
        />
        <Route
          path="/country/:code"
          render={(renderProps) => {
            const country = countries.find(country => country.alpha3Code === renderProps.match.params.code);
            return <Country {...renderProps} country={country} />
          }}
        />

      </div>
    </Router >
  );
}

const Country = props => {
  console.log("COUNTRY PROPS", props);
  return (

    <div>
      <Link to="">
        Go Back
      </Link>
      <div className="countryInfo">
        <h2>{props.country.name}</h2>
        <img src={props.country.flag}></img>
        <h2>
          Capital: {props.country.capital}
        </h2>
        <h2>
          Region: {props.country.region}
        </h2>
        <h2>
          Currency: {props.country.currencies[0].symbol}  {props.country.currencies[0].name}
        </h2>
      </div>

    </div>


  );
};

export default App;
