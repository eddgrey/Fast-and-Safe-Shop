import { useRef } from "react";

const Search = () => {
  const inputRef = useRef("Search");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row flex-grow text-blueGray-900 h-1/2 mx-4 md:mx-6"
    >
      <input
        type="input"
        ref={inputRef}
        defaultValue="Search"
        className="search"
      />
      <button type="submit" className="theme button-search">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
