import React from "react";

const Tabs = () => {
  return (
    <nav className="flex text-sm font-medium border-b border-gray-100">
      <a className="p-4 -mb-px border-b border-current text-cyan-500">Bronze</a>

      <a className="p-4 -mb-px border-b border-transparent hover:text-cyan-500">
        Silver
      </a>

      <a className="p-4 -mb-px border-b border-transparent hover:text-cyan-500">
        Gold
      </a>

      <a className="p-4 -mb-px border-b border-transparent hover:text-cyan-500">
        Platinum
      </a>
    </nav>
  );
};

export default Tabs;
