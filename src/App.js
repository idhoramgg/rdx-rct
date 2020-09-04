import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';


import store from './store';
import './App.css';

import {
  buyOneTea, 
  buyOneCappucino, 
  buyOneCoffeeMocha, 
  buyOneChocolate
} from './actions/productAction'

import {
  addOneTea,
  addOneChocolate,
  addOneCappucino,
  addOneCoffeeMocha
} from './actions/saldoAction'

import {
  getAllCustomers
} from './actions/customersAction';

function App(props) {
  const {product, saldo, customers} = props
 
 useEffect(() => {
   props.getCustomers()
  },[])

  const handleOrderCap = () => {
    store.dispatch(buyOneCappucino)
    store.dispatch(addOneCappucino)
  }
  const handleOrderTea = () => {
    store.dispatch(buyOneTea)
    store.dispatch(addOneTea)
  }
  const handleOrderCM = () => {
    store.dispatch(buyOneCoffeeMocha)
    store.dispatch(addOneCoffeeMocha)
   
  }
  const handleOrderCC = () => {
    store.dispatch(buyOneChocolate)
    store.dispatch(addOneChocolate)
  }

  return (
    <div className="App">
      <h1>Toko Kopi Impact</h1>
      <div className="head">
        <div className="topleft">Delete</div>
        <div className="topright">Rp.{saldo.saldo}</div>
      </div>
      <h1>Products</h1>
      <div className="product">
          <h3 onClick={handleOrderCap}>Cappucino ({product.cappucino.stock}) Rp.{product.cappucino.price} </h3>
          <h3 onClick={handleOrderCC}>Chocolate ({product.chocolate.stock}) Rp.{product.chocolate.price} </h3>
          <h3 onClick={handleOrderTea}>Tea ({product.tea.stock}) Rp.{product.tea.price} </h3>
          <h3 onClick={handleOrderCM}>Coffee Mocha ({product.coffeeMocha.stock}) Rp.{product.coffeeMocha.price} </h3>
      </div>
      <div>
      {customers.map((data, index) => <li key={index}>
        {data.name}
      </li>)}

      </div>


    </div>
  );
}

const mtsp = (state) => {
  return {
    product: state.product,
    saldo: state.saldo,
    customers: state.customers
  }
}
const mdsp = (dispatch) => {
  return {
    getCustomers : () => dispatch(getAllCustomers())
  }
}

export default connect(mtsp, mdsp)(App);
