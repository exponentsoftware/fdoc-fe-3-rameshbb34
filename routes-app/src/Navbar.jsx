import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <Link to="/form">Add Album</Link>
        </div>
        <div>
          <Link to="/albums">Albums</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;