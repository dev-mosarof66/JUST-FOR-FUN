import React, { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [showMenu, setMenuBar] = useState(false);
  const [Theme, setTheme] = useState("light");

  return (
    <Context.Provider value={{ showMenu, setMenuBar, Theme, setTheme }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
