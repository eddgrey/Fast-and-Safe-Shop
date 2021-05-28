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
        className="w-full focus:outline-none rounded-xl pl-4 py-2 text-blueGray-900 bg-blueGray-100"
      />
      <button
        type="submit"
        className="theme rounded-r-xl w-20 px-4 md:px-6 relative right-12 text-blueGray-200 focus:outline-none"
      >
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
