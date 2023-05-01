import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import Conatants from "../../../constants/staticText";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const { ORDER_SUMMARY, ADD_PAYMENT } = Conatants;

const OrderSummary = () => {
  const navigate = useNavigate();
  const { cartItem } = useSelector((state) => state.auth);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cartItem.reduce(
        (total, current) => total + current.price * current.quantity,
        0
      )
    );
  }, [cartItem]);

  return (
    <Container>
      <div className="home row">
        <h5>{ORDER_SUMMARY}</h5>
        
        <div className="itemuctContainer col-md-12 mt-2">
          <ListGroup>
            {cartItem.map((item, index) => {
              return (
                <ListGroup.Item key={item.id} style={{backgroundColor:'#dfdfdf'}}>
                  <Row>
                    <Col md={2}>
                      <Image
                        style={{ height: 110, objectFit: "fill" }}
                        src={item.thumbnail}
                        alt={item.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={2}>
                      <Row>
                        <span>{item.title}</span>
                        <span>{`Quantity: ${item.quantity}`}</span>
                      </Row>
                    </Col>

                    <Col md={2}>
                      <Row>
                        <span>Price: ${item.price}</span>
                        <span>Total Price: ${item.price * item.quantity}</span>
                      </Row>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-4">
        <Button
          style={{}}
          onClick={() => {
            navigate("/checkout/addpayment");
          }}
          variant="success"
        >
          {`${ADD_PAYMENT} $${total}`}
        </Button>
      </div>
    </Container>
  );
};

export default OrderSummary;
