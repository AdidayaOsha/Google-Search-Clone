import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 h-20">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 flex items-center justify-between h-full">
        <div className="flex justify-center items-center text-teal-600 w-20">
          <img
            src="https://east.vc/wp-content/uploads/2021/01/pasarnow.png"
            alt="image"
            className="object-contain w-full"
          />
        </div>
        <p className="text-xs md:text-sm text-gray-500">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
