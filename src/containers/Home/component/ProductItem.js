import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem } from "../../../actions/Auth";
import { Card, Button } from "react-bootstrap";
import Conatants from "../../../constants/staticText";

const PoductItem = (props) => {
  const dispatch = useDispatch();

  const { cartItem } = useSelector((state) => state.auth);

  const { id, thumbnail, title, description, price, discountPercentage } =
    props.item;

  const onClickAddToCart = () => {
    const item = { ...props.item };
    item.quantity = 1;
    dispatch(setCartItem([item, ...cartItem]));
  };

  return (
    <div>
      <Card
        style={{
          display: "flex",
          backgroundColor: "#dfdfdf",
        }}
      >
        <Card.Img
          variant="top"
          src={thumbnail}
          style={{ height: 210, objectFit: "fill" }}
        />

        <Card.Body>
          <Card.Title titleNumberOfLines={1}>{title}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Text>{`Price: $${price}`}</Card.Text>
        </Card.Body>

        <div className="mb-3 d-flex justify-content-center">
          {cartItem.some((e) => e.id === id) ? (
            <Button
              onClick={() => {
                dispatch(
                  setCartItem(cartItem.filter((item) => item.id !== id))
                );
              }}
              variant="danger"
            >
              {Conatants.REMOVE_FROM_CART}
            </Button>
          ) : (
            <Button
              onClick={() => {
                onClickAddToCart();
              }}
              variant="success"
            >
              {Conatants.ADD_TO_CART}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PoductItem;
