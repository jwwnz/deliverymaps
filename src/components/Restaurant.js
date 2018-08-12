import React from "react";

export default ({ text }) => {
  return (
    <div>
      <i className="fa fa-map-marker" style={{ color: "red" }} />
      {text}
    </div>
  );
};
