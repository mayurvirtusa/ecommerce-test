import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../actions/Auth";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import ProductItem from "./component/ProductItem";
const HomeContainer = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  useEffect(() => {
    console.log("productList", productList);
  }, [productList]);

  return (
    <Container>
      <Row>
        {productList.map((item) => {
          return (
            <Col md={3} className={"mt-3 mb-3"}>
              <ProductItem item={item} key={item.id}></ProductItem>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default HomeContainer;
