import React from "react";

const Helmet = (props) => {
  document.title = "Book the day of a lifetime! - RollerRide" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
