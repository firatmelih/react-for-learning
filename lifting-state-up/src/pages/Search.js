import React from "react";

const Search = (props) => {
  return (
    <>
      <input
        value={props.search}
        placeholder="Bir Şey Ara"
        onChange={props.onChange}
      />
    </>
  );
};

export default Search;
