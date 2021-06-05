import React from "react";

const Navbar = () => {
  /*   return (
    <div id="navbar">
      <h2>This is navbar</h2>
    </div>
  ); */

  return React.createElement(
    "div",
    { id: "nav-link", className: "nva-itm" },
    React.createElement("h2", null, "this is navbar")
  );
};
export default Navbar;
