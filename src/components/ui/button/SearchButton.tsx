import React from "react";

interface Props {
  getSearch: (type: unknown) => Promise<any>;
}

const SearchButton: React.FC<Props> = ({ getSearch }) => {
  return (
    <button
      onClick={getSearch}
      className="block w-full px-12 py-3 text-sm font-medium text-white bg-green-800 rounded shadow sm:w-auto active:bg-green-900 hover:bg-green-800 focus:outline-none focus:ring"
    >
      Search!
    </button>
  );
};

export default SearchButton;
