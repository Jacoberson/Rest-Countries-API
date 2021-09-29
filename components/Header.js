import React from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="flex flex-row justify-between py-8 lg:py-6 dark:bg-dark-blue-dk">
        <h1 className="font-800 text-14 leading-5 ml-4 lg:ml-20">
          Where in the world?
        </h1>
        <div
          className="flex flex-row"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <ion-icon name="moon-outline" />
          <p className="font-600 text-12 leading-5 mr-4 ml-2 lg:mr-20 hover:cursor-pointer">
            Dark Mode
          </p>
        </div>
      </header>
      <hr className="opacity-5" />
    </>
  );
};

export default Header;
