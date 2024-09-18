import React, { useContext, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { AppContext } from "../AppProvider";

const ViewMarkdown = () => {
  const { markdown } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);
  if (isLoading) {
    return <div className="view">Loading...</div>;
  }
  return (
    <div className="view">
      <ReactMarkdown className="preview">{markdown}</ReactMarkdown>
    </div>
  );
};

export default ViewMarkdown;
