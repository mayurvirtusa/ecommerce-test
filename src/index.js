import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../src/containers/App';
import configureStore from './store';
import './index.css';
import Header from './common/Header';
import 'bootstrap/dist/css/bootstrap.css';


const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Header></Header>
      {/* <Suspense fallback={'Loading...'}> */}
        <App />
      {/* </Suspense> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


