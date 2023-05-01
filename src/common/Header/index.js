import React from "react";
import { Container, Navbar, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import Constants from "../../constants/staticText";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItem } = useSelector((state) => state.auth);
  return (
    <Navbar
      fixed="top"
      variant="light"
      className="mb-4"
      style={{ backgroundColor: "pink", position: "sticky" }}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">{Constants.HEADER_TEXT}</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Link to="/cart">
          <Navbar.Collapse className="justify-content-end">
            <FaShoppingCart color="black" fontSize="25px"></FaShoppingCart>
            <Badge bg="primary">{cartItem.length}</Badge>
          </Navbar.Collapse>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
