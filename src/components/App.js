import React from "react";
import WriteMarkdown from "./WriteMarkdown";
import ViewMarkdown from "./ViewMarkdown";
import "../styles/App.css";

const App = () => {
  return (
    <div className="app">
      <WriteMarkdown />
      <ViewMarkdown />
    </div>
  );
};

export default App;
