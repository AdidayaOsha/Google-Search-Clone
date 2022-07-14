import React from "react";

const SearchButton: React.FC = () => {
  return (
    <button className="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring">
      Search!
    </button>
  );
};

export default SearchButton;
