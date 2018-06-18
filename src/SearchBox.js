import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div>
      <input
        type="search"
        className="pa3 b--green bg-lightest-blue"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
