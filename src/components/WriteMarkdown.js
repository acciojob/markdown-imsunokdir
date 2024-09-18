import React, { useContext } from "react";
import { AppContext } from "../AppProvider";

const WriteMarkdown = () => {
  const { markdown, handleMarkdown } = useContext(AppContext);

  return (
    <div className="write">
      <textarea
        className="textarea"
        value={markdown}
        onChange={handleMarkdown}
      />
    </div>
  );
};

export default WriteMarkdown;
