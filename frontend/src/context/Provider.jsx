import React, { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [showMenu, setMenuBar] = useState(false);
  const [Theme, setTheme] = useState("light");
  const [showIftaarDowa, setShowIftaarDowa] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [fullCalendar, setFullCalendar] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider
      value={{
        showMenu,
        setMenuBar,
        Theme,
        setTheme,
        showIftaarDowa,
        setShowIftaarDowa,
        location,
        setLocation,
        error,
        setError,
        fullCalendar,
        setFullCalendar,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default React.memo(Provider);
