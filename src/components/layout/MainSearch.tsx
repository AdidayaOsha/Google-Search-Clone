import React from "react";
import SearchButton from "../ui/button/SearchButton";
import FeelingLuckyButton from "../ui/button/FeelingLuckyButton";
import SearchInput from "../input/SearchInput";

const MainSearch = () => {
  return (
    // <section className="bg-gray-50">
    <div
      style={{ height: "calc(100vh - 160px)" }}
      className="px-4 justify-center items-center flex flex-col"
    >
      <div className="text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          GoogleNow.
          <strong className="font-extrabold text-red-700 sm:block">
            Increase Productivity.
          </strong>
        </h1>

        <SearchInput />

        <div className="flex flex-col md:flex-row md:justify-center gap-4 mt-8">
          <SearchButton />

          <FeelingLuckyButton />
        </div>
      </div>
    </div>
    // </section>
  );
};

export default MainSearch;
