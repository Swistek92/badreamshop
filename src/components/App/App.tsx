import React, { FC, useState } from 'react';

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
  const [cartItems, setCartItems] = useState([{ id: 0, qty: 0 }]);

  const onAdd = (product: any) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product: any) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist === undefined) {
      return;
    } else if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home products={products} onAdd={onAdd} />} />
        <Route
          path='/badreamshop/'
          element={<Home products={products} onAdd={onAdd} />}
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
        <Route path='/product/:id' element={<Product onAdd={onAdd} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
