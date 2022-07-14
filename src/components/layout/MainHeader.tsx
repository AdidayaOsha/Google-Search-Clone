import React from "react";

const MainHeader: React.FC = () => {
  return (
    <div className="flex justify-between h-20">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex">
        <ul>
          <li>Option</li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
