import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { API } from "../../api/searchAPI";
import SearchButton from "../ui/button/SearchButton";
import FeelingLuckyButton from "../ui/button/FeelingLuckyButton";
import SearchInput from "../input/SearchInput";

const MainSearch = () => {
  const [search, setSearch] = useState<string>("");
  console.log(search);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const queryClient = useQueryClient();

  const getSearch = async (type: unknown) => {
    const res = await API.get(`search/q=${search}`, {
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "f42017f311mshf0c34ae731a6399p197eddjsn6e9c34e5b18d",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    });
    return res.data;
  };

  const { isLoading, isError, error, data } = useQuery("result", getSearch);

  return (
    <div
      style={{ height: "calc(100vh - 136px)" }}
      className="px-4 justify-center items-center flex flex-col bg-gray-100"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">
          GoogleNow.
          <strong className="font-extrabold text-green-800 block mt-2">
            Increase Productivity.
          </strong>
        </h1>

        <SearchInput
          search={search}
          getSearch={getSearch}
          setSearch={setSearch}
        />

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <SearchButton getSearch={getSearch} />
          <FeelingLuckyButton />
        </div>
      </div>
    </div>
  );
};

export default MainSearch;
