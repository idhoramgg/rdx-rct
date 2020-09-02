import React, {useState, useEffect} from 'react';


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
function App() {
  
 const products = store.getState().product;
 let { saldo } = store.getState().saldo;

 const [product, setProducts] = useState(products)
 const [saldoo, setSaldo] = useState(saldo)
 console.log(product);
 console.log(saldoo);

  useEffect(() => {
    const products = store.getState().product;
    let { saldo } = store.getState().saldo;

    const product = products
    const saldoo = saldo

    setProducts(product)
    setSaldo(saldoo)

    store.subscribe(() => {
      const products = store.getState().product;;
      let { saldo } = store.getState().saldo;
   
      const product = products
      const saldoo = saldo

      setProducts(product)
      setSaldo(saldoo)
    });
  }, [])

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
        <div className="topright">Rp.{saldo}</div>
      </div>
      <h1>Products</h1>
      <div className="product">
          <h3 onClick={handleOrderCap}>Cappucino ({products.cappucino.stock}) Rp.{products.cappucino.price} </h3>
          <h3 onClick={handleOrderCC}>Chocolate ({products.chocolate.stock}) Rp.{products.chocolate.price} </h3>
          <h3 onClick={handleOrderTea}>Tea ({products.tea.stock}) Rp.{products.tea.price} </h3>
          <h3 onClick={handleOrderCM}>Coffee Mocha ({products.coffeeMocha.stock}) Rp.{products.coffeeMocha.price} </h3>
      </div>


    </div>
  );
}

export default App;
