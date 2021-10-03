import React, { useContext } from "react";

import Header from "./Header";
import ThemeContext from "../context/ThemeContext";

const AppContainer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme === "dark" ? "dark-theme" : ""}`}>
      <Header />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quam
        dolorem inventore molestias quos magnam ipsum ipsam voluptatibus?
        Tenetur laboriosam sint, non ratione est nulla totam culpa deserunt esse
        ex!
      </div>
    </main>
  );
};

export default AppContainer;
