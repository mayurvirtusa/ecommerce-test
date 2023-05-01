import {
  SET_CART_ITEM,
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCESS,
  GET_PRODUCT_LIST_FALIURE,
  SET_SHIPPING_ADDRESS,
  SET_CARD_DETAILS,
} from "../actions/Auth/actionTypes";

const initialState = {
  getListLoading: false,
  posts: [],
  productList: [],
  cartItem: [],
  shipppingAddress: {},
  cardDetails:{},
};

const getProductList = (state, action) => ({
  ...state,
  getListLoading: true,
});

const getProductListSucess = (state, action) => {
  console.log("PRODUCT_LIST_SUCESS", action);
  return {
    ...state,
    getListLoading: false,
    productList: action.payload,
  };
};

const getProductListFaliur = (state, action) => ({
  ...state,
  getListLoading: false,
  productList: [],
});

const setCartItem = (state, action) => {
  console.log("SET_CART_ITEM", action);
  return {
    ...state,
    cartItem: action.payload,
  };
};

const setShippingAddress = (state, action) => {
  console.log("SET_SHIPPING_ADDRESS", action);
  return {
    ...state,
    shipppingAddress: action.payload,
  };
};

const setCardDetails = (state, action) => {
  console.log("SET_CARD_DETAILS", action);
  return {
    ...state,
    cardDetails: action.payload,
  };
};




const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return getProductList(state, action);
    case GET_PRODUCT_LIST_SUCESS:
      return getProductListSucess(state, action);
    case GET_PRODUCT_LIST_FALIURE:
      return getProductListFaliur(state, action);
    case SET_CART_ITEM:
      return setCartItem(state, action);
    case SET_SHIPPING_ADDRESS:
      return setShippingAddress(state, action);
      case SET_CARD_DETAILS:
        return setCardDetails(state, action);
    default:
      return state;
  }
};

export default authReducer;
