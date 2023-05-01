import React, { useEffect } from "react";
import { Container, Button,Row, Col } from "react-bootstrap";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Conatants from "../../constants/staticText";
import { setCartItem } from "../../actions/Auth";

const { ORDER_COMPLETED_SUCCESSFULLY, GO_TO_HOME } = Conatants;

const OrderCompleted = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickGoToHome = () => {
    dispatch(setCartItem([]));
    navigate("/");
  };
  return (
    <Container>
    <Col className="text-center">
      <HiOutlineShieldCheck size={200} />
      <h5>{ORDER_COMPLETED_SUCCESSFULLY}</h5>

      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="success"
          onClick={() => {
            onClickGoToHome();
          }}
        >
          {GO_TO_HOME}
        </Button>
      </div>
      </Col>
    </Container>
  );
};

export default OrderCompleted;
