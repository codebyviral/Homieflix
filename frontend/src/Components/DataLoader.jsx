import React from "react";
import '../Styles/Loader.css'
const DataLoader = () => {
  return (
    <>
      <div className="text-center">
      <span className="fs-monospace">
        Fetching latest data... <br />
      </span>
      <svg className="mt-3" viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
      </div>
    </>
  );
};

export default DataLoader;
