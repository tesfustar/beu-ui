import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider } from 'react-redux'
import store from './redux/store'
import { cartTotal } from './redux/cartReducer';
import { getSpecials } from './redux/foodReducer';
import { getResturants,getSingleResturants } from './redux/resturantReducer';
store.dispatch(cartTotal())
store.dispatch(getSpecials())
store.dispatch(getResturants())
store.dispatch(getSingleResturants())
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById('root')
);


