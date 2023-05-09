import { useState } from "react";
import { DarkModeContext } from "./contexts";

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const changeStyleMode = () => {
    let mode = darkMode;
    setDarkMode(!darkMode);
    !mode
      ? document.querySelector("body").classList.add("dark")
      : document.querySelector("body").classList.remove("dark");
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, changeStyleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
