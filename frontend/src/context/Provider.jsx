import React, { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [showMenu, setMenuBar] = useState(false);
  const [Theme, setTheme] = useState("light");
  const [showIftaarDowa,setShowIftaarDowa] = useState(false);

  return (
    <Context.Provider value={{ showMenu, setMenuBar, Theme, setTheme,showIftaarDowa,setShowIftaarDowa }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
