import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState("");
  // const [loading, setLoading] = useState(true);

  const handleMarkdown = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <AppContext.Provider value={{ markdown, handleMarkdown }}>
      {children}
    </AppContext.Provider>
  );
};
