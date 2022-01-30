import React, { useState } from "react";

const SearchBar = ({ addItem }) => {
  const [isInput, setIsInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <form
        className="search_bar"
        onSubmit={(e) => {
          submitHandler(e);
          if (isInput) {
            addItem(isInput);
            setIsInput("");
          }
        }}
      >
        <input
          type="text"
          value={isInput}
          onChange={(e) => {
            setIsInput(e.target.value);
          }}
        />
        <button type="submit">add</button>
      </form>
    </header>
  );
};

export default SearchBar;
