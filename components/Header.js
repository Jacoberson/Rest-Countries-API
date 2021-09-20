import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex flex-row justify-between my-8 lg:my-6">
        <h1 className="font-800 text-14 leading-5 ml-4 lg:ml-20">
          Where in the world?
        </h1>
        <div className="flex flex-row" onClick={() => console.log("dark mode")}>
          <ion-icon name="moon-outline" />
          <p className="font-600 text-12 leading-5 mr-4 ml-2 lg:mr-20">
            Dark Mode
          </p>
        </div>
      </header>
      <hr className="opacity-5" />
    </>
  );
};

export default Header;
