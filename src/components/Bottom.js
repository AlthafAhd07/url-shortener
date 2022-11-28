import React from "react";

import "../styles/bottom.css";

const Bottom = () => {
  return (
    <div className="bottom">
      <h2>Boost your links today</h2>
      <button
        onClick={() => {
          document
            .getElementById("searchBar")
            .scrollIntoView({ block: "center" });
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Bottom;
