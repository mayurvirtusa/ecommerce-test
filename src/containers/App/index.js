import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeContainer from '../Home';
import Cart from '../Cart';
import Checkout from '../Checkout';
import ShippingAddress from '../Checkout/component/ShippingAddress';
import OrderSummary from '../Checkout/component/OrderSummary';
import AddPayment from '../Checkout/component/AddPayment'
import OrderCompleted from '../OrderCompleted';

const App = () =>{
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} >
          <Route path="shipping" element={<ShippingAddress />} />
          <Route path="ordersummary" element={<OrderSummary />} />
          <Route path="addpayment" element={<AddPayment />} />
        </Route>
        <Route path="/ordercompleted" element={<OrderCompleted/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
