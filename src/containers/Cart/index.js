import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setCartItem } from "../../actions/Auth";
import {
  Card,
  Button,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import Conatants from "../../constants/staticText";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const onChangeDropdown = (item, index, e) => {
    const newCartItem = [...cartItem];
    newCartItem[index].quantity = e;
    dispatch(setCartItem(newCartItem));
  };

  return (
    <Container>
      {cartItem.length > 0 ? (
        <div className="home row">
          <div className="itemuctContainer col-md-8">
            <ListGroup>
              {cartItem.map((item, index) => {
                return (
                  <ListGroup.Item key={item.id}>
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
                        <span>{item.title}</span>
                      </Col>
                      <Col md={2}>$ {item.price}</Col>
                      <Col md={2}>
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) => {
                            onChangeDropdown(item, index, e.target.value);
                          }}
                        >
                          {[...Array(item.stock).keys()].map((x) => (
                            <option key={x + 1}>{x + 1}</option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => {
                            dispatch(
                              setCartItem(
                                cartItem.filter((e) => e.id !== item.id)
                              )
                            );
                          }}
                        >
                          <AiFillDelete color={"red"} fontSize="20px" />
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </div>
          <div className="col-md-4">
            <Card
              border="primary"
              style={{
                marginRight: 20,
                marginLeft: 20,
                paddingBottom: 5,
              }}
            >
              <Card.Header>{Conatants.PRICE_DETAILS}</Card.Header>
              <Card.Body
                style={{
                  // height: "20px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Card.Text>{`${Conatants.TOTAL} (${cartItem.length} ${Conatants.ITEMS})`}</Card.Text>
                <Card.Text>{`$${total}`}</Card.Text>
              </Card.Body>

              <Card.Body
                style={{
                  // height: "20px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Card.Text>{Conatants.DELIVERY_CHARGES}</Card.Text>
                <Card.Text>{`-$10`}</Card.Text>
              </Card.Body>

              <Card.Footer
                style={{
                  height: "40px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Card.Text>{Conatants.TOTAL_AMOUNT}</Card.Text>
                <Card.Text>{`$${total - 10}`}</Card.Text>
              </Card.Footer>
              <Card.Body
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {cartItem.length > 0 && (
                  <Button
                    style={{}}
                    onClick={() => {
                      navigate("/checkout/shipping");
                    }}
                    variant="success"
                  >
                    {Conatants.PLACE_ORDER}
                  </Button>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : (
        <Card.Text>{Conatants.NO_ITEM_CART}</Card.Text>
      )}
    </Container>
  );
};

export default Cart;
