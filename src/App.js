import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Navbar from './components/Nav/Navbar';
import CartProvider from './context/cartContext';
import BrandInfo from './components/BrandInfo/BrandInfo';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route exact path="/category/:categoryId"> 
            <Home />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/about">
            <BrandInfo />
          </Route>
        </Switch>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
