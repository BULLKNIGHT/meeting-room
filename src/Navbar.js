import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#f13c1f" }}
      >
        <div className="container-fluid">
          <button type="button" className="btn btn-warning">
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
