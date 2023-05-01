import React, { useEffect } from "react";
// import Home from "../../components/Home";
import { useDispatch, useSelector } from "react-redux";
// import { getList, getCartItem, getProductList } from "./../../actions/Auth";
import { Card, Col, Container, Row } from "react-bootstrap";
import ShippingAddress from "./component/ShippingAddress";
import { Outlet } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();

  return (
    <Container className="my-1">
      <h3 className="mb-5">Checkout</h3>

      <Col md={10}>
        <Card className="shadow-sm">
          <Card.Body>
            <Outlet />
          </Card.Body>
        </Card>
      </Col>

      {/* </Row> */}
    </Container>
  );
};

export default Checkout;
