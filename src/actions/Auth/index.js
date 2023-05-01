import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCESS,
  GET_PRODUCT_LIST_FALIURE,
  SET_CART_ITEM,
  SET_SHIPPING_ADDRESS,
  SET_CARD_DETAILS,
} from "./actionTypes";

export const getProductList = () => ({
  type: GET_PRODUCT_LIST,
});

export const getProductListSucess = (data) => ({
  type: GET_PRODUCT_LIST_SUCESS,
  payload: data,
});

export const getProductListFaliur = () => ({
  type: GET_PRODUCT_LIST_FALIURE,
});

export const setCartItem = (data) => ({
  type: SET_CART_ITEM,
  payload: data,
});

export const setShippingAddress = (data) => ({
  type: SET_SHIPPING_ADDRESS,
  payload: data,
});

export const setCardDetails = (data) => ({
  type: SET_CARD_DETAILS,
  payload: data,
});
