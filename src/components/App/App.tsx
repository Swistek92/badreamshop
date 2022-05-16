import React, { FC, useEffect, useState } from 'react';

import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Profile from '../Profile/Profile';
import Product from '../Product/Product';
import ErrorPage from '../ErrorPage/ErrorPage';
import Basket from '../Basket/Basket';
import data from '../Data/Data';

const App: FC = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([
    {
      id: 0,
      qty: 0,
      name: '',
      price: 0,
      titile: '',
      describe: '',
      img: '',
      category: '',
    },
  ]);
  if (!localStorage.getItem('basket')) {
    localStorage.setItem('basket', JSON.stringify(cartItems));
  }

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('basket')!));
  }, []);

  const setLocalStorage = (item: any) => {
    localStorage.setItem('basket', JSON.stringify(item));
  };

  const onAdd = (product: any) => {
    const exist = cartItems.find((x) => x.id === product.id);
    let itemtoStorage;
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      itemtoStorage = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      itemtoStorage = [...cartItems, { ...product, qty: 1 }];
    }
    setLocalStorage(itemtoStorage);
  };

  const onRemove = (product: any) => {
    const exist = cartItems.find((x) => x.id === product.id);
    let itemtoStorage;
    if (exist === undefined) {
      return;
    } else if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      itemtoStorage = cartItems.filter((x) => x.id !== product.id);
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      itemtoStorage = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
    }
    setLocalStorage(itemtoStorage);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Home cartItems={cartItems} products={products} onAdd={onAdd} />
          }
        />
        <Route
          path='/badreamshop/'
          element={
            <Home cartItems={cartItems} products={products} onAdd={onAdd} />
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route
          path='/basket'
          element={
            <Basket
              onAdd={onAdd}
              onRemove={onRemove}
              cartItem={cartItems}
              products={products}
            />
          }
        />
        <Route
          path='/product/:id'
          element={
            <Product onAdd={onAdd} products={products} cartItems={cartItems} />
          }
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
