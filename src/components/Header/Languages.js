import React from "react";
import { NavDropdown } from "react-bootstrap";

export const Languages = () => {
  return (
    <>
      <NavDropdown
        title="Việt Nam"
        id="basic-nav-dropdown2"
        className="languages"
      >
        <NavDropdown.Item>Việt Nam</NavDropdown.Item>
        <NavDropdown.Item>English</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};
