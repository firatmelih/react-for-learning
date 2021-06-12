import "./styles.css";
import React, { useState, useEffect } from "react";
import Search from "./pages/Search";
import CountryList from "./pages/CountryList";

export default function App() {
  const [search, setSearch] = useState("");

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <Search search={search} onChange={onChange} />
      <CountryList search={search} />
    </div>
  );
}
