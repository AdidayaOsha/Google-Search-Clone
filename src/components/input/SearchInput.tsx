import React from "react";

const SearchInput = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        className="rounded-full mt-6 w-full md:w-full lg:w-full tab-rounded-lg p-2 pl-4 focus:outline-none border-2 hover:pointer"
      />
    </div>
  );
};

export default SearchInput;
