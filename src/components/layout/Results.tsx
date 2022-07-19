import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { API } from "../../api/searchAPI";
import Tabs from "./Tabs";
import SearchInput from "../input/SearchInput";
import SearchResultCard from "../card/SearchResultCard";

const Results = () => {
  const [search, setSearch] = useState<string>("");
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

  return (
    <div>
      <div>
        <SearchInput
          search={search}
          setSearch={setSearch}
          getSearch={getSearch}
        />
      </div>
      <div>
        <Tabs searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div>
        <SearchResultCard />
      </div>
    </div>
  );
};

export default Results;
