import React from "react";

interface Props {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <nav className="flex text-sm font-medium border-b border-gray-100">
        <a href="" className="p-4 -mb-px border-b border-current text-cyan-500">
          All
        </a>

        <a
          href=""
          className="p-4 -mb-px border-b border-transparent hover:text-cyan-500"
        >
          Images
        </a>

        <a
          href=""
          className="p-4 -mb-px border-b border-transparent hover:text-cyan-500"
        >
          News
        </a>
      </nav>
    </div>
  );
};

export default Tabs;
