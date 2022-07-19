import React from "react";

interface Props {
  search: string;
  getSearch: (type: unknown) => Promise<any>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<Props> = ({ search, setSearch, getSearch }) => {
  return (
    <form action="" onSubmit={getSearch}>
      <div className="relative flex items-center md:my-6 my-4 lg:my-10">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="hover:shadow-md focus:shadow-md rounded-full w-full md:w-full lg:w-full tab-rounded-lg p-2 px-10 focus:outline-none border-2 hover:pointer"
        />
        <div className="absolute left-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="absolute right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
